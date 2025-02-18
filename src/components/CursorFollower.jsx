import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setScale(1.2); // Slightly enlarge on movement
      setOpacity(0.8);
      setTimeout(() => {
        setScale(1);
        setOpacity(0.5);
      }, 150);
    };

    const addHoverEffect = () => setScale(2);
    const removeHoverEffect = () => setScale(1);

    window.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("button, a").forEach((el) => {
      el.addEventListener("mouseenter", addHoverEffect);
      el.addEventListener("mouseleave", removeHoverEffect);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("button, a").forEach((el) => {
        el.removeEventListener("mouseenter", addHoverEffect);
        el.removeEventListener("mouseleave", removeHoverEffect);
      });
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-12 h-12 bg-sky-400 rounded-full pointer-events-none transition-transform duration-200 ease-out"
      style={{
        transform: `translate(${position.x - 24}px, ${position.y - 24}px) scale(${scale})`,
        opacity: opacity,
        boxShadow: "0 0 25px #38BDF8, 0 0 50px rgba(56, 189, 248, 0.6)",
        transition: "opacity 0.15s ease-out, transform 0.2s ease-out",
      }}
    />
  );
};

export default CursorFollower;
