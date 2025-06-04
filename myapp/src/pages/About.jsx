import { FaGraduationCap, FaBriefcase, FaLanguage, FaBook } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';

const About = () => {
  return (
    <section id="about" className="p-6 max-w-5xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-purple-700 dark:text-purple-400 mb-2">
        About Me
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-10">
        Passionate about technology and continuous learning, with a strong foundation in computer science and software development.
      </p>

      {/* Education Section */}
      <div className="mb-10 p-6 rounded-xl bg-gray-100 dark:bg-[#111827] shadow-md">
        <h3 className="text-2xl font-bold flex items-center gap-2 mb-6 text-black dark:text-white">
          <FaGraduationCap className="text-purple-600 dark:text-purple-400" /> Education
        </h3>
        <div className="space-y-6">
          {[
            {
              title: 'B.E. Computer Science Engineering',
              school: 'Sri Krishna College of Technology',
              tags: ['Present', 'CGPA: 7.68'],
            },
            {
              title: 'Class XII',
              school: 'Venkatalakshmi Matric Higher Secondary School',
              tags: ['2022', '93%'],
            },
            {
              title: 'Class X',
              school: 'GRD-CPF Matriculation School',
              tags: ['2020', '79%'],
            },
          ].map(({ title, school, tags }, index) => (
            <div key={index} className="flex gap-4 items-start">
              <FaBook className="text-purple-600 mt-1 dark:text-purple-400" />
              <div>
                <h4 className="font-semibold text-lg text-black dark:text-white">{title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{school}</p>
                <div className="flex gap-2 mt-1 text-sm flex-wrap">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-white text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-10 p-6 rounded-xl bg-gray-100 dark:bg-[#111827] shadow-md">
        <h3 className="text-2xl font-bold flex items-center gap-2 mb-6 text-black dark:text-white">
          <FaBriefcase className="text-purple-600 dark:text-purple-400" /> Experience
        </h3>
        <div className="flex gap-4 items-start">
          <FaBook className="text-purple-600 mt-1 dark:text-purple-400" />
          <div>
            <h4 className="font-semibold text-lg text-black dark:text-white">Java Developer Intern</h4>
            <p className="text-gray-600 dark:text-gray-300">Octanet</p>
            <span className="inline-block mt-1 mb-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-white text-xs">
              1-month internship
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Developed ATM interface with Java + OOPs
            </p>
          </div>
        </div>
      </div>

      {/* Languages & Soft Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Languages */}
        <div className="p-6 rounded-xl bg-gray-100 dark:bg-[#111827] shadow-md">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-black dark:text-white">
            <FaLanguage className="text-purple-600 dark:text-purple-400" /> Languages
          </h3>
          <div className="flex gap-2 flex-wrap">
            {['Tamil', 'English'].map((lang) => (
              <span
                key={lang}
                className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-white text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="p-6 rounded-xl bg-gray-100 dark:bg-[#111827] shadow-md">
          <h3 className="text-xl font-bold flex items-center gap-2 mb-4 text-black dark:text-white">
            <GiSkills className="text-purple-600 dark:text-purple-400" /> Soft Skills
          </h3>
          <div className="flex gap-2 flex-wrap">
            {['Problem Solving', 'Communication', 'Teamwork', 'Logical Thinking', 'Time Management'].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-700 dark:text-white text-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
