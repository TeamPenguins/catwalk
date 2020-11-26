//find the element with the class 'related'
//move it over left, for the width of a card element
var imageOffset = 0;

const scroll = (direction) => {
  if (direction === undefined) {
    document.getElementById('related').style.left = '0px';
    return 0;
  }
  var listPosition;
  var cardWidth = document.querySelector(".card-container").clientWidth;
  console.log('cardWidth', cardWidth);
  debugger;
  direction === 'right' ? imageOffset -= cardWidth : imageOffset += cardWidth;
  document.getElementById('related').style.left = imageOffset + 'px';
  listPosition = parseInt(document.getElementById('related').style.left);
  return listPosition;
};

//create a left offset

export default scroll;