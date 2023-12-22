import { Dot } from "lucide-react";
import Categories from "./Categories";
import Header from "./Header";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Header />
      <section className=" relative bg-accent-1">
        <p className="text-xl relative z-10 px-8 max-w-4xl w-full mx-auto text-center pt-8">
          Norsk natur er perfekt for packrafts! Mange natur og Jakt- og
          fiskeprogrammer har gjort at mange nå forstår at packraft kan gi
          naturopplevelsene en ny dimensjon. I stedet for å gå rundt store
          innsjøer, eller vade over elver kan man nå enkelt bruke packraften som
          ligger i sekken. Storfisken er mye nærmere med packraft.
        </p>
      </section>
      <Categories />
      <div className="relative h-64">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-screen absolute top-0 left-0 right-0 z-0"
          width="1920"
          height="252"
          viewBox="0 0 1920 252"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_71"
                data-name="Rectangle 71"
                width="1920"
                height="252"
                transform="translate(0 3116)"
                fill="#fff"
                stroke="#707070"
                stroke-width="1"
              />
            </clipPath>
          </defs>
          <g
            id="Mask_Group_12"
            data-name="Mask Group 12"
            transform="translate(0 -3116)"
            clip-path="url(#clip-path)"
          >
            <path
              id="Path_7304"
              data-name="Path 7304"
              d="M0,16.545c480-52.5,1432.364,24.242,1932.364,178.788S0,257.675,0,257.675-480,69.045,0,16.545Z"
              transform="translate(0 3116)"
              fill="#f1b40c"
            />
          </g>
        </svg>

        <h1 className="absolute top-20 left-0 right-0 w-full mx-auto flex justify-center z-10 text-variation-1 text-[7rem] leading-[5.7rem] text-center uppercase ">
          Hvorfor velge
          <br />
          Kipara packrafts?
        </h1>
        <div className="h-40 bg-accent-2 -bottom-20 xl:-bottom-24 absolute w-full" />
      </div>
      <section className="bg-accent-2">
        <div className="max-w-3xl w-full mx-auto py-10">
          <ul className="list-disc relative z-20 text-xl space-y-2 px-8">
            <li className="ml-4">
              Kåret til Best i test og Godt kjøp hos Jakt & Fiske (Char 265 og
              Jávri 260)
            </li>
            <li className="ml-4">
              Våre packrafter er solide og lette. De kan pakkes sammen på
              størrelsen med en liten sovepose slik at du lett kan ta de med i
              sekken.
            </li>
            <li className="ml-4">
              Packraftene våre er laget i beste kvalitet av importert Nylon 66
              med supersterkt lag av urethan coating. Sømmene er sydde og
              sveiset på begge sider. Produksjonen og materialene gjør våre
              packrafts superlette og utrolig holdbare til lav pris. Ikke la deg
              lure til å kjøpe en packraft som koster mye mer!
            </li>
            <li className="ml-4">
              2023-sesongen blir vår 6. sesong og våre packrafts har vist seg
              som trygge valg.
            </li>
            <li className="ml-4">3-års garanti.</li>
          </ul>
        </div>
      </section>
    </>
  );
}
