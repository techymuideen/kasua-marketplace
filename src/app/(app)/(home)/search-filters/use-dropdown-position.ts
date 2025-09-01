import { RefObject } from 'react';

export const useDropdownPosition = (ref: RefObject<HTMLDivElement | null>) => {
  const getDropdownPosition = () => {
    if (!ref.current) return { left: 0, top: 0 };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240; // Width of dropdown (w-60 = 15rem = 240px)

    // Calculate the initial position
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // Check if dropdown will go off the right edge of the viewport
    if (left + dropdownWidth > window.innerWidth) {
      // Align to right edge of button instead
      left = rect.right + window.scrollX - dropdownWidth;

      // If still off-screen, align to the right edge of the viewport with some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    // Ensure dropdown does not go off the left edge
    if (left < 0) {
      left = 16;
    }

    return { top, left };
  };

  return { getDropdownPosition };
};
