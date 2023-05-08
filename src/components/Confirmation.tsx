import React from "react";
import { GiRotaryPhone } from "react-icons/gi";

const Confirmation = () => {
  const altedetalii = "\n~ Ex: Alergii, copii, etc. ~\n";
  return <>

    <div className="container py-6 md:px-12 text-center">
      <h1 className="pb-2 font-newsreader text-3xl font-bold ">Confirmări</h1>
      <p className="p-4 font-oldstandard text-lg">Ne puteți confirma prezența folosind formularul de mai jos: </p>

      {/*  Form confirmari */}
      <form className="flex flex-col gap-y-4 border-y-2 border-dotted p-4">

        <div className="flex flex-col">
          <label className="font-oldstandard text-lg pt-1 pb-4">
            Numele dumneavoastră:
          </label>
          <input className="font-oldstandard font-bold text-center
                                border-0 px-2 py-1.5 w-full md:w-3/5 mx-auto
                                text-gray-900  ring-1 ring-inset ring-gray-300
                                placeholder:text-gray-400 placeholder:text-center
                                focus:bg-gray-200 focus:outline-none "
                 type="text"
                 name="nume"
                 id="nume"
                 placeholder="~ Nume ~" />
        </div>

        <div className="flex flex-col">
          <label className="font-oldstandard text-lg pt-1 pb-4">
            Numărul de persoane:
          </label>
          <input className="font-oldstandard font-bold text-center
                                border-0 px-2 py-1.5 w-full md:w-3/5 mx-auto
                                text-gray-900  ring-1 ring-inset ring-gray-300
                                placeholder:text-gray-400 placeholder:text-center
                                focus:bg-gray-200 focus:outline-none "
                 type="text"
                 name="numar"
                 id="numar"
                 placeholder="~ Număr persoane ~" />
        </div>

        <div className="flex flex-col">
          <label className="font-oldstandard text-lg pt-1 pb-4">
            Alte specificații:
          </label>
          <textarea
            id="altele"
            name="altele"
            rows={2}
            className="font-oldstandard font-bold text-center
                            border-0 px-2 py-1.5 w-full md:w-4/5 mx-auto
                            text-gray-900  ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 placeholder:text-center
                            focus:bg-gray-200 focus:outline-none resize-y"
            placeholder={altedetalii}
          />
        </div>
        <div className="mt-2 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="leading-6 text-gray-900 border border-gray-600 px-3 py-2 hover:bg-gray-200 hover:border-gray-200">
            Confirmă participarea
          </button>
          <button type="button"
                  className="leading-6 text-gray-900 border border-gray-600 px-3 py-2 hover:bg-gray-200 hover:border-gray-200">
            Nu pot participa
          </button>

        </div>
      </form>

      <p className="px-1 pb-1 pt-5 font-oldstandard text-lg">sau la numerele de telefon: </p>
      {/*<div className="font-oldstandard text-lg flex items-center justify-center">*/}
      {/*  <GiRotaryPhone />*/}
      {/*  <div className="mt-1 ml-3">*/}
      {/*    0730.920.449 - Andrei*/}
      {/*  </div>*/}
      {/*  <div className="mt-1 mx-3">*/}
      {/*    /*/}
      {/*  </div>*/}
      {/*  <GiRotaryPhone />*/}
      {/*  <div className="mt-1 ml-3">*/}
      {/*    0730.920.449 - Ioana*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="font-oldstandard text-lg flex items-center justify-center">
        <GiRotaryPhone />
        <div className="mt-1 ml-3">
          0730.920.449 - Andrei
        </div>
      </div>
      <div className="font-oldstandard text-lg flex items-center justify-center">
        <GiRotaryPhone />
        <div className="mt-1 ml-3">
          0730.920.449 - Ioana
        </div>
      </div>

    </div>
  </>;
};
export default Confirmation;