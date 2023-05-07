import React from "react";

const Invitation = () => <>
  <div className="py-6 px-12 text-center">
    <h1 className="font-newsreader text-3xl font-bold ">Invitație</h1>
    <h2 className="font-oldstandard text-xl p-2">~ Ioana și Andrei ~</h2>
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
</>;
export default Invitation;