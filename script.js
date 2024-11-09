
function liens() {
    // const pages = document.getElementsByClassName("pages")[0];
    const liens = document.querySelector(".pagesliens");
    const a = liens.getElementsByTagName("a");

    liens.style.visibility = "visible";
    console.log(a);

    Array.from(a).forEach((lien) => {
        lien.addEventListener("click", function() {
            lien.classList.add("activate");
        });
    });
}





const carouselRow = document.getElementById("container");
const carouselSlides = document.getElementsByClassName("slideBloc");
const rectangles = document.getElementsByClassName("rectangle");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 1;
var width; 


function slideWidth(){
    width = carouselSlides[0].clientWidth;
}

slideWidth();


window.addEventListener("resize",slideWidth);
carouselRow.style.transform = 'translateX('+(-width * index) +'px)';


nextBtn.addEventListener("click",nextSlide);
function nextSlide(){
    if(index >= carouselSlides.length  - 1 ){return};
    carouselRow.style.transition = "transform 0.1ms ease-out";
    index++;
    carouselRow.style.transform = 'translateX('+(-width * index) +'px)';
    rectanglesLabel();
}



prevBtn.addEventListener("click",prevSlide);
function prevSlide(){
    if(index <= 0){return};
    carouselRow.style.transition = "transform 0.1ms ease-out";
    index--;
    carouselRow.style.transform = 'translateX('+(-width * index) +'px)';
    rectanglesLabel();
}


carouselRow.addEventListener("transitionend",function(){
    //  console.log(carouselSlides[index].id);
    if(carouselSlides[index].id === 'firstImageDuplicate'){
       
        carouselRow.style.transition = "none";
        index = carouselSlides.length - index;
        console.log(index);
        carouselRow.style.transform = 'translateX('+(-width * index) +'px)';
        rectanglesLabel();
    }
    if(carouselSlides[index].id === 'lastImageDuplicate' ){
        console.log(index);
        carouselRow.style.transition = "none";
        index = carouselSlides.length - 2;
        carouselRow.style.transform = 'translateX('+(-width * index) +'px)';
        rectanglesLabel();
    }
})
   
// // // Auto Sliding 

function autoslide(){
    deleteInterval = setInterval(timer,5000);
    function timer(){
        nextSlide();

    }
}
autoslide();


const mainContainer = document.querySelector(".container");
mainContainer.addEventListener("mouseover",function(){
    clearInterval(deleteInterval);
});


mainContainer.addEventListener("mouseout",autoslide);

function rectanglesLabel(){
    for (let i = 0; i < rectangles.length; i++){
        rectangles[i].className = rectangles[i].className.replace(' active','');
    }
    rectangles[index - 1].className += ' active';
    // console.log(index);
}

// Lancer le carrousel
startCarousel();

// // // ::::::FIN Carousel:::::://

window.addEventListener('scroll', reveal);

reveal();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var windowHeight = window.innerHeight;
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    var mainTop = main.getBoundingClientRect().top;

    if (mainTop < -20 ){
        header.classList.add('smallheight');
    }else{
        header.classList.remove('smallheight');
    }

    console.log(header.style.height);


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


// const clients = document.querySelector(".clients");
// const lesclients = document.getElementsByClassName("client");
// const nextBtn = document.querySelector(".next");
// const dots = document.querySelectorAll(".dot");

// let index = 1;
// var width; 


// function slideWidth(){
//     width = lesclients[0].clientWidth + 38;
// }

// slideWidth();



// window.addEventListener("resize",slideWidth);
// clients.style.transform = 'translateX('+(-width * index) +'px)';


// nextBtn.addEventListener("click",nextSlide);
// function nextSlide(){
//     if(index >= lesclients.length  - 1 ){return};
//     clients.style.transition = "transform 0.1ms ease";
//     index++;
//     clients.style.transform = 'translateX('+(-width * index) +'px)';
//     dotsLabel();
// }


// clients.addEventListener("transitionend",function(){
//     lesclients[index].className += ' active';
//     lesclients[index - 1].className = lesclients[index - 1].className.replace(' active','');
//     if(lesclients[index].id === 'firstImageDuplicate'){
//         lesclients[index - 1].className = lesclients[index - 1].className.replace(' active','');
//         lesclients[index].className += ' active';
//         clients.style.transition = "none";
//         index = lesclients.length -1 - index ;
//         clients.style.transform = 'translateX('+(-width * index) +'px)';
//         lesclients[index].className += ' active';
//         dotsLabel();
//     }
//     lesclients[5].className = lesclients[5].className.replace(' active','');

// })

// // // Auto Sliding 

// function autoslide(){
//     deleteInterval = setInterval(timer,1000);
//     function timer(){
//         nextSlide();

//     }
// }
// autoslide();

// function dotsLabel(){            
//     for (let i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace(' active','');
//     }
//     if(index > 4){
//         dots[index - 5].className += ' active';
//     }else{
//         dots[index - 1].className += ' active';
//     }
// }


