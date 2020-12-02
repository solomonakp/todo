import React from 'react';
import theme from '../theme';
import PropTypes from 'prop-types';

function TextGroup({
  id,
  heading,
  paragraph,
  headingSpacing = '20px',
  textColor = theme.colors.primary,
  headingColor = 'inherit',
  paragraphColor = 'inherit',
  headingSize = '24px',
  paragraphSize = '16px',
  paragraphHeight = '32px',
  headingHeight = '30px',
  groupSpacing = '35px',
}) {
  // using id to apply individual styles
  const textGroupId = '#' + id;
  console.log(textGroupId);
  return (
    <div className='text-group' id={id}>
      {heading}
      {paragraph}
      <style jsx>{`
        .text-group {
          color: ${textColor};
          margin-bottom: ${groupSpacing};
        }
        ${textGroupId} :global( h1) {
          margin-bottom: ${headingSpacing};
          color: ${headingColor};
          font-size: ${headingSize};
          line-height: ${headingHeight};
          font-weight: 900;
        }
        ${textGroupId} :global( h2) {
          margin-bottom: ${headingSpacing};
          color: ${headingColor};
          font-size: ${headingSize};
          line-height: ${headingHeight};
          font-weight: 900;
        }
        ${textGroupId} :global( h3) {
          margin-bottom: ${headingSpacing};
          color: ${headingColor};
          font-size: ${headingSize};
          line-height: ${headingHeight};
          font-weight: 900;
        }
        ${textGroupId} :global( h4) {
          margin-bottom: ${headingSpacing};
          color: ${headingColor};
          font-size: ${headingSize};
          line-height: ${headingHeight};
          font-weight: 900;
        }
        ${textGroupId} :global( h5) {
          margin-bottom: ${headingSpacing};
          color: ${headingColor};
          font-size: ${headingSize};
          line-height: ${headingHeight};
          font-weight: 900;
        }
        ${textGroupId} :global( h6) {
          margin-bottom: ${headingSpacing};
          color: ${headingColor};
          font-size: ${headingSize};
          line-height: ${headingHeight};
          font-weight: 900;
        }
        :global(.text-group p) {
          color: ${paragraphColor};
          font-size: ${paragraphSize};
          line-height: ${paragraphHeight};
        }
      `}</style>
    </div>
  );
}

TextGroup.propTypes = {
  heading: PropTypes.element.isRequired,
  paragraph: PropTypes.element.isRequired,
  headingSpacing: PropTypes.string,
  textColor: PropTypes.string,
  headingColor: PropTypes.string,
  paragraphColor: PropTypes.string,
  headingSize: PropTypes.string,
  paragraphSize: PropTypes.string,
  paragraphHeight: PropTypes.string,
  headingHeight: PropTypes.string,
  groupSpacing: PropTypes.string,
};

export default TextGroup;
