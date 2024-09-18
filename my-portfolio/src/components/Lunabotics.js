import React from "react";
import { luna } from "../data";

export default function Lunabotics() {
  return (
    <section id="lunabotics" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/*<CodeIcon className="mx-auto inline-block w-10 mb-4" />*/}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            NASA Lunabotics 2024 - UCF Florida
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            NASA competition with collaboration with University of Central Florida to develop a rover for moon and/or mars missions.
          </p>
        </div>
        <div className="flex flex-wrap mr-4">
          {luna.map((project) => (
            <a
              key1={project.image}
              key2={project.video}
              className="sm:w-1/2 w-100 p-1">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="inset-0 size-max object-cover object-center"
                  src={project.image}
                />
                <video
                  controls>
                  <source src={project.video} type="video/mp4"/>
                </video>
                <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={'https://youtube.com/embed/1HSG13fAoxk'}>
                </iframe>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

