import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import DetailedAbout from './components/detailedAbout'

function App() {

  return (
    <main className='text-gray-400 bg-gray-900 body-font'>
      <Navbar />
      <About />
      <DetailedAbout />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
