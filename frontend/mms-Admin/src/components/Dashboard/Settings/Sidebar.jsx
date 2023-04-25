import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: 'General',
      link: '',
    },
    {
      id: 2,
      name: 'Password',
      link: 'password',
    },
    {
      id: 3,
      name: 'Notifications',
      link: 'notifications',
    },
    {
      id: 4,
      name: 'Privacy',
      link: 'privacy',
    },
    {
      id: 5,
      name: 'Archive',
      link: 'archive',
    },
    {
      id: 6,
      name: 'Support',
      link: 'support',
    },
    {
      id: 7,
      name: 'FAQ',
      link: 'faq',
    },
  ];

  return (
    <>
      {/* desktop navigation */}
      <nav className="fixed w-[15%] hidden md:flex flex-col items-center">
        <div className="w-[100%] mx-auto">
          <div className="mt-[20px] mb-[15px]">
            <h1 className="font-[600] text-2xl text-black1">Settings</h1>
          </div>

          <ul className="h-full font-mukta text-[16px] bg-pri11 w-full">
            {sidebarItems.map(({ id, name, link }) => (
              <li
                className="duration-500 hover:bg-white"
                key={id}
              >
                <NavLink
                  to={link}
                  className="flex items-center w-full duration-700"
                  style={({ isActive }) => ({
                    color: isActive ? '#333333' : '#808080',
                    fontWeight: isActive ? '700' : '400',
                    backgroundColor: isActive && '#fff',
                  })}
                  end
                >
                  <span className="text-center w-full border border-pri10 py-[8px]">
                    {name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
