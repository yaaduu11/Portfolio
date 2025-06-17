import { useState } from 'react';
import { Sun } from 'lucide-react';
import profilePicture2 from "./assets/yadu_new.jpeg";

import About_me from './components/About-me';
import { ProjectsSection } from './components/Projects';

import { FaLinkedin, FaXTwitter, FaGithub, FaRegMoon } from "react-icons/fa6";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('about');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <About_me />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return (
          <div className="pt-6 mt-8 text-center border-t">
            <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg">
              I'm always open to discussing new opportunities, interesting projects, or potential collaborations. 
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="space-y-4">
              <p className="text-xl">
                Email: <a href="mailto:yadukrishnankzr@gmail.com" className="text-blue-400 underline transition-colors hover:text-blue-300">yadukrishnankzr@gmail.com</a>
              </p>
              <div className="flex justify-center gap-6 mt-8 text-2xl">
                <a href="https://github.com/yaaduu11/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/yadu-krishnan-k/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
                  <FaLinkedin />
                </a>
                <a href="https://x.com/yadukriishnan/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
                  <FaXTwitter />
                </a>
              </div>
            </div>
          </div>
        );
      default:
        return <About_me />;
    }
  };

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-300 font-sans`}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');`}
      </style>

      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex justify-end pt-2">
          <button 
            onClick={toggleDarkMode} 
            className="text-2xl transition-transform duration-200 hover:scale-110"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun /> : <FaRegMoon />}
          </button>
        </div>

        <div className="text-center mt-7">
          <h1 className="text-4xl font-bold">Yadu Krishnan</h1>
          <p className="mt-2 text-lg">Software Developer, System Designer & Startup Enthusiast</p>

          <div className="w-56 h-56 mx-auto mt-6 overflow-hidden rounded-full shadow-lg">
            <img src={profilePicture2} alt="Profile" className="object-cover w-full h-full" />
          </div>

          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a href="https://github.com/yaaduu11/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yadu-krishnan-k/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://x.com/yadukriishnan/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-blue-400">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-12 mb-8">
          <nav className="flex px-8 py-3 space-x-8 bg-gray-500 rounded-full bg-opacity-10 backdrop-blur-sm">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'bg-gray-500 text-white shadow-lg'
                    : 'hover:bg-opacity-20 hover:bg-gray-500 text-gray-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="transition-all duration-500 ease-in-out">
          {renderContent()}
        </div>

        <footer className="py-2 mt-12 text-gray-500 border-t">
          <div className="text-base text-start">
            <em>Last updated on 15th June 2025.</em> I can be reached at{' '}
            <a href="mailto:yadukrishnankzr@gmail.com" className="text-blue-400 underline transition-colors hover:text-blue-300">
              yadukrishnankzr@gmail.com
            </a>
          </div>
          <div className="mt-6 text-lg text-center">
            Yadukrishnan K &copy; 2025
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;