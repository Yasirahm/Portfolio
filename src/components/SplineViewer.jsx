import { useEffect } from "react";

function Spline() {
  useEffect(() => {
    // Load the Spline viewer script dynamically
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.75/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on component unmount
    };
  }, []);

  return (
    <div
      className="absolute top-0 left-0 w-full h-full -z-10"
      dangerouslySetInnerHTML={{
        __html: `<spline-viewer url="https://prod.spline.design/v7QYSxtc126SIWes/scene.splinecode" 
                  style="width:100%; height:100vh;"></spline-viewer>`,
      }}
    />
  );
}

export default Spline;
