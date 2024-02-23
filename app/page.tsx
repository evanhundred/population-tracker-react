import StateData from "./d3Geo/states-albers-10m.json";
import Image from "next/image";
import styles from "@/app/ui/home.module.css";
import { Roboto_Mono } from "next/font/google";
import { useEffect, useState, ElementRef, useRef, createRef } from "react";
const robotoMono = Roboto_Mono({ subsets: ["latin"] });
import * as d3 from "d3";

export default function Home() {
  // const ref = useRef();
  // const [mapElement, setMapElement] = useState<HTMLDivElement>(null);
  // const mapRef = useRef<ElementRef<"map">>(null);
  // const renderMap = () => {
  const mapRef = createRef<HTMLDivElement>();
  const path = d3.geoPath().projection(d3.geoAlbers());
  const svg = d3.create("svg").attr("width", 1000).attr("height", 600);
  svg.append("g");
  // return (
  //   <svg width={1000} height={600} ref={mapRef}>
  //     {/* <g ref={ref}/> */}
  //   </svg>
  // );
  // return svg.node();

  // const svgElement = d3.select(ref.current);
  // };
  useEffect(() => {
    // const svgElement = d3.select(ref.current);
  }, []);

  // const makeMap = () => {
  //   const map = document.querySelector("#map");
  //   const renderer = renderMap();
  //   if (renderer && map) map.append(renderer);
  // makeMap();

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
        <div ref={mapRef}></div>
        <svg width={1000} height={600}>
          {/* <g ref={ref}/> */}
        </svg>
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
