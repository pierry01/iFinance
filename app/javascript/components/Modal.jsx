import React from "react";
import PropTypes from "prop-types";

function Modal({ title, onClose, children }) {
  return (
    <>
      <div className="fixed inset-0 z-50 grid overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-3xl">
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            <div className="flex justify-between gap-8 rounded-t border-b border-solid border-slate-200 p-5">
              <h3 className="text-base font-medium text-gray-700">{title}</h3>

              <button
                type="button"
                onClick={onClose}
                className="text-base font-medium text-gray-700"
              >
                x
              </button>
            </div>

            <div className="relative flex-auto p-6">{children}</div>
          </div>
        </div>
      </div>

      <div className="fixed inset-0 z-40 bg-black opacity-25" />
    </>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
