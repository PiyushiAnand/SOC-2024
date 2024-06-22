import React from 'react'
import { CodeBracketIcon} from '@heroicons/react/24/solid'
import { projects } from "../data";
export default function Project() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-12 mb-4 text-green-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Some of my Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the projects I have worked on since I joined my engineering course.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projects.map((project) => (
            <a href={project.link} key={project.image} className="p-4">
              <div className="w-full h-48 relative">
                <img alt="gallery" className="w-full h-full object-cover object-center" src={project.image} />
                <div className="absolute inset-0 px-8 py-10 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-75 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        </div>
    </section>
  );
}
