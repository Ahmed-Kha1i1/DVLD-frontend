import { useEffect, useRef } from "react";

function useOutsideClick(handler) {
  let ref = useRef();

  useEffect(
    function () {
      function handleClose(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      document.addEventListener("click", handleClose, true);
      return () => document.removeEventListener("click", handleClose, true);
    },
    [handler]
  );

  return ref;
}

export default useOutsideClick;
