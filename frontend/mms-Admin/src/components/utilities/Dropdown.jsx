/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown } from '../../assets/images';

function Dropdown({ options, placeHolder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  // this handles toggling the state of the dropdown
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // this handles toggling the state off and selects an option when the user clicks on an option
  const handleOptionClick = (option) => {
    setIsOpen(false);
    setSelectedValue(option);
  };

  // this handles changing the placeholder to the option selected
  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };
  // framer motion animation for the dropdown
  const drop = {
    hidden: {
      height: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        duration: 1,
      },
    },
    visible: {
      height: '78px',
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    exit: {
      height: '0',
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };
  // animation variants for tthe dropdown options
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1, transition: 2,
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <div className="relative text-black2 font-[400] text-[16px] py-[4px] px-[8px] bg-pri10 border-[1px] border-pri10 flex items-center hover:cursor-pointer">
      <button
        className="flex"
        onClick={handleToggle}
        aria-hidden="true"
        type="button"
      >
        {getDisplay()}
        <ArrowDown
          styling={isOpen ? 'rotate-180 duration-700' : 'duration-700 rotate-0'}
        />
      </button>
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {isOpen && (
          <motion.ul
            variants={drop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-[32px] left-0 shadow-xl z-30 w-full bg-pri10 px-[8px]"
          >
            {/* this is the options for the custom dropdown */}
            {options.map((option) => (
              <motion.li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                aria-hidden="true"
                className={`hover:bg-pri11 ${isSelected(option) && 'selected'}`}
                initial="closed"
                animate="open"
                exit="exit"
                variants={itemVariants}
              >
                {option.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
