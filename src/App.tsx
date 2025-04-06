import { useState } from "react";
import { FaLinkedin, FaXTwitter, FaGithub, FaRegMoon, FaSun } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import profilePicture from "./assets/yadu.jpeg";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };
  

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors duration-300 font-sans`}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');`}
      </style>

      <div className="p-6 mx-auto max-w-7xl">
        <div className="flex justify-end pt-2">
          <button onClick={toggleDarkMode} className="text-2xl">
            {darkMode ? <FaSun /> : <FaRegMoon />}
          </button>
        </div>

        <div className="text-center mt-7">
          <h1 className="text-4xl font-bold">Yadukrishnan K</h1>
          <p className="mt-2 text-lg">Software Developer, Tinkerer & Startup Enthusiast</p>

          <div className="w-48 h-48 mx-auto mt-6 overflow-hidden rounded-full">
            <img src={profilePicture} alt="Profile" className="object-cover w-full h-full" />
          </div>

          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a href="https://www.linkedin.com/in/yadu-krishnan-k/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://x.com/Yadukrishnan616/" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://github.com/yaaduu11/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://leetcode.com/u/Yadukrishnan_k/" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
          </div>
        </div>

        <div className="pt-6 mt-8 border-t">
          <p className="leading-relaxed text-justify text-[1.3rem] font-[Playfair]">
            I am a hobbyist software developer and a tinkerer.
            <br /><br />
            I specialize in full-stack development, proficient with modern tools and frameworks including Node.js, React.js, Express.js, TypeScript, Next.js, Redux, MongoDB, PostgreSQL, Socket.io, and WebRTC.
            <br /><br />
            My tech journey started early in life, sparked by a deep fascination for innovation and building things from scratch. I began coding in 12th grade with C++, and since then, I've grown into a full-stack engineer with experience in both foundational and cutting-edge technologies.
            <br /><br />
            My architectural knowledge covers Microservices, Repository and MVC patterns, and includes practical experience integrating systems with Kafka, Redis, RabbitMQ, Docker, Kubernetes, and AWS. I'm also skilled in database design and have worked with services such as Razorpay, Stripe, Cloudinary, Firebase, Node Mailer, Google Dialogflow, OAuth 2.0, JWT, and Postman.
            <br /><br />
            I focus on writing clean, scalable, and maintainable code and enjoy seeing projects through from concept to deployment, especially with CI/CD practices and cloud-native tools.
            <br /><br />
            Beyond work, I’m a constant learner—engaged in open-source contributions, tech communities, and coding challenges. I believe in innovation through collaboration. Let’s connect!
          </p>
        </div>

        <footer className="py-2 mt-4 text-gray-500 border-t">
          <div className="text-base text-start">
            <em>Last updated on 6th April 2025.</em> I can be reached at <a href="mailto:yadu@gmail.com" className="text-blue-400 underline">yadukrishnankzr@gmail.com</a>
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
