import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faNode, 
  faPython,
  faGit,
  faSwift,
  faJava,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';

// Add TypeScript and C# icons as SVG components
const TypeScriptIcon = () => (
  <svg viewBox="0 0 128 128" className="tech-icon">
    <path fill="#ffffff" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"/>
  </svg>
);

const CSharpIcon = () => (
  <svg viewBox="0 0 128 128" className="tech-icon">
    <path fill="#ffffff" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zM82 99.8l-25.3 14.6-25.3-14.6V39.5l25.3-14.6L82 39.5v60.3z"/>
    <path fill="#ffffff" d="M97.5 56.8l7.2-4.1c.4-.2.7-.5.7-.9v-8.2c0-.4-.3-.7-.7-.9l-7.2-4.1c-.4-.2-.9-.2-1.3 0L89 42.7c-.4.2-.7.5-.7.9v8.2c0 .4.3.7.7.9l7.2 4.1c.4.2.9.2 1.3 0zm-10.5 6l-7.2 4.1c-.4.2-.7.5-.7.9v8.2c0 .4.3.7.7.9l7.2 4.1c.4.2.9.2 1.3 0l7.2-4.1c.4-.2.7-.5.7-.9v-8.2c0-.4-.3-.7-.7-.9l-7.2-4.1c-.4-.2-.9-.2-1.3 0z"/>
  </svg>
);

function TechStack() {
  const technologies = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJs },
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNode },
    { name: 'Python', icon: faPython },
    { name: 'Git', icon: faGit },
    { name: 'Swift', icon: faSwift },
    { name: 'Java', icon: faJava },
    { name: 'Docker', icon: faDocker },
    { name: 'TypeScript', icon: TypeScriptIcon },
    { name: 'C#', icon: CSharpIcon },
  ];

  return (
    <section className="tech-stack">
      <h2>Technologies I Work With</h2>
      <div className="tech-stack-container">
        <div className="tech-stack-scroll">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-item">
              {typeof tech.icon === 'function' ? (
                <tech.icon />
              ) : (
                <FontAwesomeIcon icon={tech.icon} className="tech-icon" />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
          {/* Duplicate items for infinite scroll effect */}
          {technologies.map((tech, index) => (
            <div key={`duplicate-${index}`} className="tech-item">
              {typeof tech.icon === 'function' ? (
                <tech.icon />
              ) : (
                <FontAwesomeIcon icon={tech.icon} className="tech-icon" />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack; 