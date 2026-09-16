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

// Custom Github mark (kept consistent with the case-study pages)
const Github = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const Linkedin = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5.5 5.5 0 0 1 16 8Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const CodeBrackets = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const NAV_SECTIONS = [
  { id: 'work', label: 'Work' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'proof', label: 'Proof' },
  { id: 'process', label: 'Process' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const CAPABILITIES = [
  {
    title: 'Full-Stack Web Applications',
    desc: 'Product-ready applications from database schema to deployed UI — Spring Boot on the backend, React and TypeScript on the front.',
    tags: ['Spring Boot', 'React', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'Backend & API Systems',
    desc: 'Authentication, role-based access, tenant-aware business logic, and services that stay isolated when one part fails.',
    tags: ['JWT', 'Spring Security', 'Microservices', 'API Gateway'],
  },
  {
    title: 'AI/ML Integration',
    desc: 'Wiring language models into product features through dedicated services, with fallback handling for when the model misbehaves.',
    tags: ['Gemini', 'Python', 'FastAPI', 'Prompt Design'],
  },
  {
    title: 'Existing Application Work',
    desc: 'Debugging, extending, and hardening applications that are already in someone\u2019s hands — not just greenfield builds.',
    tags: ['Bug Fixing', 'Refactoring', 'Docker', 'Deployment'],
  },
]

const PROCESS = [
  { title: 'Discovery', desc: 'I ask about the problem, the users, and the constraints before proposing anything technical.' },
  { title: 'Scope', desc: 'Features, milestones, and a realistic timeline, written down so both sides are working from the same plan.' },
  { title: 'Architecture', desc: 'Data model, API design, auth strategy, and any third-party integrations get planned before code is written.' },
  { title: 'Build', desc: 'Iterative development with something you can look at early, not a black box until the deadline.' },
  { title: 'Test', desc: 'Functionality, edge cases, and the failure modes that only show up once real data hits the system.' },
  { title: 'Deploy', desc: 'Shipping to production, handling environment config, and making sure the handover is clean.' },
  { title: 'Support', desc: 'Fixes and continued iteration after launch, on terms agreed upfront.' },
]

const PROOF_STATS = [
  { num: '102+', label: 'REST API endpoints shipped' },
  { num: '3', label: 'Production-grade systems' },
  { num: '18', label: 'Backend services designed' },
  { num: '8.3', label: 'CGPA \u00b7 B.Tech AI & DS' },
]

const TECH = ['Java', 'Spring Boot', 'Spring Security', 'React', 'TypeScript', 'PostgreSQL', 'MySQL', 'Docker', 'RabbitMQ', 'Python', 'FastAPI', 'Gemini AI', 'JWT', 'Hibernate', 'Git']

const TIMELINE = [
  { year: '2026', title: 'PUCode Hackathon 3.0', desc: 'Parul University \u2014 competitive hackathon under real deadline pressure.' },
  { year: '2026', title: 'Codeversity National Hackathon', desc: 'IIT Gandhinagar \u2014 national-level competition against teams from across India.' },
  { year: '\u2014', title: 'DSA with Java \u2014 Alpha Course', desc: 'Apna College \u2014 structured data structures & algorithms training in Java.' },
  { year: '\u2014', title: 'Cyber Security Workshop', desc: 'ST7 Surveillance Solutions \u2014 hands-on exposure to security practices.' },
]

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 'portfolio'
    return getPageFromPath(window.location.pathname)
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    if (currentPage !== 'portfolio') setIsMobileMenuOpen(false)
  }, [currentPage])

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromPath(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [currentPage])

  const navigate = (page) => {
    if (page === 'portfolio') {
      if (currentPage !== 'portfolio') window.history.back()
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

  if (currentPage === 'careercopstudy') return <CareerCopilotCaseStudy onNavigate={navigate} />
  if (currentPage === 'voxacasestudy') return <VoxaCaseStudy onNavigate={navigate} />
  if (currentPage === 'invoiceflowstudy') return <InvoiceFlowCaseStudy onNavigate={navigate} />
  if (currentPage === 'livedemo') return <LiveDemoPage setCurrentPage={navigate} />

  return (
    <div className="portfolio-page">
      {/* ===== DESKTOP RAIL ===== */}
      <nav className="rail" aria-label="Primary">
        <div className="rail-mark">TG</div>
        <div className="rail-nav">
          {NAV_SECTIONS.map((s, i) => (
            <a key={s.id} href={`#${s.id}`}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span> {s.label}
            </a>
          ))}
        </div>
        <div className="rail-status">
          <span className="rail-dot" aria-hidden="true" />
          <a href="mailto:tejasgehlot7@gmail.com" aria-label="Email Tejas">@</a>
        </div>
      </nav>

      {/* ===== MOBILE TOP BAR ===== */}
      <div className="topbar">
        <div className="topbar-mark">TG</div>
        <button
          className="topbar-btn"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-panel">
          {NAV_SECTIONS.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setIsMobileMenuOpen(false)}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span> {s.label}
            </a>
          ))}
        </div>
      )}

      <div className="page">
        <main>
          {/* ===== HERO ===== */}
          <section className="hero">
            <div className="inner">
              <div className="hero-status">
                <span className="hero-dot" aria-hidden="true" />
                Available for freelance work &middot; Vadodara, India
              </div>

              <h1 className="hero-headline">
                I build full-stack systems<br />
                <em>backend, frontend, and the AI in between.</em>
              </h1>

              <p className="hero-sub">
                Java &amp; Spring Boot backend engineer and React developer. I design the data model, write the APIs, build the interface, and wire in AI when a product needs it &mdash; not just enough to demo, but enough to run.
              </p>

              <div className="hero-ctas">
                <a className="btn btn-primary" href="mailto:tejasgehlot7@gmail.com?subject=Let%27s%20build%20something">
                  Start a project
                </a>
                <a className="btn btn-secondary" href="#work">View the work</a>
              </div>

              <div className="hero-facts">
                {PROOF_STATS.map((f) => (
                  <div className="hero-fact" key={f.label}>
                    <div className="hero-fact-num">{f.num}</div>
                    <div className="hero-fact-label">{f.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== CAPABILITIES ===== */}
          <section id="capabilities">
            <div className="inner">
              <div className="kicker"><span className="idx">02</span> What I can build</div>
              <h2 className="section-title">Four things I actually ship, not a generic skills list.</h2>
              <div className="cap-grid">
                {CAPABILITIES.map((c, i) => (
                  <div className="cap-card" key={c.title}>
                    <div className="cap-num">{String(i + 1).padStart(2, '0')}</div>
                    <div className="cap-title">{c.title}</div>
                    <p className="cap-desc">{c.desc}</p>
                    <div className="cap-tags">
                      {c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== SELECTED WORK ===== */}
          <section id="work">
            <div className="inner">
              <div className="kicker"><span className="idx">01</span> Selected work</div>
              <h2 className="section-title">Three production-grade systems, built end to end.</h2>

              {/* CareerCoPilot */}
              <div className="work-block">
                <div className="work-media">
                  <img src={careerCopilotImage} alt="CareerCoPilot platform preview" loading="lazy" />
                </div>
                <div>
                  <div className="work-tag">CareerCoPilot &middot; AI Career Platform</div>
                  <h3 className="work-title">A microservices platform for placement prep</h3>
                  <p className="work-desc">
                    Eight Spring Boot services behind an API gateway, AI-generated skill assessments and career roadmaps powered directly by Gemini, and a React frontend tying it together — built so one failing service never takes down the rest.
                  </p>
                  <div className="work-stats">
                    <div><div className="work-stat-num">50+</div><div className="work-stat-label">REST APIs</div></div>
                    <div><div className="work-stat-num">8</div><div className="work-stat-label">Spring services</div></div>
                    <div><div className="work-stat-num">11</div><div className="work-stat-label">Docker containers</div></div>
                  </div>
                  <div className="work-tech">
                    {['Java', 'Spring Boot', 'Spring Cloud Gateway', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'RabbitMQ', 'Gemini AI'].map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <div className="work-actions">
                    <button className="work-link primary" onClick={() => navigate('careercopstudy')}>Read the case study</button>
                    <a className="work-link muted" href="https://github.com/ramanhero/career-compass" target="_blank" rel="noreferrer">
                      <Github size={15} /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* VOXA */}
              <div className="work-block reverse">
                <div className="work-media">
                  <img src={VOXA} alt="VOXA civic complaint platform preview" loading="lazy" />
                </div>
                <div>
                  <div className="work-tag">VOXA &middot; Civic Complaint Platform</div>
                  <h3 className="work-title">Modernizing citizen-to-municipality complaints</h3>
                  <p className="work-desc">
                    A Spring Boot monolith with 29 REST APIs, three AI models for triage, Cloudinary for complaint media, and a resilience layer so the system degrades gracefully instead of breaking when a dependency goes down.
                  </p>
                  <div className="work-stats">
                    <div><div className="work-stat-num">29</div><div className="work-stat-label">Backend APIs</div></div>
                    <div><div className="work-stat-num">3</div><div className="work-stat-label">AI models</div></div>
                    <div><div className="work-stat-num">21</div><div className="work-stat-label">JWT-protected routes</div></div>
                  </div>
                  <div className="work-tech">
                    {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Cloudinary', 'Gemini AI'].map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <div className="work-actions">
                    <button className="work-link primary" onClick={() => navigate('voxacasestudy')}>Read the case study</button>
                    <a className="work-link muted" href="https://github.com/tejasgehlot/voxa-command-center.git" target="_blank" rel="noreferrer">
                      <Github size={15} /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* InvoiceFlow */}
              <div className="work-block">
                <div className="work-media">
                  <img src={invoiceFlowImage} alt="InvoiceFlow billing platform preview" loading="lazy" />
                </div>
                <div>
                  <div className="work-tag">InvoiceFlow &middot; Multi-Tenant Billing SaaS</div>
                  <h3 className="work-title">Enterprise billing, built in six days</h3>
                  <p className="work-desc">
                    Invoice and client management for businesses operating in complete isolation from one another, with role-based access, server-side PDF generation, and dashboards &mdash; the traditional enterprise-backend problems most portfolios skip.
                  </p>
                  <div className="work-stats">
                    <div><div className="work-stat-num">23</div><div className="work-stat-label">REST APIs</div></div>
                    <div><div className="work-stat-num">5</div><div className="work-stat-label">Database tables</div></div>
                    <div><div className="work-stat-num">3</div><div className="work-stat-label">Role protection levels</div></div>
                  </div>
                  <div className="work-tech">
                    {['Java', 'Spring Boot', 'MySQL', 'React', 'TypeScript', 'iText PDF'].map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                  <div className="work-actions">
                    <button className="work-link primary" onClick={() => navigate('invoiceflowstudy')}>Read the case study</button>
                    <a className="work-link muted" href="https://github.com/tejasgehlot/InvoiceFlow.git" target="_blank" rel="noreferrer">
                      <Github size={15} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== PROOF ===== */}
          <section id="proof">
            <div className="inner">
              <div className="kicker"><span className="idx">03</span> Engineering proof</div>
              <h2 className="section-title">The numbers behind the three case studies above.</h2>

              <div className="proof-grid">
                {PROOF_STATS.map((s) => (
                  <div className="proof-cell" key={s.label}>
                    <div className="proof-num">{s.num}</div>
                    <div className="proof-label">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="proof-cols">
                <div>
                  <div className="proof-block-title">Technologies used in production</div>
                  <div className="proof-tech-list">
                    {TECH.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
                <div>
                  <div className="proof-block-title">Elsewhere</div>
                  <div className="proof-links">
                    <a href="https://github.com/tejasgehlot" target="_blank" rel="noreferrer">GitHub <Github size={16} /></a>
                    <a href="https://www.linkedin.com/in/tejas-gehlot-50473a28b/" target="_blank" rel="noreferrer">LinkedIn <Linkedin size={16} /></a>
                    <a href="https://leetcode.com/u/tejas_gehlot_18/" target="_blank" rel="noreferrer">LeetCode <CodeBrackets size={16} /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== PROCESS ===== */}
          <section id="process">
            <div className="inner">
              <div className="kicker"><span className="idx">04</span> How a project runs</div>
              <h2 className="section-title">What happens after you reach out.</h2>
              <div className="process-list">
                {PROCESS.map((p, i) => (
                  <div className="process-item" key={p.title}>
                    <div className="process-idx">{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <div className="process-title">{p.title}</div>
                      <p className="process-desc">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ===== ABOUT ===== */}
          <section id="about">
            <div className="inner">
              <div className="kicker"><span className="idx">05</span> About</div>
              <h2 className="section-title">Tejas Gehlot</h2>

              <div className="about-cols">
                <div className="about-col">
                  <div className="about-body">
                    <p>
                      I'm a B.Tech Artificial Intelligence &amp; Data Science student at Parul University, and most of what I know about software I learned by building three full systems rather than following tutorials.
                    </p>
                    <p>
                      Java and Spring Boot are where I'm strongest &mdash; REST APIs, authentication, database design, and deciding when a system should be split into services versus kept as one. I pair that with React on the frontend, and Python/FastAPI when a project needs an AI component of its own.
                    </p>
                    <p>
                      I'm currently deepening React and TypeScript so I can own a project end to end, from schema to shipped interface, without handing the frontend off to someone else.
                    </p>
                  </div>

                  <div style={{ marginTop: '2.2rem' }}>
                    <div className="proof-block-title">Languages</div>
                    <div className="lang-row">
                      <span className="tag">English</span>
                      <span className="tag">Hindi</span>
                      <span className="tag">Gujarati</span>
                    </div>
                  </div>

                  <div className="edu-block">
                    <div className="proof-block-title">Education</div>
                    <div className="edu-item">
                      <div>
                        <div className="edu-name">Parul University</div>
                        <div className="edu-detail">B.Tech &mdash; AI &amp; Data Science &middot; CGPA 8.3</div>
                      </div>
                      <span className="edu-year">2023&ndash;27</span>
                    </div>
                    <div className="edu-item">
                      <div>
                        <div className="edu-name">SRVM Sr. Sec. School</div>
                        <div className="edu-detail">Class 12: 89.67% &middot; Class 10: 89.47% &middot; JEE Mains: 79.9 percentile</div>
                      </div>
                      <span className="edu-year">2022</span>
                    </div>
                  </div>
                </div>

                <div className="about-col">
                  <div className="proof-block-title">What shaped me</div>
                  {TIMELINE.map((t) => (
                    <div className="timeline-item" key={t.title}>
                      <div className="timeline-year">{t.year}</div>
                      <div className="timeline-title">{t.title}</div>
                      <div className="timeline-desc">{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ===== CONTACT ===== */}
          <section className="contact-section" id="contact">
            <div className="inner">
              <div className="kicker"><span className="idx">06</span> Get in touch</div>
              <h2 className="contact-heading">
                Have an idea or an app<br />that needs work? <em>Let's talk.</em>
              </h2>

              <div className="contact-grid">
                <div>
                  <div className="proof-block-title">Email</div>
                  <a
                    className="contact-email-link"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=tejasgehlot7@gmail.com&su=Let's%20Connect!"
                    target="_blank"
                    rel="noreferrer"
                  >
                    tejasgehlot7@gmail.com
                  </a>
                </div>
                <div className="contact-social">
                  <div className="proof-block-title">Elsewhere</div>
                  <a href="https://www.linkedin.com/in/tejas-gehlot-50473a28b/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://github.com/tejasgehlot" target="_blank" rel="noreferrer">GitHub</a>
                  <a href="https://leetcode.com/u/tejas_gehlot_18/" target="_blank" rel="noreferrer">LeetCode</a>
                </div>
              </div>

              <footer>
                <span>&copy; 2026 Tejas Gehlot</span>
                <span>Full-Stack Developer &middot; Java / Spring Boot / React</span>
                <span>Vadodara, India</span>
              </footer>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
