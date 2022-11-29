var num=1;
var foto=document.getElementById("foto");

function adelante() {
    console.log("Adelante")
    num++;
    if(num>8){
        num=1; 
    }
    foto.src="web/p"+num+".jpg";
}

function atras() {
    console.log("Atras")

    num--;
    if(num<1){
        num=8;   
    }
    foto.src="web/p"+num+".jpg";
}