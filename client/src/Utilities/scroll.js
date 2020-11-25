//find the element with the class 'related'
//move it over left, for the width of a card element
var imageOffset = 0;

const scroll = (direction) => {
  if (direction === undefined) { return 0; }
  var listPosition;
  var cardWidth = document.querySelector(".card-container").clientWidth;
  debugger;
  direction === 'right' ? imageOffset -= cardWidth : imageOffset += cardWidth;
  document.getElementById('related').style.left = imageOffset + 'px';
  listPosition = parseInt(document.getElementById('related').style.left);
  return listPosition;
};

export default scroll;