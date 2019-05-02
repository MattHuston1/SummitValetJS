var x = document.getElementsByClassName("mySlides")
var y = document.getElementsByClassName("mySlides2")
var z = document.getElementsByClassName("mySlides3")
var slideIndex = 0;
carousel();
// carousel2();
carousel3();

function carousel() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// function carousel2() {
//   var i;
//   for (i = 0; i < y.length; i++) {
//     y[i].style.display = "none"; 
//   }
//   slideIndex++;
//   if (slideIndex > y.length) {slideIndex = 1} 
//   y[slideIndex-1].style.display = "block"; 
//   setTimeout(carousel2, 2000); // Change image every 2 seconds
// }

function carousel3() {
  var i;
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > z.length) {slideIndex = 1} 
  z[slideIndex-1].style.display = "block"; 
  setTimeout(carousel3, 2000); // Change image every 2 seconds
}