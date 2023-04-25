import React from 'react';
import AvatarImg from '../../assets/avatar.svg';
import email from '../../assets/profile_assets/email.png';
import globe from '../../assets/profile_assets/globe.png';
import twitter from '../../assets/profile_assets/twitter.png';
import github from '../../assets/profile_assets/github.png';
import country from '../../assets/profile_assets/country.svg';
import linkedin from '../../assets/profile_assets/linkedin.png';
import location from '../../assets/profile_assets/location.png';
import calendar from '../../assets/profile_assets/calendar.png';
import instagram from '../../assets/profile_assets/instagram.png';

function Profile() {
  return (
    <div className="mt-[20px]  pb-[100px]">
      <section className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={AvatarImg}
            alt="profile img"
            className="h-24 w-24 border-solid border-2 border-black rounded-full"
          />

          <div className="ml-6">
            <div className="flex items-center">
              <h2 className="font-semibold text-2xl text-black2 mr-2">
                Peculiar Umeh
              </h2>
              <img src={country} alt="img" />
            </div>
            <h4 className="text-black5">Admin</h4>
          </div>
        </div>

        <button
          type="submit"
          className="bg-pri3 py-2.5 px-10 text-white rounded-xl font-semibold"
        >
          Edit Profile
        </button>
      </section>

      {/* profile body */}
      <section className="border-solid border-2 rounded-xl border-black9 mt-[60px] px-[30px] py-[22px]">
        <h1 className="text-2xl font-semibold text-black2 mb-2.5">About</h1>
        <p className="bg-pri11 mb-16 py-2.5 px-6 text-black3 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          dignissim ut cursus purus efficitur et. Duis ac enim tellus. Phasellus
          pharetra metus, ut cursus purus efficitur et. Duis ac enim tellus.
          Phasellus eget tortor dapibus, laoreet mauris sed, dignissim lectus.
          Duis ac enim tellus. Phasellus pharetra metus, ut cursus purus
          efficitur et. Duis ac enim tellus. Phasellus eget tortor dapibus,
          laoreet mauris sed, dignissim lectus.
        </p>

        <section className="w-3/6 grid grid-cols-2 gap-8">
          <div className="flex items-center">
            <img src={email} alt="email" />
            <h5 className="text-black5 ml-1">peculiah@andela.com</h5>
          </div>

          <div className="flex items-center">
            <img src={location} alt="location" />
            <h5 className="text-black5 ml-1">Lagos, Nigeria</h5>
          </div>

          <div className="flex items-center">
            <img src={globe} alt="globe" />
            <h5 className="text-black5 ml-1">www.peculiah.com</h5>
          </div>

          <div className="flex items-center">
            <img src={calendar} alt="calendar" />
            <h5 className="text-black5 ml-1">Member since June 22, 2021</h5>
          </div>
        </section>

        {/* social links */}
        <h1 className="text-2xl font-semibold text-black2 mt-[60px] mb-2.5">
          Social
        </h1>
        <section className="w-3/6 grid grid-cols-2 gap-8">
          <div className="flex items-center text-xl font-semibold bg-pri10 p-2">
            <img src={github} alt="github" />
            <h5 className="text-black5 ml-1">peculiah@andela.com</h5>
          </div>

          <div className="flex items-center text-xl font-semibold bg-pri10 p-2">
            <img src={linkedin} alt="linkedin" />
            <h5 className="text-black5 ml-1">peculiah@andela.com</h5>
          </div>

          <div className="flex items-center text-xl font-semibold bg-pri10 p-2">
            <img src={twitter} alt="twitter" />
            <h5 className="text-black5 ml-1">peculiah@andela.com</h5>
          </div>

          <div className="flex items-center text-xl font-semibold bg-pri10 p-2">
            <img src={instagram} alt="instagram" />
            <h5 className="text-black5 ml-1">peculiah@andela.com</h5>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Profile;
