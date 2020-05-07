import React from 'react';
import InputMask from 'react-input-mask';

const InputCustomMask = ({ input, meta, ...rest }) => {
  const inputProps = { ...input, ...rest };
  return (
    <>
      <InputMask {...inputProps} maskChar={''} className="ant-calendar-picker-input ant-input" />
      {meta.touched && meta.error && <span>{meta.error}</span>}
    </>
  );
};

export { InputCustomMask };
