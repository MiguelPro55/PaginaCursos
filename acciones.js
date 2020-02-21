/* ARRAY DE IMAGENES */
ads = new Array(9);
ads[0] = "cmasmas.jpg";
ads[1] = "https://jarroba.com/wp-content/uploads/2012/03/LenguajesProgramacion.png";
ads[2] = "https://jarroba.com/wp-content/uploads/2012/03/AplicacionesMoviles.png";
ads[3] = "https://jarroba.com/wp-content/uploads/2012/03/TecnologiaWeb.png";
ads[4] = "https://jarroba.com/wp-content/uploads/2012/03/Servidores.png";
ads[5] = "https://jarroba.com/wp-content/uploads/2012/03/SistemasOperativos.png";
ads[6] = "https://jarroba.com/wp-content/uploads/2012/03/BaseDeDatos.png";
ads[7] = "https://jarroba.com/wp-content/uploads/2012/03/Hadware.png";
ads[8] = "https://jarroba.com/wp-content/uploads/2012/03/InteligenciaArtificial.png";

/* ARRAY DE URLs */
arrayURLs = new Array(9);
arrayURLs[0] = "https://jarroba.com/indice-ingenieria-del-software/"
arrayURLs[1] = "https://jarroba.com/lenguajes-de-programacion/"
arrayURLs[2] = "https://jarroba.com/aplicaciones-moviles/"
arrayURLs[3] = "https://jarroba.com/tecnologias-web/"
arrayURLs[4] = "https://jarroba.com/redes/"
arrayURLs[5] = "https://jarroba.com/sistemas-operativos/"
arrayURLs[6] = "https://jarroba.com/bases-de-datos/"
arrayURLs[7] = "https://jarroba.com/diseno-hardware/"
arrayURLs[8] = "https://jarroba.com/inteligencia-artificial/"

//variable para llevar la cuenta de las imagenes
var longuitudArray = ads.length;
var contador = 0

// Cojemos un numero aleatorio
contador = Math.floor((Math.random() * longuitudArray))

// Cambia la imagen cada segundo en este ejemplo
var tiempo = 1// En segundos
var timer = tiempo * 1000;

function banner() {
    contador++;
    contador = contador % longuitudArray
    document.banner.src = ads[contador];
    setTimeout("banner()", timer);
}

function ponerURL() {
    contador2 = contador;
    url = window.open(arrayURLs[contador2]);
    return false;
}