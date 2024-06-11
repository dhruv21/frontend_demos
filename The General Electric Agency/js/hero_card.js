function changeImageBasedOnScreenSize() {
  var image = document.getElementById("hero-card-img");
  var screenWidth = window.innerWidth;

  if (screenWidth > 1000) {
    image.src = "assets/images/hero-card-img-1.png";
  } else if (screenWidth >= 770 && screenWidth < 1000) {
    image.src = "assets/images/hero-card-img-2.png";
  } else if (screenWidth >= 480 && screenWidth < 770) {
    image.src = "assets/images/hero-card-img-3.png";
  } else {
    image.src = "assets/images/hero-card-img-4.png";
  }
}

window.onload = changeImageBasedOnScreenSize;
window.onresize = changeImageBasedOnScreenSize;
