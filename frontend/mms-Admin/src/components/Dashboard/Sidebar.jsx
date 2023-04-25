import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { CertificateIcon,
  CircleAddIcon,
  DashboardIcon,
  ForumIcon,
  MentorIcon,
  MentorManagerIcon,
  MessageIcon,
  ProgramsIcon,
  ReportIcon,
  SettingsIcon,
  TaskIcon,
  UserSquare } from '../../assets/images';
import { closeSidebar } from '../../redux/features/sidebarSlice';

function Sidebar() {
  const sidebarItems = [
    {
      id: 1,
      name: 'Profile',
      link: 'profile',
      icon: <UserSquare color="#808080" />,
    },
    {
      id: 2,
      name: 'Dashboard',
      link: '',
      icon: <DashboardIcon color="#808080" />,
    },
    {
      id: 3,
      name: 'Programs',
      link: 'programs',
      icon: <ProgramsIcon color="#808080" />,
    },
    {
      id: 4,
      name: 'Tasks',
      link: 'tasks',
      icon: (
        <TaskIcon
          styling="w-[23px] h-[24px]"
          color="#808080"
        />
      ),
    },
    {
      id: 5,
      name: 'Reports',
      link: 'reports',
      icon: (
        <ReportIcon
          styling="w-[24px]"
          color="#808080"
        />
      ),
    },
    {
      id: 6,
      name: 'Mentors',
      link: 'mentors',
      icon: (
        <MentorIcon
          styling="w-[24px]"
          color="#808080"
        />
      ),
    },
    {
      id: 7,
      name: 'Mentor Managers',
      link: 'mentor-managers',
      icon: (
        <MentorManagerIcon
          styling="w-[24px]"
          color="#808080"
        />
      ),
    },
    {
      id: 8,
      name: 'Approval Requests',
      link: 'approval-requests',
      icon: <CircleAddIcon color="#808080" />,
    },
    {
      id: 9,
      name: 'Certificates',
      link: 'certificates',
      icon: <CertificateIcon color="#808080" />,
    },
    {
      id: 10,
      name: 'Messages',
      link: 'messages',
      icon: <MessageIcon color="#808080" />,
    },
    {
      id: 11,
      name: 'Discussion Forum',
      link: 'discussion-forum',
      icon: <ForumIcon color="#808080" />,
    },
    {
      id: 12,
      name: 'Settings',
      link: 'settings',
      icon: <SettingsIcon color="#808080" />,
    },
  ];

  const open = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  // animation variants for the mobile sidebar menu
  const slide = {
    hidden: {
      width: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
        duration: 1,
      },
    },
    visible: {
      width: '20%',
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
    exit: {
      width: 0,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  return (
    <>
      {/* desktop navigation */}
      <nav className="fixed left-0 w-[20%] bg-pri11 hidden md:flex flex-col items-center">
        <div className="w-[70%] mx-auto">
          <div className="mt-[20px] mb-[15px]">
            <h3 className="font-[700] text-black1 text-[20px]">Hi, Kabiru</h3>
            <p className="font-[400] text-black5 text-[16px]">Admin</p>
          </div>
          <ul className="h-full font-mukta text-[16px]">
            {sidebarItems.map(({ id, name, link, icon }) => (
              <li
                className="hover:scale-90 duration-500"
                key={id}
              >
                <NavLink
                  to={link}
                  className="flex items-center w-full duration-700 py-[8px]"
                  style={({ isActive }) => ({
                    color: isActive ? '#333333' : '#808080',
                    fontWeight: isActive ? '700' : '400',
                  })}
                  end
                >
                  {icon}
                  <span className="ml-4">{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* mobile navigation
       ** if the user is on a mobile screen, this will be the sidebar that will be rendered
       */}
      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {open && (
          <motion.div
            className="fixed w-screen h-screen z-[70] bg-[rgba(0,0,0,0.7)]"
            aria-hidden="true"
            onClick={() => dispatch(closeSidebar())}
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
            <motion.nav
              className="absolute left-0 top-0 w-[70%] h-full bg-pri11 flex flex-col items-center md:hidden"
              aria-hidden="true"
              variants={slide}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div className="w-[70%] mx-auto">
                <div className="mt-[20px] mb-[15px]">
                  <h3 className="font-[700] text-black1 text-[20px]">
                    Hi, Kabiru
                  </h3>
                  <p className="font-[400] text-black5 text-[16px]">Admin</p>
                </div>
                <ul className="h-full font-mukta text-[16px]">
                  {sidebarItems.map(({ id, name, link, icon }) => (
                    <li
                      className="hover:scale-90 duration-500"
                      key={id}
                    >
                      <NavLink
                        to={link}
                        className="flex items-center w-full duration-700 py-[8px]"
                        style={({ isActive }) => ({
                          color: isActive ? '#333333' : '#808080',
                          fontWeight: isActive ? '700' : '400',
                        })}
                        end
                      >
                        {icon}
                        <span className="ml-4">{name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
