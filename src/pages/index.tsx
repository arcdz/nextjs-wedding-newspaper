import { type NextPage } from "next";
import { GoLinkExternal } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { GiRotaryPhone } from "react-icons/gi";
import Head from "next/head";
import Link from "next/link";
// import { useState } from "react";
// import { useForm } from "react-hook-form";


const Home: NextPage = () => {
  // const { register, handleSubmit } = useForm();
  // const [data, setData] = useState("");
  return (
    <>
      <Head>
        <title>Wedding</title>
        <meta
          name="description"
          content="8 iulie 2023 - Wedding - Ioana & Andrei"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Title */}
      <header className="text-center ">
        <div  className="p-6 font-chomsky" >
          <h1 className="text-2xl">Wedding Times</h1>
          <h1 className="text-6xl">Ioana & Andrei</h1>
        </div>
        {/*<h1 className="center font-newsreader text-2xl">BUCUREȘTI - Sâmbată, 8 IULIE 2023</h1>*/}
        <h1 className="p-2 border-y-2 center font-oldstandard text-xl">București - Sâmbată, 8 Iulie 2023</h1>
      </header>

      {/*  Invitatie */}
      <div className="py-6 px-12 text-center border-b-2">
        <h1 className="font-newsreader text-3xl font-bold ">Invitație
        </h1>
        <h2 className="font-oldstandard text-xl box-border">~ Ioana și Andrei ~</h2>
        {/*<h1 className="center font-newsreader text-2xl">BUCUREȘTI - Sâmbată, 8 IULIE 2023</h1>*/}
        <p className="p-2 font-oldstandard text-lg">Avem bucuria de a vă invita la celebrarea nunții noastre!</p>
        <p className="p-2">
          Ne vor fi alături părinții: <br />
          <span className="font-oldstandard text-lg font-bold "> Rodica-Mihaiela & Constantin Rotariu </span> <br />
          <span className="font-oldstandard text-lg font-bold "> Clara & Ion Sprinceană </span>
        </p>
        <p className="p-2">
          împreună cu nașii <br />
          <span className="font-oldstandard text-lg font-bold "> Tina & Sorin Dunăreanu </span>
        </p>
      </div>

      {/*  Locație */}
      <div className="py-6 px-12 text-center border-b-2">
        <h1 className="font-newsreader text-3xl font-bold ">Locație</h1>
        <h2 className="font-oldstandard text-xl box-border">~ Nuntă pe ponton ~</h2>
        <p className="p-2 font-oldstandard text-lg">
          <span className="italic"> Ceremoniile civilă </span>
          și
          <span className="italic"> religioasă </span>
          vor avea loc pe pontonul restaurantului Velveto Garden din București.</p>
        <p className="p-2 font-oldstandard text-lg">
          Petrecerea va continua în interiorul restaurantului imediat după incheierea ceremoniilor.
        </p>
        <div className="p-2 font-oldstandard text-lg flex items-center justify-center">
          <GrMapLocation />
          <div className="mt-2 ml-3">
            București, Str. Oltețului Nr. 30
          </div>
        </div>
        <Link href="https://goo.gl/maps/usQHnMFw2GvDJtT99">
          <div className="p-1 font-oldstandard italic text-md flex items-center justify-center">
            <GoLinkExternal />
            <div className="mt-1 ml-1">
              Vezi harta
            </div>
          </div>
        </Link>
      </div>

      {/*  Timeline */}
      <div className="py-6 px-12 text-center border-b-2">
        <h1 className="font-newsreader text-lg  ">Ceremoniile de pe ponton</h1>
        <h1 className="p-2 font-chomsky text-6xl">16:00</h1>
        <h1 className="font-newsreader text-lg  ">Petrecerea din interior</h1>
        <h1 className="p-2 font-chomsky text-6xl">17:30</h1>
      </div>


      {/*  Confirmari */}
      <div className="py-6 px-12 text-center border-b-2">
        <h1 className="font-newsreader text-3xl font-bold ">Confirmari</h1>
        <p className="p-2 font-oldstandard text-lg">Ne puteți confirma prezența folosind formularul de mai jos: </p>

        {/*  Form confirmari */}
        <form className="flex flex-col gap-y-4 border p-4">

          <div className="flex justify-between ">
            <label className="font-oldstandard  inline-block mr-2 ">
              Numele dumneavoastră:
            </label>
            <input className="font-oldstandard inline-block border-0 px-2 py-1.5
                              text-gray-900  ring-1 ring-inset ring-gray-300
                              placeholder:text-gray-400"
                   type="text"
                   name="nume"
                   id="nume"
                   autoComplete="Numele dumneavoastră" />
          </div>

          <div className="flex justify-between ">
            <label className="font-oldstandard  inline-block mr-2 ">
              Numărul de persoane:
            </label>
            <input className="font-oldstandard inline-block border-0 px-2 py-1.5
                              text-gray-900  ring-1 ring-inset ring-gray-300
                              placeholder:text-gray-400 "
                   type="number"
                   name="nume"
                   id="nume"
                   autoComplete="Numărul de persoane" />
          </div>

          <div className="flex justify-between ">
            <label className="font-oldstandard inline-block mr-2 text-left">
              Alte specificații:
            </label>
            <textarea
              id="about"
              name="about"
              rows={3}
              className="block w-full font-oldstandard border-0 px-2 py-1.5
                         text-gray-900 ring-1 ring-inset ring-gray-300
                         placeholder:text-gray-400"
              defaultValue={""}
            />
          </div>
          <div className="mt-2 flex items-center justify-around gap-x-6">
            <button
              type="submit"
              className="leading-6 text-gray-900 border border-gray-600 px-3 py-2  hover:bg-gray-200">
              Confirmă
            </button>
            <button type="button"
                    className="leading-6 text-gray-900 border border-gray-600 px-3 py-2  hover:bg-gray-200">
              Nu pot participa
            </button>

          </div>
        </form>

        <p className="px-1 pb-1 pt-5 font-oldstandard text-lg">sau la numerele de telefon: </p>
        <div className="font-oldstandard text-lg flex items-center justify-center">
          <GiRotaryPhone />
          <div className="mt-1 ml-3">
            0730.920.449 - Andrei
          </div>
          <div className="mt-1 mx-3">
            /
          </div>
          <GiRotaryPhone />
          <div className="mt-1 ml-3">
            0730.920.449 - Ioana
          </div>
        </div>
        {/*<div className="font-oldstandard text-lg flex items-center justify-center">*/}
        {/*  <GiRotaryPhone />*/}
        {/*  <div className="mt-1 ml-3">*/}
        {/*    0730.920.449 - Ioana*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<p className="p-2 font-oldstandard text-lg">Vă așteptăm cu drag! </p>*/}

      </div>

      {/*  Confirmari */}
      <div className="py-6 px-12 text-center border-b-2">
        <h1 className="font-chomsky text-3xl">Vă așteptăm cu drag! </h1>
      </div>

    </>
  );
};

export default Home;
