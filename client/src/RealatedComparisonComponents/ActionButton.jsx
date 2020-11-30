import React from 'react';
import {Star, XCircle} from 'react-bootstrap-icons';
import Interactions from '../Utilities/Interactions.js';
import RelatedItemsAndComparisonList from './RelatedItemsComparisonList.jsx';


//takes in an on click method
//exicutes that method on click

// upper most parent components (card lists) will dictate which methods get called
const ActionButton = ({listType, actionButtonMethod, updateComparedProductMethod, productInfo, styleInfo}) => {
  var icon = listType === 'related' ? <Star/> : <XCircle />;
  var altText = listType === 'related' ? "compare this product's features with the main product above" : "remove product from your outfit";
  return (
    <button aria-label={altText} className="action" onClick={() => {
      if (updateComparedProductMethod) {
        updateComparedProductMethod(productInfo, styleInfo);
      }
      actionButtonMethod(productInfo.id);
    }}
    >{icon}</button>
  );
};

export default ActionButton;