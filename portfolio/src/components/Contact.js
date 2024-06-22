import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import './Contact.css'
export default function Contact() {
  return (
    <section id="contacts">
    <div className="text-center bg-gray-900 text-gray-400 py-10">
      <h1 className="text-3xl font-medium title-font mb-4 text-white">Contact Me</h1>
      <p className="mb-10">Feel free to reach out through any of the platforms below.</p>
      <div className="flex justify-center space-x-10">
        <a href="https://github.com/PiyushiAnand" target="_blank" rel="noopener noreferrer">
          <img src='./github-mark.png' alt='GitHub' className="icon-size" />
        </a>
        <a href="https://www.linkedin.com/in/piyushi-anand-43b156254/" target="_blank" rel="noopener noreferrer">
          <img src='./linkedin.png' alt='LinkedIn' className="icon-size" />
        </a>
        <a href="mailto:piyushianand2128@gmail.com">
          <EnvelopeIcon className="icon-size text-gray-400 hover:text-white" />
        </a>
      </div>
    </div>
    </section>
  );
}

