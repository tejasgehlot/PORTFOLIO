import { useEffect, useLayoutEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import careerCopilotImage from '../career copilot image.png';
import invoiceFlowImage from '../InvoiceFlow image.png'; 
import VOXA from '../VOXA.png';
import CareerCopilotCaseStudy from './CareerCopilotCaseStudy';
import VoxaCaseStudy from './VoxaCaseStudy';
import InvoiceFlowCaseStudy from './InvoiceFlowCaseStudy';
import LiveDemoPage from "./LiveDemoPage";

const ROUTES = {
  portfolio: '/',
  careercopstudy: '/case-studies/career-copilot',
  invoiceflowstudy: '/case-studies/invoiceflow',
  voxacasestudy: '/case-studies/voxa',
  livedemo: '/live-demo',
}

const normalizePath = (pathname) => {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed === '' ? '/' : trimmed
}

const pageToPath = (page) => ROUTES[page] ?? '/'

const pathToPage = Object.fromEntries(
  Object.entries(ROUTES).map(([page, path]) => [normalizePath(path), page])
)

const getPageFromPath = (pathname) => pathToPage[normalizePath(pathname)] ?? 'portfolio'

function App() {
  const [theme, setTheme] = useState('light')
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'portfolio'
    }

    return getPageFromPath(window.location.pathname)
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    const currentPath = normalizePath(window.location.pathname)
    const targetPath = normalizePath(pageToPath(currentPage))
    const hasMatchingState = window.history.state?.page === currentPage

    if (currentPage !== 'portfolio' && !hasMatchingState && currentPath === targetPath) {
      window.history.replaceState({ page: 'portfolio', synthetic: true }, '', pageToPath('portfolio'))
      window.history.pushState({ page: currentPage, synthetic: true }, '', targetPath)
      return
    }

    if (!hasMatchingState || currentPath !== targetPath) {
      window.history.replaceState({ page: currentPage }, '', targetPath)
    }
  }, [])

  useEffect(() => {
    if (currentPage !== 'portfolio') {
      setIsMobileMenuOpen(false)
    }
  }, [currentPage])

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [currentPage])

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const navigate = (page) => {
    if (page === 'portfolio') {
      if (currentPage !== 'portfolio') {
        window.history.back()
      }

      return
    }

    const nextPath = pageToPath(page)

    if (normalizePath(window.location.pathname) === normalizePath(nextPath)) {
      setCurrentPage(page)
      return
    }

    window.history.pushState({ page }, '', nextPath)
    setCurrentPage(page)
  }

  if (currentPage === 'careercopstudy') {
    return <CareerCopilotCaseStudy onNavigate={navigate} />
  }

  if (currentPage === 'voxacasestudy') {
    return <VoxaCaseStudy onNavigate={navigate} />
  }

  if (currentPage === 'invoiceflowstudy') {
    return <InvoiceFlowCaseStudy onNavigate={navigate} />
  }

  if (currentPage === "livedemo") {
    return <LiveDemoPage setCurrentPage={navigate} />;
}

  return (
    <div className="portfolio-page">
      <nav>
        <div className="nav-logo">TG</div>
        <div className="nav-center">
          <button className="toggle-btn" onClick={toggleTheme} aria-label="Toggle dark/light mode" />
          <button
            className="nav-menu-button"
            type="button"
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <div id="primary-navigation" className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
          <a href="#work" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-eyebrow">Java Full Stack Developer — Vadodara, India</div>
          <div className="hero-name">
            <span>TEJAS</span>
            <span>GEHLOT</span>
          </div>
          <div className="hero-sub">
            <p className="hero-desc">
              B.Tech student in AI & Data Science, building full-stack web applications with Spring Boot, React, and MySQL.
              Currently sharpening both ends of the stack.
            </p>
            <div className="hero-status">
              <span className="dot"></span>AVAILABLE FOR OPPORTUNITIES<br />
              <span style={{ display: 'block', marginTop: '0.3rem' }}>
                Parul University · 2023–2027 · CGPA 8.3
              </span>
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="section-header">
            <span className="section-label">Selected Projects</span>
            <span className="section-count">03</span>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-thumb">
                <img
                  src={careerCopilotImage}
                  alt="CareerCopilot Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="project-tags">
                <span className="tag">Spring Boot</span>
                <span className="tag">React</span>
                <span className="tag">MySQL</span>
                <span className="tag">Docker</span>
                <span className="tag">JWT</span>
              </div>
              <div className="project-title">CareerCopilot</div>
              <div className="project-desc">
                AI-powered career guidance platform helping students and job seekers choose suitable career paths based on skills
                and goals. Includes personalized roadmaps and skill gap analysis.
              </div>
              <div className="project-actions">
                <button
                  className="project-link project-link-primary"
                  onClick={() => navigate('careercopstudy')}
                >
                  View Case Study
                </button>
                <div className="project-links-secondary">
                  <a
                    className="project-link"
                    href="https://github.com/ramanhero/career-compass.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <button
    className="project-link"
    onClick={() => navigate("livedemo")}
>
    Live Demo
</button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb">
                <img
                  src={invoiceFlowImage}
                  alt="InvoiceFlow Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="project-tags">
                <span className="tag">Spring Boot</span>
                <span className="tag">React</span>
                <span className="tag">MySQL</span>
                <span className="tag">JWT</span>
              </div>
              <div className="project-title">InvoiceFlow</div>
              <div className="project-desc">
                Invoice and client/staff management platform for businesses. Create, track, and organize invoices with payment
                status, reducing manual work and improving workflow management.
              </div>
              <div className="project-actions">
                <button
                  className="project-link project-link-primary"
                  onClick={() => navigate('invoiceflowstudy')}
                >
                  View Case Study
                </button>
                <div className="project-links-secondary">
                  <a
                    className="project-link"
                    href="https://github.com/tejasgehlot/InvoiceFlow.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <button
    className="project-link"
    onClick={() => navigate("livedemo")}
>
    Live Demo
</button>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-thumb">
                <img
                  src={VOXA}
                  alt="VOXA Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div className="project-tags">
                <span className="tag">Spring Boot</span>
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">JWT</span>
                <span className="tag">AI</span>
              </div>
              <div className="project-title">VOXA</div>
              <div className="project-desc">
                AI-powered civic complaint resolution platform for smart-city workflows, combining photos, AI triage,
                department routing, audit trails, and role-based governance in a production-style backend.
              </div>
              <div className="project-actions">
                <button
                  className="project-link project-link-primary"
                  onClick={() => navigate('voxacasestudy')}
                >
                  View Case Study
                </button>
                <div className="project-links-secondary">
                  <a
                    className="project-link"
                    href="https://github.com/tejasgehlot/voxa-command-center.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <button
    className="project-link"
    onClick={() => navigate("livedemo")}
>
    Live Demo
</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-header">
            <span className="section-label">Skills & Tools</span>
          </div>
          <div className="skills-grid">
            <div className="skill-group">
              <div className="skill-group-title">Languages</div>
              <div className="skill-items">
                <span className="skill-item">Java</span>
                <span className="skill-item">SQL</span>
                <span className="skill-item">TypeScript</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML</span>
                <span className="skill-item">CSS</span>
                <span className="skill-item">C</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-title">Backend</div>
              <div className="skill-items">
                <span className="skill-item">Spring Boot</span>
                <span className="skill-item">REST APIs</span>
                <span className="skill-item">JPA/Hibernate</span>
                <span className="skill-item">JDBC</span>
                <span className="skill-item">Spring Security</span>
                <span className="skill-item">JWT Auth</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-title">Frontend</div>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">Tailwind CSS</span>
                <span className="skill-item">Routing</span>
                <span className="skill-item">API Integration</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-title">Database & Cloud</div>
              <div className="skill-items">
                <span className="skill-item">MySQL</span>
                <span className="skill-item">MongoDB</span>
                <span className="skill-item">AWS</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-title">Tools</div>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">Docker</span>
                <span className="skill-item">Postman</span>
                <span className="skill-item">IntelliJ</span>
                <span className="skill-item">Maven</span>
                <span className="skill-item">VS Code</span>
              </div>
            </div>
            <div className="skill-group">
              <div className="skill-group-title">Core</div>
              <div className="skill-items">
                <span className="skill-item">OOP</span>
                <span className="skill-item">Exception Handling</span>
                <span className="skill-item">Multithreading</span>
                <span className="skill-item">DSA</span>
              </div>
            </div>
          </div>
        </section>

<section className="about-section" id="about">

  {/* ---------- ABOUT ME ---------- */}
  <div className="about-left">
    <div className="about-title">
      ABOUT ME
    </div>

    <div className="about-body">
      B.Tech student in Artificial Intelligence & Data Science at Parul University,
      with a strong focus on full-stack Java development. I build real-world web
      applications using React, Spring Boot, and MySQL — learning by shipping.

      <br />
      <br />

      I see myself as a full-stack developer, currently deepening my frontend skills
      while keeping Java backend as my core strength.
    </div>

    <div className="edu-block">
      <div className="edu-item">
        <div>
          <div className="edu-name">Parul University</div>
          <div className="edu-detail">
            B.Tech — AI & Data Science · CGPA 8.3
          </div>
        </div>
        <div className="edu-year">2023 – 2027</div>
      </div>

      <div className="edu-item">
        <div>
          <div className="edu-name">SRVM Sr. Sec. School</div>
          <div className="edu-detail">
            Class 12: 89.67% · Class 10: 89.47%
            <br />
            JEE Mains: 79.9 percentile
          </div>
        </div>
        <div className="edu-year">2022</div>
      </div>
    </div>
  </div>

  {/* ---------- WHAT SHAPED ME ---------- */}
  <div className="about-right">

    <div className="section-label" style={{ marginBottom: "1rem" }}>
      WHAT SHAPED ME
    </div>

    <div className="achievements-list">
      <div className="achievement-item">
        <span className="ach-num">01</span>
        PUCode Hackathon 3.0 participant — Parul University, 2026
      </div>

      <div className="achievement-item">
        <span className="ach-num">02</span>
        Codeversity National Hackathon — IIT Gandhinagar, 2026
      </div>

      <div className="achievement-item">
        <span className="ach-num">03</span>
        Completed DSA with Java — Alpha Course, Apna College
      </div>

      <div className="achievement-item">
        <span className="ach-num">04</span>
        Cyber Security Workshop — ST7 Surveillance Solutions
      </div>
    </div>

    <div style={{ marginTop: "2.5rem" }}>
      <div
        className="section-label"
        style={{ marginBottom: "1rem" }}
      >
        LANGUAGES
      </div>

      <div
        className="skill-items"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
        }}
      >
        <span className="skill-item">English</span>
        <span className="skill-item">Hindi</span>
        <span className="skill-item">Gujarati</span>
      </div>
    </div>

  </div>

</section>

        <section className="contact-section" id="contact">
          <div className="contact-top">
            <div className="contact-heading">LET'S<br />CONNECT</div>
            <div className="contact-links">
              <a className="contact-link" href="https://www.linkedin.com/in/tejas-gehlot-50473a28b/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="contact-link" href="https://github.com/tejasgehlot" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="contact-link" href="https://leetcode.com/u/tejas_gehlot_18/" target="_blank" rel="noreferrer">
                LeetCode
              </a>
            </div>
          </div>
          <div className="contact-email">
  <a
    className="contact-email-link"
    href="https://mail.google.com/mail/?view=cm&fs=1&to=tejasgehlot7@gmail.com&su=Let's%20Connect!"
    target="_blank"
    rel="noreferrer" 
  >
    tejasgehlot7@gmail.com
  </a>
</div>
          <footer>
            <span>© 2026 Tejas Gehlot</span>
            <span>Java Full Stack Developer</span>
            <span>Vadodara, India</span>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App
