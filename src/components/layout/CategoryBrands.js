import React from 'react';
import CategoryBar from './CategoryBar';
import BrandImage from './BrandImage';
import SideCircle from './SideCircle';
import PropTypes from 'prop-types';

export default function CategoryBrands({ items, children }) {
  console.log(items);
  return (
    <section className='category-brands'>
      {items.map((category, index) => (
        <SideCircle key={index}>
          <div className='container-xl'>
            <CategoryBar categoryName={`${category.categoryName} Tyres`} />
            <div className='brands-container d-flex flex-wrap w-100 justify-content-center '>
              {items[index].brands.map((brand, index) => (
                <BrandImage
                  key={index}
                  image={brand.img}
                  brandName={brand.alt}
                />
              ))}
            </div>
          </div>
        </SideCircle>
      ))}
      <style jsx>{``}</style>
      {children}
    </section>
  );
}

CategoryBar.propType = {
  children: PropTypes.element,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string,
      brands: PropTypes.arrayOf(
        PropTypes.shape({
          alt: PropTypes.string.isRequired,
          img: PropTypes.string.isRequired,
        })
      ),
    })
  ),
};
