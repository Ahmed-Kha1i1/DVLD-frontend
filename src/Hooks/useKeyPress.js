import { useEffect } from "react";

const useKeyPress = (targetKey, handler) => {
  // Function to check if the pressed key matches the target key
  const keyDownHandler = ({ key }) => {
    if (key === targetKey) {
      handler();
    }
  };

  useEffect(() => {
    // Attach the event listener
    document.addEventListener("keydown", keyDownHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [targetKey, handler]); // Re-run if targetKey or handler changes
};

export default useKeyPress;
