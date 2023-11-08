import Carousel from "@/components/Carousel";
import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid grid-flow-row max-w-7xl mx-auto bg-[#629292] relative min-h-screen ">
        <div className="bg-[url('/wavy.svg')] bg-cover bg-no-repeat w-full absolute top-0 left-0 min-h-screen z-0" />
        <div className="max-w-3xl self-end z-20 relative px-4 mx-auto pb-20 pt-24">
          <Image
            alt="packraft Kipara logo text"
            src="/kipara.svg"
            width={153}
            height={110}
            className="w-full h-min object-contain"
          />
          <div className="flex items-center pr-0 md:pr-3">
            <p className="pt-5 text-accent-1 font-bold leading-[18px]">
              {/* <img src="/logo.png" alt="" className="float-left h-10" /> */}
              Norsk natur er perfekt for packrafts! Mange natur og jakt- og
              fiskeprogrammer har gjort at mange nå forstår at packraft kan gi
              naturopplevelsene en ny dimensjon. I stedet for å gå rundt store
              innsjøer, eller vade over elver kan man nå enkelt bruke packraften
              som ligger i sekken. Storfisken er mye nærmere med packraft.
            </p>
            <Image
              alt="kipara logo"
              src="/logo.png"
              width={153}
              height={110}
              className="object-contain w-32 mt-auto hidden md:block"
            />
          </div>
        </div>

        <div className="relative h-full">
          <Carousel />
          <div className="bg-[url('/wavy-section.svg')] bg-cover bg-no-repeat w-full h-[500px] z-10 relative self-end bottom-0">
            <div className="bg-[#176060] relative z-10 h-[750px] top-32 max-w-3xl w-full mx-auto">
              <Products />
            </div>
          </div>
          <div className="bg-[url('/wavy-section_2.svg')] bg-cover bg-no-repeat w-full h-[500px] z-0 relative bottom-3"></div>
        </div>
      </div>
    </main>
  );
}
