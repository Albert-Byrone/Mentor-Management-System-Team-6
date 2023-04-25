/* eslint-disable react/prop-types */
import React from 'react';

function SocialIcon({ icon, text, placeHolder }) {
  return (
    <div className="border-[1px] border-black9 h-[40px] grid grid-cols-socials rounded-[5px]">
      <div className="h-full flex items-center px-2 border-r-[1px] border-r-black9">
        {React.cloneElement(icon, {
          styling: 'mr-2',
        })}

        <p className="font-[400] text-black3 text-[16px]">{text}</p>
      </div>
      <input
        type="text"
        className="h-full w-full focus:outline-none bg-transparent border-0 pl-2 text-[16px] placeholder:text-black6 font-[400]"
        placeholder={placeHolder}
      />
    </div>
  );
}

export default SocialIcon;
