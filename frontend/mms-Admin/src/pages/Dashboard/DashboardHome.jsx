import React from 'react';
import { useDispatch } from 'react-redux';
import { MentorIcon,
  MentorManagerIcon,
  ReportIcon,
  TaskIcon } from '../../assets/images';
import GadsCard from '../../components/Dashboard/DashboardCards/GadsCard';
import GadsReportCard from '../../components/Dashboard/DashboardCards/GadsReportCard';
import TasksCards from '../../components/Dashboard/DashboardCards/TasksCards';
import Dropdown from '../../components/utilities/Dropdown';
import { openSidebar } from '../../redux/features/sidebarSlice';

function DashboardHome() {
  const filterOptions = [
    {
      value: 'week',
      label: 'This week',
    },
    {
      value: 'month',
      label: 'This month',
    },
    {
      value: 'year',
      label: 'This year',
    },
  ];

  const dispatch = useDispatch();
  return (
    <div className="w-full h-full">
      <div className="w-full">
        {/* dashboard title and filter */}
        <div className="flex justify-between">
          <h1 className="text-black1 font-[600] md:text-[24px] sm:text-[20px] text-[18px]">
            Dashboard
          </h1>
          <div>
            <Dropdown
              options={filterOptions}
              placeHolder="Select an option..."
            />
          </div>
        </div>
        {/* this is the element to open the sidebar in mobile */}
        <div className="flex justify-end mt-3 md:hidden">
          <div
            className="text-black2 font-400] text-[16px] py-[4px] px-[8px] bg-pri10 border-[1px] border-pri10 flex w-[20%] hover:cursor-pointer"
            aria-hidden="true"
            onClick={() => dispatch(openSidebar())}
          >
            menu
          </div>
        </div>
        {/* the first grid */}
        <div className="grid md:grid-cols-5 grid-cols-2 gap-y-[10px] md:gap-y-0 gap-x-[10px] mt-[12px]">
          {/* active programs */}
          <div className="relative h-[92px] rounded-[7px] bg-pri3 text-pri11 px-2 flex items-center">
            <button
              type="button"
              className="absolute right-[10px] top-[10px] bg-pri11 border-[1px] border-pri10 text-pri3 w-[20%] font-[400] md:text-[12px] sm:text-[10px] text-[8px] rounded-[5px] flex items-center justify-center"
            >
              <p>View</p>
            </button>
            <p className="text-[50px] font-[600] mr-[10px]">6</p>
            <div className="font-[700] text-[18px]">
              <p className="p-0 m-0">Active</p>
              <p className="p-0 m-0">Programs</p>
            </div>
          </div>
          {/* mentors programs */}
          <div className="h-[92px] w-full md:py-3">
            <div className="bg-pri10 text-black2 h-full rounded-[7px] flex items-center justify-between px-4">
              <div className="">
                <p className="font-[400] md:text-[20px] sm:text-[16px] text-[16px]">
                  Mentors
                </p>
                <div className="flex items-center">
                  <p className="font-[600] text-[15px] mr-1">30</p>
                  <p className="text-black5 font-[400] text-[15px]">+12%</p>
                </div>
              </div>
              <MentorIcon styling="w-[40px]" color="#058B94" />
            </div>
          </div>
          {/* mentor managers programs */}
          <div className="h-[92px] w-full md:py-3">
            <div className="bg-pri10 text-black2 h-full rounded-[7px] flex items-center justify-between px-4">
              <div className="">
                <p className="font-[400] text-[15px]">Mentor Managers</p>
                <div className="flex items-center">
                  <p className="font-[600] text-[15px] mr-1">10</p>
                  <p className="text-black5 font-[400] text-[15px]">+5%</p>
                </div>
              </div>
              <MentorManagerIcon styling="w-[40px]" color="#058B94" />
            </div>
          </div>
          {/* tasks */}
          <div className="h-[92px] w-full md:py-3">
            <div className="bg-pri10 text-black2 h-full rounded-[7px] flex items-center justify-between px-4">
              <div className="">
                <p className="font-[400] text-[15px]">Tasks</p>
                <div className="flex items-center">
                  <p className="font-[600] text-[15px] mr-1">40</p>
                  <p className="text-black5 font-[400] text-[15px]">+32%</p>
                </div>
              </div>
              <TaskIcon styling="w-[40px] h-[41px]" color="#058B94" />
            </div>
          </div>
          {/* Reports */}
          <div className="h-[92px] w-full md:py-3">
            <div className="bg-pri10 text-black2 h-full rounded-[7px] flex items-center justify-between px-4">
              <div className="">
                <p className="font-[400] text-[15px]">Reports</p>
                <div className="flex items-center">
                  <p className="font-[600] text-[15px] mr-1">40</p>
                  <p className="text-black5 font-[400] text-[15px]">+32%</p>
                </div>
              </div>
              <ReportIcon styling="w-[40px]" color="#058B94" />
            </div>
          </div>
        </div>
        {/* the second grid */}
        <div className="w-full px-3 border-[1px] rounded-[10px] border-pri10 bg-pri11 mt-[20px] py-3">
          {/* programs overview */}
          <div className="flex justify-between mb-[10px]">
            <h2 className="text-black1 font-[600] text-[18px]">
              Programs overview
            </h2>
            <div className="text-black1 font-[600] text-[18px] h-[30px] px-2 flex items-center justify-center bg-white border-[1px] border-pri10">
              6 active
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-y-[20px] md:gap-y-0 gap-x-[20px]">
            {/* GADS program */}
            <GadsCard />
            <GadsCard />
            <GadsCard />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-pri3 text-pri11 h-[24px] w-[70px] mt-[10px] font-[400] text-[12px] rounded-[5px] flex items-center justify-center"
            >
              View All
            </button>
          </div>
        </div>
        {/* the third grid */}
        <div className="w-full px-3 border-[1px] rounded-[10px] border-pri10 bg-pri11 mt-[20px] py-3">
          {/* programs overview */}
          <div className="flex justify-between mb-[10px]">
            <h2 className="text-black1 font-[600] text-[18px]">
              Reports overview
            </h2>
            <div className="text-black1 font-[600] text-[18px] h-[30px] px-2 flex items-center justify-center bg-white border-[1px] border-pri10">
              10 Reports Summited
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-y-[20px] md:gap-y-0 gap-x-[20px]">
            {/* GADS program */}
            <GadsReportCard />
            <GadsReportCard />
            <GadsReportCard />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-pri3 text-pri11 h-[24px] w-[70px] mt-[10px] font-[400] text-[12px] rounded-[5px] flex items-center justify-center"
            >
              View All
            </button>
          </div>
        </div>
        {/* the fourth grid */}
        <div className="w-full px-3 border-[1px] rounded-[10px] border-pri10 bg-pri11 mt-[20px] py-3">
          {/* programs overview */}
          <div className="flex justify-between mb-[10px]">
            <h2 className="text-black1 font-[600] text-[18px]">
              Tasks overview
            </h2>
          </div>
          {/* tasks in progress */}
          <div className="grid md:grid-cols-task gap-y-[20px] md:gap-y-0 gap-x-[20px]">
            <div className="w-full h-full bg-pri3 flex items-center justify-center rounded-[10px]">
              <p className="font-[600] text-pri11 text-[18px]">In Progress</p>
            </div>
            {/* tasks program */}
            <TasksCards />
            <TasksCards />
            <TasksCards />
          </div>

          {/* completed tasks */}
          <div className="grid md:grid-cols-task gap-y-[20px] md:gap-y-0 gap-x-[20px] mt-14">
            <div className="w-full h-full bg-pri3 flex items-center justify-center rounded-[10px]">
              <p className="font-[600] text-pri11 text-[18px]">Completed</p>
            </div>
            {/* tasks program */}
            <TasksCards />
            <TasksCards />
            <TasksCards />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-pri3 text-pri11 h-[24px] w-[70px] mt-[10px] font-[400] text-[12px] rounded-[5px] flex items-center justify-center"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
