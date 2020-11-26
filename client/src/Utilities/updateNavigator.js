const updateNavigator = (carouselPosition, listLength) => {
  debugger;
  // if (!carouselPosition) {return;}
  var listWidth = document.querySelector("#RelatedItemsCarousel").clientWidth;
  var cardWidth = document.querySelector(".card-container").clientWidth;
  var listCapacity = listWidth / cardWidth;
  listLength = listLength - Math.abs(carouselPosition / cardWidth);
  console.log('listWidth', listWidth);
  if (listCapacity >= (listLength)) {
    document.getElementById('right-nav').style.display = 'none';
  } else {
    document.getElementById('right-nav').style.display = 'block';
  }
  console.log('carouselPosition', carouselPosition);
  if (carouselPosition >= 0) {
    document.getElementById('left-nav').style.display = 'none';
  } else {
    document.getElementById('left-nav').style.display = 'block';
  }
};

export default updateNavigator;