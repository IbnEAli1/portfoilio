"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div >
      <section className="text-white sm:bg-blue-950  bg-blue-950 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font  italic sm:text-4xl text-5xl font-extrabold mb-4  text-black">
              <span className="text-[#37ff98] text-left">Hello,</span>
              <Typewriter
                options={{
                  strings: [
                    " السلام علیکم ورحمتہ اللہ وبرکاتہ",
                    "My Name Is Syed Abbas Ali Zaidi ",
                    "I am frontend developer and teacher",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              &quot;I am dedicated to advancing my expertise as a full-stack
              developer, specializing in both frontend and backend technologies
              like Python, Next.js, TypeScript, HTML, and CSS.
              <br className="text-justify" />
              As I deepen my technical skills, my ambition is to integrate
              ChatGPT into robotic applications, leveraging AI to create
              dynamic, interactive user experiences.
              <br className="text-justify" />
              With a focus on innovation, I look forward to pushing the
              boundaries of AI-driven solutions in technology and
              robotics.&quot;
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <button className="inline-flex text-white  bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg border-amber-950">
                Call Me
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto">
            <Image
              className="object-cover object-center rounded"
              alt="Abbas's Profile"
              loading="lazy"
              height={300}
              width={300}
              src="/images/abbas2.jpg"
              style={{ borderRadius: "25px", overflow: "hidden" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
