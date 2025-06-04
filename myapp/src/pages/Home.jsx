// src/pages/Home.jsx
import { FaLinkedin, FaRegEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import developer_male from "../assets/developer_male.jpg";
import "../App.css";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center md:justify-between p-6 max-w-6xl mx-auto min-h-screen"
    >
      {/* Content Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-purple-700 dark:text-purple-400">
          Shyam Sundhar S
        </h1>
        <h2 className="text-2xl text-gray-400 dark:text-white">
          Aspiring Full Stack & Software Developer
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Motivated student with keen interest in problem-solving, web
          development, and building innovative software solutions.
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Known for resilience, adaptability, and passion for continuous
          learning.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-500 hover:scale-110 transition"
          >
            <SiLeetcode className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:scale-110 transition"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="/Shyam_CV.pdf"
            download
            className="bg-purple-600 text-white px-6 py-2 rounded shadow hover:bg-purple-700 transition"
          >
            ⬇️ Download CV
          </a>
          <a
            href="#contact"
            className="border border-purple-600 text-purple-600 px-6 py-2 rounded shadow hover:bg-purple-50 dark:hover:bg-purple-900 transition flex items-center gap-2"
          >
            <FaRegEnvelope className="text-lg" />
            Contact Me
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src={developer_male}
            alt="Developer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-100 dark:to-purple-900 opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Home;
