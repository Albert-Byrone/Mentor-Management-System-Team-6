import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { closeModal } from '../../redux/features/NewPasswordSuccess/modalSlice';

// eslint-disable-next-line react/prop-types
function Modal({ children }) {
  // redux state for the reset password success
  const dispatch = useDispatch();
  return (
    <motion.div
      className="fixed w-screen h-screen z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center"
      onClick={() => dispatch(closeModal())}
      aria-hidden="true"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
}

export default Modal;
