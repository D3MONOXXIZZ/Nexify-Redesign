"use client";

import { cn } from "@/lib/utils";

interface LaptopMockupProps {
  children: React.ReactNode;
  className?: string;
}

export function LaptopMockup({ children, className }: LaptopMockupProps) {
  return (
    <div className={cn("relative mx-auto w-full max-w-5xl", className)}>
      {/* Laptop Screen / Lid */}
      <div className="relative rounded-t-2xl border-[8px] border-[#1a1a1a] bg-[#030308] shadow-2xl">
        {/* Webcam */}
        <div className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/10" />
        
        {/* Screen Content Area */}
        <div className="aspect-[16/10] overflow-hidden bg-black">
          {children}
        </div>
      </div>

      {/* Laptop Base / Keyboard Part */}
      <div className="relative h-4 w-full rounded-b-xl bg-[#2a2a2a] shadow-xl">
        <div className="absolute inset-x-0 top-0 h-1 bg-white/5" />
        {/* Notch/Thumb gap */}
        <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-lg bg-[#1a1a1a]" />
      </div>
      
      {/* Table Shadow */}
      <div className="mx-auto h-4 w-[90%] rounded-[100%] bg-black/20 blur-xl" />
    </div>
  );
}
