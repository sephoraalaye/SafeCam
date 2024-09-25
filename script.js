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

window.addEventListener('scroll', reveal);

reveal();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var windowHeight = window.innerHeight;

    reveals.forEach(function(reveal) {
        var revealPoint = parseInt(reveal.getAttribute("data-reveal-point"), 10);
        var revealTop = reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}


const clients = document.querySelector(".clients");
const lesclients = document.getElementsByClassName("client");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 1;
var width; 


function slideWidth(){
    width = lesclients[0].clientWidth + 38;
}

slideWidth();



// window.addEventListener("resize",slideWidth);
clients.style.transform = 'translateX('+(-width * index) +'px)';


nextBtn.addEventListener("click",nextSlide);
function nextSlide(){
    if(index >= lesclients.length  - 1 ){return};
    clients.style.transition = "transform 0.1ms ease";
    index++;
    clients.style.transform = 'translateX('+(-width * index) +'px)';
    dotsLabel();
}


clients.addEventListener("transitionend",function(){
    lesclients[index].className += ' active';
    lesclients[index - 1].className = lesclients[index - 1].className.replace(' active','');
    if(lesclients[index].id === 'firstImageDuplicate'){
        lesclients[index - 1].className = lesclients[index - 1].className.replace(' active','');
        lesclients[index].className += ' active';
        clients.style.transition = "none";
        index = lesclients.length -1 - index ;
        clients.style.transform = 'translateX('+(-width * index) +'px)';
        lesclients[index].className += ' active';
        dotsLabel();
    }
    lesclients[5].className = lesclients[5].className.replace(' active','');

})

// Auto Sliding 

function autoslide(){
    deleteInterval = setInterval(timer,1000);
    function timer(){
        nextSlide();

    }
}
autoslide();

function dotsLabel(){            
    for (let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active','');
    }
    if(index > 4){
        dots[index - 5].className += ' active';
    }else{
        dots[index - 1].className += ' active';
    }
}


