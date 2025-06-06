import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./App.css";
import { Fragment, useEffect, useState } from "react";
import Loader from "./components/Loader";
import WhatsappBtn from "./components/WhatsappBtn";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating content load with useEffect
  useEffect(() => {
    const start = Date.now();

    const handleWindowLoad = () => {
      setIsLoading(false);
      const end = Date.now();
      const loadTime = end - start;

      console.log(
        `%cPage Loaded In ${loadTime} ms`,
        `font-weight: bold; color: #2C2C2C`
      );
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
      <WhatsappBtn />
    </Fragment>
  );
}
export default App;
