import React, {useState} from 'react';
import RelatedProductCard from './RelatedProductCard';

const RelatedItemsAndComparisonList = ({products}) => {
  return (
    <div>
      <h6>Related Products</h6>
      <ul className="relatedItemslist">
        <RelatedProductCard product={products[1]} />
        <RelatedProductCard product={products[2]} />
        <RelatedProductCard product={products[3]} />
        <RelatedProductCard product={products[4]} />
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