import { motion } from 'framer-motion'
import {
  ArrowRight,
  Camera,
  CloudCog,
  Code,
  Cpu,
  Database,
  Globe2,
  Lock,
  MessageSquareText,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
  Zap,
} from 'lucide-react'


import careerCopilotImage from '../career copilot image.png';
import invoiceFlowImage from '../InvoiceFlow image.png';
import VOXA from '../VOXA.png';

const Github = ({ size = 24, className = '' }) => (
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

const VoxaCaseStudy = ({ onNavigate = () => {} }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.55 },
    }),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const metrics = [
    { value: '29', label: 'Backend APIs' },
    { value: '8', label: 'Controllers' },
    { value: '9', label: 'Services' },
    { value: '8', label: 'Repositories' },
    { value: '8', label: 'Entities' },
    { value: '8', label: 'Database Tables' },
    { value: '34', label: 'DTO Classes' },
    { value: '21', label: 'JWT Protected Routes' },
    { value: '8', label: 'Public Routes' },
    { value: '3', label: 'User Roles' },
    { value: '3', label: 'AI Models' },
    { value: '4', label: 'External APIs' },
    { value: '4', label: 'Analytics APIs' },
    { value: '8', label: 'Frontend Pages' },
    { value: '6', label: 'Reusable Components' },
    { value: '16', label: 'TypeScript Interfaces' },
    { value: '4', label: 'Adapter Functions' },
  ]

  const decisions = [
    {
      title: 'Spring Boot 3 + Java 21',
      problem: 'The backend needed to handle blocking AI requests without turning the platform into a reactive system with unnecessary complexity.',
      decision: 'I chose Java 21 with virtual threads and Spring Boot 3, avoiding WebFlux for this release.',
      reasoning: 'Gemini requests block for several seconds. Virtual threads let the server keep working while those calls wait, which is a better fit than introducing a full reactive stack for a short delivery window.',
      demonstrates: 'Modern Java concurrency knowledge and pragmatic backend engineering.',
    },
    {
      title: 'Modular Monolith',
      problem: 'The project had an 11-day delivery window and a five-developer team, so distributed complexity would have delayed the demo.',
      decision: 'I implemented a modular monolith with clear domain boundaries for auth, complaints, officer workflows, admin operations, and analytics.',
      reasoning: 'It keeps deployment simple while making future extraction into services straightforward if the platform grows.',
      demonstrates: 'Pragmatic architecture thinking under deadline pressure.',
    },
    {
      title: 'JWT Authentication',
      problem: 'The frontend needed a stateless model that would work well in an SSR-friendly deployment model with edge hosting in mind.',
      decision: 'I used JWT based authentication with access and refresh tokens and role-aware claims.',
      reasoning: 'This aligns with stateless deployments and avoids server-side session complexity while still preserving security and a good user experience.',
      demonstrates: 'Deployment-aware security decisions rather than defaulting to the obvious pattern.',
    },
    {
      title: 'SHA-256 Phone Hashing',
      problem: 'Citizen complaints involve phone numbers and personal data, which creates privacy risk under Indian data protection expectations.',
      decision: 'I hashed phone numbers using SHA-256 instead of storing them in plaintext.',
      reasoning: 'This reduces exposure while keeping the system able to deduplicate complaints from the same contact. The trade-off is deliberate and privacy-first.',
      demonstrates: 'Privacy-by-design engineering and legal awareness.',
    },
    {
      title: 'Priority Score Algorithm',
      problem: 'Complaint urgency needed to reflect both severity and public signal, not just popularity.',
      decision: 'I used the rule priority_score = (severity × 2) + upvotes.',
      reasoning: 'This ensures AI-detected severity carries more weight than community upvotes, while still preserving signal from citizens.',
      demonstrates: 'Domain modeling and thoughtful ranking logic.',
    },
    {
      title: 'Gemini Fallback Chain',
      problem: 'The primary AI provider was not reliable enough to trust for every request.',
      decision: 'I built a fallback chain across three Gemini models and made the order configurable in the service layer.',
      reasoning: 'The system had already experienced real outages, so resilience had to be designed into the architecture rather than handled as an edge case.',
      demonstrates: 'Resilience engineering based on actual failure modes.',
    },
    {
      title: 'SSR + TanStack Start',
      problem: 'The frontend stack used SSR and included a mapping component that needed browser-only APIs.',
      decision: 'I used SSR-safe wrappers and dynamically imported the map implementation only in the browser.',
      reasoning: 'This prevented server crashes and kept the application compatible with the SSR environment while preserving the map experience.',
      demonstrates: 'Solid understanding of client/server boundaries in modern frontend architecture.',
    },
    {
      title: 'Cloudinary for Media Storage',
      problem: 'Complaint images should not be stored directly in the relational database.',
      decision: 'I stored image assets in Cloudinary and kept only the public URL in MySQL.',
      reasoning: 'This keeps the database small and fast, while also enabling CDN delivery, compression, and simpler media management.',
      demonstrates: 'Good judgment about where to use cloud storage instead of relational persistence.',
    },
    {
      title: 'Nominatim Reverse Geocoding',
      problem: 'Citizens should not manually pick wards from a list, especially when they may not know their current civic boundary.',
      decision: 'I used server-side reverse geocoding to assign ward context automatically from location coordinates.',
      reasoning: 'This keeps the workflow simple for citizens and improves the integrity of location data.',
      demonstrates: 'Data integrity and practical automation.',
    },
    {
      title: 'Immutable Activity Logs',
      problem: 'Government-facing systems need defensible audit trails for accountability.',
      decision: 'I designed the activity log as append-only and kept it separate from mutable complaint state.',
      reasoning: 'This creates a legal and operational record of what happened, who changed it, and when.',
      demonstrates: 'Enterprise-grade auditability and responsible system design.',
    },
  ]

  const highlights = [
    'REST API Design',
    'JWT Authentication',
    'Role Based Access Control',
    'AI Image Analysis',
    'External API Integration',
    'Audit Logging',
    'Database Seeding',
    'Multipart Uploads',
    'Cloud Storage',
    'Dynamic Queries',
    'Global Exception Handling',
    'Statistics APIs',
    'Scheduled Jobs',
    'DTO Architecture',
    'Privacy by Design',
    'SSR Integration',
    'Configuration Management',
    'Adapter Pattern',
  ]

  const challenges = [
    {
      title: 'Leaflet SSR crash',
      rootCause: 'The map dependency requires browser globals and was being imported in a server-rendered context.',
      solution: 'I split the map into an SSR-safe wrapper and a browser-only implementation loaded dynamically after mount.',
      lesson: 'SSR boundaries must be treated as first-class architecture concerns, not an afterthought.',
    },
    {
      title: 'Gemini outage',
      rootCause: 'The primary AI model became unavailable during development, breaking the complaint analysis flow.',
      solution: 'I introduced a three-model fallback chain so the platform could recover when one provider failed.',
      lesson: 'A production system should be designed to survive external dependency failure, not just happy paths.',
    },
    {
      title: 'Hibernate UUID issue',
      rootCause: 'The persistence layer started storing UUIDs in a format incompatible with the MySQL schema expectations.',
      solution: 'I adjusted the Hibernate configuration to force string-based UUID storage and rebuilt the schema cleanly.',
      lesson: 'ORM defaults can silently change behavior across versions, so schema verification matters.',
    },
    {
      title: 'JWT role mismatch',
      rootCause: 'Authentication flowed into Spring Security before the application could validate the selected role against the account identity.',
      solution: 'I added a domain-level role check before the security layer returned a generic 403 response.',
      lesson: 'Good exception handling and user-friendly validation are essential before framework defaults take over.',
    },
    {
      title: 'CORS development issue',
      rootCause: 'The frontend and backend were served on different local ports and the browser blocked cross-origin requests.',
      solution: 'I reconfigured the allowed origins and aligned the runtime ports so the development environment could behave like the deployed system.',
      lesson: 'Local environment mismatches can mask real deployment issues if they are not handled carefully.',
    },
  ]

  const services = [
    { title: 'Gemini AI', purpose: 'Image understanding and complaint classification', data: 'Image payloads, extracted fields, severity, summary, and autogenerated letters', fallback: 'Fallback to secondary models when the primary provider fails' },
    { title: 'Cloudinary', purpose: 'Image storage and media delivery', data: 'Complaint photos, transformations, optimized URLs, and CDN delivery', fallback: 'Upload validation and graceful failure handling for oversized or invalid files' },
    { title: 'Twilio', purpose: 'SMS notifications', data: 'Citizen notification payloads and status updates', fallback: 'Non-blocking notification flow with error logging and retry awareness' },
    { title: 'Nominatim', purpose: 'Reverse geocoding for ward detection', data: 'Coordinates, location names, and civic area association', fallback: 'Fallback to a default ward when geocoding is unavailable' },
  ]

  const securityItems = [
    'JWT Authentication',
    'Refresh Tokens',
    'Role Based Authorization',
    'Password Encryption',
    'Phone Hashing',
    'Protected Routes',
    'Input Validation',
    'Global Exception Handling',
    'CORS Configuration',
    'DTO Validation',
  ]

  const timeline = [
    ['Day 1', 'Planning'],
    ['Day 2', 'Database'],
    ['Day 3', 'Authentication'],
    ['Day 4', 'Complaint APIs'],
    ['Day 5', 'Officer APIs'],
    ['Day 6', 'AI Integration'],
    ['Day 7', 'Cloudinary'],
    ['Day 8', 'Analytics'],
    ['Day 9', 'Frontend Integration'],
    ['Day 10', 'Testing'],
    ['Day 11', 'Deployment & Demo'],
  ]

  return (
    <div className="case-study-page" style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100dvh' }}>
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
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
          TG
        </div>
        <button
          onClick={() => onNavigate('portfolio')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text2)',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <ArrowRight size={16} />
          Back
        </button>
      </nav>

      <section style={{ padding: '8rem 3rem 5rem', borderBottom: '1px solid var(--border)' }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="case-hero-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center', maxWidth: '1240px', margin: '0 auto' }}
        >
          <div style={{ paddingTop: '2rem' }}>
            <motion.div variants={fadeIn} custom={0} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text3)', marginBottom: '0.8rem' }}>
              VOXA · Civic Voice Platform
            </motion.div>
            <motion.h1 variants={fadeIn} custom={1} style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.25rem' }}>
              VOXA
            </motion.h1>
            <motion.p variants={fadeIn} custom={2} className="case-hero-lead" style={{ fontSize: '1.35rem', color: 'var(--text2)', marginBottom: '1.5rem', fontWeight: 300 }}>
              AI-powered civic complaint management platform built to modernize the interaction between citizens and municipal authorities.
            </motion.p>
            <motion.p variants={fadeIn} custom={3} className="case-hero-copy" style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>
              VOXA enables citizens to report civic issues using photos, AI automatically categorizes complaints, assigns departments, prioritizes issues, and routes them to appropriate municipal officers while maintaining a complete audit history.
            </motion.p>
            <motion.div variants={fadeIn} custom={4} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {['Java 21', 'Spring Boot 3', 'Spring Security', 'MySQL', 'JPA', 'JWT', 'Cloudinary', 'Gemini AI', 'Twilio', 'Nominatim', 'React', 'TanStack Start', 'TypeScript', 'Railway', 'Cloudflare'].map((tech) => (
                <span key={tech} style={{ padding: '0.5rem 0.9rem', border: '1px solid var(--border)', borderRadius: '999px', fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)' }}>
                  {tech}
                </span>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} custom={5} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/tejasgehlot/voxa-command-center.git" target="_blank" rel="noreferrer" style={{ padding: '0.8rem 1.4rem', background: 'var(--text)', color: 'var(--bg)', border: 'none', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Github size={14} />
                GitHub
              </a>
              <button style={{ padding: '0.8rem 1.4rem', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>
                Live Demo
              </button>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }} className="case-hero-media" style={{ width: '100%', height: 'auto', minHeight: 'clamp(240px, 55vw, 430px)', aspectRatio: '16 / 10', background: 'var(--bg2)', border: '1px solid var(--border)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(0.75rem, 2vw, 1rem)', position: 'relative' }}>
            <img
              src={VOXA}
              alt="VOXA Preview"
              style={{
                  width: '100%',
                  height: '70%',
                  objectFit: 'cover',
                  display: 'block'
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Project Overview
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text2)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '1.2rem' }}>
            VOXA was designed around real municipal workflows rather than another CRUD demo. It allows citizens to report civic issues with photos, then uses AI to classify, prioritize, and dispatch them to the appropriate department while preserving an auditable record of actions.
          </p>
          <p>
            The system was built to feel like production software that serves a public service function, with role-aware workflows, secure data handling, and a backend designed for accountability and operational clarity.
          </p>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Project Metrics
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '1rem' }}>
          {metrics.map((item, idx) => (
            <motion.div key={item.label} variants={fadeIn} custom={idx} style={{ border: '1px solid var(--border)', padding: '1.4rem 1.2rem', background: 'var(--card-bg)' }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.value}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text3)' }}>{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          System Architecture
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="case-two-col" style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2rem', alignItems: 'start' }}>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Frontend</div>
              <div style={{ textAlign: 'center', color: 'var(--text2)' }}>↓</div>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Spring Boot REST APIs</div>
              <div style={{ textAlign: 'center', color: 'var(--text2)' }}>↓</div>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Business Services</div>
              <div style={{ textAlign: 'center', color: 'var(--text2)' }}>↓</div>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Repositories</div>
              <div style={{ textAlign: 'center', color: 'var(--text2)' }}>↓</div>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>MySQL Database</div>
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text3)', marginBottom: '1rem' }}>External integrations</div>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {['Gemini AI', 'Cloudinary', 'Twilio', 'OpenStreetMap Nominatim'].map((service) => (
                <div key={service} style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', color: 'var(--text2)' }}>{service}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          My Contribution
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="case-two-col" style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: '2rem' }}>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>Built by me</div>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              {['Spring Boot backend', 'All 29 REST APIs', 'Complete database schema', 'JWT Authentication', 'Role Based Authorization', 'Business Logic', 'AI Integration', 'Gemini fallback mechanism', 'Cloudinary Integration', 'Location Detection', 'DTO Layer', 'Global Exception Handling', 'Database Seeding', 'Railway Deployment', 'Frontend Integration'].map((item) => (
                <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text2)' }}>
                  <span style={{ width: '6px', height: '6px', background: 'var(--text)', borderRadius: '50%', marginTop: '0.5rem' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>Team work</div>
            <div style={{ display: 'grid', gap: '0.7rem', color: 'var(--text2)' }}>
              {['Frontend UI', 'Research', 'Presentation', 'Documentation'].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Engineering Decisions
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gap: '1.5rem' }}>
          {decisions.map((decision, index) => (
            <div key={decision.title} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.4rem' }}>Decision {index + 1}</div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>{decision.title}</h3>
              <div style={{ color: 'var(--text2)', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '0.6rem' }}><strong>Problem:</strong> {decision.problem}</p>
                <p style={{ marginBottom: '0.6rem' }}><strong>Decision:</strong> {decision.decision}</p>
                <p style={{ marginBottom: '0.6rem' }}><strong>Reasoning:</strong> {decision.reasoning}</p>
                <p><strong>What it demonstrates:</strong> {decision.demonstrates}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Technical Highlights
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {highlights.map((item, idx) => (
            <motion.div key={item} variants={fadeIn} custom={idx} style={{ border: '1px solid var(--border)', padding: '1.4rem', background: 'var(--card-bg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--text)', borderRadius: '50%' }} />
                <div style={{ color: 'var(--text2)' }}>{item}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Challenges & Solutions
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gap: '1.3rem' }}>
          {challenges.map((item) => (
            <div key={item.title} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.45rem' }}>{item.title}</h3>
              <div style={{ color: 'var(--text2)', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '0.3rem' }}><strong>Root cause:</strong> {item.rootCause}</p>
                <p style={{ marginBottom: '0.3rem' }}><strong>Solution:</strong> {item.solution}</p>
                <p><strong>Lesson:</strong> {item.lesson}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          External Services
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {services.map((service, idx) => (
            <motion.div key={service.title} variants={fadeIn} custom={idx} style={{ border: '1px solid var(--border)', padding: '1.5rem', background: 'var(--card-bg)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.6rem' }}>{service.title}</div>
              <div style={{ color: 'var(--text2)', lineHeight: 1.7 }}>
                <p style={{ marginBottom: '0.5rem' }}><strong>Purpose:</strong> {service.purpose}</p>
                <p style={{ marginBottom: '0.5rem' }}><strong>Data exchanged:</strong> {service.data}</p>
                <p><strong>Failure handling:</strong> {service.fallback}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Security
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {securityItems.map((item) => (
            <div key={item} style={{ border: '1px solid var(--border)', padding: '1.25rem', background: 'var(--card-bg)', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <ShieldCheck size={16} color="var(--text2)" />
              <span style={{ color: 'var(--text2)' }}>{item}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Database Schema
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.8rem' }}>
            {['Users', 'Complaints', 'Activity Log', 'Departments', 'Wards', 'Authorities', 'Notifications', 'Analytics'].map((table) => (
              <div key={table} style={{ padding: '0.9rem 1rem', border: '1px solid var(--border)', textAlign: 'center', color: 'var(--text2)' }}>{table}</div>
            ))}
          </div>
          <div style={{ marginTop: '1.2rem', lineHeight: 1.8, color: 'var(--text2)' }}>
            The schema is structured around accountable civic workflows with associations between complaints, wards, authorities, and immutable activity records.
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          What Makes This Project Different
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {['Real multi-role authorization', 'Real AI integration', 'Privacy-first architecture', 'Production-grade backend', 'Built under real deadline constraints'].map((item, idx) => (
            <div key={item} style={{ border: '1px solid var(--border)', padding: '1.5rem', background: 'var(--card-bg)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.7rem' }}>{idx + 1}</div>
              <div style={{ color: 'var(--text2)', lineHeight: 1.7 }}>{item}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Skills Demonstrated
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="case-two-col" style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>Backend Engineering</div>
            <div style={{ display: 'grid', gap: '0.7rem', color: 'var(--text2)' }}>
              {['REST APIs', 'Spring Security', 'JWT', 'JPA', 'DTO Design', 'Multipart Upload', 'External APIs', 'Database Design', 'Validation', 'Logging', 'Exception Handling', 'Scheduling', 'Caching'].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>Software Architecture</div>
            <div style={{ display: 'grid', gap: '0.7rem', color: 'var(--text2)' }}>
              {['Monolith Design', 'Resilience Engineering', 'Privacy-first Design', 'Deployment Awareness', 'SSR Integration', 'Cloud Storage Strategy', 'API Design', 'Domain Modeling'].map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>
          Development Timeline
        </motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
          {timeline.map(([day, label], idx) => (
            <div key={day} className="case-timeline-row" style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', minWidth: '80px' }}>{day}</div>
              <div style={{ color: 'var(--text2)' }}>{label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      <section style={{ padding: '6rem 3rem', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}>
          Ready to Build?
        </motion.h2>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto 3rem' }}>
          <a href="https://github.com/tejasgehlot/voxa-command-center.git" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'var(--text)', color: 'var(--bg)', border: 'none', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s', textDecoration: 'none', textAlign: 'center' }}>
            View GitHub Repository
          </a>
          <button style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>
            Live Demo
          </button>
          <button style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>
            Architecture Diagram
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text3)', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Built with Java • Spring Boot 3 • MySQL • React • TypeScript • Railway • Cloudflare • Gemini AI • Cloudinary • Nominatim
        </motion.div>
      </section>
    </div>
  )
}

export default VoxaCaseStudy
