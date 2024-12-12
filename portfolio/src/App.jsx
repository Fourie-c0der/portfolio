import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './styles/main.scss'



function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <TechStack />
          {/*To add Experience.jsx*/}
          <Projects />
        </main>
      </div>
    </Router>
  )
}

export default App