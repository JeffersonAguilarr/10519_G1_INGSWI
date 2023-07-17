document.addEventListener("DOMContentLoaded", function(event) {
  var carousel = document.querySelector(".carousel");
  var images = carousel.getElementsByTagName("img");
  var currentImageIndex = 0;
  var prevButton = document.getElementById("prevButton");
  var nextButton = document.getElementById("nextButton");

  function showImage(index) {
    for (var i = 0; i < images.length; i++) {
      if (i === index) {
        images[i].classList.add("active");
      } else {
        images[i].classList.remove("active");
      }
    }
  }

  function nextImage() {
    currentImageIndex++;
    if (currentImageIndex === images.length) {
      currentImageIndex = 0;
    }
    showImage(currentImageIndex);
  }

  function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
  }

  nextButton.addEventListener("click", nextImage);
  prevButton.addEventListener("click", prevImage);

  showImage(currentImageIndex);
});
