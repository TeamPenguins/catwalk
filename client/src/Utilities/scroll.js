
var scrollShift = 0;

const scroll = (direction) => {
  //if input is undefined, reset the scroll position back to zero
  if (direction === undefined) {
    document.getElementById('related').style.left = '0px';
    return 0;
  }
  //Find the width of the product card
  //Scroll will shift left or right for the distance of on card's width
  //Return the distance scrolled so far, for other methods to use.
  var cardWidth = document.querySelector(".card-container").clientWidth;
  direction === 'right' ? scrollShift -= cardWidth : scrollShift += cardWidth;
  document.getElementById('related').style.left = scrollShift + 'px';
  return scrollShift;
};

export default scroll;