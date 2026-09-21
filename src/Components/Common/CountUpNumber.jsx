import React, { useState, useEffect, useRef } from "react";

function parseAndFormat(targetStr, currentVal) {
  if (!targetStr) return "";
  const match = targetStr.match(/[\d,]+/);
  if (!match) return targetStr;

  const hasComma = match[0].includes(",");
  const formattedCurrent = hasComma
    ? currentVal.toLocaleString("en-US")
    : currentVal.toString();

  return targetStr.replace(match[0], formattedCurrent);
}

export default function CountUpNumber({
  as: Component = "span",
  text,
  duration = 2200,
  className,
  ...props
}) {
  const [displayText, setDisplayText] = useState(() =>
    parseAndFormat(String(text || ""), 0)
  );
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    setDisplayText(parseAndFormat(String(text || ""), 0));
    hasAnimatedRef.current = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            const targetMatch = String(text || "").match(/[\d,]+/);
            if (!targetMatch) {
              setDisplayText(String(text || ""));
              return;
            }

            const targetNum = parseInt(targetMatch[0].replace(/,/g, ""), 10);
            if (isNaN(targetNum)) {
              setDisplayText(String(text || ""));
              return;
            }

            let startTime = null;
            let lastVal = -1;

            const animate = (now) => {
              if (!startTime) startTime = now;
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Smooth cubic ease-out for elegant deceleration
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = Math.round(targetNum * easeOut);

              if (currentVal !== lastVal) {
                lastVal = currentVal;
                setDisplayText(parseAndFormat(String(text || ""), currentVal));
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayText(String(text || ""));
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [text, duration]);

  return (
    <Component
      ref={elementRef}
      className={className}
      data-text={displayText}
      {...props}
    >
      {displayText}
    </Component>
  );
}
