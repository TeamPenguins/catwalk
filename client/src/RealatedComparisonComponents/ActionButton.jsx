import React from 'react';

//takes in an on click method
//exicutes that method on click

// upper most parent components (card lists) will dictate which methods get called
const ActionButton = ({actionButtonMethod}) => {
  return (
    <div onClick={()=> actionButtonMethod()}>action</div>
  );
};

export default ActionButton;