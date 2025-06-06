import { motion } from 'framer-motion';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

const Certificates = () => {
  const certificates = [
    
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'Apr 2025',
      description: 'Validated understanding of core AWS services, security, architecture, pricing, and support, making it a good starting point for my cloud career.',
      link: 'https://www.credly.com/badges/4d742d8f-0d3a-4a6a-8d5a-a2ad8bbf6de5/linked_in_profile' // Add your credential link here
    },
    {
      title: 'COBIT Foundation',
      issuer: 'ISACA',
      date: 'Dec 2019',
      description: 'Demonstrated knowledge in enterprise IT governance and management using the COBIT framework. Gained expertise in aligning IT strategy with business goals, managing risk, and evaluating IT performance. ',
      link: 'https://www.credly.com/badges/2f509f61-b1cd-4ff5-b2bb-f22230fb1579' // Add your credential link here
    },
    {
      title: 'Apache Cassnadra 3.x Developer Associate',
      issuer: 'DataStax',
      date: 'Apr 2019',
      description: 'Demonstrated ability to understand distributed system, design and deploy scalable, highly available, and fault-tolerant systems with distributed database',
      link: 'https://www.datastax.com/academy/certs/lookup/9d630d61-3770-4846-a38f-25482e926c53/index.html' // Add your credential link here
    }
    // Add more certificates as needed
  ];

  return (
    <div className="min-h-screen bg-primary text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Certificates</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in various technologies and methodologies.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <AcademicCapIcon className="h-6 w-6 text-accent mr-4 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 mb-4">
                    <span className="mb-1 sm:mb-0 sm:mr-4">{cert.issuer}</span>
                    <span>•</span>
                    <span className="sm:ml-4">{cert.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4">{cert.description}</p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-white transition-colors inline-flex items-center"
                    >
                      View Credential
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates; 