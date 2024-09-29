import { useEffect } from "react";

function useScroll(handler) {
  useEffect(
    function () {
      function handle() {
        handler?.();
      }

      document.addEventListener("scroll", handle);
      return () => document.removeEventListener("click", handle);
    },
    [handler]
  );
}

export default useScroll;
