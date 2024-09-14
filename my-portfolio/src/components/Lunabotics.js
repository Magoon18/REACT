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
        <video
          width = "300" height = "600" controls>
          <source src={"./Minibot.mov"} type="video/mp4"/>
        </video>
        {/*<video
          width = "250" height = "250" controls>
          <source src={"./Minibot.mov"} type="video/mp4"/>
        </video>*/}
        <iframe
        width = "500"
        height = "250"
        src = {"https://youtu.be/1HSG13fAoxk"}
        frameborder = "0"
        allowFullScreen
        />
        <div className="flex flex-wrap mr-0">
          {luna.map((project) => (
            <a
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 size-full object-cover object-center"
                  src={project.image}
                />
                {/*<video
                  width = "750" height = "500" controls>
                  <source src={project.video} type="video/mp4"/>
                </video>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>*/}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}