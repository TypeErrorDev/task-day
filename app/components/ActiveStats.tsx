"use client";
import { useState, useEffect, useRef } from "react";

function AnimatedNumber({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 1. Setup the Observer to detect when the element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }, // Starts when 50% of the number is visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // 2. Only run the animation once the observer has triggered
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

function ActiveStats() {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="text-center">
        <p className="text-purple-700 text-4xl font-bold">
          <AnimatedNumber value={1500} />+
        </p>
        <p className="text-2xl text-[#4e4d4d] m-2">Active Users</p>
      </div>

      <div className="text-center mt-10">
        <p className="text-purple-700 text-4xl font-bold">
          <AnimatedNumber value={750} />+
        </p>
        <p className="text-2xl text-[#4e4d4d] m-2">Projects Tracked</p>
      </div>

      <div className="text-center my-10">
        <p className="text-purple-700 text-4xl font-bold">99.9%</p>
        <p className="text-2xl text-[#4e4d4d] m-2">Uptime</p>
      </div>
    </div>
  );
}

export default ActiveStats;
