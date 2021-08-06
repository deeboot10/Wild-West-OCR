// Uzimanje elementa sa DOM-a
const slide1 = document.querySelector(".backgrounds div:nth-child(1)");
const slide2 = document.querySelector(".backgrounds div:nth-child(2)");
const slide3 = document.querySelector(".backgrounds div:nth-child(3)");
const slideButton1 = document.querySelector(".slider-buttons div:nth-child(1)");
const slideButton2 = document.querySelector(".slider-buttons div:nth-child(2)");
const slideButton3 = document.querySelector(".slider-buttons div:nth-child(3)");
const allSlideButtons = [slideButton1, slideButton2, slideButton3];
const allSlides = [slide1, slide2, slide3];

// broj sekundi izmedju promene slajdova
const time = 3;
// Pomoćne promenljive
let currentSlide = 1;
let intervalHandle;


// ucitava DOM elemente na osnovu promene slajda
function changeSlide(slide){
  for(let i = 0; i < allSlides.length; i++){
    allSlides[i].classList.remove("opacityUp");
    allSlides[i].classList.add("opacityDown");
    allSlideButtons[i].style.opacity = 0.5;
  };
  allSlides[slide-1].classList.remove("opacityDown");
  allSlides[slide-1].classList.add("opacityUp");
  allSlideButtons[slide-1].style.opacity = 1;
}
//funkcija koja u odredjenom vremenskom intervalu menja slajd
function loopSlides(time){
  intervalHandle = setInterval(() => {

    if(currentSlide === allSlides.length) currentSlide = 0;
    changeSlide(++currentSlide);

  }, 1000 * time);
}

//funkcije koje se izvrse na pritisnuto dugme za promenu slajda
const option1 = optionMaker(1);
const option2 = optionMaker(2);
const option3 = optionMaker(3);


//Fabrika funkcija za promenu slajdova na pritisnuto dugme
function optionMaker(slideNumber){
  return function(){
    changeSlide(slideNumber);
    currentSlide = slideNumber;
    clearInterval(intervalHandle);
    loopSlides(time);
  }
}

//Inicijalno započinjanje promene slajdova u određenom vremenskom intervalu (time)
loopSlides(time);


//countdown
const end = new Date('09/14/2021 00:00');
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.querySelector('.countdown').innerHTML = 'EXPIRED!';

        return;
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.querySelector('.countdown-days').innerHTML = days + '<span>dana</span';
    document.querySelector('.countdown-hours').innerHTML = hours + '<span>sati</span';
    document.querySelector('.countdown-minutes').innerHTML = minutes + '<span>minuta</span';
    document.querySelector('.countdown-seconds').innerHTML = seconds + '<span>sekundi</span';
}

timer = setInterval(showRemaining, 1000);

//Showing header under first page
const section1 = document.querySelector(".section1-container");
const header = document.querySelector("header");
window.onscroll = ()=>{
  if(window.scrollY > section1.offsetHeight){
    header.classList.add("addZ");
  } else{
    header.classList.remove("addZ");
  }
};