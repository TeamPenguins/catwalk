import React from 'react';
import {Star, XCircle} from 'react-bootstrap-icons';

//takes in an on click method
//exicutes that method on click

// upper most parent components (card lists) will dictate which methods get called
const ActionButton = ({listType, actionButtonMethod, updateComparedProductMethod, productInfo, styleInfo}) => {
  var icon = listType === 'related' ? <Star/> : <XCircle />;
  return (
    <button className="action" onClick={() => {
      if (updateComparedProductMethod) {
        updateComparedProductMethod(productInfo, styleInfo);
      }
      actionButtonMethod(productInfo.id);
    }
    }>{icon}</button>
  );
};

export default ActionButton;