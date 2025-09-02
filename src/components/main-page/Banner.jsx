import { useEffect, useState } from "react";
import Cover from '../../assets/images/chris-air-coverart.png'



function Banner() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative inline-block w-full">
      
      <img src={Cover} className={"rounded-xl mx-auto"}/>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
          isMobile ? "w-24" : "w-48"
        }`}
      >
      </div>
    </div>
  );
}

export default Banner;
