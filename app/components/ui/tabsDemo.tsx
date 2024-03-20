"use client";

import { Tabs } from "./tabs";
import Link from "next/link";

export function TabsDemo() {
  const tabs = [
    {
      title: "SliceTree",
      value: "SliceTree",
      content: (
        <Project videoSrc="/slicetree/slicetree.mp4" title="SliceTree" />
      ),
    },
    {
      title: "ShopInOne",
      value: "ShopInOne",
      content: (
        <Project videoSrc="/shopinone/shopinone.mp4" title="ShopInOne" />
      ),
    },
    {
      title: "VisibleOne",
      value: "VisibleOne",
      content: (
        <Project videoSrc="/visibleone/visibleone.mp4" title="VisibleOne" />
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}

const Project = ({ title, videoSrc }: { title: string; videoSrc: string }) => {
  return (
    <Link
      href={title.toLowerCase()}
      className="block cursor-pointer w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br "
    >
      <p className="absolute top-5 z-20">{title}</p>

      <div className="absolute inset-0 bg-black bg-opacity-20 z-10 hover:bg-transparent duration-200"></div>

      <video
        autoPlay
        muted
        loop
        className="absolute object-contain top-1/2 left-1/2 w-auto h-full -translate-x-1/2 -translate-y-1/2"
      >
        <source src={videoSrc} />
        Your browser does not support the video tag.
      </video>
    </Link>
  );
};
