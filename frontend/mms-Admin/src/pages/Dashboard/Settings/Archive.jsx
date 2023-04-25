import React, { useState } from 'react';
import Time from '../../..//assets/archive/time.svg';
import Google from '../../..//assets/archive/google.svg';
import Schedule from '../../..//assets/archive/schedule.svg';
import Dropdown from '../../..//assets/archive/dropdown.png';

const QuestionsAndAnswer = [
  {
    id: 1,
    question: 'General Frequently Asked Question?',
    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu`,
  },
  {
    id: 2,
    question: 'General Frequently Asked Question?',
    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu`,
  },
  {
    id: 3,
    question: 'General Frequently Asked Question?',
    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu`,
  },
  {
    id: 4,
    question: 'General Frequently Asked Question?',
    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu`,
  },
  {
    id: 5,
    question: 'General Frequently Asked Question?',
    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu`,
  },
  {
    id: 6,
    question: 'General Frequently Asked Question?',
    answer: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu`,
  },
];

export default function Archive() {
  const [openSection, setOpenSection] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(1);

  const handleOpenSection = (id) => {
    setSectionIndex(id);
    setOpenSection(true);
  };

  const handleCloseSection = (id) => {
    setSectionIndex(id);
    setOpenSection(false);
  };

  return (
    <div className="mx-10 pb-[50px]">
      <div className="border border-solid border-black9 rounded-md p-[15px]">
        {QuestionsAndAnswer.map((question) => (
          <div
            className=" border border-slate-300 rounded-md mb-4 p-2"
            key={question.id}
          >
            <div className="flex items-center justify-between w-full">
              <img
                src={Google}
                alt="add img"
                className="h-[50px] w-[50px]"
              />

              <div className="grow mx-6">
                <h1 className="text-xl font-semibold text-black2">
                  {question.question}
                </h1>
                <section className="flex items-center justify-between w-[40%]">
                  <div className="flex items-center">
                    <img
                      src={Schedule}
                      alt="schedule"
                    />
                    <p className="ml-3 font-normal text-xs text-black5">
                      Dec, 12, 2023
                    </p>
                  </div>

                  <div className="flex items-center">
                    <img
                      src={Time}
                      alt="time"
                    />
                    <p className="ml-3 font-normal text-xs text-black5">
                      8:00 pm
                    </p>
                  </div>
                </section>
              </div>

              {openSection && sectionIndex === question.id ? (
                <button
                  type="button"
                  onClick={() => handleCloseSection(question.id)}
                >
                  <img
                    src={Dropdown}
                    alt="drop-up"
                    className="h-[24px] w-[24px] rotate-180"
                  />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleOpenSection(question.id)}
                >
                  <img
                    src={Dropdown}
                    alt="dropdown"
                    className="h-[24px] w-[24px] "
                  />
                </button>
              )}
            </div>

            {openSection && sectionIndex === question.id && (
              <div className="w-full border bg-pri11 rounded-b-lg mt-2 py-2 px-2">
                <p className="font-normal text-lg text-black5">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
