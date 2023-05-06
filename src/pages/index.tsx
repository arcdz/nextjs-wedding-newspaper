import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
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
      <header className="p-10 center">
        <h1 className="font-chomsky text-6xl md:text-4xl">Ioana & Andrei</h1>
        <h1 className="center font-newsreader text-3xl md:text-4xl">8 Iulie 2023</h1>
      </header>

      <div className="font-newsreader g-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
          <h1 className="text-2xl md:text-4xl">Main Content</h1>
        </main>
        <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
          <h1 className="text-2xl md:text-4xl">Sidebar</h1>
        </aside>
      </div>

      <footer className="bg-slate-800 mt-auto p-5">
        <h1 className="text-2xl md:text-4xl text-white">Footer</h1>
      </footer>
      {/*<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f9f7f1] to-[#f2eecb]">*/}
      {/*  <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">*/}
      {/*    /!* Header section  *!/*/}
      {/*    <header className="container flex">*/}
      {/*      <h1 className="text-6xl">Ioana & Andrei</h1>*/}
      {/*      <div>Bucuresti, 8 Iulie 2023</div>*/}
      {/*    </header>*/}

      {/*    /!* Nav section  *!/*/}
      {/*    <nav className="container flex">*/}
      {/*      <div>Invitatie</div>*/}
      {/*      <div>Locatie</div>*/}
      {/*      <div>Confirmari</div>*/}
      {/*    </nav>*/}

      {/*    /!* Content section  *!/*/}
      {/*    <div className="container flex">*/}
      {/*      <div>Ceva</div>*/}
      {/*      <div>Ceva</div>*/}
      {/*      <div>Ceva</div>*/}
      {/*      <div>Ceva</div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</main>*/}
    </>
  );
};

export default Home;
