import React from "react";
import { GiRotaryPhone } from "react-icons/gi";

const Confirmation = () => <>
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

  </div>
</>;
export default Confirmation;