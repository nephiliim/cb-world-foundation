"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20000, prefix: "£", suffix: "", label: "Reward appeal" },
  { value: 17, prefix: "", suffix: "", label: "Years loved" },
  { value: 4, prefix: "", suffix: "", label: "Core pillars" },
];

function AnimatedStat({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1400;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    const frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [hasStarted, value]);

  return (
    <div className="v6-stat" ref={ref}>
      <strong>
        {prefix}
        {displayValue.toLocaleString("en-GB")}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  );
}

export function V6Stats() {
  return (
    <section className="v6-stats">
      {stats.map((stat) => (
        <AnimatedStat key={stat.label} {...stat} />
      ))}

      <div className="v6-stat">
        <strong>Every Day</strong>
        <span>Lives we build for</span>
      </div>
    </section>
  );
}