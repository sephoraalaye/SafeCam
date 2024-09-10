container = document.getElementById("container");
container.style.width=600+"%";


const imagePaths = [
'images/carousel-1.jpg',
'images/carousel-2.jpg',
'images/carousel-3.jpg',
'images/carousel-1.jpg',
'images/carousel-2.jpg',
'images/carousel-3.jpg',
];

const totalImages = imagePaths.length;
const blocDiv = document.getElementsByClassName("items");




for (var i=0;i<totalImages;i++){
    blocDiv[i].style.width = 100+"%";
    blocDiv[i].style.background = "linear-gradient(rgba(20,79,121,0.7),rgba(69,109,158,0.7)),"+` url(${imagePaths[i]})`;
    blocDiv[i].style.backgroundSize = "cover";
}




let currentIndex = 0;
let direction = 1; // 1 pour avancer, -1 pour reculer


function moveCarousel() {
    // alert(currentIndex);
    const translateValue = -currentIndex * 100 / totalImages; 
    container.style.transform = `translate(${translateValue}%)`;
    container.style.transition = "all 0.5s ease";

    if (currentIndex === totalImages - 1) {
        direction = -1; // Inverser la direction pour reculer
    } else if (currentIndex === 0) {
        direction = 1; // Revenir à l'avant
    }

    
    currentIndex += direction;

    
}

// Fonction pour démarrer le carrousel
function startCarousel() {
    setInterval(() => {
        moveCarousel();
    }, 1000);
}

// Lancer le carrousel
startCarousel();
