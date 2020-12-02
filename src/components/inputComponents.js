import React, { useRef, useEffect, useState } from 'react';
import Ripples from 'react-ripples';
import theme from '../components/theme';
import { Field, useField } from 'formik';
import PropTypes from 'prop-types';
import camelCase from 'lodash/camelCase';
import Select from 'react-select';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export const Button = React.forwardRef(({ rippleClass, ...props }, ref) => {
  return (
    <Ripples className={rippleClass}>
      <button type='button' {...props} ref={ref}>
        {props.children}
      </button>
      <style jsx>{`
        /* button defaults styles */
        button {
          border: 0;
          white-space: nowrap;
          display: inline-block;
          text-align: center;
          transition: all 150ms ease-in;
          &:hover,
          &:active,
          &:focus {
            transition: all 150ms ease-out;
          }
          /* standard button  */
          &.standard {
            font-size: 15px;
            font-weight: bold;
            border-radius: ${theme.radius.input};
            color: ${theme.colors.tertiary};
            width: 270px;
            height: 60px;
            background-color: ${theme.colors.primary};
            letter-spacing: -0.1px;
            transition: ${theme.effects.buttonTransitionOut};
            @media (max-width: 425px) {
              max-width: 230px;
            }
            &:hover,
            &:focus {
              background-color: ${theme.colors.hover};
              transition: ${theme.effects.buttonTransitionIn};
            }

            &:disabled {
              background-color: ${theme.colors.info};
            }
            &:active {
              transform: ${theme.effects.stretch};
              transition: ${theme.effects.buttonTransitionIn};
            }
          }
          /* click text button */
          &.text-button {
            background-color: unset;
            color: ${theme.colors.primary};
            outline: none;
            padding: 0;
            &:hover,
            &:active,
            &:focus {
              color: ${theme.colors.hover};
            }
          }
          /* standard-type-2 */
          &.standard-type-2 {
            font-weight: bold;
            line-height: 20px;
            font-size: 15px;
            border-radius: ${theme.radius.input};
            color: ${theme.colors.primary};
            background-color: ${theme.colors.secondary};
            width: 132px;
            height: 42px;
            &.standard-type-2.perk-btn {
              width: 180px;
              @media (max-width: 575.98px) {
                margin-bottom: 40px;
              }
            }
            &.standard-type-2.blue-type {
              background-color: ${theme.colors.primary};
              color: ${theme.colors.tertiary};
              border-radius: ${theme.radius.button};
              font-weight: normal;
              width: 120px;
            }

            &:hover,
            &:focus {
              color: ${theme.colors.hover};
              transition: ${theme.effects.buttonTransitionIn};
            }
            &:disabled {
              background-color: ${theme.colors.info};
            }
            &:active {
              transform: ${theme.effects.stretch};
              transition: ${theme.effects.buttonTransitionIn};
            }
          }
          /* subscribe */
          &.subscribe {
            font-weight: normal;
            font-family: ${theme.fontFamily.circularBook};
            line-height: 20px;
            font-size: 15px;
            border-radius: ${theme.radius.button};
            color: ${theme.colors.tertiary};
            background-color: ${theme.colors.primary};
            width: 130px;
            height: 100%;
            &.search {
              font-family: Nunito;
              font-weight: bold;
            }

            &:hover,
            &:focus {
              transition: ${theme.effects.buttonTransitionIn};
            }
            &:disabled {
              background-color: ${theme.colors.info};
            }
            &:active {
              transform: ${theme.effects.stretch};
              transition: ${theme.effects.buttonTransitionIn};
            }
          }
        }
      `}</style>
    </Ripples>
  );
});

export const Input = (props) => {
  const id = '.' + [props.id];

  return (
    <Field {...props}>
      {({ field, meta }) => (
        <div
          className={` input-container ${props.className} d-flex flex-column  `}
        >
          {/* {console.log(field.value)} */}
          <label
            htmlFor={props.id ? props.id : camelCase(props.label)}
            className='d-flex align-items-center'
          >
            {props.label}
          </label>
          <div
            className={`input-box position-relative w-100 align-items-center ${props.id}`}
          >
            <input
              type={props.type}
              {...field}
              placeholder={props.placeholder}
              className={props.inputClass}
              id={props.id ? props.id : camelCase(props.label)}
            />
            {props.icon && <i>{props.icon}</i>}
          </div>
          {
            <div className='error'>
              {meta.touched && meta.error && meta.error}
            </div>
          }
          <style jsx>
            {`
              div.input-container {
                font-size: 14px;
                &:focus-within {
                  label {
                    color: ${theme.colors.primary};
                    transition: all 150ms ease-in;
                    font-weight: bold;
                    font-size: 14px;
                  }
                  .input-box {
                    border-color: ${theme.colors.primary};
                    transition: border-color 150ms ease-in;
                  }
                }
                label {
                  font-size: 12px;
                  color: ${field.value && meta.error
                    ? theme.colors.danger
                    : field.value && !meta.error
                    ? 'green'
                    : meta.touched && meta.error
                    ? theme.colors.danger
                    : theme.colors.placeholder};
                  transition: all 150ms ease-out;
                  margin-bottom: 0;
                  height: 20px;
                  font-weight: 500;
                }
                .input-box {
                  display: flex;
                  align-items: center;
                  flex-wrap: nowrap;
                  height: 44px;
                  transition: border-color 150ms ease-out;
                  border: ${theme.border.input};
                  border-radius: ${theme.radius.input};
                  border-color: ${field.value && meta.error
                    ? theme.colors.danger
                    : field.value && !meta.error
                    ? 'green'
                    : meta.touched && meta.error
                    ? theme.colors.danger
                    : theme.colors.input};
                  overflow: hidden;
                }
                input {
                  width: 100%;
                  height: 98%;
                  text-indent: 10px;
                  outline: none;
                  padding: 0;
                  border: 0;
                  font-size: 16px;
                  &:-webkit-autofill,
                  &:-webkit-autofill:hover,
                  &:-webkit-autofill:focus,
                  &:-webkit-autofill:active {
                    -webkit-box-shadow: 0 0 0 30px white inset !important;
                    background-color: ${theme.colors.tertiary};
                  }

                  &:focus {
                    &::placeholder {
                      opacity: 0;
                      transition: opacity 150ms ease-in;
                    }
                  }
                  &[type='password'] {
                    &::placeholder {
                      font-size: 10px;
                    }
                  }
                  &[type='number'] {
                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button {
                      -webkit-appearance: none;
                      margin: 0;
                    }
                    -moz-appearance: textfield;
                  }
                  &::placeholder {
                    color: ${theme.colors.placeholder};
                    opacity: 0.4;
                    font-family: ${theme.fontFamily.circular};
                    font-size: 14px;
                    letter-spacing: -0.29px;
                    transition: opacity 150ms ease-out;
                  }
                }
                i {
                  transform: translateY(-50%);
                  background-color: transparent;
                  padding: 0 5px;
                  align-self: flex-end;
                }
                .error {
                  color: ${theme.colors.danger};
                  font-size: 12px;
                  min-height: 18px;
                  width: 100%;
                }
              }
              ${id} :global(input:focus + i svg) {
                fill: ${theme.colors.primary};
                transition: all 150ms ease-out;
                opacity: 1;
              }
              ${id} :global(svg) {
                fill: ${field.value && meta.error
                  ? theme.colors.danger
                  : field.value && !meta.error
                  ? 'green'
                  : meta.touched && meta.error
                  ? theme.colors.danger
                  : theme.colors.placeholder};
                transition: all 150ms ease-out;
                opacity: ${field.value && meta.error
                  ? 1
                  : field.value && !meta.error
                  ? 1
                  : meta.touched && meta.error
                  ? 1
                  : 0.4};
              }
            `}
          </style>
        </div>
      )}
    </Field>
  );
};

export const InputAlt = (props) => {
  const id = '.' + [props.id];

  return (
    <Field {...props}>
      {({ field, meta }) => (
        <div
          className={` input-container ${props.className} d-flex flex-column  `}
        >
          {/* {console.log(field.value)} */}
          <label
            htmlFor={props.id ? props.id : camelCase(props.label)}
            className='d-flex align-items-center'
          >
            {props.label}
          </label>
          <div
            className={`input-box position-relative w-100 align-items-center ${props.id}`}
          >
            <input
              type={props.type}
              {...field}
              placeholder={props.placeholder}
              className={props.inputClass}
              id={props.id ? props.id : camelCase(props.label)}
            />
          </div>
          {
            <div className='error'>
              {meta.touched && meta.error && meta.error}
            </div>
          }
          <style jsx>
            {`
              div.input-container {
                font-size: 14px;
                margin-bottom: 10px;
                &:focus-within {
                  label {
                    color: ${theme.colors.primary};
                    transition: all 150ms ease-in;
                    font-weight: bold;
                    font-size: 16px;
                  }
                  .input-box {
                    border-color: ${theme.colors.primary};
                    transition: border-color 150ms ease-in;
                  }
                }
                label {
                  font-size: 14px;
                  color: ${field.value && meta.error
                    ? theme.colors.danger
                    : field.value && !meta.error
                    ? 'green'
                    : meta.touched && meta.error
                    ? theme.colors.danger
                    : theme.colors.placeholder};
                  transition: all 150ms ease-out;
                  margin-bottom: 16px;
                  height: 25px;
                  font-weight: 500;
                }
                .input-box {
                  transition: border-color 150ms ease-out;
                  border-bottom: ${theme.border.inputAlt};
                  border-color: ${field.value && meta.error
                    ? theme.colors.danger
                    : field.value && !meta.error
                    ? 'green'
                    : meta.touched && meta.error
                    ? theme.colors.danger
                    : theme.colors.input};
                  overflow: hidden;
                }
                input {
                  width: 100%;
                  height: 98%;
                  outline: none;
                  padding: 0;
                  border: 0;
                  font-size: 16px;
                  &:-webkit-autofill,
                  &:-webkit-autofill:hover,
                  &:-webkit-autofill:focus,
                  &:-webkit-autofill:active {
                    -webkit-box-shadow: 0 0 0 30px white inset !important;
                    background-color: ${theme.colors.tertiary};
                  }

                  &:focus {
                    &::placeholder {
                      opacity: 0;
                      transition: opacity 150ms ease-in;
                    }
                  }
                  &[type='password'] {
                    &::placeholder {
                      font-size: 10px;
                    }
                  }
                  &[type='number'] {
                    &::-webkit-outer-spin-button,
                    &::-webkit-inner-spin-button {
                      -webkit-appearance: none;
                      margin: 0;
                    }
                    -moz-appearance: textfield;
                  }
                  &::placeholder {
                    color: ${theme.colors.placeholder};
                    opacity: 0.4;
                    font-family: ${theme.fontFamily.circular};
                    font-size: 14px;
                    letter-spacing: -0.29px;
                    transition: opacity 150ms ease-out;
                  }
                }

                .error {
                  color: ${theme.colors.danger};
                  font-size: 12px;
                  min-height: 18px;
                  width: 100%;
                }
              }
            `}
          </style>
        </div>
      )}
    </Field>
  );
};

export const Phone = (props) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className={` input-container ${props.className} d-flex flex-column  `}>
      {/* {console.log(field.value)} */}
      <label
        htmlFor={props.id ? props.id : camelCase(props.label)}
        className='d-flex align-items-center'
      >
        {props.label}
      </label>
      <div className='input-box position-relative w-100 align-items-center'>
        <PhoneInput
          country='ng'
          placeholder={props.placeholder}
          inputProps={{
            name: field.name,
            id: props.id ? props.id : camelCase(props.label),
          }}
          containerClass='phone-input'
          onBlur={helpers.setTouched}
          disableCountryCode={true}
          onlyCountries={['ng']}
          onChange={(e, value) => {
            console.log(e, value);
          }}
        />
        {props.icon && <i className='position-absolute'>{props.icon}</i>}
      </div>
      {<div className='error'>{meta.touched && meta.error && meta.error}</div>}
      <style jsx>
        {`
          div.input-container {
            font-size: 14px;

            &:focus-within {
              label {
                color: ${theme.colors.primary};
                transition: all 150ms ease-in;
                font-weight: bold;
                font-size: 14px;
              }
            }
            label {
              font-size: 12px;
              color: ${theme.colors.placeholder};
              transition: all 150ms ease-out;
              margin-bottom: 0;
              height: 20px;
              font-weight: 500;
            }
            :global(.phone-input) {
              height: 44px;
              display: flex;
              flex-direction: row-reverse;
              transition: border-color 150ms ease-out;
              border: ${theme.border.input};
              border-radius: ${theme.radius.input};
            }
            :global(.phone-input:focus-within) {
              border-color: ${theme.colors.primary};
              transition: border-color 150ms ease-in;
            }
            :global(input) {
              width: calc(100% - 38px);
              height: 100%;
              text-indent: 10px;
              outline: none;
              border: 0;

              padding: 0;
              font-size: 16px;
              font-family: ${theme.fontFamily.circular};
              z-index: 3;
              font-weight: normal;
              display: block;
              &:focus {
                border-color: ${theme.colors.primary};
                transition: border-color 150ms ease-in;
                box-shadow: unset;
                &::placeholder {
                  opacity: 0;
                  transition: opacity 150ms ease-in;
                }
              }
            }
            :global(input::placeholder) {
              color: ${theme.colors.placeholder};
              opacity: 0.4;
              font-family: ${theme.fontFamily.circular};
              font-size: 14px;
              letter-spacing: -0.29px;
              transition: opacity 150ms ease-out;
            }
            :global(.flag-dropdown) {
              left: 0;
              right: 0;
              z-index: 2;
              width: 100%;
              border: unset;
              border-radius: unset;
              background-color: transparent;
            }
            :global(.country-list) {
              width: 100%;
            }
            .error {
              color: ${theme.colors.danger};
              font-size: 12px;
              min-height: 18px;
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

Input.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
};

export const TextArea = (props) => {
  const [meta] = useField(props);
  return (
    <div className={` input-container ${props.className} d-flex flex-column `}>
      {/* {console.log(field, meta)} */}
      <label
        htmlFor={camelCase(props.label)}
        className='d-flex align-items-center'
      >
        {props.label}
      </label>
      <div className='input-box position-relative w-100 align-items-center'>
        <Field as='textarea' {...props} />
      </div>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}

      <style jsx>
        {`
          div.input-container {
            font-size: 14px;
            margin-bottom: 10px;
            &:focus-within {
              label {
                color: ${theme.colors.primary};
                transition: all 150ms ease-in;
                font-weight: bold;
                font-size: 14px;
              }
            }
            label {
              font-size: 12px;
              color: ${theme.colors.placeholder};
              transition: all 150ms ease-out;
              margin-bottom: 0;
              height: 20px;
              font-weight: 500;
            }
            .input-box {
              min-height: 61px;
            }
            :global(textarea) {
              width: 100%;
              height: 100%;
              text-indent: 10px;
              outline: none;
              border: ${theme.border.input};
              border-radius: ${theme.radius.input};
              padding: 0;
              transition: border-color 150ms ease-out;
              font-size: 16px;
              resize: none;
              &:focus {
                border-color: ${theme.colors.primary};
                transition: border-color 150ms ease-in;

                &::placeholder {
                  opacity: 0;
                  transition: opacity 150ms ease-in;
                }
              }

              &::placeholder {
                color: ${theme.colors.placeholder};
                opacity: 0.4;
                font-family: ${theme.fontFamily.circular};
                font-size: 14px;
                letter-spacing: -0.29px;
                transition: opacity 150ms ease-out;
              }
            }
          }
        `}
      </style>
    </div>
  );
};

export const TextAreaAlt = (props) => {
  const [field, meta] = useField(props);
  const textAreaRef = useRef(null);
  const [textAreaHeight, setTextAreaHeight] = useState('auto');
  const [parentHeight, setParentHeight] = useState('auto');
  useEffect(() => {
    setParentHeight(`${textAreaRef.current.scrollHeight}px`);
    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
  }, [field.value]);

  return (
    <div className={` input-container ${props.className} d-flex flex-column `}>
      <label
        htmlFor={camelCase(props.label)}
        className='d-flex align-items-center'
      >
        {props.label}
      </label>
      <div className='input-box position-relative w-100 align-items-center'>
        <Field as='textarea' {...props} innerRef={textAreaRef} />
      </div>
      {<div className='error'>{meta.touched && meta.error && meta.error}</div>}

      <style jsx>
        {`
          div.input-container {
            font-size: 14px;
            margin-bottom: 10px;
            &:focus-within {
              label {
                color: ${theme.colors.primary};
                transition: all 150ms ease-in;
                font-weight: bold;
                font-size: 16px;
              }
            }
            label {
              font-size: 14px;
              color: ${field.value && meta.error
                ? theme.colors.danger
                : field.value && !meta.error
                ? 'green'
                : meta.touched && meta.error
                ? theme.colors.danger
                : theme.colors.placeholder};
              transition: all 150ms ease-out;
              margin-bottom: 16px;
              height: 25px;
              font-weight: 500;
            }
            .input-box {
              height: ${parentHeight};
            }
            :global(textarea) {
              width: 100%;
              height: ${textAreaHeight};
              outline: none;
              padding: 0;
              transition: border-color 150ms ease-out;
              font-size: 16px;
              resize: none;
              transition: border-color 150ms ease-out;
              border: 0;
              border-bottom: ${theme.border.inputAlt};
              overflow-y: hidden;
              border-color: ${field.value && meta.error
                ? theme.colors.danger
                : field.value && !meta.error
                ? 'green'
                : meta.touched && meta.error
                ? theme.colors.danger
                : theme.colors.input};
              &:focus {
                border-color: ${theme.colors.primary};
                transition: border-color 150ms ease-in;

                &::placeholder {
                  opacity: 0;
                  transition: opacity 150ms ease-in;
                }
              }

              &::placeholder {
                color: ${theme.colors.placeholder};
                opacity: 0.4;
                font-family: ${theme.fontFamily.circular};
                font-size: 14px;
                letter-spacing: -0.29px;
                transition: opacity 150ms ease-out;
              }
            }
            .error {
              color: ${theme.colors.danger};
              font-size: 12px;
              height: 18px;
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export const TyreManSelect = (props) => {
  const [field, meta, helpers] = useField(props);
  const customStyles = {
    container: (provided) => ({
      ...provided,
      height: '100%',
    }),
    control: (provided, state) => ({
      ...provided,
      borderRadius: theme.radius.input,
      height: '100%',
      outline: 'none',
      boxShadow: state.isFocused ? 'unset' : 'unset',
      borderColor: state.isFocused ? theme.colors.primary : theme.colors.input,
      transition: state.isFocused
        ? 'border-color 150ms ease-in'
        : 'border-color 150ms ease-out',
    }),
    indicatorSeparator: (provided, state) => ({
      display: 'none',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: theme.colors.placeholder,
      transition: state.isFocused
        ? 'opacity 150ms ease-in'
        : 'opacity 150ms ease-out',
      opacity: '0.4',
      fontFamily: theme.fontFamily.circular,
      fontSize: '14px',
      letterSpacing: '-0.29px',
      display: state.isFocused ? 'none' : 'inline',
    }),
    option: (provided, state) => {
      let bg, cl;

      if (state.isSelected) {
        bg = theme.colors.primary;
        cl = theme.colors.tertiary;
      } else if (state.isFocused) {
        bg = provided.backgroundColor;
        cl = provided.color;
      }
      return {
        ...provided,
        backgroundColor: bg,
        color: cl,
        transition: state.isFocused
          ? 'all 150ms ease-in'
          : 'all 150ms ease-out',
      };
    },
  };

  return (
    <div className={` input-container ${props.className} d-flex flex-column `}>
      <label
        htmlFor={camelCase(props.id)}
        className='d-flex align-items-center'
      >
        {props.label}
      </label>
      <div className='input-box position-relative w-100 align-items-center'>
        <Select
          inputId={props.id}
          classNamePrefix={props.classNamePrefix}
          placeholder={props.placeholder}
          options={props.options}
          className={props.selectName}
          styles={customStyles}
          {...helpers}
          onChange={(e) => {
            console.log(e);
            return helpers.setValue(e.value, field.name);
          }}
          onBlur={helpers.setTouched}
        />
      </div>
      {meta.touched && meta.error && <div className='error'>{meta.error}</div>}
      <style jsx>{`
        .input-container {
          font-size: 14px;
          margin-bottom: 10px;
          &:focus-within {
            label {
              color: ${theme.colors.primary};
              transition: all 150ms ease-in;
              font-weight: bold;
              font-size: 14px;
            }
          }
          label {
            font-size: 12px;
            color: ${theme.colors.placeholder};
            transition: all 150ms ease-out;
            margin-bottom: 0;
            height: 20px;
            font-weight: 500;
          }
          .input-box {
            height: 44px;
          }
        }
        :global(.react-select__control svg) {
          transition: all 150ms ease-out;
          opacity: 0.4;
          transform: rotate(0deg);
        }
        :global(.react-select__control.react-select__control--is-focused svg) {
          transform: rotate(180deg);
          transition: all 150ms ease-in;
          fill: ${theme.colors.primary};
          opacity: 1;
        }
      `}</style>
    </div>
  );
};
