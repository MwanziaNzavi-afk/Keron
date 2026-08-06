"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl border border-slate-200">
        <div className="h-[420px] w-full bg-slate-100">
          <Image
            src={images[index]}
            alt={`Gallery ${index + 1}`}
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto">
        {images.map((src, i) => (
          <button
            key={src + i}
            onClick={() => setIndex(i)}
            className={`relative h-20 w-28 flex-none overflow-hidden rounded-lg border ${
              i === index ? "border-[#d4af37]" : "border-slate-200"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image src={src} alt={`Thumb ${i + 1}`} width={200} height={140} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
