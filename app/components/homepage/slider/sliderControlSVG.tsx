import React from 'react';

export default function SliderControlSVG({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`h-12 w-12 stroke-warning lg:h-14 lg:w-14 ${
        direction === 'left' ? '' : 'rotate-180'
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
      />
    </svg>
  );
}
