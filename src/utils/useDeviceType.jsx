import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      //   console.log("Window width:", width); // Log width to verify the value

      // Define breakpoints based on window width
      if (width <= 639) {
        setDeviceType("mobile");
      } else if (width > 639 && width <= 1024) {
        setDeviceType("tablet");
      }
    };

    // Initialize on mount
    handleResize();

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
};

export default useDeviceType;
