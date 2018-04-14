function apiRequest(){
    $.ajax({
        url: `https://swapi.co/api/films/`
    }).done(getData)
    .fail(failedRequest)
};


function getData (json){
    // console.log(json);
    let results = json.results;
    // console.log(results);
    paintData(results);
};

function paintData (result){
    template = ' ';
    let charactersTemplate = ' ';   
    result.forEach(movie =>{
        let name = movie.title;
        // console.log(name);
        let episodeID = movie.episode_id;
        // console.log(episodeID);
        let characters = movie.characters;
        //console.log(characters);
        let characterTemplate = ' ';
      characters.forEach(character=>{
          characterTemplate += `  <a class="modal-trigger" href="#modal1">
         <li class="list-element" data-url="${character}"> ${ character}</li>
       </a>`
     
      })
    
        template += `<div><h1>Name: ${name}</h1>
        <h3>Episode: ${episodeID}</h3>
        <h3>Characters: </h3>
        <section id="characters">
        <ul>${characterTemplate}</ul>
        </section>` 
      
       
      
    })
    $('#container').html(template);
   let elementLi = document.getElementsByClassName('list-element'); 
    addingEventToLi(elementLi);
   };

   function addingEventToLi (elementLi){
       //console.log(elementLi);
       let arrayLi = Array.from(elementLi);
       arrayLi.forEach(li=>{
        li.addEventListener('click',gettingCharacter);
       })
       //console.log(arrayLi);
     
   }

   function gettingCharacter(e){
        e.preventDefault;
     let newURL = e.target.dataset.url;
     console.log(newURL);

          $.ajax({
            url:newURL
        }).done(gettingCharacters)

   }
   function gettingCharacters(json){
    console.log(json);
    let name = $('#name');
    let height = $('#height');
    let mass = $('#mass');
    let hairColor = $('#hair-color');
    let skinColor = $('#skin-color');
    name.text(json.name);
    height.text(json.height);
    mass.text(json.mass);
    hairColor.text(json.hair_color);
    skinColor.text(json.skin_color);
   };


function failedRequest(error){
    console.log('Ha habido un error');
}

$(document).ready(function(){
    $('#modal1').modal();
    apiRequest();
  });

//   //Get element from ID 
// let container = document.getElementById('paint');
// // console.log(container);

// //AJAX CALL
//     function handleResponse(data){
    
//     let entrie = data.results;
//     let info = ``;
//     //console.log(entrie);
//     let starWarsInfo = entrie.forEach(element =>{
//         let title = element.title;
//         console.log(title);
//         let episode = element.episode_id;
//         console.log(episode);
//         // console.log(character);
//         //Get modal's info
//         let character = element.characters;
//         let infoChar =  ``;

//     //Painting Modal
//     let dataChar = character.forEach(char =>{
//         infoChar  += 
//         `<a href="#modal1"  id="modal" class="waves-effect waves-light btn modal-trigger blue-grey">
//             <li class="info">${char}</li>
//         </a>`;
//     });

// //Card with title, epise and Character
//     info +=         
//             `<div class = 'row center'>
//                 <div class= 'col s12 m8'>
//                     <div class="card">
                        
//                         <span class="card-title"><strong>${title}</strong></span>
//                             <div class="card-tabs">
//                                 <div class="card-content">
//                                     <p> ${episode} </p>
//                                 </div>
//                             </div>
//                         <div class="card-content">
//                             <ul> ${infoChar}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>         
//             `  
//     // console.log(info)
//     })
    
//     $('#container').html(info);
//     let paintElement = $('#modal'); 
//     add(paintElement);
//     };

//     //Modal for each character
//     container.innerHTML = info;
//     let about = document.getElementsByClassName('info');
//     let links = Array.from(about);
//     links.forEach(element =>{
//     element.addEventListener('click', ajaxModal)
// }); 
// // console.log(links);
// // console.log(info); 
// function ajaxModal(e){
//     e.preventDefault;
//     let newURL = e.target.dataset.url;
//     console.log(data);

//     $.ajax({
//             url: dataChar
//         }).done(characterData)
        
//     }
//         //Paiting data-modal (name, eyes, heigth)
//         function characterData(json) {
//             console.log(json);
//             $('#character-name').html(json.name);
//             $('#birth-year').html(json.birth_year);
//             $('#hair-color').html(json.hair_color);
//             $('#mass').html(json.mass);
//             $('#height').html(json.height);
//             $('#skin-color').html(json.skin_color);
//             $('#eye-color').html(json.eye_color);
//         };
    

//     // ajaxModal ();
        

// //API REQUEST with .ajax (jquery)
//     $.ajax({ 
//         url: `https://swapi.co/api/films/`
//         }).done(handleResponse); 
    

// //Modal
// $(document).ready(function () {
//     $('.modal').modal();
// });
