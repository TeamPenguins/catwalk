const updateNavigator = (carouselPosition) => {
  debugger;
  var listWidth = document.querySelector("#RelatedItemsCarousel").clientWidth;
  console.log('listWidth', listWidth);
  // if (listWidth - 200 <= window.innerWidth ) {
  //   document.getElementById('right-nav').style.display = 'none';
  // } else {
  //   document.getElementById('right-nav').style.display = 'block';
  // }
  console.log('carouselPosition', carouselPosition);
  if (carouselPosition >= 0) {
    document.getElementById('left-nav').style.display = 'none';
  } else {
    document.getElementById('left-nav').style.display = 'block';
  }
};

export default updateNavigator;