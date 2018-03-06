
// console.log(container)
  function handleResponse(data){
      let entrie = data.results;
      
        let info = ' ';
         console.log(entrie);
       


         let starWarsInfo = entrie.forEach(element =>{
            return element.length;
            console.log(starWarsInfo);
         });
        

// //     //painting   
//       getCard += 
      
//         `<div class = 'row'>
//         <div class="col s3 m7">
//             <div class="card">
//                 <div class="card-image">
//                     <span class="card-title">${getUrl}</span>
//                 </div>
//                 <div class="card-content">
//                     <p> ${getName} </p>
//                 </div>
//                 <div class="card-action">
//                      <a href="#"></a>
//                 </div>
//             </div>
//         </div>
//         </div>`



//       container.innerHTML = getCard;
//       console.log(getCard)
    }
      
        $.ajax({ 
            url: `https://swapi.co/api/films/`
        }).done(handleResponse); 


//Modal
$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
