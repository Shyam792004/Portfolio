import React from 'react';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { PiCertificateBold } from 'react-icons/pi';

const Certificates = () => {
  const certificateData = [
    {
      title: 'NPTEL Courses',
      courses: ['Programming in Java', 'Introduction to Operating Systems', 'Blockchain and Its Applications'],
    },
    {
      title: 'Cisco Networking Academy',
      courses: ['Networking Basics'],
    },
    {
      title: 'Coursera',
      courses: ['How Computers Work', 'Digital Marketing'],
    },
    {
      title: 'iamneo.ai',
      courses: [
        'REST Application Development Using Spring Boot and JPA',
        'Testing Methodology (Basics)',
      ],
    },
  ];

  const codingPlatforms = [
    {
      name: 'Codolio',
      desc: 'Complete coding profile and achievements',
      link: '#',
    },
    {
      name: 'HackerRank',
      desc: 'Programming challenges and certifications',
      link: '#',
    },
    {
      name: 'LeetCode',
      desc: 'Algorithm and data structure practice',
      link: '#',
    },
    {
      name: 'GeeksforGeeks',
      desc: 'Coding practice and problem solving',
      link: '#',
    },
  ];

  return (
    <div id="certificates" className="text-center py-16 px-4 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-purple-700 dark:text-purple-400">Certificates & Achievements</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-base">
        Continuous learning and skill development through various courses and platforms.
      </p>

      {/* Certificates Section */}
      <h3 className="text-2xl font-bold mt-12 mb-6 text-black dark:text-white">Professional Certificates</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {certificateData.map((cert, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 text-left shadow-sm hover:shadow-md transition duration-300"
          >
            <h4 className="text-xl font-semibold flex items-center gap-2 mb-3 text-black dark:text-white">
              <PiCertificateBold className="text-purple-600 dark:text-purple-400 text-2xl" />
              {cert.title}
            </h4>
            <ul className="space-y-2">
              {cert.courses.map((course, i) => (
                <li
                  key={i}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md"
                >
                  • {course}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Coding Platforms */}
      <h3 className="text-2xl font-bold mt-16 mb-8 text-black dark:text-white">Coding Platforms & Profiles</h3>
      <div className="grid md:grid-cols-4 gap-6">
        {codingPlatforms.map((platform, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            <FaCode className="mx-auto text-2xl text-purple-600 dark:text-purple-600 mb-3" />
            <h4 className="text-xl font-semibold text-black dark:text-white">{platform.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{platform.desc}</p>
            <a
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium text-black dark:text-white border border-black dark:border-white px-4 py-2 rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              View Profile <FaExternalLinkAlt className="inline ml-1 text-xs " />
            </a>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        {[
          { label: 'Certificates', value: '8+' },
          { label: 'Platforms', value: '4' },
          { label: 'Domains', value: 'Multiple' },
          { label: 'Learning', value: 'Ongoing' },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-purple-100 dark:bg-purple-900 rounded-xl py-6 px-4"
          >
            <p className="text-2xl font-bold text-purple-700 dark:text-purple-300">{item.value}</p>
            <p className="text-gray-700 dark:text-gray-200 mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
