import React from "react";
import { GrMapLocation } from "react-icons/gr";
import Link from "next/link";
import { GoLinkExternal } from "react-icons/go";
import Image from "next/image";

const Location = () => <>
  <div className="container py-6 md:py-3 md:px-12 text-center flex-col justify-center font-newsreader">
    <h1 className=" text-3xl font-bold ">Locație</h1>

    <h2 className="p-1 text-lg">
      <span className="text-xl font-oldstandard italic">~ </span>
      Nuntă pe ponton
      <span className="text-xl font-oldstandard italic"> ~</span>
    </h2>

    <p className="text-lg">
      <span className="font-oldstandard text-xl italic font-semibold"> Ceremoniile civilă </span>
      și
      <span className="font-oldstandard text-xl italic font-semibold"> religioasă </span>
      vor avea loc pe <br /> pontonul restaurantului
      <span className="font-oldstandard text-xl italic font-semibold"> Velveto Garden </span> din București.</p>
    <p className="p-2 text-lg">
      Petrecerea va continua în interiorul restaurantului imediat după incheierea ceremoniilor.
    </p>
    <div className=" text-lg flex items-center justify-center">
      <GrMapLocation />
      <div className="mt-2 ml-3">
        București, Str. Oltețului Nr. 30
      </div>
    </div>
    <Link href="https://goo.gl/maps/usQHnMFw2GvDJtT99">
      <div className="font-oldstandard italic text-md flex items-center justify-center">
        <GoLinkExternal />
        <div className="mt-1 ml-1">
          Vezi harta
        </div>
      </div>
    </Link>
    <div className="text-lg flex justify-center pt-4">
      <Image
        alt="Ponton - Velvetor Garden"
        // src="https://velveto.ro/wp-content/uploads/2022/08/Cununie-exterior.jpeg"
        src="https://velveto.ro/wp-content/uploads/2022/08/Cununie-alb-la-lac-Garden.jpeg"
        width="0"
        height="0"
        sizes="100"
        className="w-2/3 h-auto object-cover grayscale"
      />
      {/* v-2/4*/}
      </div>
  </div>
</>;
export default Location;