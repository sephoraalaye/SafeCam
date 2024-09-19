window.addEventListener('scroll', function() {
    reveal(50);
});



function reveal(revealpoint){
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i< reveals.length ; i++){
        let  windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}




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
let currentIndex = 0;
let direction = 1; // 1 pour avancer, -1 pour reculer
for (var i=0;i<totalImages;i++){
    blocDiv[i].style.width = 100+"%";
    blocDiv[i].style.background = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),"+` url(${imagePaths[i]})`;
    blocDiv[i].style.backgroundSize = "cover";
}

function moveCarousel() {
    // alert(currentIndex);
    const translateValue = -currentIndex * 100 / totalImages; 
    container.style.transform = `translate(${translateValue}%)`;
    container.style.transition = "all 0.5s ease 0.2s";

    if (currentIndex === totalImages - 1) {
        direction = -1; // Inverser la direction pour reculer
    } else if (currentIndex === 0) {
        direction = 1; // Revenir à l'avant
    }   
    currentIndex += direction;
}

function startCarousel() {
    setInterval(() => {
        moveCarousel();
    }, 1000);
}

// Lancer le carrousel
startCarousel();

// ::::::FIN Carousel:::::://

// window.addEventListener("scroll",reveal);

// console.log(window.innerHeight);



