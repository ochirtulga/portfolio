import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaReact, FaNodeJs, FaJava, FaHtml5, FaPython, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMongodb, SiApachehadoop, SiFastapi, SiLeetcode, SiApachecassandra, SiOracle, SiJavascript, SiTailwindcss, SiJira, SiPostman, SiApachekafka, SiApachespark, SiKubernetes, SiJenkins, SiAngular, SiTypescript } from 'react-icons/si';
import { HiExternalLink } from 'react-icons/hi';

const Home = () => {
  const skills = [
    { 
      name: 'Backend', 
      items: [
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
        { name: 'FastAPI', icon: <SiFastapi className="text-green-600" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> }
      ] 
    },
    { 
      name: 'Tools', 
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'Kafka', icon: <SiApachekafka className="text-black" /> },
        { name: 'Spark', icon: <SiApachespark className="text-orange-500" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'Jira', icon: <SiJira className="text-blue-600" /> }
      ] 
    },
    { 
      name: 'Database & Storage', 
      items: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
        { name: 'Cassandra', icon: <SiApachecassandra className='text-blue-300' /> },
        { name: 'Oracle', icon: <SiOracle className="text-red-500" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'Hadoop', icon: <SiApachehadoop className="text-yellow-400" />},
      ] 
    },
    { 
      name: 'Frontend', 
      items: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'Angular', icon: <SiAngular className="text-red-500" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> }
      ] 
    },
    {
      name: 'Cloud & DevOps',
      items: [
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
        { name: 'Kubernetes', icon: <SiKubernetes className="text-blue-400" /> },
        { name: 'Jenkins', icon: <SiJenkins className="text-orange-500" /> }
      ]
    }
  ];

  return (
    <section className="section pt-24 pb-16"> {/* Reduced top padding */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12" // Reduced gap
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-lg relative group" // Slightly smaller image
          >
            <img
              src="/profile.jpg"
              alt="Ochirtulga Namjim"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="eager"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/favicon.svg'; // Ensure favicon.svg is in public
              }}
            />
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Introduction Text */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-4" // Reduced bottom margin
            >
              Hi, I'm <span className="text-accent">Ochi</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-6" // Reduced bottom margin & font size
            >
              Backend Developer | Software Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-md text-gray-400 max-w-xl mb-8" // Reduced bottom margin & font size
            >
              I create scalable, solid Backend applications with modern technologies.
              Let's build something amazing together!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center md:justify-start gap-3" // Reduced gap
            >
              {/* Buttons */}
              <Link
                to="/contact"
                className="btn btn-primary flex items-center justify-center text-sm" // Reduced text size
              >
                Get in Touch
              </Link>
              <Link
                to="/projects"
                className="btn border border-accent text-accent hover:bg-accent hover:text-white flex items-center justify-center text-sm" // Reduced text size
              >
                View My Work
              </Link>
              <a
                href="/resume.pdf" // Updated path assuming resume is in public
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-accent text-accent hover:bg-accent hover:text-white flex items-center justify-center gap-1.5 text-sm" // Reduced gap & text size
              >
                <HiExternalLink className="text-md" /> {/* Adjusted icon size */}
                View Resume
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center md:justify-start gap-4 mt-6" // Reduced gap & top margin
            >
              {/* Social Icons */}
              <a href="https://www.linkedin.com/in/ochirtulga-namjim/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <FaLinkedin className="text-xl" /> {/* Reduced icon size */}
              </a>
              <a href="https://www.github.com/ochirtulga" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <FaGithub className="text-xl" /> {/* Reduced icon size */}
              </a>
              <a href="https://instagram.com/_ochrono_" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <FaInstagram className="text-xl" /> {/* Reduced icon size */}
              </a>
              <a href="https://twitter.com/ochirtulga" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <FaTwitter className="text-xl" /> {/* Reduced icon size */}
              </a>
              <a href="https://leetcode.com/ochirtulga" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                <SiLeetcode className="text-xl" /> {/* Reduced icon size */}
              </a>
            </motion.div>
          </div>
        </motion.div>


         {/* Skills Section */}
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mt-12 mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {skills.map((category) => (
              <div
                key={category.name}
                className="bg-secondary p-6 rounded-lg hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold mb-4 text-accent text-center">{category.name}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        {/* New Tech Stack Section */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16" // Reduced top margin
        > */}
          {/* <h3 className="text-3xl font-semibold text-center mb-10">Technologies I Work With</h3>
           <div className="space-y-10">
            {techStack.map((category) => (
              <div key={category.category}>
                <h4 className="text-xl font-semibold mb-4 text-accent">{category.category}</h4>
                <motion.div
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.05 }}
                >
                  {category.icons.map((tech) => (
                    <motion.div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg group transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      title={tech.name} // Tooltip on hover
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className={`text-4xl mb-2 ${tech.color} group-hover:text-white transition-colors`}>
                        {tech.icon}
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Home;
