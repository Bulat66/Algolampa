// SLIDER
let slider = document.getElementsByClassName('slider');
let slide_box = document.getElementsByClassName('slide-box');

let shift = slider[0].clientWidth;
let step0 = 1;

function moveSlider0(){
  if ( step0 < 3 ) {
      slide_box[0].style.transform = `translateX(${shift * (-step0)}px)`; // Исправление ошибки
      step0 += 1;
  } else {
      step0 = 1;
      slide_box[0].style.transform = `translateX(0)`;
  }
}
let intervalId0 = setInterval(moveSlider0, 2700);

let step1 = 1;
function moveSlider1(){
  if ( step1 < 3 ) {
      slide_box[1].style.transform = `translateX(${shift * (-step1)}px)`; // Исправление ошибки
      step1 += 1;
  } else {
      step1 = 1;
      slide_box[1].style.transform = `translateX(0)`;
  }
}
let intervalId1 = setInterval(moveSlider1, 5000);

let step2 = 1;
function moveSlider2(){
  if ( step2 < 3 ) {
      slide_box[2].style.transform = `translateX(${shift * (-step2)}px)`; // Исправление ошибки
      step2 += 1;
  } else {
      step2 = 1;
      slide_box[2].style.transform = `translateX(0)`;
  }
}
let intervalId2 = setInterval(moveSlider2, 3400);