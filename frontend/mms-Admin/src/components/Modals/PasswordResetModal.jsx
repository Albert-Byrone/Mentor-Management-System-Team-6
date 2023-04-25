import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ResetPasswordIllustration } from '../../assets/images';
import { closeModal } from '../../redux/features/NewPasswordSuccess/modalSlice';
import Button from '../utilities/Buttons/Button';
import Modal from './Modal';

function PasswordResetModal() {
  const open = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();
  // framer motion animation for the modal window
  const fade = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 1,
      },
    },
  };
  return (
    <div>
      {/* this is the password reset modal,
       ** it pops-up when the user has sucessfully reset his/her password */}

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {open && (
          <Modal>
            <motion.div
              className="relative z-50 bg-white w-[80%] md:w-[50%] py-[28px] px-[20px] rounded-[20px] flex flex-col items-center"
              aria-hidden="true"
              onClick={(e) => e.stopPropagation()}
              variants={fade}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="font-mukta font-[600] text-black1 text-[18px] md:text-[24px]">
                Password Reset Successful
              </h2>
              <ResetPasswordIllustration styling="mt-[28px]" />
              <Button
                width="w-[50%] md:w-[25%] mt-[28px]"
                onClick={() => dispatch(closeModal())}
                aria-hidden="true"
              >
                Done
              </Button>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PasswordResetModal;
