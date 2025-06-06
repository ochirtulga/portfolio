import { motion, useScroll, useTransform } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon, LightBulbIcon, TrophyIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';

// Timeline Item Component
const TimelineItem = ({ data, index, isLeft }) => {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "center center"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [isLeft ? -50 : 50, 0]);
  
  const Icon = data.type === 'education' ? AcademicCapIcon : BriefcaseIcon;
  
  return (
    <motion.div 
      ref={itemRef}
      style={{ opacity, x }}
      className={`flex w-full ${isLeft ? 'justify-start' : 'justify-end'} mb-12`}
    >
      <div className={`w-5/12 ${!isLeft && 'order-1'}`}>
        <div className="bg-secondary p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-2">
            <Icon className="h-6 w-6 text-accent mr-3 flex-shrink-0" />
            <h3 className="text-xl font-semibold">{data.title}</h3>
          </div>
          <div className="text-gray-400 mb-3">{data.company || data.institution}</div>
          <div className="text-sm text-gray-500 mb-4">{data.period}</div>
          
          {/* Key Learnings Section */}
          {data.keyLearnings && data.keyLearnings.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <LightBulbIcon className="h-5 w-5 text-accent mr-2" />
                <h4 className="text-lg font-medium text-white">Key Learnings</h4>
              </div>
              <ul className="space-y-2">
                {data.keyLearnings.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-accent mr-2"></span>
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Awards Section */}
          {data.awards && data.awards.length > 0 && (
            <div className="mt-4">
              <div className="flex items-center mb-2">
                <TrophyIcon className="h-5 w-5 text-accent mr-2" />
                <h4 className="text-lg font-medium text-white">Awards</h4>
              </div>
              <ul className="space-y-2">
                {data.awards.map((award, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-accent mr-2"></span>
                    <span className="text-gray-300">{award}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  // Career timeline data
  const careerTimeline = [
    {
      type: 'work',
      title: 'Software Engineer III',
      company: 'Thermo Fisher Scientific',
      period: 'Jul 2022 - Mar 2025',
      keyLearnings: [
        'Continuous Integration and Continuous Deployment',
        'Cloud Infrastructure and Deployment',
        'Containerization and Orchestration',
        'Microservice Architecture Design Patterns',
        'Logging Metrics and Debugging'
      ],
      awards: [
      ]
    },
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Khan Bank',
      period: 'Feb 2018 - Sep 2021',
      keyLearnings: [
        'Distributed Systems Design',
        'Microservice Architectures',
        'Real-time Event Handling',
        'Batch Data Processing',
        'Data Pipeline Architecture',
        'System Administration'
      ],
      awards: [
        'Best Young Employee of the Year',
        '1st place at Cyber Mock Drill'
      ]
    },
    // Add more career items as needed
  ];

  // Education timeline data
  const educationTimeline = [
    {
      type: 'education',
      title: 'Master of Computer Science',
      institution: 'Maharishi International University',
      period: 'Oct 2021 - Dec 2023',
      keyLearnings: [
        'Cloud Computing',
        'Modern Web Application Frameworks',
        'Advanced Algorithms and Data Structures'
      ],
      awards: [
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Information Technology',
      institution: 'Mongolian University of Science and Technology',
      period: 'Sep 2014 - Jun 2018',
      keyLearnings: [
        'Computer science fundamentals',
        'Software development lifecycle',
        'Database Management Systems'
      ],
      awards: [
        'Best Alumni Award',
        '1st place at Tech Innovation Competition',
        'Credit rewards for academic excellence'
      ]
    },
    // Add more education items as needed
  ];

  // Create a chronological timeline with alternating education and career items
  // First, sort each array by date (oldest first)
  const sortedCareer = [...careerTimeline].sort((a, b) => {
    const aYear = parseInt(a.period.split(' - ')[0].split(' ')[1]);
    const bYear = parseInt(b.period.split(' - ')[0].split(' ')[1]);
    return aYear - bYear; // Reversed order: oldest first
  });
  
  const sortedEducation = [...educationTimeline].sort((a, b) => {
    const aYear = parseInt(a.period.split(' - ')[0].split(' ')[1]);
    const bYear = parseInt(b.period.split(' - ')[0].split(' ')[1]);
    return aYear - bYear; // Reversed order: oldest first
  });
  
  // Create a custom timeline that alternates between education and career
  // based on chronological order
  const timelineItems = [];
  let careerIndex = 0;
  let educationIndex = 0;
  
  // Get the year from both arrays
  const getYear = (item) => parseInt(item.period.split(' - ')[0].split(' ')[1]);
  
  // Merge items in chronological order (oldest first), alternating when possible
  while (careerIndex < sortedCareer.length || educationIndex < sortedEducation.length) {
    const hasCareer = careerIndex < sortedCareer.length;
    const hasEducation = educationIndex < sortedEducation.length;
    
    // If we have both types, compare years and take the oldest
    if (hasCareer && hasEducation) {
      const careerYear = getYear(sortedCareer[careerIndex]);
      const educationYear = getYear(sortedEducation[educationIndex]);
      
      if (careerYear <= educationYear) {
        timelineItems.push(sortedCareer[careerIndex]);
        careerIndex++;
      } else {
        timelineItems.push(sortedEducation[educationIndex]);
        educationIndex++;
      }
    } 
    // If we only have career items left
    else if (hasCareer) {
      timelineItems.push(sortedCareer[careerIndex]);
      careerIndex++;
    } 
    // If we only have education items left
    else {
      timelineItems.push(sortedEducation[educationIndex]);
      educationIndex++;
    }
  }

  return (
    <section className="section pt-32 pb-20">
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
            I am a passionate Software Engineer with 7 years of experience delivering impactful solutions across diverse
            industries. Proactive, curious, and collaborative—eager to learn from others, contribute to cross-functional teams, and translate product requirements into robust technical solutions. Takes ownership, communicates clearly, and consistently seeks out opportunities for technical and product improvement.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-12 text-center">My Journey</h2>
          
          {/* Timeline container */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
            
            {/* Timeline items */}
            <div className="relative">
              {timelineItems.map((item, index) => (
                <TimelineItem 
                  key={index} 
                  data={item} 
                  index={index} 
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
