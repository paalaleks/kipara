import Image from "next/image";

export default function Hero() {
  return (
    <div className="grid grid-flow-row max-w-7xl mx-auto bg-[#158E8E] relative min-h-screen ">
      <div className="bg-[url('/wavy.svg')] bg-cover bg-no-repeat w-full absolute top-0 left-0 min-h-screen z-0" />
      <div className="max-w-3xl self-end z-20 relative px-4 mx-auto">
        <Image
          src="/kipara.svg"
          width={153}
          height={110}
          className="w-full h-min object-contain"
        />
        <div className="flex pt-5">
          <p className="text-accent-1 leading-[18px] col-span-8 pr-4 text-sm font-bold">
            Norsk natur er perfekt for packrafts! Mange natur og jakt- og
            fiskeprogrammer har gjort at mange nå forstår at packraft kan gi
            naturopplevelsene en ny dimensjon. I stedet for å gå rundt store
            innsjøer, eller vade over elver kan man nå enkelt bruke packraften
            som ligger i sekken. Storfisken er mye nærmere med packraft.
          </p>
          <Image
            src="/logo.png"
            width={153}
            height={110}
            className="col-span-2 m-auto h-20 p-1"
          />
        </div>
      </div>
      <div className="bg-[#223737] relative z-10 self-end h-60"></div>
    </div>
  );
}
