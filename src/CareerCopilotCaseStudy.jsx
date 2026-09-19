import { motion } from 'framer-motion'
import { ArrowLeft, Code, Database, Lock, Server, Zap } from 'lucide-react'
import ScreensGallery from './components/ScreensGallery'
import careerCopilotImage from '../career copilot image.png'
import dashboard from './assets/photos/CC1dashboard.png'; 
import roadmap from './assets/photos/CC2roadmap-page.png'
import projects   from './assets/photos/CC3projects-page.png'
import resume from './assets/photos/CC4resume-page.png'
import synch  from './assets/photos/CC5git-sync.png'
import calendar from './assets/photos/CC6calendar.png' 

// Custom standalone Github component designed to match Lucide's 24x24 layout grid
const Github = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

// Your existing CareerCopilotCaseStudy component code below stays exactly the same...
const CareerCopilotCaseStudy = ({ onNavigate = () => {} }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 },
    }),
  }


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <div className="case-study-page" style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100dvh' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          background: 'var(--bg)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.2rem 3rem',
        }}
      >
        <div style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: '1rem', fontWeight: 700 }}>
          T<span style={{ color: 'var(--accent)' }}>G</span>
        </div>
        <button
          onClick={() => onNavigate('portfolio')}
          data-cursor="link"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            color: 'var(--text2)',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '999px',
            padding: '0.55rem 1.1rem',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text2)')}
        >
          <ArrowLeft size={15} />
          Back to portfolio
        </button>
      </nav>

      {/* HERO SECTION */}
      <section style={{ padding: '8rem 3rem 5rem', borderBottom: '1px solid var(--border)' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="case-hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}
        >
          <div style={{ paddingTop: '2rem' }}>
            <motion.h1 variants={fadeIn} custom={0} style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              CareerCoPilot
            </motion.h1>
            <motion.p variants={fadeIn} custom={1} className="case-hero-lead" style={{ fontSize: '1.5rem', color: 'var(--text2)', marginBottom: '2rem', fontWeight: 300 }}>
              AI-Powered Career Management Platform
            </motion.p>
            <motion.p variants={fadeIn} custom={2} className="case-hero-copy" style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, maxWidth: '500px', marginBottom: '2rem' }}>
              An 8-service Spring Boot microservices platform helping engineering students prepare for placements through AI-generated career roadmaps, skill assessments, company tracking and an auto-built resume — all behind a single API gateway.
            </motion.p>
            <motion.div variants={fadeIn} custom={3} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {['Java 17', 'Spring Boot', 'Spring Cloud Gateway', 'React', 'TypeScript', 'PostgreSQL', 'Flyway', 'Docker', 'RabbitMQ', 'Gemini AI'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'var(--bg2)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text2)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} custom={4} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://github.com/ramanhero/career-compass"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'var(--text)',
                  color: 'var(--bg)',
                  border: 'none',
                  borderRadius: '6px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Github size={14} />
                GitHub
              </a>
              <button
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Live Demo
              </button>
            </motion.div>
          </div>
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3 }}
  className="case-hero-media"
  style={{
    width: '100%',
    height: 'auto',
    minHeight: 'clamp(240px, 55vw, 400px)',
    aspectRatio: '16 / 10',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    overflow: 'hidden',
    background: 'var(--bg2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'clamp(0.75rem, 2vw, 1rem)'
  }}
> 
  <img
    src={careerCopilotImage}
    alt="CareerCopilot"
    style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain', // Changed from cover to contain
        display: 'block'
    }}
  />
</motion.div>

        </motion.div>
      </section>

      {/* PRODUCT SCREENS */}
      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          Product Screens
        </motion.h2>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScreensGallery 
          labels={['Skill assessment flow', 'AI-generated roadmap', 'Company tracker', 'Auto-built resume', 'Gateway service map', 'Student dashboard']} 
          images={[dashboard, roadmap, projects, resume, synch, calendar]} 
          />
        </div>
      </section>

      {/* ENGINEERING SNAPSHOT */}
      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          Engineering Snapshot
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { icon: Zap, number: '50+', label: 'REST API Endpoints' },
            { icon: Code, number: '11', label: 'Docker Containers' },
            { icon: Server, number: '8', label: 'Spring Boot Services' },
            { icon: Code, number: '19', label: 'Frontend Pages' },
            { icon: Database, number: '17', label: 'Database Tables' },
            { icon: Zap, number: '4', label: 'External APIs' },
            { icon: Lock, number: '1', label: 'API Gateway' },
            { icon: Zap, number: '100%', label: 'Dockerized' },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div key={idx} variants={fadeIn} custom={idx} style={{ padding: '2rem', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', transition: 'all 0.3s' }}>
                <Icon style={{ marginBottom: '1rem', color: 'var(--text2)' }} size={28} />
                <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>{stat.number}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text3)' }}>{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          The Problem
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '800px', lineHeight: 1.8, color: 'var(--text2)', margin: '0 auto' }}>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
            Engineering students across India face a fragmented career preparation experience during placement season. Resume building, company research, career roadmaps, interview preparation, and job tracking exist on separate platforms with no unified experience.
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
            Students juggle multiple tools: LinkedIn for company tracking, HackerRank for coding prep, Naukri for job boards, Google Docs for resumes, and spreadsheets for roadmaps. This context switching wastes time and creates inconsistency.
          </p>
          <p style={{ fontSize: '1rem' }}>
            CareerCoPilot consolidates everything into one platform where AI-generated career roadmaps, company tracking, resume building, interview prep, and progress tracking work together seamlessly.
          </p>
        </motion.div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          Solution
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '800px', lineHeight: 1.8, color: 'var(--text2)', margin: '0 auto' }}>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
            <strong>CareerCoPilot</strong> is a full-stack application built with eight independent Java Spring Boot microservices behind a Spring Cloud Gateway, and a React + TypeScript single-page frontend.
          </p>
          <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
            This microservices architecture provides scalability, maintainability, and fault isolation. If the company search service fails, authentication and profiles continue working. New features deploy independently.
          </p>
          <p style={{ fontSize: '1rem' }}>
            The gateway routes all traffic and verifies every JWT before forwarding a trusted user identity downstream. PostgreSQL stores data with a Flyway migration history isolated per service, ensuring reproducibility across environments.
          </p>
        </motion.div>
      </section>

      {/* CORE FEATURES */}
      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          Core Features
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          {['JWT Authentication', 'Admin Dashboard', 'AI Skill Assessment', 'AI Career Roadmaps', 'Company Tracking & Follows', 'Project Portfolio + GitHub Sync', 'AI Resume Builder (PDF)', 'Placement Calendar', 'Profile & Onboarding', 'Live Company/Job Search', 'Skills Gap Analysis', 'Dark / Light Mode', 'Docker Deployment'].map((feature, idx) => (
            <motion.div key={idx} variants={fadeIn} custom={idx} style={{ padding: '2rem', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--text)', borderRadius: '50%' }} />
                <div style={{ fontWeight: 500 }}>{feature}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SYSTEM ARCHITECTURE */}
      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          System Architecture
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ padding: '2rem', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.85rem', lineHeight: 2, marginBottom: '2rem', color: 'var(--text2)', maxWidth: '800px', margin: '0 auto 2rem' }}>
          <div>React Frontend (Vite)</div>
          <div style={{ marginLeft: '2rem' }}>↓</div>
          <div style={{ marginLeft: '2rem' }}>Spring Cloud Gateway (JWT verification)</div>
          <div style={{ marginLeft: '4rem' }}>↓</div>
          <div style={{ marginLeft: '4rem' }}>Auth • User • Company Services</div>
          <div style={{ marginLeft: '4rem' }}>↓</div>
          <div style={{ marginLeft: '4rem' }}>Project • Roadmap • Resume • Calendar Services</div>
          <div style={{ marginLeft: '4rem' }}>↓</div>
          <div style={{ marginLeft: '4rem' }}>Google Gemini API (called directly from Roadmap, Resume & Project services)</div>
          <div style={{ marginLeft: '2rem' }}>↓</div>
          <div style={{ marginLeft: '2rem' }}>PostgreSQL (per-service schema) + RabbitMQ (provisioned for async messaging)</div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '800px', lineHeight: 1.8, color: 'var(--text2)', fontSize: '0.95rem', margin: '0 auto' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Why Microservices?</strong> Each domain is independently deployable. If company search fails, auth and profiles continue. Same pattern as Netflix and Uber.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Why API Gateway?</strong> Single entry point. Routes are environment-driven. CORS configured centrally. Every downstream service trusts only the gateway-injected <code>X-User-Id</code> header, never a user ID from the request body.
          </p>
          <p>
            <strong>Why Database-per-Service?</strong> Loose coupling. Each service owns its schema, with an isolated Flyway migration history table. All 8 services share one PostgreSQL instance today, but each schema evolves independently.
          </p>
        </motion.div>
      </section>

      {/* ENGINEERING HIGHLIGHTS */}
      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          Engineering Highlights
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          {['50+ REST API Endpoints', '11 Docker Containers', '8 Spring Boot Services', '29 Flyway Migrations', '4 External APIs', '19 Frontend Pages', 'JWT Authentication', 'Gemini AI Integration (3 services)', 'Shared Internal Gateway Secret'].map((highlight, idx) => (
            <motion.div key={idx} variants={fadeIn} custom={idx} style={{ padding: '2rem', background: 'var(--card-bg)', border: '1px solid var(--border)', borderRadius: '8px' }}>
              <Code size={24} style={{ marginBottom: '0.5rem', color: 'var(--text2)' }} />
              <div style={{ fontWeight: 500, fontSize: '0.95rem' }}>{highlight}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CHALLENGES */}
      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '3rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          Engineering Challenges
        </motion.h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {[
            { title: 'Company Auto-Save', problem: 'Companies from the JSearch API didn\'t exist in our database initially.', solution: 'Built an automatic persistence layer that upserts a company before creating its Follow relationship.', impact: 'Users experience seamless following.' },
            { title: 'LinkedIn API Shutdown', problem: 'LinkedIn discontinued its company search API during development.', solution: 'Migrated the entire company/job search system to the JSearch API on RapidAPI.', impact: 'Live company search remained available.' },
            { title: 'Docker Networking', problem: 'The gateway returned 401s because services pointed at localhost instead of each other.', solution: 'Switched every service-to-service URL to Docker Compose\'s internal DNS service names.', impact: 'Stable microservice communication.' },
            { title: 'Gemini JSON Cleaning', problem: 'Gemini wrapped its JSON responses in markdown code fences.', solution: 'Added an automatic JSON-cleaning step before parsing responses from Gemini.', impact: 'Reliable AI response handling across roadmap, assessment and resume generation.' },
          ].map((challenge, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem', marginBottom: '2.5rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{challenge.title}</h3>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.3rem', fontWeight: 700 }}>Problem</div>
                <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>{challenge.problem}</p>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.3rem', fontWeight: 700 }}>Solution</div>
                <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>{challenge.solution}</p>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.3rem', fontWeight: 700 }}>Impact</div>
                <p style={{ color: 'var(--text2)', fontSize: '0.95rem' }}>{challenge.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '6rem 3rem', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>
          Ready to Build?
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto 3rem' }}>
          <a href="https://github.com/ramanhero/career-compass" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'var(--text)', color: 'var(--bg)', border: 'none', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s', textDecoration: 'none', textAlign: 'center' }}>
            View GitHub Repository
          </a>
          <button style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>
            Live Demo
          </button>
          <button style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>
            Architecture Diagram
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text3)', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Built with Java • Spring Boot • React • PostgreSQL • Docker • RabbitMQ • Gemini AI
        </motion.div>
      </section>
    </div>
  )
}

export default CareerCopilotCaseStudy