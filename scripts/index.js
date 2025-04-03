
const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;

initialSlide();


function initialSlide(){
   if (slides.length>0) {
     slides[slideIndex].classList.add("firstSlide");
     intervalId=setInterval(nextslide,5000);
     }


}
function showSlide(index){

  if (index>=slides.length) {
    slideIndex=0;
  }
  else if (index<0) {
    slideIndex=slides.length-1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("firstSlide");
  });
  slides[slideIndex].classList.add("firstSlide");


}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextslide(){
      slideIndex++;
      showSlide(slideIndex);
}
