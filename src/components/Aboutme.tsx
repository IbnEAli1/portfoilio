import React from "react";
import Image from "next/image";

const Aboutme = () => {
  return (
    <div className="bg-black"id="Aboutme">
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-full"
              alt="hero"
              src="/images/photo.jpeg"
              height={500}
              width={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-extrabold text-white ">
              About me
            </h1>
            <p className="mb-8 leading-relaxed text-justify italic text-xl">
              I am a highly motivated and versatile professional with a solid
              background in sales, accounting, and management. With over a
              decade of experience across various industries, including banking,
              automotive, and education, I have honed my skills in customer
              engagement, financial operations, and team coordination. My
              educational foundation in commerce, economics, and education,
              paired with certifications in computerized accounting and MS
              Office, has empowered me to excel in diverse roles. Looking ahead,
              I am eager to transition into the tech industry as a frontend and
              backend developer, leveraging technologies like Python, Next.js,
              TypeScript, HTML, and CSS. With a passion for innovation, my
              long-term goal is to integrate AI into robotic applications,
              including implementing ChatGPT in a dynamic, interactive robotic
              format. I am committed to continuous growth, embracing challenges,
              and making meaningful contributions to the fields I work in.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
