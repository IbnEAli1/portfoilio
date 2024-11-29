import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="sm:bg-slate-400 bg-slate-400" id="Projects">
      <section className="text-black body-font">
        <div className="container   px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-4xl font-extrabold title-font mb-4 text-gray-900">
              Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center italic ">
              I am currently working on expanding my skills in full-stack
              development, focusing on projects that involve creating dynamic
              web applications using Python, Next.js, TypeScript, HTML, and CSS.
              My projects aim to combine functionality with user-friendly
              interfaces, emphasizing performance and responsiveness.
              Additionally, I am exploring AI integration into software
              development, with a long-term goal of implementing ChatGPT within
              robotic systems to create interactive and intelligent solutions.
              These projects reflect my passion for innovation and my drive to
              bring ideas to life through technology.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Countdown Application */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="CountDown"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/countdown.png"
                  width={350}
                  height={350}
                />
                <div className="px-12 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                    @AkazBaba
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Countdown Application
                  </h1>
                  <p className="leading-relaxed text-justify">
                    Developed a responsive countdown application using HTML,
                    CSS, TypeScript, and Next.js to track time for events or
                    deadlines. The project demonstrates expertise in frontend
                    development and real-time functionality.
                  </p>
                </div>
              </div>
            </div>
            {/* Weather Widget Application */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="Weather Widget Application"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/ww.png"
                  width={500}
                  height={500}
                />
                <div className="px-6 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-yellow-500 mb-1">
                    @AkazBaba
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Weather Widget Application
                  </h1>
                  <p className="leading-relaxed text-justify">
                    Developed a responsive weather widget application using
                    HTML, CSS, TypeScript, and Next.js to display real-time
                    weather updates based on user location. The project
                    highlights expertise in API integration, frontend
                    development, and delivering user-friendly functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
