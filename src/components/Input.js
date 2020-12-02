import React from 'react';
import { useField } from 'formik';

export default function Input({ fullWidth, className, inputClass, ...props }) {
  const field = useField(props);

  const { touched } = field[1];

  console.log(field);

  return (
    <div className={className}>
      <input {...field[0]} className={inputClass} />
      <div className='error'>{touched && 'this has been touched'}</div>
      <style jsx>{`
        input {
          width: ${fullWidth ? '100%' : 'unset'};
        }
      `}</style>
    </div>
  );
}
