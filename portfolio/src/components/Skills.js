import React from 'react'
import {skills} from '../data'
import { CheckBadgeIcon} from '@heroicons/react/24/solid';
export default function Skills() {
  return (
    <section id="skills" >
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills and Technologies
          </h1>
          <p>Some of the skills I have </p>
      </div>
      <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        {
            skills.map((skill) =>
                <div key={skill} className='p-2 sm:w-1/2 w-full'>
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                    <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                        {skill}
                        </span>
                    </div>
                </div>
            )
        }
      </div>
      </div>
      </section>
  )
}
