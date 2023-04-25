/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import './Faqs.css';
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

function Faqs() {
  const [clickedID, setClickedId] = useState();
  const [clickedID2, setClickedId2] = useState();

  const faqs = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ];
  const faqs2 = [
    {
      id: 10,
    },
    {
      id: 11,
    },
    {
      id: 12,
    },
    {
      id: 13,
    },
  ];

  return (
    <div className="faqs border-[1px] rounded-[5px] border-black9 mx-10 p-5">
      {/* start General FAQ */}
      <h1 className="font-[600] faqsH">General FAQ</h1>
      {/* start  accordion */}

      {faqs.map((item) => (
        <div
          className="accordion"
          key={`${item.id}`}
          onClick={() => {
            setClickedId(Number(clickedID) === item.id ? 'closed' : item.id);
          }}
          onKeyUp={() => [
            setClickedId(Number(clickedID) === item.id ? 'closed' : item.id),
          ]}
        >
          <div className="accordionHeader">
            {Number(clickedID) === item.id ? (
              <FiMinusCircle className="accordionIcon" />
            ) : (
              <FiPlusCircle className="accordionIcon" />
            )}
            <h3>General Frequently Asked Question?</h3>
          </div>
          <div
            className={`accordionBody bg-pri11 rounded-b-lg' ${
              Number(clickedID) === item.id ? '' : 'hidden'
            }`}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu
            </p>
          </div>
        </div>
      ))}
      {/* end  accordion */}

      {/* end General FAQ */}

      {/* start Technical FAQ */}
      <h1 className="font-[600] faqsH">Technical FAQ</h1>
      {/* start  accordion */}
      {faqs2.map((item) => (
        <div
          className="accordion"
          key={`1${item.id}`}
          onClick={() => {
            setClickedId2(Number(clickedID2) === item.id ? 'closed' : item.id);
          }}
          onKeyUp={() => {
            setClickedId2(Number(clickedID2) === item.id ? 'closed' : item.id);
          }}
        >
          <div className="accordionHeader">
            {Number(clickedID2) === item.id ? (
              <FiMinusCircle className="accordionIcon" />
            ) : (
              <FiPlusCircle className="accordionIcon" />
            )}
            <h3>Technical Frequently Asked Question?</h3>
          </div>
          <div
            className={`accordionBody bg-pri11 rounded-b-lg' ${
              Number(clickedID2) === item.id ? '' : 'hidden'
            }`}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu
            </p>
          </div>
        </div>
      ))}
      {/* end accordion */}

      {/* end Technical FAQ */}
    </div>
  );
}

export default Faqs;
