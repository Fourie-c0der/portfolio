import { Link } from 'react-router-dom'
import CV from '../assets/Fourie_van_der_Walt_CV.pdf'

function Header() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = 'mailto:vanderwaltfourie6@gmail.com';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo glow-effect">
        <Link to="/">Fourie van der Walt</Link>
      </div>
      <nav>
        <ul>
          <li>
            <a className="glow-effect" href="#hero" onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}>
              About
            </a>
          </li>
          <li>
            <a className="glow-effect" href="#projects" onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}>
              Projects
            </a>
          </li>
          <li>
            <a className="glow-effect" href={CV} download="Fourie_van_der_Walt_CV.pdf">
              CV
            </a>
          </li>
          <li>
            <a className="glow-effect" href="#contact" onClick={handleEmailClick}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
      <div className="language-switch">
        <Link to="/cs"></Link>
      </div>
    </header>
  )
}

export default Header
