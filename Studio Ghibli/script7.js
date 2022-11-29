const reco = document.getElementById('reco');

const MyNeighborTotoro = new Map([
    ["rating", 3]
])
const lista1 = [MyNeighborTotoro]
function rate(mo){  
    let ra=""
    for(var i=0;i<5;i++){
        if(i<mo.get("rating")){
            ra+=`<web/estrella2_Mesa de trabajo 1.png" class="estrella2" >`
        }
        else{
            ra+=`<web/estrella1_Mesa de trabajo 1.png" width: 20px; class="estrella2" >`
        }
    }
    return ra
}
function showcard(serie){
    let html = `<div class="watch>
    <img src="web/p1.jpg" class="watch">
    ${rate(serie)}
    </div>`;
    return html
};
for (let i=0;i<lista1.length;i++){
    let card = showcard(lista1[i]);
reco.innerHTML += card 
}

async function getMovies(){
    let url = "https://ghibliapi.herokuapp.com/films"
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    
}

getMovies();