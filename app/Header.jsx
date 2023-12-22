import Image from "next/image";
import Link from "next/link";
import { SearchIcon, ShoppingCart } from "lucide-react";

export default function HeaderSection() {
  return (
    <section className="h-screen bg-accent-1 relative ">
      <nav className="flex flex-wrap items-center text-accent-1 justify-between w-full z-10 absolute pt-8 px-24 font-bold">
        <div className="flex space-x-10 items-center">
          <Image
            src="/logo.svg"
            height={98}
            width={111}
            className=" w-max h-20"
          />
          <Link href="">FAQ</Link>
          <Link href="">Hva er nytt?</Link>
          <Link href="">Om oss</Link>
          <Link href="">Kontakt</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="">
            <SearchIcon size={20} />
          </Link>
          <Link href="">
            <ShoppingCart size={20} />
          </Link>
        </div>
      </nav>
      <Image
        src="/hero.jpg"
        layout="fill"
        unoptimized={true}
        objectFit="cover"
        priority
      />
      <div className="uppercase text-center absolute bottom-0 left-0 right-0 z-10 text-[9rem] leading-[7rem]">
        <h1 className="text-accent-1">Nærmere naturen</h1>
        <div className="relative text-variation-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-12 left-0 right-0 z-0 w-full"
            width="1920"
            height="104"
            viewBox="0 0 1920 104"
          >
            <defs>
              <clipPath id="a">
                <rect
                  width="1920"
                  height="104"
                  transform="translate(0 1119)"
                  fill="#fff"
                />
              </clipPath>
            </defs>
            <g transform="translate(0 -1119)" clip-path="url(#a)">
              <path
                d="M-678-16C530,94,1920,0,1920,0V103H0S-1886-126-678-16Z"
                transform="translate(0 1120)"
                fill="#f6bd22"
              />
            </g>
          </svg>
          <h1 className="relative z-10 top-0 bg-accent-1">Med packraft</h1>
        </div>
      </div>
    </section>
  );
}
