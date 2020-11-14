import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard.jsx';

const RelatedItemsAndComparisonList = ({products}) => {
  return (
    <div>
      <h6>Related Products</h6>
      <ul className="relatedItemslist">
        <li>Related product one</li>
        <li>Related product two</li>
        <li>Related product three</li>
        <li>Related product four</li>
      </ul>
      <h6>Your Outfit</h6>
      <ul className="outfitList">
        <li>Add current item to outfit</li>
        <li>outfit item one</li>
        <li>outfit item two</li>
        <li>outfit item three</li>
      </ul>
    </div>
  );
};

export default RelatedItemsAndComparisonList;