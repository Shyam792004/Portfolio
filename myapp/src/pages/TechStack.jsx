// src/pages/TechStack.jsx
const TechStack = () => (
  <section className="p-6 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-purple-600 mb-4">Tech Stack</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {[
        'Html',
        'CSS',
        'JavaScript',
        'Bootstrap',
        'TailwindCSS',
        'React.js',
        'MySQL',
        'Spring Boot',
        'Java',
        'Java OOPS',
        'DSA',
        'Github',
        

      ].map((tech) => (
        <div
          key={tech}
          className="p-4 bg-gray-200 dark:bg-gray-800 rounded text-center font-medium text-black dark:text-white transition transform hover:scale-105 hover:shadow-lg dark:hover:shadow-purple-500/30"
        >
          {tech}
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
