import React from 'react';

interface MandalaProps {
  className?: string;
  size?: number;
  opacity?: number;
  color?: string;
}

export const MandalaBg: React.FC<MandalaProps> = ({
  className = "",
  size = 400,
  opacity = 0.07,
  color = "#B77912"
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {/* Concentric Circles */}
      <circle cx="200" cy="200" r="190" stroke={color} strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="200" cy="200" r="160" stroke={color} strokeWidth="1" />
      <circle cx="200" cy="200" r="120" stroke={color} strokeWidth="1" strokeDasharray="6 6" />
      <circle cx="200" cy="200" r="80" stroke={color} strokeWidth="1.5" />
      <circle cx="200" cy="200" r="40" stroke={color} strokeWidth="1" />

      {/* Lotus / Sacred Geometry Petals */}
      <g stroke={color} strokeWidth="1">
        <path d="M200 40 Q240 120 200 200 Q160 120 200 40 Z" />
        <path d="M200 360 Q240 280 200 200 Q160 280 200 360 Z" />
        <path d="M40 200 Q120 240 200 200 Q120 160 40 200 Z" />
        <path d="M360 200 Q280 240 200 200 Q280 160 360 200 Z" />

        {/* Diagonal Petals */}
        <path d="M87 87 Q173 143 200 200 Q143 173 87 87 Z" />
        <path d="M313 313 Q227 257 200 200 Q257 227 313 313 Z" />
        <path d="M313 87 Q257 173 200 200 Q227 143 313 87 Z" />
        <path d="M87 313 Q143 227 200 200 Q173 257 87 313 Z" />
      </g>

      {/* Central Star */}
      <circle cx="200" cy="200" r="8" fill={color} />
    </svg>
  );
};

export const BotanicalLeaf: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-8 h-10 ${className}`}>
    <path d="M50 10 C30 40 20 70 50 110 C80 70 70 40 50 10 Z" stroke="#A9AF91" strokeWidth="1.5" fill="none" />
    <path d="M50 10 V110" stroke="#A9AF91" strokeWidth="1" />
    <path d="M50 35 L35 48" stroke="#A9AF91" strokeWidth="1" />
    <path d="M50 50 L65 63" stroke="#A9AF91" strokeWidth="1" />
    <path d="M50 65 L35 78" stroke="#A9AF91" strokeWidth="1" />
    <path d="M50 80 L65 93" stroke="#A9AF91" strokeWidth="1" />
  </svg>
);

export const EditorialSparkle: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 text-ilumina-gold ${className}`}>
    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" fill="currentColor" />
  </svg>
);
