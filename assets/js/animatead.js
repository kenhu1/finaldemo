var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow");
  var dots = document.getElementsByClassName("selection");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  /*遮蔽非當前圖片 */
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*當自動輪播超出總照片數回到最初的照片 */
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  /*替換classname來顯示圖片*/
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 4000) //輪播間隔時間
}