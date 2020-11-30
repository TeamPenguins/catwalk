const updateNavigator = (scrollShift, listLength) => {

  /*/
  Divide how much the carousel has shifted by the width of each card.
  This will give you the number of cards that have been scrolled through.
  Subtract the number of cards that have been scrolled through from how many cards that need to be displayed.
  If the list capacity is big enough to display all the cards left,
  then you dont need a navigation arrow. ('none')
  Otherwise, display the navigation arrow. ('block')
   /*/
  var listWidth = document.querySelector("#RelatedItemsCarousel").clientWidth;
  var cardWidth = document.querySelector(".card-container").clientWidth;
  var listCapacity = listWidth / cardWidth;
  var NumberOfviewedCards = Math.abs(scrollShift / cardWidth);

  listLength = listLength - NumberOfviewedCards;
  if (listCapacity >= (listLength)) {
    document.getElementById('right-nav').style.display = 'none';
  } else {
    document.getElementById('right-nav').style.display = 'block';
  }
  if (scrollShift >= 0) {
    document.getElementById('left-nav').style.display = 'none';
  } else {
    document.getElementById('left-nav').style.display = 'block';
  }
};

export default updateNavigator;