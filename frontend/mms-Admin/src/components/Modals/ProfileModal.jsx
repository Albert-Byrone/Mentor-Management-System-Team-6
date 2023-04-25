import React from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { closeProfileSavedModal } from '../../redux/features/Profile/profileSlice';

// eslint-disable-next-line react/prop-types
function ProfileModal({ children }) {
  // redux state for the reset password success
  const dispatch = useDispatch();
  return (
    <motion.div
      className="fixed w-screen h-screen z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center"
      onClick={() => dispatch(closeProfileSavedModal())}
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

export default ProfileModal;
