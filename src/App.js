import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import Navigation from './pages/Shared/Navigation/Navigation';
import Footer from './pages/Shared/Footer/Footer';
import ProjectModal from './pages/Projects/ProjectModal/ProjectModal';
import AboutMe from './pages/AboutMe/AboutMe';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/blog" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projectmodal/:projectId" element={<ProjectModal />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
