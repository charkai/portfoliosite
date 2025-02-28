// Credit to this stack overflow answer for assisting with creation of this function: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { path } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [path]);
    return null;
}