import React from 'react';
import PropTypes from 'prop-types';

import ProductCardFavoritesLine from './ProductCardFavoritesLine';
import ProductCardFavoritesModule from './ProductCardFavoritesModule';

/**
 *
 * @param {object} props
 * @param {'line' | 'module'} props.type
 * @param {Boolean} props.soldout
 * @param {String} props.brandName
 * @param {String} props.itemName
 * @param {String} props.color
 * @param {String} props.size
 * @param {Number} props.price
 * @param {Number} props.newPrice
 * @param {Number} props.rating
 * @param {Number} props.countOfVotes
 * @param {String} props.imgSrc
 * @param {Function} props.onAddToBag
 * @param {Function} props.onRemoveFromFavorites
 */
function ProductCardFavorites({
  type, soldout, brandName, itemName, color, size, price, newPrice, rating, countOfVotes, imgSrc,
  onAddToBag, onRemoveFromFavorites,
}) {
  const isLine = type === 'line';
  return (
    <>
      { isLine
        ? (
          <ProductCardFavoritesLine
            soldout={soldout}
            brandName={brandName}
            itemName={itemName}
            color={color}
            size={size}
            price={price}
            newPrice={newPrice}
            rating={rating}
            countOfVotes={countOfVotes}
            onAddToBag={onAddToBag}
            onRemoveFromFavorites={onRemoveFromFavorites}
            imgSrc={imgSrc}
          />
        )
        : (
          <ProductCardFavoritesModule
            soldout={soldout}
            brandName={brandName}
            itemName={itemName}
            color={color}
            size={size}
            price={price}
            newPrice={newPrice}
            rating={rating}
            countOfVotes={countOfVotes}
            onAddToBag={onAddToBag}
            onRemoveFromFavorites={onRemoveFromFavorites}
            imgSrc={imgSrc}
          />
        )}
    </>
  );
}

ProductCardFavorites.propTypes = {
  brandName: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToBag: PropTypes.func.isRequired,
  onRemoveFromFavorites: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  countOfVotes: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['line', 'module']),
  soldout: PropTypes.bool,
  newPrice: PropTypes.number,
};

ProductCardFavorites.defaultProps = {
  type: 'line',
  soldout: false,
  newPrice: 0,
};

export default ProductCardFavorites;
