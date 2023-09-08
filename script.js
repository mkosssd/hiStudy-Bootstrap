const swiper = document.querySelector(".scroll");
function scroller(direction) {
  const width = document.querySelector(".cardBox").offsetWidth;
  if (direction === "right") {
    swiper.scrollLeft += width;
  } else {
    swiper.scrollLeft -= width;
  }
  console.log(width);
}