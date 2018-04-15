
let container = document.getElementById('paint');
// console.log(container);

    function handleResponse(data){
    
    let entrie = data.results;
    let info = ``;
    //console.log(entrie);
    
    let starWarsInfo = entrie.forEach(element =>{
        let title = element.title;
        console.log(title);
        let episode = element.episode_id;
        console.log(episode);
        // console.log(character);
    let character = element.characters;
    let infoChar =  ``;
    character.forEach(char =>{
                
       infoChar  += `<a href="#modal1" class="waves-effect waves-light btn modal-trigger blue-grey"><li class="info">${char}</li></a>`;
        
    }
    );

    
    info += 
        
        
            `<div class = 'row'>
            <div class= 'col s3 m7'>
                    <div class="card">
                        
                        <span class="card-title"><strong>${title}</strong></span>
                        
                        <div class="card-content">
                            <p> ${episode} </p>
                        </div>
                        <div class="card-content">
                            <ul> ${infoChar} </ul>
                        </div>
                        <div class="card-action">
                            <a href="#"></a>
                        </div>
                    </div>
                </div>
            </div>`  
    console.log(info)
    })
    container.innerHTML = info;

    let about = document.getElementsByClassName('info');
    let links = Array.from(about);
    links.forEach(element =>{
        element.addEventListener('click', ajaxModal)
    }); 
    console.log(links);
    // console.log(info); 
    }

    const ajaxModal = (event) =>{
        
    console.log(event.target.innerText);
    }


    $.ajax({ 
        url: `https://swapi.co/api/films/`
        }).done(handleResponse); 
    

//Modal
$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
