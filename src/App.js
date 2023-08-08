import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Ui from './components/Ui';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Qualification from './components/Qualification';

function App() {
  useEffect(() => {
    Aos.init()
  }, []);

  return (<>
    <Header></Header>
    <main>
      <Ui>
      </Ui>
      <Skills />
      <Qualification />
      <Project />
      <Contact />
    </main>

    <Footer></Footer>
  </>
  );
}

export default App;
