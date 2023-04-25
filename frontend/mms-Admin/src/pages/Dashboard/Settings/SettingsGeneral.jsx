/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  UserAvatar } from '../../../assets/images';
import SocialIcon from '../../../components/Dashboard/Settings/Socials';
import FormikForm from '../../../components/FormikForm/FormikForm';
import InputField from '../../../components/InputField';
import Button from '../../../components/utilities/Buttons/Button';
import { openProfileSavedModal } from '../../../redux/features/Profile/profileSlice';

function SettingsGeneral() {
  const initialValues = {
    firstName: '',
    lastName: '',
    about: '',
    website: '',
  };

  const dispatch = useDispatch();

  return (
    <div className="border-[1px] rounded-[5px] border-black9 mx-10 p-5">
      <section className="flex justify-between items-center">
        <div className="flex items-center">
          <UserAvatar />

          <div className="ml-[46px]">
            <div className="flex items-center">
              <h2 className="font-semibold text-2xl text-black2 mr-2">
                Peculiar Umeh
              </h2>
            </div>
            <button
              className="h-[24px] bg-pri3 flex items-center justify-center text-white duration-700 text-[12px] font-[400] text-mukta hover:bg-pri2 py-2 rounded-[5px] px-3"
              type="button"
            >
              upload picture
            </button>
          </div>
        </div>
      </section>

      {/* input fields */}
      <section className="mt-[25px] w-full">
        <FormikForm
          initialValues={initialValues}
          //   validationSchema={validate}
          classname="w-full"
          styling="w-full"
        >
          {/* fullname */}
          <div className="flex items-center w-full">
            <div className="w-[15%]">
              <p className="text-black2 text-[16px] font-[600]">Full name</p>
            </div>

            <div className="grid grid-cols-2 gap-x-[20px] w-full">
              <InputField
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                inputStyle="text-[16px] pl-3"
              />
              <InputField
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                inputStyle="text-[16px] pl-3"
              />
            </div>
          </div>

          {/* about */}
          <div className="flex items-center mt-[25px] w-full">
            <div className="w-[16%]">
              <p className="text-black2 text-[16px] font-[600]">About</p>
            </div>

            <div className="flex">
              <textarea
                name="about"
                id="about"
                cols={100}
                // rows={4}
                className="flex resize-none focus:outline-none bg-transparent pl-3 pt-3 border-[1px] rounded-[5px] border-black8 placeholder:text-black5 text-black5 text-mukta font-[400] h-[96px] w-full"
                placeholder="Your Bio"
              />
            </div>
          </div>

          {/* website */}
          <div className="flex items-center mt-[25px] w-full">
            <div className="w-[15%]">
              <p className="text-black2 text-[16px] font-[600]">Website</p>
            </div>

            <InputField
              type="text"
              name="website"
              id="website"
              styling="w-full"
              placeholder="www.example.com"
              inputStyle="text-[16px] pl-3 w-full"
            />
          </div>
          {/* country and city */}
          <div className="grid grid-cols-2 gap-x-[20px] mt-[25px] w-full">
            <div className="flex items-center">
              <div className="w-[36%]">
                <p className="text-black2 text-[16px] font-[600]">Country</p>
              </div>

              <select
                name="country"
                id="country"
                placeholder="First Name"
                className="text-[16px] pl-3 border-[1px] h-[43px] rounded-[5px] border-black8 placeholder:text-black5 text-black5 text-mukta font-[400] w-full"
              >
                <option value="country">Select Country</option>
              </select>
            </div>
            <div className="flex items-center">
              <div className="w-[36%]">
                <p className="text-black2 text-[16px] font-[600]">City</p>
              </div>

              <select
                name="country"
                id="country"
                placeholder="First Name"
                className="text-[16px] pl-3 border-[1px] h-[43px] rounded-[5px] border-black8 placeholder:text-black5 text-black5 text-mukta font-[400] w-full"
              >
                <option value="country">Select City</option>
              </select>
            </div>
          </div>

          {/* socials */}
          <div className="flex items-center w-full mt-[25px]">
            <div className="w-[15%]">
              <p className="text-black2 text-[16px] font-[600]">Social</p>
            </div>

            <div className="grid grid-cols-2 gap-x-[20px] w-full">
              <div>
                <div>
                  <SocialIcon
                    icon={<GithubIcon />}
                    text="GitHub"
                    placeHolder="@githubuser"
                  />
                </div>
                <div className="mt-[10px]">
                  <SocialIcon
                    icon={<LinkedinIcon />}
                    text="LinkedIn"
                    placeHolder="@linkedinuser"
                  />
                </div>
              </div>
              <div>
                <div>
                  <SocialIcon
                    icon={<InstagramIcon />}
                    text="Instagram"
                    placeHolder="@instagramuser"
                  />
                </div>
                <div className="mt-[10px]">
                  <SocialIcon
                    icon={<TwitterIcon />}
                    text="Twitter"
                    placeHolder="@twitteruser"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-[25px]">
            <Button
              width="px-3 text-[16px]"
              onClick={() => dispatch(openProfileSavedModal())}
            >
              Save Changes
            </Button>
          </div>
        </FormikForm>
      </section>
    </div>
  );
}

export default SettingsGeneral;
