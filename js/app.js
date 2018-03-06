
let container = document.getElementById('paint');

// console.log(container)
  function handleResponse(data){
    
      let entrie = data.results;
       info += 
        console.log(entrie);
 
     let starWarsInfo = entrie.forEach(element =>{
        let title = element.title;
        //console.log(title);
        let episode = element.episode_id;
        //console.log(episode);
        let character = element.characters;
        //console.log(character);
            let info = ' ';
           
        
            `<div class = 'row'>
                 <div class= 'col s3 m7'>
                    <div class="card">
                        <div class="card-image">
                            <span class="card-title">${title}</span>
                        </div>
                        <div class="card-content">
                            <p> ${episode} </p>
                        </div>
                        <div class="card-content">
                            <p> ${character} </p>
                        </div>
                        <div class="card-action">
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </div>`
                    

     
    })
     container.innerHTML = info;
    console.log(info);       

   
    }
      
        $.ajax({ 
            url: `https://swapi.co/api/films/`
        }).done(handleResponse); 


//Modal
$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
