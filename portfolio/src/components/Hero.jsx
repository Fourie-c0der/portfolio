import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>Fourie van der Walt</h1>
      <p className="location">📍 Pretoria, South Africa</p>
      <p className="description">
      Hi, I’m Fourie van der Walt, a Junior Software Engineer and freelance developer.
      I create tailored web and software solutions using technologies like C#, React, and JavaScript. Let’s create something great!
      </p>
      <div className="social-links">
        <a href="mailto:vanderwaltfourie6@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/Fourie-c0der" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.instagram.com/jedi_master_fourie/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </section>
  )
}

export default Hero