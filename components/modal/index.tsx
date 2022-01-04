import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ children, onClose }: any) => {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as="div"
        onClose={onClose}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-[#ffffffb0] dark:bg-[#000000a4]" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-lg lg:max-w-3xl p-2 my-8 overflow-hidden bg-[#ffffffb0] dark:bg-[#fffdf81a] text-left align-middle transition-all transform shadow-xl rounded-2xl">
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
