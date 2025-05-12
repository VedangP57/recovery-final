'use client';

import React from 'react';

export default function ColorBar() {
  return (
    <div className="w-full h-2 flex">
      <div className="w-1/6 h-full bg-gradient-to-r from-rose-400 to-rose-500 transition-colors duration-300" />
      <div className="w-1/6 h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-colors duration-300" />
      <div className="w-1/6 h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-colors duration-300" />
      <div className="w-1/6 h-full bg-gradient-to-r from-amber-400 to-amber-500 transition-colors duration-300" />
      <div className="w-1/6 h-full bg-gradient-to-r from-violet-400 to-violet-500 transition-colors duration-300" />
      <div className="w-1/6 h-full bg-gradient-to-r from-cyan-400 to-cyan-500 transition-colors duration-300" />
    </div>
  );
} 