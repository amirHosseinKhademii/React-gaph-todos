import { memo, Suspense } from "react";
import { createPortal } from "react-dom";
import { joiner } from "utils";
import { TModal } from "./modal.types";

let modalRoot = document.getElementById("modal") as any;
if (!modalRoot) {
  modalRoot = document.createElement("div");
  modalRoot.setAttribute("id", "modal");
  document.body.appendChild(modalRoot);
}

const ModalCore = memo(({ children, onClose, className, size }: TModal) => {
  return (
    <div className="fixed inset-0 flex flex-row justify-center items-start z-40  py-40">
      <div
        className={joiner(
          "z-50 rounded max-h-[85%] bg-white animate-fade-in-up",
          size === "xl"
            ? "w-10/12"
            : size === "lg"
            ? "w-10/12 lg:w-8/12"
            : size === "md"
            ? "w-10/12 lg:w-1/2"
            : size === "sm"
            ? "w-10/12 lg:w-4/12"
            : "w-10/12 lg:w-1/2",
          className
        )}
      >
        <Suspense fallback={<div />}> {children}</Suspense>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-80 z-40"
        onClick={() => onClose?.()}
      />
    </div>
  );
});

export const Modal = (props: TModal) => {
  return createPortal(<ModalCore {...props} />, modalRoot);
};
