/* eslint-disable-next-line */
import React, { useEffect } from 'react';
import { Image } from '../..';

export interface ModalProps {
  children: React.ReactNode,
  className?: string,
  visible: boolean,
  header: string,
  onClose: () => void
}

export function Modal(props: ModalProps) {
  useEffect(() => {
    const doc = document && document.querySelector('body')
    if (props.visible) {
      doc?.classList.add('disable-scroll');
    } else {
      doc?.classList.remove('disable-scroll');
    }
  }, [props.visible])

  return (
    props.visible && <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-[5px] bg-[rgba(255,255,255,0.8)]"
      >
        <div className="relative w-auto mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 shadow-[0px_20px_50px_0px_rgba(0,0,0,1)] px-[40px]  relative flex flex-col w-full bg-background outline-none focus:outline-none">
            {/*header*/}
            <div className="flex flex-col items-center justify-center">
              <div className="absolute -top-[50px] -right-[50px]">
                <Image src="/img/modal-box.png" />
              </div>
              <button
                className="p-1 ml-auto top-0 right-0 absolute bg-[#FF5262] text-background w-[50px] h-[50px] font-thin text-3xl"
                onClick={props.onClose}
              >
                ×
              </button>
              <div className="text-[40px] font-normal mt-[40px] font-supergt">
                {props.header}
              </div>
            </div>
            {/*body*/}
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal
