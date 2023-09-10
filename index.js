const API_URL = 'https://gateway.marvel.com:443/v1/public/characters?limit=57&ts=1&apikey=696c8d534b4367e5ee9fc7757a5eb60e&hash=55a4bc2f0cd2fed5ba82f7e80342f763';

const div = document.querySelector("#app");
//const ul = document.createElement("ul")
//Función recargar que cambia lo que hay en id="caja" por el contenido nuevo.
fetch(API_URL)
  .then((response) => response.json())
  .then((users) => { 
    const HTMLResponse = users.data.results.map((uso,index) => 
    '<div class="super-heroes">'+  
    '<h1><span text-align: center; style="border-radius:50px; border:4px solid rgb(55, 71, 149);background-color: black; color: white; padding:6px;">'+(index+1)+'</span> <u>'+uso.name+'</u></h1>'+ 
    '<a href="' +uso.thumbnail.path+'.'+uso.thumbnail.extension+'"><img style="height:100%; width:100% " src="' +uso.thumbnail.path+'.'+uso.thumbnail.extension+'" alt="imagen-marver" " ></a>' +
    '<p >' + uso.description + '</p>'+
    '<h1><u>Comics</u>:</h1>'+
    '<p><u>'+ uso.comics.items.map((dato, index) => dato.name) +'</u></p>'+
    '<a href="'+uso.urls[1].url+'" ><p >'+ uso.urls[1].url.slice(0, 33)+'...</p></a>'+
    '</div>');
    
    console.log(HTMLResponse);
    div.innerHTML =  HTMLResponse.reverse().join(''); 
    });
  
