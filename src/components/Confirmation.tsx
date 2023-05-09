import React, {useState} from "react";
import {GiRotaryPhone} from "react-icons/gi";
import {api} from "y/utils/api";

const Confirmation = () => {
    const altedetalii = "\n~ Ex: Număr camere cazare, alergii,\n meniu vegetarian, meniu copii, etc. ~\n";

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [specs, setSpecs] = useState("");

    const [done, setDone] = useState(false);
    const [err, setErr] = useState(false);

    const resetConfirmation = () => {
        setDone(false);
        setName('');
        setNumber('');
        setSpecs('');
        setErr(false);
    }

    const {mutate, isLoading: isPosting} = api.confirmation.confirm.useMutation({
        onSuccess: () => {
            setDone(true);
            setErr(false);
        }, onError: (e) => {
            const errorMessage = e.data?.zodError?.fieldErrors.content;
            console.log("errorMessage", errorMessage);
            setErr(true);

        },
    });

    return <>
        <div className="container py-6 md:px-12 text-center font-newsreader">
            <h1 className=" text-3xl font-bold ">Confirmări</h1>
            <h2 className=" text-xl font-oldstandard italic">~</h2>
            <p className="p-4 pt-2 text-lg">Ne puteți confirma prezența folosind formularul de mai jos: </p>

            {/*  Form confirmari */}
            <form className="flex flex-col gap-y-4 border-y-2 border-dotted p-4">

                <div className="flex flex-col">
                    <label className=" text-lg pb-3">
                        {err && <div className="text-red-700">Vă rugăm să introduceți dumneavoastră:</div>}
                        {!err && 'Numele dumneavoastră:'}
                    </label>
                    {(done || isPosting) && <div className="pb-1 py-2 text-gray-500">{!!name ? name : '-'}</div>}
                    {!done && !isPosting && <input className={`text-center rounded-none
                                border-2 border-gray-200 md:border-0
                                px-2 py-1.5 w-full md:w-3/5 mx-auto
                                text-gray-900 ring-1 ring-inset ring-gray-300
                                ${err ? 'placeholder:text-red-700' : 'placeholder:text-gray-400'} placeholder:text-center
                                focus:bg-gray-200 focus:outline-none`}
                                                   type="text"  name="name"
                                                   id="name"
                                                   value={name}
                                                   onChange={(e) => setName(e.target.value)}
                                                   placeholder="~ Nume* ~"/>}

                </div>

                <div className="flex flex-col">
                    <label className=" text-lg pb-3">
                        Numărul de persoane:
                    </label>
                    {(done || isPosting) && <div className="pb-1 py-2 text-gray-500">{!!number ? number : '-'}</div>}
                    {!done && !isPosting && <input className="text-center rounded-none
                                border-2 border-gray-200 md:border-0
                                px-2 py-1.5 w-full md:w-3/5 mx-auto
                                text-gray-900 ring-1 ring-inset ring-gray-300
                                placeholder:text-gray-400 placeholder:text-center
                                focus:bg-gray-200 focus:outline-none "
                                                   type="text"
                                                   name="number"
                                                   id="number"
                                                   value={number}
                                                   onChange={(e) => setNumber(e.target.value)}
                                                   placeholder="~ Număr persoane ~"/>}
                </div>

                <div className="flex flex-col">
                    <label className="font-oldstandard text-lg pb-3">
                        Alte specificații:
                    </label>
                    {(done || isPosting) && <div className="pb-1 py-2 text-gray-500">{!!specs ? specs : '-'}</div>}
                    {!done && !isPosting && <textarea
                        id="specs"
                        name="specs"
                        value={specs}
                        onChange={(e) => setSpecs(e.target.value)}
                        rows={3}
                        className="  text-center rounded-none
                            border-2 border-gray-200 md:border-0
                            px-2 py-1.5 w-full md:w-4/5 mx-auto
                            text-gray-900  ring-1 ring-inset ring-gray-300
                            placeholder:text-gray-400 placeholder:text-center
                            focus:bg-gray-200 focus:outline-none resize-y"
                        placeholder={altedetalii}/>}
                </div>
                {!done && !isPosting && <div className="mt-2 flex items-center justify-center gap-x-6">
                    <button onClick={() => mutate({name: name, number: number, specs: specs, yes: true})}
                            type="button"
                            className="leading-6 text-gray-50 border bg-gray-800 px-3 py-2 hover:bg-gray-600 hover:border-gray-600">
                        Confirmă participarea
                    </button>
                    <button onClick={() => mutate({name: name, number: number, specs: specs, yes: false})}
                            type="button"
                            className="leading-6 text-gray-50 border bg-gray-800 px-3 py-2 hover:bg-gray-600 hover:border-gray-600">
                        Nu pot participa
                    </button>
                </div>}

                {done && !isPosting && <div className="mt-2 flex-col items-center justify-center ">
                    <div className="px-3 py-2 ">Vă multumim pentru răspuns!</div>
                    <button onClick={() => resetConfirmation()}
                            type="button"
                            className="leading-6 text-gray-50 border bg-gray-800 px-3 py-2 hover:bg-gray-600 hover:border-gray-600">
                        Adaugă altă confirmare
                    </button>
                </div>}

            </form>

            <p className="px-1 pb-1 pt-5  text-lg">sau la numerele de telefon: </p>
            <div className=" text-lg flex items-center justify-center">
                <GiRotaryPhone/>
                <div className="mt-1 ml-3">
                    0730.920.449 - Andrei
                </div>
            </div>
            <div className=" text-lg flex items-center justify-center">
                <GiRotaryPhone/>
                <div className="mt-1 ml-3">
                    0727.343.641 - Ioana
                </div>
            </div>

        </div>
    </>

};
export default Confirmation;