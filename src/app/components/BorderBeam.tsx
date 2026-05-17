import React from 'react';
import './BorderBeam.css';

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className = "",
  duration = 8,
  borderWidth = 1.5,
  colorFrom = "rgba(201,168,76,1)", // Solid gold
  colorTo = "rgba(201,168,76,0)", // Transparent gold
  delay = 0,
}) => {
  return (
    <div
      style={{
        "--duration": `${duration}s`,
        "--border-width": `${borderWidth}px`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      } as React.CSSProperties}
      className={`border-beam-wrapper ${className}`}
    >
      <div className="border-beam-element" />
    </div>
  );
};
