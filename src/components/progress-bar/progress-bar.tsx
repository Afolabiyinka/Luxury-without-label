import { useEffect } from "react";
import NProgress from "nprogress";
import "./css/NProgress.css";

function ProgressBar() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return "";
}

export default ProgressBar;
