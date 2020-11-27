import React from 'react';
import Star from './stars.jsx';
import random from './random.js';
import SpecialStar from './stars.jsx';

const StarList = ( {rating} ) => {

  console.log(typeof rating.split('.')[0]);
  console.log(typeof rating.split('.')[1]);

  let listOfStars = [];

  for (var i = 0; i < 5; i++) {
    if (i === Number(rating.split('.')[0])) {
      console.log(i);
      listOfStars.push(<SpecialStar fill={'0.' + rating.split('.')[1]} keyLimePie={i}/>);
    } else if (i > Number(rating.split('.')[0])) {
      listOfStars.push(<SpecialStar fill={'0'} keyLimePie={i}/>);
    } else {
      listOfStars.push(<SpecialStar fill={'1'} keyLimePie={i}/>);
    }
  }

  return (
    listOfStars
  );
};

export default StarList;
