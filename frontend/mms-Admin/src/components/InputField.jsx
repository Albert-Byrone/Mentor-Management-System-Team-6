/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import { PasswordEyeHide, PasswordEyeShow } from '../assets/images';

function InputField({
  //   width,
  type,
  label,
  styling,
  inputStyle,
  ...props
}) {
  const [field, meta] = useField(props);
  const [passwordType, setPasswordType] = useState(type);

  // Show and Hide Password Function
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <div className={`w-full ${styling}`}>
      <div
        className={`flex items-center border-[1px] rounded-[5px] border-black8 w-full ${
          meta.touched && meta.error && 'border-sec1'
        }`}
      >
        <input
          {...field}
          name={field.name}
          placeholder={props.placeholder}
          autoComplete="off"
          type={type === 'password' ? passwordType : type}
          className={`w-full h-full focus:outline-none bg-transparent py-[8px] placeholder:text-black5 text-black5 text-mukta font-[400] ${inputStyle}`}
        />

        {type === 'password' && (
          <span
            onClick={togglePassword}
            className="mr-3 cursor-pointer"
            aria-hidden="true"
          >
            {passwordType === 'password' ? (
              <PasswordEyeHide className="w-[24px]" />
            ) : (
              <PasswordEyeShow className="w-[24px]" />
            )}
          </span>
        )}
      </div>
      <ErrorMessage
        className="text-sec2 text-xs mt-0"
        component="div"
        name={field.name}
      />
    </div>
  );
}

export default InputField;
