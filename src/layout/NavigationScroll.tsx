import { useEffect } from "react";

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

export const NavigationScroll = ({ children }: any) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return children || null;
};
