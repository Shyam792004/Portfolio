// src/pages/Contact.jsx
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => (
  <section className="p-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-4 text-center">
      Get in Touch
    </h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <p className="mb-4 text-gray-700 dark:text-white">
          I'm currently open to new opportunities and collaborations.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 bg-purple-100 p-4 rounded shadow">
            <FaPhone className="text-purple-600 text-2xl" />
            <span className="text-gray-800">+91 9384750414</span>
          </div>
          <div className="flex items-center gap-4 bg-purple-100 p-4 rounded shadow">
            <FaEnvelope className="text-purple-600 text-2xl" />
            <span className="text-gray-800">shyammakesh79@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 bg-purple-100 p-4 rounded shadow">
            <FaMapMarkerAlt className="text-purple-600 text-2xl" />
            <span className="text-gray-800">Coimbatore, Tamil Nadu</span>
          </div>
        </div>
      </div>

      <form className="space-y-4 bg-white p-6 rounded shadow">
        <div>
          <label className="block mb-1 text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Message</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
            placeholder="Tell me about your project or just say hello!"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-purple-700 transition"
        >
          <FaPaperPlane /> Send Message
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
