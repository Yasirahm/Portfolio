import { useEffect } from 'react';

function SplineViewer() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.75/build/spline-viewer.js";
    script.type = "module";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="flex justify-center">
      <spline-viewer 
        url="https://prod.spline.design/h1SutHXHC5E8F8VE/scene.splinecode" 
        style={{ width: "100%", height: "500px" }}
      ></spline-viewer>
    </div>
  );
}

export default SplineViewer;
