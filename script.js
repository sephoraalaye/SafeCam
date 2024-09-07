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

imagePaths.forEach(path => {
    const img = document.createElement('img');
    img.src = path;
    img.style.width = 100+"%";
    container.appendChild(img);
});
 

let currentIndex = 0;
let direction = 1; // 1 pour avancer, -1 pour reculer
const totalImages = imagePaths.length;

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
