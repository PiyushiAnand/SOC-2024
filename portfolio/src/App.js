// import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';

function App(){
  return(
    <div className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
      <Project/>
      <Skills/>
      <Hobbies/>
      <Contact/>
    </div>
  )
};
export default App;


// import logo from './logo.svg';
// import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
