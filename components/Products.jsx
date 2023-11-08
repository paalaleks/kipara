import Image from "next/image";

export default function Products() {
  return (
    <div class="grid grid-cols-8 grid-rows-4 mx-auto gap-4 absolute top-56 z-20 px-4 ">
      <div className="col-span-4 h-36 self-center">
        <Image
          width={500}
          height={500}
          className=" h-full object-cover rounded-2xl"
          src="/products/Char 265 ag Tizip 23_2.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 h-36">
        <Image
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
          src="/products/Char Yellow 23_13.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 h-50 row-span-2">
        <Image
          width={500}
          height={1000}
          className="w-full h-full object-cover rounded-2xl "
          src="/products/Char 265 ag Tizip stående 23.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 h-36 self-center row-start-2">
        <Image
          width={500}
          height={500}
          className=" h-full object-cover rounded-2xl"
          src="/products/Char 265 ag Tizip 23_2.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 h-36 self-center row-start-2">
        <Image
          width={500}
          height={500}
          className=" h-full object-cover rounded-2xl"
          src="/products/Char 265 ag Tizip 23_2.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 h-36 row-start-2">
        <Image
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
          src="/products/Char 265 ag Tizip 23.jpg"
          alt=""
        />
      </div>
      <div className="col-span-2 h-36 row-start-3">
        <Image
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
          src="/products/Char 265 ag Tizip 23.jpg"
          alt=""
        />
      </div>
      <div className="col-span-6 h-36 row-start-3">
        <Image
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-2xl"
          src="/products/Char 265 ag Tizip 23.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
