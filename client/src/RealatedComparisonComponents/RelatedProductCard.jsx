import React from 'react';
/*
So maybe something like, onClick={() => methodFromApp}
*/

const RelatedProductCard = ({productChangeMethod, selectedProduct}) => {
  return (
    <div calssName="productCardCOntainer"
      onClick={productChangeMethod()}
    >

    </div>
  );
};

export default RelatedProductCard;

/*
 *
 *
 */