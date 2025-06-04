// src/App.jsx
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Certificates from './pages/Certificates';
import TechStack from './pages/TechStack';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="dark:bg-black dark:text-white">
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="certificates"><Certificates /></section>
      <section id="techstack"><TechStack /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
