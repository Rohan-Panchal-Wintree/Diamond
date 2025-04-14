import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating content load with useEffect
  useEffect(() => {
    const start = Date.now();

    const handleWindowLoad = () => {
      setIsLoading(false);
      const end = Date.now();
      const loadTime = end - start;

      console.log(`Page Loaded In ${loadTime} ms`);
    };

    window.onload = handleWindowLoad;

    // Cleanup the event listener on component unmount
    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <Fragment>
      {isLoading ? <Loader /> : <RouterProvider router={router} />}
    </Fragment>
  );
}
export default App;
