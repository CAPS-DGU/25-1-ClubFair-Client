import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    console.log("[PageTracker] 실행됨:", location.pathname);
    if (ReactGA.isInitialized) {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    }
  }, [location]);

  return null;
}
