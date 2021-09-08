/** @jsxImportSource @emotion/react */
import React from "react";
import tw from "twin.macro";

const About = () => {
  return (
    <section id="about">
      <div tw="flex flex-col items-center px-10 py-20 md:flex-row">
        <div tw="flex flex-col items-center text-center mb-16 md:(w-1/2 items-start text-left pr-16 mb-0) lg:(flex-grow pr-24)">
          <h1 tw="text-3xl mb-4 font-medium text-white md:text-4xl">
            Hi, I'm Kiran <br tw="hidden lg:inline-block" /> I love to build
            amazing apps.
          </h1>
          <p tw="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div tw="flex justify-center">
            <a href="#contact" tw="inline-flex bg-green-500 text-white text-lg font-medium border-0 py-2 px-6 rounded no-underline hover:bg-green-600">Work With Me</a>
            <a href="#projects" tw="inline-flex bg-gray-800 text-gray-300 text-lg font-medium border-0 py-2 px-6 ml-4 rounded no-underline hover:(bg-gray-700 text-white)">See My Past Work</a>
          </div>
        </div>
        <div tw="w-5/6 md:w-1/2 lg:(w-full)">
            <img tw="object-cover object-center rounded" src="./coding.svg" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default About;
