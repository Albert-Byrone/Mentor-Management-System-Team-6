/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Switch } from '@headlessui/react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Toggle({ enabled }) {
  const [checked, setChecked] = useState(enabled);
  const toggeled = () => {
    setChecked(!checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={toggeled}
      defaultChecked={false}
      className={`${checked ? 'bg-teal-700' : 'bg-black7'}
          relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      {checked ? (
        <AiOutlineCheck
          aria-hidden="true"
          className={`${checked ? 'translate-x-4' : 'translate-x-0'}
            pointer-events-none text-xs text-teal-700 inline-block p-1 h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      ) : (
        <AiOutlineClose
          aria-hidden="true"
          className={`${checked ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none text-red-600 inline-block p-1 h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      )}
    </Switch>
  );
}
Toggle.propTypes = {
  enabled: PropTypes.bool.isRequired,
};
