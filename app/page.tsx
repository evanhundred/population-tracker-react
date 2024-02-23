import StateData from "./d3Geo/states-albers-10m.json";
import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import { Roboto_Mono } from "next/font/google";
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
import * as d3 from "d3";

const map = () => {
  return <div id="map">map.</div>;
};

export default function Home() {
  const renderMap = () => {
    const path = d3.geoPath();
    const svg = d3
      .select("#map")
      .append("svg")
      .attr("width", 1000)
      .attr("height", 600);
    const g = svg.append("g");
    const states = topojson.feature(StateData, Statedata.objects.states);
  };
  return (
    <main
      className={`${robotoMono.className}flex min-h-screen flex-col items-center justify-between p-24`}
    >
      {Home()}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <div className={styles.shape} /> */}
        <p className="text-3xl  fixed left-0 top-0 flex w-full justify-center border-b border-gray-300  pb-6 pt-8 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"> */}
          <code className="roboto">Population Tracker</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-25 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={80}
              height={50}
              priority
            /> */}
        </div>
      </div>
    </main>
  );
}
