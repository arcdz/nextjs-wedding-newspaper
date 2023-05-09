import {type NextPage} from "next";
import Head from "next/head";

import Title from "y/components/Title";
import Invitation from "y/components/Inivitation";
import Location from "y/components/Location";
import Timeline from "y/components/Timeline";
import Confirmation from "y/components/Confirmation";
import Welcome from "y/components/Welcome";

const Home: NextPage = () => {
    // const hello = api.example.hello.useQuery({text: "from tRPC"});

    return (<>
            <Head>
                <title>The Wedding Times</title>
                <meta name="description" content="8 iulie 2023 - Wedding - Ioana & Andrei"/>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            </Head>

            {/* Small screen */}
            <div className="min-h-screen flex flex-col justify-around md:hidden">
                <Title/>
                <Invitation/>
                <Location/>
                <Timeline/>
                <Confirmation/>
                <Welcome/>
            </div>

            {/* Big screen */}
            <div className="hidden md:min-h-screen md:flex md:flex-col md:justify-around">
                <Title/>
                <div className="grow flex">
                    <div className="basis-1/3 flex flex-col justify-start">
                        <Invitation/>
                        <Timeline/>
                    </div>
                    <div className="basis-1/3 flex flex-col justify-center">
                        <Location/>
                    </div>
                    <div className="basis-1/3 flex flex-col justify-start">
                        <Confirmation/>
                    </div>
                </div>
                <Welcome/>
            </div>
        </>);
};
export default Home;
