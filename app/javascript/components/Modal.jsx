import React from "react";

export default function Modal({ children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
      <div className="relative mx-auto my-6 w-auto max-w-3xl">
        <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
            <h3 className="text-3xl font-semibold">Modal Title</h3>

            <button
              type="button"
              className="float-right ml-auto border-0 p-1 text-3xl font-semibold leading-none text-black outline-none focus:outline-none"
            >
              X
            </button>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
