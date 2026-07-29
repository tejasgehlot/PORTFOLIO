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
        {/* ===== HERO ===== */}
        <section className="hero">
         <div className="hero-japanese">
                <span>開</span>
                <span>発</span>
                <span>者</span>
              </div>

          <div className="hero-eyebrow">
            <span className="dot"></span>
            Available for opportunities &nbsp;&middot;&nbsp; Vadodara, India
          </div>

          <div className="hero-top">
            <div className="hero-name">
              TEJAS<br />
              <span className="outline">GEHLOT</span>
            </div>
            <div className="hero-stats">
              <span className="label">B.Tech AI &amp; DS</span>
              <span className="label">Parul University</span>
              <span className="label">CGPA 8.3</span>
              <span className="label">2023 &ndash; 2027</span>
            </div>
          </div>

          <div className="hero-bottom">
            <div>
              <div className="hero-role mono">Java Full Stack Developer</div>
              <p className="hero-desc">
                B.Tech student in AI &amp; Data Science, building full-stack web applications with Spring Boot, React, and MySQL. Currently sharpening both ends of the stack.
              </p>
            </div>
            <div className="hero-pills">
              <span className="pill">Spring Boot</span>
              <span className="pill">React</span>
              <span className="pill">MySQL</span>
              <span className="pill">Docker</span>
              <span className="pill">JWT</span>
            </div>
          </div>
        </section>

        {/* ===== SELECTED WORK ===== */}
        <section className="work" id="work">
          <div className="section-header">
            <div className="section-heading">SELECTED<br />WORK</div>
            <div className="section-meta">
              <div className="label">03 Projects</div>
              <div className="label" style={{ marginTop: '0.3rem' }}>2025 &ndash; 2026</div>
            </div>
          </div>

          {/* 01 — image left, content right */}
          <div className="project-row">
            <div className="project-thumb">
              <img src={careerCopilotImage} alt="CareerCopilot preview" />
              <span className="wmark">01</span>
            </div>
            <div className="project-content">
              <div>
                <div className="project-meta-row">
                  <span className="label">CareerCopilot</span>
                  <span className="label">2026</span>
                </div>
                <div className="project-name">AI-Powered Career<br />Guidance Platform</div>
                <p className="project-desc">
                  AI-powered career guidance platform helping students and job seekers choose suitable career paths based on skills and goals. Includes personalized roadmaps and skill gap analysis.
                </p>
                <div className="project-tags">
                  <span className="pill">Spring Boot</span>
                  <span className="pill">React</span>
                  <span className="pill">MySQL</span>
                  <span className="pill">Docker</span>
                  <span className="pill">JWT</span>
                </div>
              </div>
              <div className="project-actions">
                <button className="project-link project-link-primary" onClick={() => navigate('careercopstudy')}>
                  Case Study &rarr;
                </button>
                <a className="project-link" href="https://github.com/ramanhero/career-compass.git" target="_blank" rel="noreferrer">
                  GitHub &#8599;
                </a>
                <button className="project-link" onClick={() => navigate('livedemo')}>
                  Live Demo &#8599;
                </button>
              </div>
            </div>
          </div>

          {/* 02 — content left, image right (alternated) */}
          <div className="project-row flip">
            <div className="project-content">
              <div>
                <div className="project-meta-row">
                  <span className="label">InvoiceFlow</span>
                  <span className="label">2026</span>
                </div>
                <div className="project-name">Multi-Tenant<br />Billing SaaS</div>
                <p className="project-desc">
                  Invoice and client/staff management platform for businesses. Create, track, and organize invoices with payment status, reducing manual work and improving workflow management.
                </p>
                <div className="project-tags">
                  <span className="pill">Spring Boot</span>
                  <span className="pill">React</span>
                  <span className="pill">MySQL</span>
                  <span className="pill">JWT</span>
                </div>
              </div>
              <div className="project-actions">
                <button className="project-link project-link-primary" onClick={() => navigate('invoiceflowstudy')}>
                  Case Study &rarr;
                </button>
                <a className="project-link" href="https://github.com/tejasgehlot/InvoiceFlow.git" target="_blank" rel="noreferrer">
                  GitHub &#8599;
                </a>
                <button className="project-link" onClick={() => navigate('livedemo')}>
                  Live Demo &#8599;
                </button>
              </div>
            </div>
            <div className="project-thumb">
              <img src={invoiceFlowImage} alt="InvoiceFlow preview" />
              <span className="wmark">02</span>
            </div>
          </div>

          {/* 03 — image left, content right */}
          <div className="project-row">
            <div className="project-thumb">
              <img src={VOXA} alt="VOXA preview" />
              <span className="wmark">03</span>
            </div>
            <div className="project-content">
              <div>
                <div className="project-meta-row">
                  <span className="label">VOXA</span>
                  <span className="label">2026</span>
                </div>
                <div className="project-name">AI Civic Complaint<br />Resolution Platform</div>
                <p className="project-desc">
                  AI-powered civic complaint resolution platform for smart-city workflows, combining photos, AI triage, department routing, audit trails, and role-based governance in a production-style backend.
                </p>
                <div className="project-tags">
                  <span className="pill">Spring Boot</span>
                  <span className="pill">React</span>
                  <span className="pill">TypeScript</span>
                  <span className="pill">JWT</span>
                  <span className="pill">AI</span>
                </div>
              </div>
              <div className="project-actions">
                <button className="project-link project-link-primary" onClick={() => navigate('voxacasestudy')}>
                  Case Study &rarr;
                </button>
                <a className="project-link" href="https://github.com/tejasgehlot/voxa-command-center.git" target="_blank" rel="noreferrer">
                  GitHub &#8599;
                </a>
                <button className="project-link" onClick={() => navigate('livedemo')}>
                  Live Demo &#8599;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CRAFT / SKILLS ===== */}
        <section className="skills-section" id="skills">
          <div className="section-header">
            <div className="section-heading">CRAFT</div>
            <span className="label">Skills &amp; Tools</span>
          </div>

          <div className="skills-columns">
            <div className="skill-col">
              <span className="label">Backend Core</span>
              <div className="skill-col-heading" style={{ marginTop: '1.1rem' }}>Spring<br />Boot</div>
              <div className="skill-col-list">
                REST APIs &middot; JPA/Hibernate<br />
                JDBC &middot; Spring Security<br />
                JWT Authentication
              </div>
            </div>
            <div className="skill-col">
              <span className="label">Languages</span>
              <div className="skill-col-heading" style={{ marginTop: '1.1rem', marginBottom: '0.2rem' }}>Java</div>
              <div className="skill-col-heading outline" style={{ fontSize: '1.5rem', marginBottom: '0.6rem' }}>&amp; SQL</div>
              <div className="skill-col-list">
                TypeScript &middot; JavaScript &middot; C<br />
                HTML &middot; CSS<br />
                OOP &middot; Multithreading &middot; DSA
              </div>
            </div>
            <div className="skill-col">
              <span className="label">Frontend</span>
              <div className="skill-col-heading" style={{ marginTop: '1.1rem', marginBottom: '0.2rem' }}>React</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 300, color: 'var(--text3)', letterSpacing: '-0.01em', marginBottom: '0.6rem' }}>&amp; Growing</div>
              <div className="skill-col-list">
                Tailwind CSS &middot; TypeScript<br />
                Routing &middot; Forms<br />
                API Integration
              </div>
            </div>
          </div>

          <div className="tools-strip">
            <span className="label">Database, Cloud &amp; Tools</span>
            <span className="pill">MySQL</span>
            <span className="pill">MongoDB</span>
            <span className="pill">AWS</span>
            <span className="pill">Git</span>
            <span className="pill">Docker</span>
            <span className="pill">Postman</span>
            <span className="pill">IntelliJ</span>
            <span className="pill">Maven</span>
            <span className="pill">VS Code</span>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="about-section" id="about">
          <div className="section-header">
            <div className="section-heading">ABOUT</div>
            <span className="label">Tejas Gehlot</span>
          </div>

          <div className="about-grid">
            <div className="about-col left">
              <div className="about-body">
                <p>
                  B.Tech student in Artificial Intelligence &amp; Data Science at Parul University, with a strong focus on full-stack Java development. I build real-world web applications using React, Spring Boot, and MySQL &mdash; learning by shipping.
                </p>
                <p>
                  I see myself as a full-stack developer, currently deepening my frontend skills while keeping Java backend as my core strength.
                </p>
              </div>

              <span className="label">Education</span>
              <div className="edu-block">
                <div className="edu-item">
                  <div>
                    <div className="edu-name">Parul University</div>
                    <div className="edu-detail">B.Tech &mdash; AI &amp; Data Science &middot; CGPA 8.3</div>
                  </div>
                  <span className="label">2023&ndash;27</span>
                </div>
                <div className="edu-item">
                  <div>
                    <div className="edu-name">SRVM Sr. Sec. School</div>
                    <div className="edu-detail">
                      Class 12: 89.67% &middot; Class 10: 89.47%<br />
                      JEE Mains: 79.9 percentile
                    </div>
                  </div>
                  <span className="label">2022</span>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem' }}>
                <span className="label">Languages</span>
                <div className="lang-row">
                  <span className="pill">English</span>
                  <span className="pill">Hindi</span>
                  <span className="pill">Gujarati</span>
                </div>
              </div>
            </div>

            <div className="about-col">
              <span className="label" style={{ display: 'block', marginBottom: '1.5rem' }}>What Shaped Me</span>
              <div className="timeline">
                <div className="timeline-item">
                  <span className="timeline-dot"></span>
                  <span className="label">01 &middot; 2026</span>
                  <div className="timeline-title" style={{ marginTop: '0.35rem' }}>PUCode Hackathon 3.0</div>
                  <div className="timeline-desc">Parul University &mdash; competitive hackathon. Real engineering under real deadline pressure.</div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot"></span>
                  <span className="label">02 &middot; 2026</span>
                  <div className="timeline-title" style={{ marginTop: '0.35rem' }}>Codeversity National Hackathon</div>
                  <div className="timeline-desc">IIT Gandhinagar &mdash; national-level competition with teams from across India.</div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot outline"></span>
                  <span className="label">03</span>
                  <div className="timeline-title" style={{ marginTop: '0.35rem' }}>DSA with Java &mdash; Alpha Course</div>
                  <div className="timeline-desc">Apna College &mdash; rigorous data structures &amp; algorithms training in Java.</div>
                </div>
                <div className="timeline-item">
                  <span className="timeline-dot outline"></span>
                  <span className="label">04</span>
                  <div className="timeline-title" style={{ marginTop: '0.35rem' }}>Cyber Security Workshop</div>
                  <div className="timeline-desc">ST7 Surveillance Solutions &mdash; hands-on exposure to security practices and real-world systems.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="contact-section" id="contact">
          <span className="label" style={{ display: 'block', marginBottom: '2rem' }}>Get In Touch</span>

          <div className="contact-top">
            <div className="contact-heading">
              LET'S<br />BUILD<br />
              <span className="outline">TOGETHER</span>
            </div>
            <div className="contact-links">
              <a className="contact-link" href="https://www.linkedin.com/in/tejas-gehlot-50473a28b/" target="_blank" rel="noreferrer">LinkedIn &#8599;</a>
              <a className="contact-link" href="https://github.com/tejasgehlot" target="_blank" rel="noreferrer">GitHub &#8599;</a>
              <a className="contact-link" href="https://leetcode.com/u/tejas_gehlot_18/" target="_blank" rel="noreferrer">LeetCode &#8599;</a>
            </div>
          </div>

          <div className="contact-email">
            <span className="label" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</span>
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
            <span>&copy; 2026 Tejas Gehlot</span>
            <span>Java Full Stack Developer</span>
            <span>Vadodara, India</span>
          </footer>
        </section>
      </main>
    </div>
  )
}

export default App