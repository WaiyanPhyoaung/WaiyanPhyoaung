import GridBackground from "./components/ui/gridBackground";
import Globe from "./components/ui/globe";
import { Spotlight } from "@/app/components/ui/spotlight";
import { TypewriterEffect } from "./components/ui/typewriter";
const words = [
  {
    text: "Transforming",
  },
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
    className: "text-blue-500 dark:text-blue-500",
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
        <section className="container mx-auto text-white flex flex-col md:flex-row justify-between items-center">
          <div className="w-full">
            <h1 className="text-5xl text-left z-10 ">
              <TypewriterEffect words={words} />
            </h1>
            <p className="mt-6 opacity-70">
              Experienced Frontend Developer with over 3 years of expertise in
              delivering outstanding user experiences. I excel in merging
              technical skills and creativity to produce responsive,
              high-quality designs. Ready to elevate your next project with
              dedication and excellence.
            </p>
          </div>
          <div className="w-full">
            {/* <p>here is another section</p> */}
            <Globe />
          </div>
        </section>
      </GridBackground>
    </main>
  );
}
