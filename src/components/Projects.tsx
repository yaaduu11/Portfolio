import React, { useState, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";
import Crevio_logo from '../assets/crevio-logo.jpg'

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  technologies, 
  liveLink, 
  githubLink 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 30;
      const rotateY = (centerX - x) / 30;
      
      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
  };
  
  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    }
    setIsHovered(false);
  };
  
  return (
    <div 
      ref={cardRef}
      className="bg-[#1E1E1E] rounded-xl overflow-hidden transition-all duration-500 ease-out shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : ''}`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-black transition-transform duration-300 bg-white rounded-full hover:scale-110"
          >
            <ExternalLink size={20} />
          </a>
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 text-white transition-transform duration-300 bg-black rounded-full hover:scale-110"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className="mb-6 text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-sm text-gray-300 bg-black rounded-full bg-opacity-40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const projects: ProjectProps[] = [
    {
        title: 'Crevio - Freelancer Platform',
        description: 'A robust microservices-based platform where clients and freelancers connect, collaborate, and manage projects seamlessly. Features include real-time chat, video calls, Stripe-powered subscriptions, AI chatbot assistance, and a dynamic project system.',
        image: Crevio_logo, 
        technologies: ['React', 'Node.js', 'TypeScript', 'Stripe', 'Socket.IO', 'MongoDB', 'Redis', 'Tailwind CSS', 'Dialogflow', 'Docker', 'JWT', 'OAuth'],
        liveLink: '#',
        githubLink: 'https://github.com/yaaduu11/Crevio', 
    },
    {
        title: 'MacHive - Apple-Focused E-commerce Platform',
        description: 'An e-commerce platform tailored for Apple products, offering cart and return functionality, wallet management, secure checkout with Razorpay, and user authentication via Firebase and JWT.',
        image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        technologies: ['JavaScript', 'Node.js', 'Express', 'HTML', 'Bootstrap', 'MongoDB', 'Razorpay', 'Firebase', 'JWT'],
        liveLink: '#',
        githubLink: 'https://github.com/yaaduu11/MacHive-Ecommerce',
        },
    {
        title: 'Inker - Open Source Blogging Platform',
        description: 'Inker is an open-source, community-driven blogging platform built by the Biteflow bootcamp. Designed for simplicity and scalability, it offers rich text editing, post publishing, and author management. Contributed to core development and feature enhancements.',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
        liveLink: 'https://inker-dev.vercel.app/',
        githubLink: 'https://github.com/TheByteFlow/Inker',
    }

  ];
  
  return (
    <div className="py-12 border-t">
      {/* <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Featured Projects</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-80">
          Explore my recent work showcasing my ability to create engaging, functional, and visually appealing web applications using modern technologies.
        </p>
      </div> */}
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
};