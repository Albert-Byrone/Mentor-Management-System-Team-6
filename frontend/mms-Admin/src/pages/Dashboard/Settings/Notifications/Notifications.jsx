import React from 'react';
import './Notifications.css';
import Toggle from '../../../../components/utilities/Toggle';

function Notifications() {
  return (
    <div className="border-[1px] rounded-[5px] border-black9 mx-10 p-5">
      {/* start Notifications */}
      <div className="Notifications">
        <h1 className="font-[600] NotificationsH">General Notifications</h1>
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className=" col-span-2" />
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">Email</div>
            <div className="head">In-app</div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">All Notifications</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled={false} />
            </div>
            <div className="head">
              <Toggle enabled />
            </div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Programs</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled />
            </div>
            <div className="head">
              <Toggle enabled />
            </div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Tasks</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled={false} />
            </div>
            <div className="head">
              <Toggle enabled />
            </div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Approval Requests</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled />
            </div>
            <div className="head">
              <Toggle enabled />
            </div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Reports</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled={false} />
            </div>
            <div className="head">
              <Toggle enabled={false} />
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end Notifications */}

      {/* start Notifications */}
      <div className="Notifications">
        <h1 className="font-[600] NotificationsH"> Discussion Notifications</h1>
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className=" col-span-2" />
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">Email</div>
            <div className="head">In-app</div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Comments on my post</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled={false} />
            </div>
            <div className="head">
              <Toggle enabled />
            </div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Posts</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled />
            </div>
            <div className="head">
              <Toggle enabled />
            </div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Comments</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled={false} />
            </div>
            <div className="head">
              <Toggle enabled />
            </div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Mentions</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled />
            </div>
            <div className="head">
              <Toggle enabled />
            </div>
          </div>
        </div>
        {/* end row */}
        {/* start row */}
        <div className="grid grid-flow-row-dense grid-cols-4 gap-4 m-5 max-md:grid-cols-1 max-md:gap-0">
          <div className="col-span-2">
            <p className="subHead">Direct Message</p>
          </div>
          <div className="grid grid-flow-row-dense grid-cols-2 gap-2 max-md:grid-cols-2  max-md:grid-cols-span-2 max-md:place-self-center">
            <div className="head">
              <Toggle enabled={false} />
            </div>
            <div className="head">
              <Toggle enabled={false} />
            </div>
          </div>
        </div>
        {/* end row */}
      </div>
      {/* end Notifications */}
    </div>
  );
}

export default Notifications;
