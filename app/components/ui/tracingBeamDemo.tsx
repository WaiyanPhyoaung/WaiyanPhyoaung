"use client";
import React from "react";
import { TracingBeam } from "./tracingBeam";
import { Spotlight } from "./spotlight";

export function TracingBeamDemo() {
  return (
    <div className="px-6 my-32 relative container mx-auto">
      <Spotlight className="left-0 md:left-0 md:top-0" fill="white" />
      <h2 className="text-center mb-6 md:text-4xl text-3xl lg:text-5xl font-bold relative z-20 ">
        Experience
      </h2>
      {/* <p className="text-center capitalize opacity-60">
        hands-on projects and real results
      </p> */}
      <div className="mt-20 max-w-screen-md mx-auto antialiased pt-4 relative">
        <div className="">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="flex gap-4">
              <h3 id="expTitle" className="px-4 py-2 mr-4 font-bold">
                {item.yearTitle}
              </h3>

              <div className="text-blue-500 mt-2">
                <svg
                  width="50"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="25"
                    cy="15"
                    r="10"
                    stroke="blue"
                    stroke-width="3"
                    fill="currentColor"
                  />

                  <line
                    x1="25"
                    y1="50"
                    x2="25"
                    y2="87%"
                    stroke="currentColor"
                    stroke-width="3"
                  />
                </svg>
              </div>

              <div className="mb-10 mt-2">
                <h2 className=" text-white font-semibold text-xl mb-4">
                  {item.title}
                </h2>

                <p className={"text-sm text-blue-700 font-medium mb-2"}>
                  {item.year}
                </p>

                <div className="text-sm  prose prose-sm dark:prose-invert">
                  {/* {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )} */}
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title: "Senior Frontend Developer",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    year: "2022 - Now (VisibleOne Co.,Ltd)",
    yearTitle: "2022",
  },
  {
    title: "Frontend Developer",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    year: "2021- 2022 (VisibleOne Co.,Ltd)",
    yearTitle: "2021",
  },
  {
    title: "Junior Full Stack Developer",
    description: (
      <>
        <p>
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    year: "2020- 2021 (OpenIntelli Co.,Ltd)",
    yearTitle: "2020",
  },
];
