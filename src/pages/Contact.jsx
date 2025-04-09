import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create the mailto link with subject and body
    const subject = `${formData.name} would like to contact you!`;
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `.trim();

    // Encode the subject and body for the URL
    const mailtoLink = `mailto:ochirtulgan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the default email client
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: 'Email',
      value: 'ochirtulgan@gmail.com',
      link: 'mailto:ochirtulgan@gmail.com',
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: 'Phone',
      value: '+1 (641) 451-3027',
      link: 'tel:+16414513027',
    },
    {
      icon: <UserIcon className="h-6 w-6" />,
      title: 'LinkedIn',
      value: 'Ochirtulga Namjim',
      link: 'https://www.linkedin.com/in/ochirtulga-namjim/',
    },
  ];

  return (
    <section className="section pt-32">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-4"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="bg-accent p-3 rounded-lg">{info.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-gray-300 hover:text-accent transition-colors"
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-4"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 bg-secondary border border-gray-700 rounded-lg focus:outline-none focus:border-accent text-white resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 