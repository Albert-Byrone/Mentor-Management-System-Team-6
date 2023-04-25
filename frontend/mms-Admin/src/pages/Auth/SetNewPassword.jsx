import React from 'react';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/features/NewPasswordSuccess/modalSlice';
import FormikForm from '../../components/FormikForm/FormikForm';
import InputField from '../../components/InputField';
import Button from '../../components/utilities/Buttons/Button';

function SetNewPassword() {
  const initialValues = {
    password: '',
  };
  // the yup validation schema
  const validate = Yup.object({
    password: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('New password is required to continue')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
        `Must Contain 8 Characters, One Uppercase, One Lowercase,
                  One Number and one special case Character`,
      ),
  });

  // redux state for the reset password success
  const dispatch = useDispatch();

  const handleSuccess = () => {
    dispatch(openModal());
  };
  return (
    <div className="h-full flex flex-col justify-center items-start">
      <div className="w-[65%] mx-auto">
        <h1 className="text-black1 text-[32px] font-[700] font-mukta">
          Set new password
        </h1>
        {/* This is a formik form component for wrapping the input fields
         ** you check the components/FormikForm to see the component
         ** it accepts the initialValues and validate objects as props into the component
         */}
        <FormikForm
          initialValues={initialValues}
          validationSchema={validate}
          className="mt-[20px]"
        >
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            width="w-full"
            inputStyle="text-[20px] pl-[30px]"
          />
          <Button width="w-full mt-[28px]" onClick={handleSuccess}>Reset Password</Button>
        </FormikForm>
        {/* new user link to signup form */}
        <p className="font-[400] text-black5 font-mukta text-[16px] mt-[20px]">
          *Your new password must be different from previously used password.
        </p>
      </div>
    </div>
  );
}

export default SetNewPassword;
