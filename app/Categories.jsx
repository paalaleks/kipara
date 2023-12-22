import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <section className="px-6 max-w-3xl mx-auto relative z-10 py-10">
      <div className="grid grid-cols-10 gap-2">
        <Link
          href=""
          className="col-span-4 flex flex-col items-center justify-end"
        >
          <Image
            src="/categories/allepackrafts.png"
            width={591}
            height={219}
            className=" w-max object-contain"
          />
          <h2 className="text-3xl">Alle packrafts</h2>
        </Link>
        <Link
          href=""
          className="col-span-2 flex flex-col items-center justify-end w-min"
        >
          <Image
            src="/categories/flytevestoghjelm.png"
            width={348}
            height={317}
            className="w-full max-w-[100px] object-contain"
          />
          <h2 className="text-3xl whitespace-nowrap">Flytevester & hjelmer</h2>
        </Link>
        <Link
          href=""
          className="flex flex-col items-center justify-end col-start-8 row-span-2 row-start-1 w-min col-span-2 relative right-5"
        >
          <Image
            src="/categories/padleåre.png"
            width={156}
            height={813}
            className=" h-64 object-contain"
          />
          <h2 className="text-3xl">Padleårer</h2>
        </Link>

        <Link
          href=""
          className="flex flex-col items-center justify-end mx-auto col-start-9 row-span-1 row-start-1 w-min col-span-2"
        >
          <h2 className="text-2xl leading-7 text-center uppercase mb-2">
            Alle <br /> Produkt
          </h2>
          <svg
            className="mb-3 w-12"
            xmlns="http://www.w3.org/2000/svg"
            width="71.636"
            height="17.376"
            viewBox="0 0 71.636 17.376"
          >
            <g
              id="Group_120"
              data-name="Group 120"
              transform="translate(-1352.487 -1851.149)"
            >
              <path
                id="Path_7305"
                data-name="Path 7305"
                d="M60.7,17.3c-.111,0-.168-.112-.224-.112A2.759,2.759,0,0,1,60.255,14a8.553,8.553,0,0,1,2.687-2.968,17.1,17.1,0,0,1,3.64-2.408c.224-.112.168-.448-.056-.616a13.67,13.67,0,0,0-2.408-1.176,10.325,10.325,0,0,1-2.352-1.176c-.56-.28-.952-.953-1.568-1.232-.5-.9-1.456-1.624-1.344-2.8-.055-.5-.391-.952-.112-1.624A16.594,16.594,0,0,0,61.99,2.743c.729.449,1.4,1.009,2.072,1.4a10.453,10.453,0,0,0,2.857,1.12c.168.112.447.112.615.28a3.563,3.563,0,0,0,2.353.84c.447-.112.895.28,1.231.616a1.331,1.331,0,0,1,.112,2.016,1.322,1.322,0,0,1-.5.448c-1.568,1.232-3.135,2.52-4.536,3.863-1.008.393-1.511,1.4-2.464,1.849a4.616,4.616,0,0,0-2.015,1.735.772.772,0,0,1-.561.449c-.168.056-.336-.056-.448-.056"
                transform="translate(1352.487 1851.149)"
                fill="#182224"
              />
              <path
                id="Path_7306"
                data-name="Path 7306"
                d="M.253,8.693a.845.845,0,0,0,.522-.348c0-.058.174-.116.29,0a.527.527,0,0,0,.406.174,4.208,4.208,0,0,1,.522-.29.608.608,0,0,1,.754,0c.116.116.29.058.406.058.29-.058.174-.116,0-.232-.173-.058.117-.174.174-.174.348,0,.638.232.928-.058a2.81,2.81,0,0,0,.986,0,2.947,2.947,0,0,1,1.218-.174A1.36,1.36,0,0,1,7.1,7.533c.928-.116,2.03.057,2.958,0,.174,0,.348.116.638.116.7-.174,1.45-.116,2.088-.29.58-.058.928.174,1.392.058a3.688,3.688,0,0,1,1.1-.058c.581,0,1.044-.058,1.683-.116a25.414,25.414,0,0,1,2.958-.058c.87-.058,1.449,0,2.262-.058a9.5,9.5,0,0,1,2.2-.058l5.1-.058c.638,0,1.567.116,2.437.058.521,0,1.218.116,1.913.116a2.971,2.971,0,0,1,1.624.116,1.693,1.693,0,0,0,.523.116,6.564,6.564,0,0,1,1.855-.058c2.146.058,4.176.231,6.38.231a12.175,12.175,0,0,0,1.45.175,5.03,5.03,0,0,0,1.392-.175c1.1.175,2.089.175,3.133.291.463.058.985,0,1.624.116.579.058,1.1-.116,1.739-.116a13.32,13.32,0,0,0,2.2.116,3.106,3.106,0,0,0,1.8-.174h.406a3.245,3.245,0,0,1-1.044,1.508c-.174.058-.29.58-.522.58-.232-.116-.406-.116-.464-.058-1.508.29-2.958-.058-4.582.174a1.456,1.456,0,0,0-.522,0,41.355,41.355,0,0,0-4.639-.174c-.813.058-1.624.058-2.2.058a9.538,9.538,0,0,0-2.2-.116c-.58-.058-1.1.058-1.8.058a10.559,10.559,0,0,1-1.1-.174c-.058-.058-.231-.058-.29-.058-.29.232-.754.116-1.044.116a6.708,6.708,0,0,1-1.855-.174,1.867,1.867,0,0,1-.813-.058.213.213,0,0,1-.058-.174L34.7,9.214l-.057.175v.116l-.117.058c-.29.116-.521-.058-.754,0-.232-.058-.347.116-.753.058a6.178,6.178,0,0,1-1.044,0,1.54,1.54,0,0,1-.813-.174,4.386,4.386,0,0,0-1.508,0l.059-.058c-.174-.232-.406-.116-.58-.058-.29,0-.58.116-.58.348V9.563a1.046,1.046,0,0,1-.58.058c-.233-.058-.233-.116-.174-.174.116-.058-.059-.174-.174-.174-.29.058-.465.116-.522.29L26,9.447c-.059-.058-.175,0-.232,0s0,.058.057.174c.116.058.116.116,0,.116a.109.109,0,0,1-.174,0c-.405,0-.29-.232-.405-.348-.059-.058-.232-.058-.232,0-.058.29-.233.116-.522.058-.175-.058-.406-.116-.522.116-.174,0-.117.348-.29.058a1.389,1.389,0,0,0-.987-.174c-.29,0-.811.116-.927-.29a.46.46,0,0,1-.29,0,3.734,3.734,0,0,1-1.624.406l-.348.174a.547.547,0,0,1-.523-.058.479.479,0,0,0-.58-.232,3.575,3.575,0,0,0-1.044-.116,3.845,3.845,0,0,1-1.217.174,5.156,5.156,0,0,1-1.276.058,1.473,1.473,0,0,0-1.1-.116c-.638.058-1.218,0-1.8,0-.406,0-.87.058-1.45.058-.406-.058-.87-.291-1.334.058a2.02,2.02,0,0,0-1.16.058c-.348,0-.58-.058-1.1-.058a2.131,2.131,0,0,1-1.45-.29c-.29.058-.7-.174-1.1-.116a2.339,2.339,0,0,0-.638,0,1.093,1.093,0,0,1-.7.116,3.181,3.181,0,0,0-.754,0,.676.676,0,0,0-.754-.059c-.232.059-.406-.057-.637-.057A2.411,2.411,0,0,0,.312,9.1c-.175-.058-.29-.116-.29-.175-.059-.115,0-.115.231-.231"
                transform="translate(1352.487 1851.149)"
                fill="#182224"
              />
            </g>
          </svg>
        </Link>

        <Link
          href=""
          className=" flex flex-col items-center justify-end col-start-9 row-span-1 row-start-2 col-span-2"
        >
          <Image
            src="/categories/sekk.png"
            width={355}
            height={649}
            className="object-contain w-20"
          />
          <h2 className="text-3xl">Sekker</h2>
        </Link>
        <Link
          href=""
          className="flex flex-col items-center justify-end row-start-2 col-span-2"
        >
          <Image
            src="/categories/tilbehør.png"
            width={201}
            height={249}
            className=" w-20 object-contain"
          />
          <h2 className="text-3xl">Tilbehør</h2>
        </Link>
        <Link
          href=""
          className=" flex flex-col items-center justify-end row-start-2 col-span-2"
        >
          <Image
            src="/categories/reparasjon.png"
            width={591}
            height={219}
            className=" w-24 object-contain"
          />
          <h2 className="text-3xl">Reparasjon</h2>
        </Link>

        <Link
          href=""
          className=" flex flex-col items-center justify-end row-start-2 col-span-3 relative left-10 max-w-[100px] w-full"
        >
          <Image
            src="/categories/pakketilbud.png"
            width={227}
            height={391}
            className="object-contain"
          />
          <h2 className="text-3xl">Pakketilbud</h2>
        </Link>
      </div>
    </section>
  );
}
