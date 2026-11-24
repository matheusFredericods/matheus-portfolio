"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const duration = 1500;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const value = Math.min(Math.floor((elapsed / duration) * 100), 100);

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setExiting(true);
        }, 300);

        setTimeout(() => {
          setFinished(true);
        }, 800);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  if (finished) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-[#0A0A0A] px-8 transition-opacity duration-500 ${
        exiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-xs space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium tracking-[0.2em] text-[#C7C7C7]">
            CARREGANDO...
          </span>

          <span className="text-sm font-medium tabular-nums text-[#D3E97A]">
            {progress}%
          </span>
        </div>

        <div className="h-0.75 w-full overflow-hidden rounded-full bg-[#333333]">
          <div
            className="h-full rounded-full bg-[#D3E97A] transition-[width] duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
