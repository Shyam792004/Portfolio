// // src/pages/Projects.jsx
// import { FaExternalLinkAlt, FaCode,FaGithub } from "react-icons/fa";

// const projects = [
//   {
//     title: "Vehicle Management Website",
//     image: "../../public/vehicle.jpg",
//     desc: "A comprehensive vehicle management system built with modern web technologies. Features include vehicle registration, maintenance tracking, and user management.",
//     tech: ["React.js", "Spring Boot", "MySQL", "REST API"],
//   },
//   {
//     title: "Hotel Management Website",
//     image: "../../public/hotel.jpg",
//     desc: "A modern hotel booking and management platform with user-friendly interface. Includes room booking, customer management, and billing system.",
//     tech: ["React.js", "Node.js", "MongoDB", "CSS"],
//   },
//   {
//     title: "Crime Website",
//     image: "../../public/crime.jpg",
//     desc: "An informational website about crime awareness and reporting. Built with vanilla web technologies focusing on responsive design and accessibility.",
//     tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
//   },
//   {
//     title: "ATM Interface",
//     image: "../../public/atm.jpg",
//     desc: "A console-based ATM simulation application demonstrating object-oriented programming principles. Features include account management and transaction processing.",
//     tech: ["Java", "OOPs", "Data Structures", "Algorithms"],
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold text-purple-600 text-center mb-2">
//         My Projects
//       </h2>
//       <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
//         A collection of projects showcasing my skills in web development,
//         software engineering, and problem-solving.
//       </p>
//       <div className="grid md:grid-cols-2 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white dark:bg-black text-black dark:text-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-[1.02]"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="h-56 w-full object-cover"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-bold">{project.title}</h3>
//               <p className="mt-1">{project.desc}</p>
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {project.tech.map((t, i) => (
//                   <span
//                     key={i}
//                     className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm px-3 py-1 rounded-full"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="mt-4 flex gap-3">
//                 <button className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded">
//                   <FaExternalLinkAlt /> Demo
//                 </button>
//                 <button className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-1 rounded text-black dark:text-white">
//                   <FaGithub /> github
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Project summary cards */}
//       <div className="mt-14 bg-purple-100 dark:bg-purple-900 p-6 rounded-lg grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
//         <div>
//           <p className="text-3xl font-bold text-purple-700 dark:text-white">4</p>
//           <p className="text-gray-600 dark:text-gray-200">Projects</p>
//         </div>
//         <div>
//           <p className="text-3xl font-bold text-purple-700 dark:text-white">8+</p>
//           <p className="text-gray-600 dark:text-gray-200">Technologies</p>
//         </div>
//         <div>
//           <p className="text-3xl font-bold text-purple-700 dark:text-white">2</p>
//           <p className="text-gray-600 dark:text-gray-200">Full Stack</p>
//         </div>
//         <div>
//           <p className="text-3xl font-bold text-purple-700 dark:text-white">100%</p>
//           <p className="text-gray-600 dark:text-gray-200">Completed</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const majorProjects = [
  {
    title: "Vehicle Management Website",
    desc: "A comprehensive vehicle management system with features like registration, maintenance tracking, and user control.",
    demo: "#",
    github: "#",
  },
  {
    title: "Hotel Management Website",
    desc: "Hotel booking and customer management system with billing, built using MERN stack.",
    demo: "#",
    github: "#",
  },
  {
    title: "Crime Awareness Website",
    desc: "Responsive static website for spreading awareness on crimes and reporting mechanisms.",
    demo: "#",
    github: "#",
  },
  {
    title: "ATM Console App",
    desc: "Console-based ATM simulation using OOPs principles, supporting basic transactions.",
    demo: "#",
    github: "#",
  },
];

const minorProjects = [
  {
    title: "TailWindCSS FruitShop",
    desc: "Responsive static website for spreading awareness on crimes and reporting mechanisms.",
    demo: "#",
    github: "#",
  },
  {
    title: "ATM Console App",
    desc: "Console-based ATM simulation using OOPs principles, supporting basic transactions.",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="p-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-purple-600 text-center mb-2">
        My Projects
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
        Explore a collection of major and minor software projects I've built.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Major Projects Card */}
        <div className="bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md p-6
                        transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-purple-600">Major Projects</h3>
          {majorProjects.map((project, index) => (
            <div
              key={index}
              className="mb-8 p-4 rounded-md bg-gray-50 dark:bg-gray-900
                         transition-shadow duration-300 hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm mb-3">{project.desc}</p>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700 transition-colors"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Minor Projects Card */}
        <div className="bg-white dark:bg-black text-black dark:text-white rounded-lg shadow-md p-6
                        transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-purple-600">Minor Projects</h3>
          {minorProjects.map((project, index) => (
            <div
              key={index}
              className="mb-8 p-4 rounded-md bg-gray-50 dark:bg-gray-900
                         transition-shadow duration-300 hover:shadow-lg"
            >
              <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
              <p className="text-sm mb-3">{project.desc}</p>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-purple-600 text-white px-4 py-1 rounded hover:bg-purple-700 transition-colors"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-1 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
