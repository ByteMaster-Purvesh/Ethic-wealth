import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../context/auth.context'
import Lenis from '@studio-freight/lenis'
import Navbar from '../components/Navbar/Navbar'
import Home from '../components/Main/Home'
import About from '../components/Main/About'
import Contact from '../components/Main/Contact'
import Server from '../components/Main/Server'
import TeamMember from '../pages/TeamMember'
import Testimonial from '../pages/Testimonial'
import Project from '../pages/Project'
import Feature from '../pages/Feature'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <AuthProvider>
      <Router>
        <div className="font-sans antialiased text-gray-800">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/server" element={<Server />} />
              <Route path="/pages/team-member" element={<TeamMember />} />
              <Route path="/pages/testimonial" element={<Testimonial />} />
              <Route path="/pages/project" element={<Project />} />
              <Route path="/pages/feature" element={<Feature />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
