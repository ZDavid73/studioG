var innerHtml1='';
var innerHtml2='';
var innerHtml3='';
var innerHtml4='';



//creamos el objeeto con los banner
let obj = {
    banner1: "imagen_cabecera",
    banner2: 'imagen_cabecera2'
  };
  
  let map = new Map(Object.entries(obj));


innerHtml1= `<div class="content" id="${map.get('banner1')}">
<div id="texto_cabecera" >
<div class="titulo">
    <span  style="font-size:3em" >My neighbor</span><br>
    <span style="font-size:5em">TOTORO</span><br>
    <div class="textogrande">
        <a href="description.html"><button class="boton1"><i class="fa-solid fa-play"></i> watch now</button></a>
     </div>
     <div class="textogrande">
         <a href="/description.html" ><button  class="boton2">more info <i class="fa-regular fa-bookmark"></i></button></a>
     </div>

</div>



</div>

</div>`

document.getElementById("banner").innerHTML = innerHtml1;

//creamos el objeto con las peliculas de arriba
let obj2 = {
    pelicula1: "card1",
    pelicula2: 'card2',
    pelicula3: 'card3',
    pelicula4: 'card4',
    pelicula5: 'card5',
    pelicula6: 'card6',
    pelicula7: 'card7'
  };
  //creaos el mapa con el objeto anterior
  let map2 = new Map(Object.entries(obj2));
  innerHtml2=verPeliculas(map2);//llamamos la funcion y le enviamos el mapa
  document.getElementById("ancho").innerHTML = innerHtml2;

//creamos el objeto con las peliculas de abajo
  let obj3 = {
    pelicula1: "card9",
    pelicula2: 'card10',
    pelicula3: 'card11',
    pelicula4: 'card12',
    pelicula5: 'card13',
    pelicula6: 'card14',
    pelicula7: 'card15',
    pelicula5: 'card16',
    pelicula6: 'card17'


  };
//creamos el mapa
  let map3 = new Map(Object.entries(obj3));
  innerHtml3=verPeliculas(map3);//llamamos la funcion y le pasamos el mapa
  document.getElementById("ancho2").innerHTML = innerHtml3;

  function verPeliculas(mapa){
    datos='';
    mapa.forEach( (value, key, map) => {
        datos +=`
        <div class="pelicula">
          <a href="./description.html"> 
           <div class="card" id="${value}">
          </div>
          </a>
                           
        </div>
        `;
      });
    return datos;
  }

  