import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../styles/dashboard.module.css';
import Sidebar from '../../../components/Dashboard/Settings/Sidebar';

function SettingsHome() {
  return (
    <div
      className={`w-full h-screen font-mukta overflow-y-auto ${styles.scroll}`}
    >
      <div className="">
        <Sidebar />
        <div className="absolute md:left-[20%] w-full md:w-[80%] md:pt-[69px]">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsHome;
