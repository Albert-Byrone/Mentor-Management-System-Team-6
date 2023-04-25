import React from 'react';
import * as Yup from 'yup';
import FormikForm from '../../../components/FormikForm/FormikForm';
import InputField from '../../../components/InputField';
import Button from '../../../components/utilities/Buttons/Button';

function SettingChangePassword() {
  const initialValues = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const validate = Yup.object({
    oldPassword: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('Current Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
        `Must Contain 8 Characters, One Uppercase, One Lowercase,
        One Number and one special case Character`,
      ),
    newPassword: Yup.string()
      .min(8, 'Password must be atleast 8 characters long')
      .required('New Password is required')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*)[A-Za-z\d]{8,}$/,
        `Must Contain 8 Characters, One Uppercase, One Lowercase,
        One Number and one special case Character`,
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'New Password must match')
      .required('Confirm Password is required'),
  });
  return (
    <div className="border-[1px] rounded-[5px] border-black9 mx-10 p-5">
      <FormikForm
        initialValues={initialValues}
        validationSchema={validate}
      >
        {/* old password */}
        <div className="flex items-center">
          <div className="w-[33%]">
            <p className="text-black2 text-[16px] font-[600]">
              Current Password
            </p>
          </div>

          <InputField
            type="password"
            name="oldPassword"
            id="oldPassword"
            placeholder="Your current password"
            inputStyle="text-16px] pl-[30px]"
          />
        </div>
        {/* new password */}
        <div className="flex items-center mt-[30px]">
          <div className="w-[33%]">
            <p className="text-black2 text-[16px] font-[600]">New Password</p>
          </div>
          <InputField
            type="password"
            name="newPassword"
            id="newPassword"
            placeholder="Must be at least 8 characters"
            inputStyle="text-16px] pl-[30px]"
          />
        </div>
        {/* confirm password */}
        <div className="flex items-center mt-[30px]">
          <div className="w-[33%]">
            <p className="text-black2 text-[16px] font-[600]">
              Confirm New Password
            </p>
          </div>
          <InputField
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Must match your new password"
            inputStyle="text-16px] pl-[30px]"
          />
        </div>

        <div className="flex justify-end mt-[30px]">
          <Button width="w-[35%]">Save new password</Button>
        </div>
        <div className="flex justify-center mt-[30px]">
          <p className="font-[600] text-[18px] text-[#023C40] underline">
            Forgot password?
          </p>
        </div>
      </FormikForm>
    </div>
  );
}

export default SettingChangePassword;
