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

    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleWindowLoad);
    }

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}
export default App;
