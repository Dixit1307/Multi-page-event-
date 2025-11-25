import { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
};

export function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-[90%] max-w-[650px] p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
