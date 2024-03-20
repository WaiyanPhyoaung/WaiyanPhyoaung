import GridBackground from "./components/ui/gridBackground";
import Globe from "./components/ui/globe";
import { Spotlight } from "@/app/components/ui/spotlight";
import { TypewriterEffect } from "./components/ui/typewriter";
import { Button, MovingBorder } from "./components/ui/movingBorder";
import { InfiniteMovingCards } from "@/app/components/ui/movingCards";
import { testimonials } from "./data";
import { SparklesCore } from "./components/ui/sparkles";
import { BentoGrid, BentoGridItem, items } from "./components/ui/gridCards";
import { TabsDemo } from "./components/ui/tabsDemo";

const words = [
  {
    text: "Ideas",
  },
  {
    text: "into",
  },
  {
    text: "interactive",
  },
  {
    text: "Masterpieces",
    className: "text-blue-700 ",
  },
];
export default function Home() {
  return (
    <main className="">
      <GridBackground>
        {/* <Spotlight
          className="-top-50 left-0 md:left-60 md:-top-20"
          fill="white"
        /> */}
        <section className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="w-full">
            <h1 className=" text-6xl text-left z-10 font-semibold ">
              <TypewriterEffect words={words} />
            </h1>
            <p className="mt-6 opacity-70 mb-6">
              Skilled Frontend Developer with 3+ years of experience,
              specializing in creating exceptional user experiences through a
              blend of technical prowess and creativity. Committed to enhancing
              your project with high-quality, responsive designs.
            </p>

            <Button
              borderRadius="10px"
              className=" border-neutral-200 dark:border-slate-800 font-bold duration-200 hover:text-blue-700 "
            >
              View My Work
            </Button>
          </div>
          <div className="w-full">
            <Globe />
          </div>
        </section>
      </GridBackground>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
      <div className="mt-8 w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="mb-6 md:text-4xl text-3xl lg:text-5xl font-bold text-center  relative z-20">
          Latest Masterpieces
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="-mt-20 mb-28">
        <TabsDemo />
      </div>
      <BentoGrid className="container mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            // icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </main>
  );
}
