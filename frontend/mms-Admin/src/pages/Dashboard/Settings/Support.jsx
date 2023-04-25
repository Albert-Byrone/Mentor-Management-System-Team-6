import React from 'react';
import attachmentIcon from '../../../assets/settings-support/attachment.svg';
import commentIcon from '../../../assets/settings-support/comment.svg';

function Support() {
  return (
    <div className="mx-10 pb-[50px]">
      <div className="border border-solid border-black9 rounded-md p-[50px]">
        <h1 className="text-2xl text-black2 font-bold">How can we help you?</h1>

        <form action="POST">
          <input
            type="text"
            placeholder="Name"
            className="placeholder:text-black6 placeholder: block w-full border border-slate-300 rounded-md my-6 py-3 pl-3 pr-3 focus:outline-none focus:border-pri3 focus:ring-pri3 focus:ring-1"
          />
          <input
            type="email"
            placeholder="Email"
            className="placeholder:text-black6 placeholder: block w-full border border-slate-300 rounded-md my-6 py-3 pl-3 pr-3 focus:outline-none focus:border-pri3 focus:ring-pri3 focus:ring-1"
          />
          <input
            type="text"
            placeholder="Title"
            className="placeholder:text-black6 placeholder: block w-full border border-slate-300 rounded-md my-6 py-3 pl-3 pr-3 focus:outline-none focus:border-pri3 focus:ring-pri3 focus:ring-1"
          />
          <textarea
            name="body"
            cols="30"
            rows="6"
            placeholder="Body"
            className="placeholder:text-black6 placeholder: block w-full border border-slate-300 rounded-md my-6 py-3 pl-3 pr-3 focus:outline-none focus:border-pri3 focus:ring-pri3 focus:ring-1"
          />

          <section className="flex items-center justify-between mt-[30px]">
            <img
              src={attachmentIcon}
              alt="attachment"
              className="cursor-pointer"
            />

            <button
              type="submit"
              className="bg-pri3 py-2.5 px-10 rounded-md text-white font-semibold"
            >
              Send
            </button>
          </section>
        </form>
      </div>

      <section className="flex items-center justify-end mt-10">
        <div className="h-16 w-16 bg-pri10 rounded-full p-4 flex items-center justify-center">
          <img
            src={commentIcon}
            alt="comment img"
            className="cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
}

export default Support;
