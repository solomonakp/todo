import React from 'react';
import PropTypes from 'prop-types';

function SeventyThirty({ className, text, image, imageFirst, imageAlign }) {
  // imageAlign values are the flexbox align item values
  return (
    <div className={`seventy-thirty ${className ? className : ''}`}>
      <div className='container-xl'>
        <div className='row'>
          <div className='d-none d-lg-block col-lg-1'></div>
          <div className='col-12 col-sm-8 col-lg-7 text'>{text}</div>
          <div
            className={`col-12 col-sm-4 col-lg-3 image d-flex justify-content-sm-end ${
              imageFirst === true
                ? 'justify-content-start'
                : 'justify-content-end'
            }`}
          >
            {image}
          </div>
          <div className='d-none d-lg-block col-lg-1'></div>
        </div>
      </div>
      <style jsx>{`
        .seventy-thirty {
          margin-bottom: 50px;
        }
        .text {
          order: ${imageFirst ? '5' : '0'};
          @media (max-width: 575.98px) {
            order: 0;
          }
        }
        .image {
          align-items: ${imageAlign};
        }
        img {
          align-items: ${imageAlign};
        }
      `}</style>
    </div>
  );
}

SeventyThirty.propTypes = {
  text: PropTypes.element.isRequired,
  image: PropTypes.element.isRequired,
  imageFirst: PropTypes.bool,
  imageAlign: PropTypes.string,
};

export default SeventyThirty;
