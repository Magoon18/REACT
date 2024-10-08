import React from "react";
import { UsersIcon } from "@heroicons/react/solid";

export default function Socials() {
  return (
    <section id="socials">
      <div className="container px-5 py-10 mx-auto text-center">
        {/*<UsersIcon className="w-10 inline-block mb-4" />*/}
        <h1 className="sm:text-4xl text-3xl font-small title-font text-white mb-2">
          Contact Me: 
        </h1>
        <div className="flex flex-wrap items-center justify-center container">
          <div className="bg-gray-800 bg-opacity-40 rounded flex p-4 h-full items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            <a href="https://www.linkedin.com/in/denver-davis-5b2ab7256/" target="_blank" className="ml-2 mr-6 hover:text-white">
              @denverdavis
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <a href="https://github.com/Magoon18" target="_blank" className="ml-2 mr-2 hover:text-white">
              @Magoon
            </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xl">
                Email:
              </h2>
              <a className="text-indigo-400 leading-relaxed ml-1">
              Denverdavis1209@gmail.com
              </a>
              {/*<h2 className="title-font font-semibold text-white tracking-widest text-xl ml-1">
                Phone:
              </h2>
              <p className="leading-relaxed ml-1">(909)552-4299</p>*/}
          </div>
        </div>
        {/* <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}