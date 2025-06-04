import { useEffect, useState } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between flex-wrap p-4 shadow-md z-50 ${dark ? 'bg-gray-900' : 'bg-white'}`}>
      <h1 className="text-xl font-bold">Shyam Sundhar S</h1>

      {/* Hamburger */}
      <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Links */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col lg:flex-row lg:flex absolute lg:static top-full left-0 w-full lg:w-auto ${dark ? 'bg-gray-900' : 'bg-white'} lg:bg-transparent z-10 lg:space-x-6`}
      >
        <li><a href="#home" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>About Me</a></li>
        <li><a href="#certificates" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Certificates</a></li>
        <li><a href="#techstack" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Tech Stack</a></li>
        <li><a href="#projects" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" className="block px-4 py-2" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li className="px-4 py-2">
          <button onClick={() => setDark(!dark)} className="text-xl">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
