import React from 'react';
import { GadsReportIcon } from '../../../assets/images';

function GadsReportCard() {
  return (
    <div className="bg-pri10 text-black2 rounded-[7px] flex items-center justify-between px-4 py-2">
      <div className="">
        <div className="flex justify-between">
          <GadsReportIcon styling="mr-5 " />
          <div className="w-full">
            <p className="font-[400] text-[16px] text-black1">
              GADS Program 2022
            </p>
            <div className="flex w-full items-center">
              <p className="font-[400] text-black5 text-[10px]">
                <span className=" font-[600]">By Ibrahim Kabir - </span>
                19th - 25th Oct 22
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GadsReportCard;
