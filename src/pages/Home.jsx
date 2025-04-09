import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaHtml5, FaJava, FaPython, FaNodeJs, FaReact, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMongodb, SiApachecassandra, SiApachekafka, SiApachespark, SiFastapi, SiJavascript, SiTailwindcss, SiJira, SiPostman, SiOracle } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { HiExternalLink } from 'react-icons/hi';

const Home = () => {
  const techStack = [
    {
      category: 'Backend',
      icons: [
        { name: 'Java', icon: <FaJava className="text-red-500" />, color: 'text-red-500' },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" />, color: 'text-green-500' },
        { name: 'Python', icon: <FaPython className="text-blue-400" />, color: 'text-blue-400' },
        { name: 'FastAPI', icon: <SiFastapi className="text-green-600" />, color: 'text-green-600' },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, color: 'text-green-600' },
      ],
    },
    {
      category: 'Databases & Storage',
      icons: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, color: 'text-blue-600' },
        { name: 'Cassandra', icon: <SiApachecassandra className="text-blue-300" />, color: 'text-blue-300' },
        { name: 'Oracle', icon: <SiOracle className="text-red-500" />, color: 'text-blue-300' },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, color: 'text-green-500' },
      ],
    },
    {
     category: 'Tools',
     icons: [
       { name: 'Kafka', icon: <SiApachekafka className="text-black dark:text-white" />, color: 'text-black dark:text-white' },
       { name: 'Spark', icon: <SiApachespark className="text-orange-500" />, color: 'text-orange-500' },
       { name: 'Git', icon: <FaGitAlt className="text-orange-600" />, color: 'text-orange-600' },
       { name: 'VS Code', icon: <VscVscode className="text-blue-500" />, color: 'text-blue-500' },
       { name: 'Postman', icon: <SiPostman className="text-orange-500" />, color: 'text-orange-500' },
       { name: 'Jira', icon: <SiJira className="text-blue-600" />, color: 'text-blue-600' },
     ],
    },
    {
      category: 'Cloud & DevOps',
      icons: [
        { name: 'AWS', icon: <FaAws className="text-orange-500" />, color: 'text-orange-500' },
        { name: 'Docker', icon: <FaDocker className="text-blue-400" />, color: 'text-blue-400' },
      ],
    },
    {
      category: 'Frontend',
      icons: [
        { name: 'React', icon: <FaReact className="text-blue-500" />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, color: 'text-yellow-500' },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, color: 'text-orange-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" />, color: 'text-teal-500' },
      ],
    },
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
              src="/profile.jpeg"
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
                to="/about"
                className="btn border border-accent text-accent hover:bg-accent hover:text-white flex items-center justify-center text-sm" // Reduced text size
              >
                About me
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
            </motion.div>
          </div>
        </motion.div>

        {/* New Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16" // Reduced top margin
        >
          <h3 className="text-3xl font-semibold text-center mb-10">Technologies I Work With</h3>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
