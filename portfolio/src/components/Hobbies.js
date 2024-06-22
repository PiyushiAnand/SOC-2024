import React from 'react'
import {AcademicCapIcon,MusicalNoteIcon} from '@heroicons/react/24/solid'
export default function Hobbies() {
  return (
    <>
     <section id="know_more" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
     <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white ">
          About me
        </h1>
        </div>
        </div>
        </section>
    <section id="hobbies" className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-20">
      <MusicalNoteIcon className="mx-auto inline-block w-12 mb-4 text-green-400" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
      
          Hobbies
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Music has always been a significant part of my life. I enjoy playing both the keyboard and guitar, and I have a keen interest in music production. You can listen to some of the ringtones I've created by clicking <a href="https://drive.google.com/drive/folders/1P6FaGgMR5vbfO_Dcax5nnFwea6NqNxqr?usp=sharing" className="text-blue-500 hover:text-blue-700 underline">here</a>.
        </p>
      </div>
    </div>
  </section>
  <section id="education" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AcademicCapIcon className="mx-auto inline-block w-12 mb-4 text-green-400" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Education
          </h1>
          <ul className="lg:w-2/3 mx-auto leading-relaxed text-base list-disc list-inside">
            <li className="mb-4">
              <strong>Delhi Public School, Azad Nagar,Kanpur</strong>
              <br />
              Class 10
            </li>
            <li className="mb-4">
              <strong>The Jain International School, Kanpur</strong>
              <br />
              Class 12
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
  )
}
