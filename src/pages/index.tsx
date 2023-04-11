import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

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
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#f9f7f1] to-[#f2eecb]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {/* Header section  */}
          <header className="container flex">
            <h1 className="text-6xl">Ioana & Andrei</h1>
            <div>Bucuresti, 8 Iulie 2023</div>
          </header>

          {/* Nav section  */}
          <nav className="container flex">
            <div>Invitatie</div>
            <div>Locatie</div>
            <div>Confirmari</div>
          </nav>

          {/* Content section  */}
          <div className="container flex">
            <div>Ceva</div>
            <div>Ceva</div>
            <div>Ceva</div>
            <div>Ceva</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
