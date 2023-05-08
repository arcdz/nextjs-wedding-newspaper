import { type NextPage } from "next";
import Head from "next/head";
import Title from "~/components/Title";
import Welcome from "~/components/Welcome";
import Invitation from "~/components/Inivitation";
import Location from "~/components/Location";
import Timeline from "~/components/Timeline";
import Confirmation from "~/components/Confirmation";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/src/styles/fonts/chomsky/Chomsky.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </Head>

      {/* Big screen */}
      <div className="min-h-screen flex flex-col justify-around">
        <Title />
        <div className="grow flex">
          <div className="flex flex-col justify-around">
            <Invitation />
            <Timeline />
          </div>
          <div className="flex flex-col justify-start">
            <Location />
          </div>
          <div className="flex flex-col justify-start">
            <Confirmation />
          </div>
        </div>
        <Welcome />
      </div>
    </>
  );
};

export default Home;
