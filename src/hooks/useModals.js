import { useState, useCallback } from "react";

import { Modals } from "../components/Modals";

export const useModals = () => {
  const [isOpen, setIsOpen] = useState(false);
  let originalBodyOverflow = null;

  const closeModal = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = originalBodyOverflow;
  }, [originalBodyOverflow]);

  let modal = null;
  if (isOpen) {
    originalBodyOverflow = document.body.style.overflow;
    modal = <Modals close={closeModal} />;
    document.body.style.overflow = "hidden";
  }

  const openModal = () => {
    setIsOpen(true);
  };

  return {
    modal,
    openModal,
  };
};
