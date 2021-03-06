import React from 'react';
import PropTypes from 'prop-types';

import ProductCardCatalogLine from './ProductCardCatalogLine';
import ProductCardCatalogModule from './ProductCardCatalogModule';

/**
 *
 * @param {object} props
 * @param {'line' | 'module'} props.type
 * @param {Boolean} props.main
 * @param {String} props.imgSrc
 * @param {Number} props.price
 * @param {Number} props.newPrice
 * @param {Number} props.rating
 * @param {Number} props.countOfVotes
 * @param {String} props.item
 * @param {String} props.brand
 * @param {Function} props.onAddToFavorites
 */
function ProductCardCatalog({
  type, main, imgSrc, price, newPrice, item, brand, rating, countOfVotes, onAddToFavorites,
}) {
  const isLine = type === 'line';
  return (
    <>
      {isLine
        ? (
          <ProductCardCatalogLine
            imgSrc={imgSrc}
            price={price}
            newPrice={newPrice}
            item={item}
            brand={brand}
            rating={rating}
            countOfVotes={countOfVotes}
            onAddToFavorites={onAddToFavorites}
          />
        )
        : (
          <ProductCardCatalogModule
            main={main}
            imgSrc={imgSrc}
            price={price}
            newPrice={newPrice}
            item={item}
            brand={brand}
            rating={rating}
            countOfVotes={countOfVotes}
            onAddToFavorites={onAddToFavorites}
          />
        )}
    </>
  );
}

ProductCardCatalog.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  countOfVotes: PropTypes.number.isRequired,
  onAddToFavorites: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['line', 'module']),
  main: PropTypes.bool,
  newPrice: PropTypes.number,
};

ProductCardCatalog.defaultProps = {
  newPrice: 0,
  main: false,
  type: 'line',
};

export default ProductCardCatalog;
