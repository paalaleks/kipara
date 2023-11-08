"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
import {
  ArrowRightCircle,
  ArrowLeftCircle,
  ChevronLeftCircle,
  ChevronRightCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide-01 absolute w-full z-20 top-10 lg:px-8 px-4 sm:px-0">
        <div
          data-glide-el="controls"
          className="flex items-center justify-start cursor-pointer pb-4"
        >
          <svg
            width="214"
            height="39"
            viewBox="0 0 214 39"
            className=""
            data-glide-dir=">"
            aria-label="next slide"
          >
            <defs>
              <filter
                id="siste_packrafts"
                x="0"
                y="0"
                width="214"
                height="49"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g
              transform="matrix(1, 0, 0, 1, 0, 0)"
              filter="url(#siste_packrafts)"
            >
              <text
                id="siste_packrafts-2"
                data-name="siste packrafts"
                transform="translate(9 29)"
                fill="#e8db7d"
                font-size="26"
                font-family="PinotGrigioModern-Bold, Pinot Grigio Modern"
                font-weight="700"
              >
                <tspan x="0" y="0">
                  SISTE PACKRAFTS
                </tspan>
              </text>
            </g>
          </svg>

          <button
            className="flex items-center justify-center rounded-full bg-variation-2 transition duration-300 transform text-accent-2 shadow h-10 w-10"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <ChevronRight size={35} />
          </button>
        </div>
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="h-56  w-full max-w-full">
              <Image
                alt="carousel"
                width={250}
                height={500}
                src="/products/Javri 260.jpg"
                className="m-auto h-full object-cover w-full rounded-3xl"
              />
            </li>
            <li className="h-56  w-full max-w-full">
              <Image
                alt="carousel"
                width={250}
                height={500}
                src="/products/Char Yellow 23.jpg"
                className="m-auto h-full object-cover w-full rounded-3xl"
              />
            </li>
            <li className="h-56  w-full max-w-full">
              <Image
                alt="carousel"
                width={250}
                height={500}
                src="/products/Char 265 ag Tizip 23.jpg"
                className="m-auto h-full object-cover w-full rounded-3xl"
              />
            </li>
            <li className="h-56 w-full max-w-full">
              <Image
                alt="carousel"
                width={250}
                height={500}
                src="/products/Char 265 ag Tizip bak 23.jpg"
                className="m-auto h-full object-cover w-full rounded-3xl"
              />
            </li>
            <li className="h-56  w-full max-w-full">
              <Image
                alt="carousel"
                width={1000}
                height={500}
                src="/products/Char 265 ag Tizip bak 23.jpg"
                className="m-auto h-full object-cover w-full rounded-3xl"
              />
            </li>
          </ul>
        </div>
      </div>

      <script
        async
        src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"
      ></script>
    </>
  );
}
