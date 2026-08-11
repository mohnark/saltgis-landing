"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseStudy } from "@/lib/work";

type Props = {
  name: string;
  media: CaseStudy["media"];
  video?: CaseStudy["video"];
};

export default function CaseStudyMedia({ name, media, video }: Props) {
  const [active, setActive] = useState(0);

  if (video) {
    return (
      <figure className="overflow-hidden rounded-2xl border border-stroke bg-black shadow-card dark:border-stroke-dark">
        {/* Not autoplayed: the demo capture is large, and this page is a
            portfolio index rather than the product page. */}
        <video
          className="aspect-video w-full"
          src={video.src}
          poster={video.poster}
          playsInline
          muted
          loop
          controls
          preload="none"
        />
        <figcaption className="border-t border-stroke bg-white px-5 py-3 text-sm text-body-color dark:border-stroke-dark dark:bg-dark dark:text-body-color-dark">
          {name} in use.
        </figcaption>
      </figure>
    );
  }

  if (media.length === 0) return null;

  const current = media[active];

  return (
    <div>
      <figure className="overflow-hidden rounded-2xl border border-stroke bg-white shadow-card dark:border-stroke-dark dark:bg-dark">
        <div className="relative aspect-[16/9] w-full bg-gray-light dark:bg-bg-color-dark">
          <Image
            src={current.src}
            alt={current.caption}
            fill
            sizes="(min-width: 992px) 50vw, 100vw"
            className="object-cover object-top"
            priority={active === 0}
          />
        </div>
        <figcaption className="border-t border-stroke px-5 py-3 text-sm leading-relaxed text-body-color dark:border-stroke-dark dark:text-body-color-dark">
          {current.caption}
        </figcaption>
      </figure>

      {media.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {media.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View image ${index + 1}: ${item.caption}`}
              aria-current={index === active}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                index === active
                  ? "border-primary shadow-glow-sm"
                  : "border-stroke opacity-60 hover:opacity-100 dark:border-stroke-dark"
              }`}
            >
              <Image
                src={item.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover object-top"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
