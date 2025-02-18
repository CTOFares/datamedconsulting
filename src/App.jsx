import { useEffect, useState } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { assets, carouselclient } from "./assets/assets";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const preloadImages = () => {
      Object.values(assets).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
      // Preload carousel clients
      Object.values(carouselclient).forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };

    preloadImages();
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
