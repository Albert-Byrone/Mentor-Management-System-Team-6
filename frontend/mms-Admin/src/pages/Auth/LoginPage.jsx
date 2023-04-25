import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import FormikForm from '../../components/FormikForm/FormikForm';
import InputField from '../../components/InputField';
import Button from '../../components/utilities/Buttons/Button';
import GoogleAuthButton from '../../components/utilities/Buttons/GoogleAuthButton';

function LoginPage() {
  const initialValues = {
    email: '',
    password: '',
  };
  // the yup validation schema
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
        `Must Contain 8 Characters, One Uppercase, One Lowercase,
              One Number and one special case Character [@$!%*#?&-_]`,
      ),
  });
  return (
    <div className="h-full flex flex-col justify-center items-start">
      <div className="w-[85%] md:w-[65%] mx-auto">
        <h1 className="text-black1 text-[32px] font-[700] font-mukta">
          Welcome!
        </h1>
        <h2 className="text-black5 text-[24px] font-[400] font-mukta">
          Login to continue
        </h2>
        {/* This is a formik form component for wrapping the input fields
         ** you check the components/FormikForm to see the component
         ** it accepts the initialValues and validate objects as props into the component
         */}
        <FormikForm
          initialValues={initialValues}
          validationSchema={validate}
          className="mt-[20px]"
          styling="flex justify-center items-center flex-col"
        >
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            styling="mb-[20px]"
            width="w-full"
            inputStyle="text-[20px] pl-[30px]"
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            width="w-full"
            inputStyle="text-[20px] pl-[30px]"
          />

          <Link to="/admin-dashboard" className="w-full">
            <Button width="w-full mt-[28px]">Login</Button>
          </Link>
        </FormikForm>
        <div className="flex justify-end mt-[22px]">
          <Link
            to="/forgot-password"
            className="text-black1 font-[600] font-mukta text-[16px] underline"
          >
            Forgot Password?
          </Link>
        </div>
        {/* the google signin authentication button */}
        <GoogleAuthButton styling="my-[40px]" />
        {/* new user link to signup form */}
        <p className="font-[600] font-mukta text-[16px] text-center">
          New User?
          {' '}
          <Link to="/" className="underline cursor-pointer">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
