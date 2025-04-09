import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Behavioral Scoring',
      description: 'A full-stack e-commerce platform with user authentication and payment integration.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Node.js', 'MongoDB'],
      demo: '#',
      code: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with modern web technologies.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      demo: '#',
      code: '#',
    },
    {
      title: 'Platform Migration',
      description: 'A collaborative task management application with real-time updates.',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      demo: '#',
      code: '#',
    },
  ];

  const filters = ['all', 'frontend', 'backend', 'fullstack'];

  return (
    <section className="section pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents
            a unique challenge and solution in software development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full capitalize transition-colors ${
                filter === f
                  ? 'bg-accent text-white'
                  : 'bg-secondary text-gray-300 hover:bg-secondary/80'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="bg-secondary rounded-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-accent hover:text-accent/80"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                    Live Demo
                  </a>
                  <a
                    href={project.code}
                    className="flex items-center gap-2 text-accent hover:text-accent/80"
                  >
                    <CodeBracketIcon className="h-5 w-5" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 