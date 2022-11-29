var innerHtml1='';



let obj1 = {
    pelicula1: "watch1",
    pelicula2: "watch2",
    pelicula3: "watch3",

  };

  let map1 = new Map(Object.entries(obj1));
  innerHtml1=verPeliculas(map1);
  document.getElementById("movies").innerHTML = innerHtml1;


  function verPeliculas(mapa){
    data='';
    mapa.forEach( (value, key, map) => {
        data +=`<div id="movies">
           <div class="watch" id="${value}">
           <a href="/watchlater.html"> 
          </div>
          </a>
          </div>`;
      });
    return data;
  }

  

  