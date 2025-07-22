// let Slider = document.getElementsByClassName('slider');
// let Slide = document.getElementsByClassName('slide');

// let currrentPosition = 0;
// const maxPosition = -(Slide.lenth - 1) * slideWidth;
// function move(){
// 	currrentPosition -= slideWidth;

// 	if (currentPosition < maxPosition) {
//       currentPosition = 0;
//       // Отключаем анимацию для мгновенного возврата
//       sliderTrack.style.transition = 'none';
//       sliderTrack.style.transform = `translateX(${currentPosition}px)`;
//       // Возвращаем анимацию после небольшой задержки
//       setTimeout(() => {
//         sliderTrack.style.transition = 'transform 0.5s ease';
//       }, 10);
//     } else {
//       // Обычное перемещение
//       sliderTrack.style.transform = `translateX(${currentPosition}px)`;
//     }

//   const intervalId = setInterval(moveNext, interval);

//   // Остановка при наведении (опционально)
//   sliderTrack.addEventListener('mouseenter', () => clearInterval(intervalId));
//   sliderTrack.addEventListener('mouseleave', () => {
//     intervalId = setInterval(moveNext, interval);
//   });

//   return intervalId; // Можно использовать для ручной остановки
//   }
// move();
  // Запускаем интервал


let slider = document.getElementsByClassName('slider');
let Slide = document.getElementsByClassName('slide');
let slideWidth = Slide[0].offsetWidth;
let step = 1;

function move(){
  if ( step < 3 ) {
      slider[0].style.transform = `translateX(${slideWidth})`; // Исправление ошибки
      step++;
  } else {
      slider[0].style.transform = `translateX(0)`;
      step = 1;
  }
}
let moveInterval = setInterval(move, 2700);

// let step1 = 1;
// function moveSlider1(){
//   if ( step1 < 4 ) {
//       slider[1].style.transform = `translateX(${-100 * step1}%)`; // Исправление ошибки
//       step1++;
//   } else {
//       slider[1].style.transform = `translateX(0)`;
//       step1 = 1;
//   }
// }
// let intervalId1 = setInterval(moveSlider1, 3500);

// let step2 = 1;
// function moveSlider2(){
//   if ( step2 < 4 ) {
//       slider[2].style.transform = `translateX(${-100 * step2}%)`; // Исправление ошибки
//       step2++;
//   } else {
//       slider[2].style.transform = `translateX(0)`;
//       step2 = 1;
//   }
// }
// let intervalId2 = setInterval(moveSlider2, 2000);

// // SLIDER type-b
// let type_B = document.getElementsByClassName('type-b');
// let type_B_slide = document.getElementsByClassName('type-b-slide');

// let type_B_currentSlide = 0;

// function showSlide(n) {
//     type_B_slide[type_B_currentSlide].classList.remove('type-b-active-slide');
//     type_B_currentSlide = (n + type_B_slide.length) % type_B_slide.length;
//     type_B_slide[type_B_currentSlide].classList.add('type-b-active-slide');
// }
// function nextSlide() {
//     showSlide(type_B_currentSlide + 1);
// }
// let intervalId = setInterval(nextSlide, 5000);