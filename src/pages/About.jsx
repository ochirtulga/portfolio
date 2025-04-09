import { motion } from 'framer-motion';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { FaReact, FaNodeJs, FaJava, FaHtml5, FaPython, FaDocker, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiPostgresql, SiMongodb, SiApachehadoop, SiFastapi, SiApachecassandra, SiOracle, SiJavascript, SiTailwindcss, SiJira, SiPostman, SiApachekafka, SiApachespark } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const About = () => {
  const skills = [
    { 
      name: 'Backend', 
      items: [
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
        { name: 'Python', icon: <FaPython className="text-blue-400" /> },
        { name: 'FastAPI', icon: <SiFastapi className="text-green-600" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> }
      ] 
    },
    { 
      name: 'Tools', 
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
        { name: 'Kafka', icon: <SiApachekafka className="text-black" /> },
        { name: 'Spark', icon: <SiApachespark className="text-orange-500" /> },
        { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
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
        { name: 'Hadoop', icon: <SiApachehadoop className="text-yellow-400" />}
      ] 
    },
    { 
      name: 'Frontend', 
      items: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
        { name: 'HTML/CSS', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-500" /> }
      ] 
    },
  ];

  const experiences = [
    {
      title: 'Software Engineer III',
      company: 'Thermo Fisher Scientific',
      period: 'Jul 2022 - Mar 2025',
      duration: '2 years 9 months',
      description: `Development of high-performance backend systems and middleware applications, focusing on system integration and performance optimization.

Achievements:
Improved internal search endpoint performance by 50 percent resulting in improved user experience
Designed and implemented an internal UAM system that resulted in centralized and easy access control between internal service-to-service and user-to-service
Developed middleware applications to facilitate seamless integration with existing endpoints, enabling smooth adoption of Python for future development and integration efforts
Improved the data serialization and validation for Python projects by implementing Pydantic models
Developed scalable, secure, and highly performing Spring endpoints that fulfill all customer requirements`
    },
    {
      title: 'Database Engineer',
      company: 'KHAN Bank',
      period: 'Feb 2018 - Sep 2021',
      duration: '3 years 9 months',
      description: `Led the project to introduce the first distributed platform in the company, which includes transactional, analytics, and historical layers, resulting in a 50 percent reduction in licensing costs and enabling significant future opportunities.

Achievements:
Created a customer behavioral scoring system using Hadoop and Spark, which reduced the loan decision-making duration from 3 days to 3 hours
Created a centralized data lake, leading to improvements in performance and fault tolerance of historical data pipelines
Enabled data-driven decision-making opportunities by introducing a new distributed platform
Rebuilt the customer-facing system on the distributed platform, decreased downtime by 90 percent
Organized multiple training sessions for the development team, and the continuous support resulted in a seamless transition to the distributed platform`
    },
  ];

  return (
    <section className="section pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-5xl mx-auto">
          I am a passionate Software Engineer with over 6 years of experience delivering impactful solutions across diverse
industries. Successfully introduced innovative systems that significantly shaped company growth and future
strategies, including licensing cost reduction by 50 percent. Handled transition and migration of systems and
datasets seamlessly. Designed systems and data models that handle millions of requests, processing complex
datasets, and driving business success through tailored technical solutions.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
                className="bg-secondary p-6 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <BriefcaseIcon className="h-6 w-6 text-accent mr-4 flex-shrink-0" />
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <div className="flex justify-between items-center text-gray-400">
                      <span>{exp.company}</span>
                      <span>{exp.duration} • {exp.period}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  {exp.description.split('\n\n').map((section, idx) => {
                    if (section.startsWith('Achievements:')) {
                      return (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-lg font-medium text-accent flex items-center">
                            <span className="w-8 h-0.5 bg-accent mr-3"></span>
                            {section.split(':')[0]}
                          </h4>
                          <ul className="space-y-4">
                            {section.split('\n').slice(1).map((item, itemIdx) => (
                              <motion.li 
                                key={itemIdx} 
                                className="flex items-start group"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * itemIdx }}
                              >
                                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-accent mr-3 group-hover:scale-125 transition-transform"></span>
                                <span className="text-gray-300 group-hover:text-white transition-colors">{item.trim()}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="text-gray-300 leading-relaxed">
                        {section}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 