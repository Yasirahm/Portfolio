import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-15 h-15 bg-sky-400 rounded-full opacity-50 pointer-events-none transition-transform duration-300 ease-out"
      style={{
        transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        boxShadow: "0 0 20px #38BDF8",
      }}
    />
  );
};

export default CursorFollower;
