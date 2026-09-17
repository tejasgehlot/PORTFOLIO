import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import CareerCopilotCaseStudy from './CareerCopilotCaseStudy'
import VoxaCaseStudy from './VoxaCaseStudy'
import InvoiceFlowCaseStudy from './InvoiceFlowCaseStudy'
import LiveDemoPage from './LiveDemoPage'
import Marquee from './components/Marquee'
import CountUp from './components/CountUp'
import Reveal from './components/Reveal'
import { useScrollMemory } from './lib/scrollMemory'
import { getActiveLenis } from './components/SmoothScroll'

import careerCopilotImage from '../career copilot image.png'
import invoiceFlowImage from '../InvoiceFlow image.png'
import VOXA from '../VOXA.png'

import heroEditorial from './assets/photos/hero-editorial.jpeg'
// import formalHeadshot from './assets/photos/formal-headshot.jpeg'
import campusFront from './assets/photos/campus-front.jpeg'
import galleryWallA from './assets/photos/gallery-wall-a.jpeg'
import candidSmile from './assets/photos/candid-smile.jpeg'
import campusBench from './assets/photos/campus-bench.jpeg'

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
const pathToPage = Object.fromEntries(Object.entries(ROUTES).map(([page, path]) => [normalizePath(path), page]))
const getPageFromPath = (pathname) => pathToPage[normalizePath(pathname)] ?? 'portfolio'

const Github = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)
const Linkedin = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A5.5 5.5 0 0 1 16 8Z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const CodeBrackets = ({ size = 15 }) => (
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
    title: 'Full-stack web applications',
    desc: 'Product-ready applications from database schema to deployed UI — Spring Boot on the backend, React and TypeScript on the front.',
    tags: ['Spring Boot', 'React', 'TypeScript', 'REST APIs'],
  },
  {
    title: 'Backend & API systems',
    desc: 'Authentication, role-based access, tenant-aware business logic, and services that stay isolated when one part fails.',
    tags: ['JWT', 'Spring Security', 'Microservices', 'API Gateway'],
  },
  {
    title: 'AI/ML integration',
    desc: 'Wiring language models into product features through dedicated services, with fallback handling for when the model misbehaves.',
    tags: ['Gemini', 'Python', 'FastAPI', 'Prompt Design'],
  },
  {
    title: 'Existing application work',
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
  { num: 102, suffix: '+', label: 'REST API endpoints shipped' },
  { num: 3, suffix: '', label: 'Production-grade systems' },
  { num: 18, suffix: '', label: 'Backend services designed' },
  { num: 8.3, suffix: '', label: 'CGPA · B.Tech AI & DS', decimal: true },
]

const TECH = ['Java', 'Spring Boot', 'Spring Security', 'React', 'TypeScript', 'PostgreSQL', 'MySQL', 'Docker', 'RabbitMQ', 'Python', 'FastAPI', 'Gemini AI', 'JWT', 'Hibernate', 'Git']

const TIMELINE = [
  { year: '2026', title: 'PUCode Hackathon 3.0', desc: 'Parul University — competitive hackathon under real deadline pressure.' },
  { year: '2026', title: 'Codeversity National Hackathon', desc: 'IIT Gandhinagar — national-level competition against teams from across India.' },
  { year: '—', title: 'DSA with Java — Alpha Course', desc: 'Apna College — structured data structures & algorithms training in Java.' },
  { year: '—', title: 'Cyber Security Workshop', desc: 'ST7 Surveillance Solutions — hands-on exposure to security practices.' },
]

const PROJECTS = [
  {
    key: 'careercopstudy',
    tag: 'CareerCoPilot · AI Career Platform',
    name: 'A microservices platform for placement prep',
    desc: 'Eight Spring Boot services behind an API gateway, AI-generated skill assessments and career roadmaps powered directly by Gemini, and a React frontend tying it together — built so one failing service never takes down the rest.',
    stack: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'RabbitMQ', 'Gemini AI'],
    image: careerCopilotImage,
    github: 'https://github.com/ramanhero/career-compass',
  },
  {
    key: 'voxacasestudy',
    tag: 'VOXA · Civic Complaint Platform',
    name: 'Modernizing citizen-to-municipality complaints',
    desc: 'A Spring Boot monolith with 29 REST APIs, three AI models for triage, Cloudinary for complaint media, and a resilience layer so the system degrades gracefully instead of breaking when a dependency goes down.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Cloudinary', 'Gemini AI'],
    image: VOXA,
    github: 'https://github.com/tejasgehlot/voxa-command-center.git',
  },
  {
    key: 'invoiceflowstudy',
    tag: 'InvoiceFlow · Multi-Tenant Billing SaaS',
    name: 'Enterprise billing, built in six days',
    desc: 'Invoice and client management for businesses operating in complete isolation from one another, with role-based access, server-side PDF generation, and dashboards — the traditional enterprise-backend problems most portfolios skip.',
    stack: ['Java', 'Spring Boot', 'MySQL', 'React', 'TypeScript', 'iText PDF'],
    image: invoiceFlowImage,
    github: 'https://github.com/tejasgehlot/InvoiceFlow.git',
  },
]

function WorkCard({ project, index, onNavigate }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0.35])
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <div className="work-card-wrap" ref={ref} style={{ zIndex: index + 1 }}>
      <motion.article className="work-card" style={{ scale, opacity }}>
        <div className="work-card-media">
          <span className="work-card-tag">{project.tag}</span>
          <motion.img src={project.image} alt={`${project.name} preview`} loading="lazy" style={{ y: imgY }} />
        </div>
        <div className="work-card-body">
          <h3 className="work-card-name">{project.name}</h3>
          <p className="work-card-desc">{project.desc}</p>
          <div className="work-card-stack">
            {project.stack.map((t) => <span key={t}>{t}</span>)}
          </div>
          <div style={{ display: 'flex', gap: '1.6rem', flexWrap: 'wrap' }}>
            <button className="work-card-link" onClick={() => onNavigate(project.key)}>
              Read the case study <ArrowUpRight size={15} />
            </button>
            <a className="work-card-link" href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--ink-dim)' }}>
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window === 'undefined') return 'portfolio'
    return getPageFromPath(window.location.pathname)
  })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('work')
  const [openCap, setOpenCap] = useState(0)
  const [preloaderPhase, setPreloaderPhase] = useState(() => {
    if (typeof window === 'undefined') return 'done'
    const isPortfolio = getPageFromPath(window.location.pathname) === 'portfolio'
    const seen = (() => {
      try { return sessionStorage.getItem('tg-preloaded') } catch { return '1' }
    })()
    return isPortfolio && !seen ? 'loading' : 'done'
  })
  const processRef = useRef(null)
  const [activeStep, setActiveStep] = useState(-1)

  useScrollMemory(currentPage, getActiveLenis)

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (currentPage !== 'portfolio') setIsMobileMenuOpen(false)
  }, [currentPage])

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromPath(window.location.pathname))
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // preloader lifecycle — only ever plays once per session, on first paint
  useEffect(() => {
    if (preloaderPhase !== 'loading') return
    const t1 = setTimeout(() => setPreloaderPhase('exiting'), 1150)
    const t2 = setTimeout(() => {
      setPreloaderPhase('done')
      try { sessionStorage.setItem('tg-preloaded', '1') } catch { /* ignore */ }
    }, 1750)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [preloaderPhase])

  // section-spy for the rail nav
  useEffect(() => {
    if (currentPage !== 'portfolio') return
    const els = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [currentPage])

  // scroll-drawn process line + active step
  useEffect(() => {
    if (currentPage !== 'portfolio') return
    const onScroll = () => {
      const el = processRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progressed = Math.min(Math.max(vh * 0.5 - rect.top, 0), rect.height)
      el.style.setProperty('--fill', `${(progressed / rect.height) * 100}%`)
      const steps = el.querySelectorAll('.process-step')
      let idx = -1
      steps.forEach((step, i) => {
        if (step.getBoundingClientRect().top <= vh * 0.5) idx = i
      })
      setActiveStep(idx)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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

  const heroReady = preloaderPhase !== 'loading'

  return (
    <>
      {preloaderPhase !== 'done' && (
        <div className={`preloader${preloaderPhase === 'exiting' ? ' is-exiting' : ''}`} style={{ transition: 'opacity .55s ease, visibility .55s ease', opacity: preloaderPhase === 'exiting' ? 0 : 1, visibility: preloaderPhase === 'exiting' ? 'hidden' : 'visible' }}>
          <div className="preloader-row">
            <span className="preloader-mark">Tejas Gehlot</span>
            <span className="preloader-mark">Full-stack systems</span>
          </div>
          <div className="preloader-count"><CountUpImmediate to={100} /></div>
          <div className="preloader-bar"><span style={{ animation: 'loaderfill 1.1s var(--ease-out) forwards' }} /></div>
          <style>{`@keyframes loaderfill { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
        </div>
      )}

      <div className="site">
        <nav className="rail" aria-label="Primary">
          <div className="rail-mark">T<span>G</span></div>
          <div className="rail-nav">
            {NAV_SECTIONS.map((s) => (
              <button key={s.id} className={activeSection === s.id ? 'is-active' : ''} onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}>
                {s.label}
              </button>
            ))}
          </div>
          <div className="rail-status">
            <span className="rail-dot" />
            <span>Available</span>
          </div>
        </nav>

        <div className="topbar">
          <div className="topbar-mark">T<span>G</span></div>
          <button
            className={`topbar-toggle${isMobileMenuOpen ? ' is-open' : ''}`}
            aria-label={isMobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-panel">
            {NAV_SECTIONS.map((s) => (
              <button
                key={s.id}
                className={activeSection === s.id ? 'is-active' : ''}
                onClick={() => { setIsMobileMenuOpen(false); setTimeout(() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' }), 150) }}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}

        <main>
          {/* ================= HERO ================= */}
          <section className="hero">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                {/* <img src={formalHeadshot} alt="" className="hero-avatar duotone" /> */}
                Available for freelance work · Vadodara, India
              </div>
              <h1 className={`hero-title${heroReady ? ' is-ready' : ''}`}>
                <span className="line"><span>Full-stack systems,</span></span>
                <span className="line"><span>built <em>backend-first.</em></span></span>
              </h1>
              <p className="hero-sub">
                Java &amp; Spring Boot engineer and React developer. I design the data model, write the APIs, build the interface, and wire in AI when a product needs it — not just enough to demo, but enough to run.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" data-cursor="link" href="mailto:tejasgehlot7@gmail.com?subject=Let%27s%20build%20something">Start a project</a>
                <button className="btn btn-ghost" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>View the work</button>
              </div>
              <div className="hero-stats">
                {PROOF_STATS.slice(0, 3).map((s) => (
                  <div className="hero-stat" key={s.label}>
                    <b><CountUp to={s.num} suffix={s.suffix} /></b>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-media">
              <div className="duotone grain" style={{ position: 'absolute', inset: 0 }}>
                <img src={heroEditorial} alt="Tejas Gehlot portrait" />
              </div>
              <span className="hero-media-caption">Vadodara, IN — 2026</span>
              <div className="hero-scroll-cue"><span>Scroll</span><span className="stem" /></div>
            </div>
          </section>

          <Marquee items={TECH} />

          {/* ================= WORK ================= */}
          <section id="work" className="section" style={{ paddingBottom: 0 }}>
            <div className="section-inner">
              <div className="section-head">
                <Reveal as="h2" className="section-title">Three production-grade systems, built end to end.</Reveal>
                <Reveal className="section-note" delay={100}>Each one shipped with real users, real deadlines, and a case study underneath — not a Lorem Ipsum dashboard.</Reveal>
              </div>
            </div>
            <div className="work-stack">
              {PROJECTS.map((p, i) => (
                <WorkCard key={p.key} project={p} index={i} onNavigate={navigate} />
              ))}
            </div>
          </section>

          {/* ================= CAPABILITIES ================= */}
          <section id="capabilities" className="section">
            <div className="section-inner">
              <div className="section-head">
                <Reveal as="h2" className="section-title">Four things I actually ship, not a generic skills list.</Reveal>
              </div>
              <div className="capabilities">
                {CAPABILITIES.map((c, i) => (
                  <div className={`cap-row${openCap === i ? ' is-open' : ''}`} key={c.title} onClick={() => setOpenCap(openCap === i ? -1 : i)}>
                    <span className="cap-row-index">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cap-row-title">{c.title}</span>
                    <span className="cap-row-icon"><Plus size={20} /></span>
                    <div className="cap-row-body">
                      <div className="cap-row-body-inner">
                        <p className="cap-row-desc">{c.desc}</p>
                        <div className="cap-row-tags">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= PROOF ================= */}
          <section id="proof" className="section" style={{ paddingTop: 0 }}>
            <div className="section-inner">
              <div className="section-head">
                <Reveal as="h2" className="section-title">The numbers behind the three case studies above.</Reveal>
              </div>
            </div>
            <div className="proof-band">
              {PROOF_STATS.map((s) => (
                <div className="proof-cell" key={s.label}>
                  <div className="proof-num">
                    {s.decimal ? s.num.toFixed(1) : <CountUp to={s.num} suffix={s.suffix} />}
                  </div>
                  <div className="proof-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="section-inner" style={{ marginTop: 'clamp(2.5rem, 6vw, 4rem)', display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 320px' }}>
                <div className="hero-eyebrow" style={{ marginBottom: '1.2rem' }}>Technologies used in production</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {TECH.map((t) => <span key={t} style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--ink-dim)', border: '1px solid var(--stroke)', padding: '0.4rem 0.8rem', borderRadius: '999px' }}>{t}</span>)}
                </div>
              </div>
              <div>
                <div className="hero-eyebrow" style={{ marginBottom: '1.2rem' }}>Elsewhere</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href="https://github.com/tejasgehlot" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.85rem' }}><Github size={16} /> GitHub</a>
                  <a href="https://www.linkedin.com/in/tejas-gehlot-50473a28b/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.85rem' }}><Linkedin size={16} /> LinkedIn</a>
                  <a href="https://leetcode.com/u/tejas_gehlot_18/" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--mono)', fontSize: '0.85rem' }}><CodeBrackets size={16} /> LeetCode</a>
                </div>
              </div>
            </div>
          </section>

          {/* ================= PROCESS ================= */}
          <section id="process" className="section">
            <div className="section-inner">
              <div className="section-head">
                <Reveal as="h2" className="section-title">What happens after you reach out.</Reveal>
              </div>
              <div className="process-list" ref={processRef} style={{ '--fill': '0%' }}>
                <div className="process-line"><span className="process-line-fill" /></div>
                {PROCESS.map((p, i) => (
                  <div className={`process-step${activeStep >= i ? ' is-active' : ''}`} key={p.title}>
                    <div className="process-num">{String(i + 1).padStart(2, '0')}</div>
                    <div>
                      <div className="process-title">{p.title}</div>
                      <p className="process-desc">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= ABOUT ================= */}
          <section id="about" className="section hairline">
            <div className="section-inner about-grid">
              <div className="about-copy">
                <Reveal as="p">I&rsquo;m a B.Tech Artificial Intelligence &amp; Data Science student at Parul University, and most of what I know about software I learned by building three full systems rather than following tutorials.</Reveal>
                <Reveal as="p" delay={80}>Java and Spring Boot are where I&rsquo;m strongest — REST APIs, authentication, database design, and deciding when a system should be split into services versus kept as one. I pair that with React on the frontend, and Python/FastAPI when a project needs an AI component of its own.</Reveal>
                <Reveal as="p" delay={160}>I&rsquo;m currently deepening React and TypeScript so I can own a project end to end, from schema to shipped interface, without handing the frontend off to someone else.</Reveal>

                <dl className="about-facts">
                  <div><dt>Education</dt><dd>Parul University — B.Tech AI &amp; DS, CGPA 8.3 (2023–27)</dd></div>
                  <div><dt>Schooling</dt><dd>SRVM Sr. Sec. — Class 12: 89.67% · JEE Mains: 79.9 %ile</dd></div>
                  <div><dt>Languages</dt><dd>English, Hindi, Gujarati</dd></div>
                  <div><dt>Based in</dt><dd>Vadodara, Gujarat, India</dd></div>
                </dl>
 
              </div>

              <div className="about-collage">
                <figure className="duotone"><img src={campusFront} alt="Tejas Gehlot on campus" className="obj-top" /></figure>
                <figure className="duotone"><img src={candidSmile} alt="Tejas Gehlot" className="obj-smile"/></figure>
                <figure className="duotone"><img src={galleryWallA} alt="Tejas Gehlot portrait" /></figure>
              </div>
                        </div>

            <div className="section-inner about-wide-photo">
              <div className="duotone">
                <img src={campusBench} alt="Tejas Gehlot reading on campus" />
              </div>
            </div>

            <div className="section-inner" style={{ marginTop: 'clamp(3rem, 7vw, 5rem)' }}>
              <div className="hero-eyebrow" style={{ marginBottom: '1.5rem' }}>What shaped me</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.6rem' }}>
                {TIMELINE.map((t) => (
                  <Reveal key={t.title} style={{ borderTop: '1px solid var(--stroke)', paddingTop: '1rem' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--brass)', marginBottom: '0.5rem' }}>{t.year}</div>
                    <div style={{ fontSize: '1.05rem', marginBottom: '0.4rem', fontFamily: 'var(--display)' }}>{t.title}</div>
                    <div style={{ color: 'var(--ink-dim)', fontSize: '0.9rem', lineHeight: 1.6 }}>{t.desc}</div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ================= CONTACT ================= */}
          <section id="contact" className="section contact-section">
            <div className="section-inner">
              <div className="contact-eyebrow">Get in touch</div>
              <h2 className="contact-title">
                Have an idea or an app that needs work?{' '}
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tejasgehlot7@gmail.com&su=Let's%20Connect!" target="_blank" rel="noreferrer" data-cursor="link">
                  Let&rsquo;s talk.
                </a>
              </h2>
              <div className="contact-links">
                <a href="mailto:tejasgehlot7@gmail.com">tejasgehlot7@gmail.com</a>
                <a href="https://www.linkedin.com/in/tejas-gehlot-50473a28b/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/tejasgehlot" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://leetcode.com/u/tejas_gehlot_18/" target="_blank" rel="noreferrer">LeetCode</a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <span>© 2026 Tejas Gehlot</span>
            <span>Full-stack developer · Java / Spring Boot / React</span>
            <span>Vadodara, India</span>
          </footer>
        </main>
      </div>
    </>
  )
}

function CountUpImmediate({ to }) {
  const [v, setV] = useState(0)
  useEffect(() => {
    const start = performance.now()
    const duration = 1100
    let raf
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setV(Math.round(p * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to])
  return v
}

export default App
