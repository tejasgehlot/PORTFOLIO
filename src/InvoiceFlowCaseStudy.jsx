import { motion } from 'framer-motion'
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Database,
  FileText,
  Globe2,
  Lock,
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

const InvoiceFlowCaseStudy = ({ onNavigate = () => {} }) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.55 } }),
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  }

  const metrics = [
    { value: '23', label: 'REST APIs' },
    { value: '3', label: 'Auth Layers' },
    { value: '7', label: 'Spring Services' },
    { value: '4', label: 'Repositories' },
    { value: '18', label: 'Custom Queries' },
    { value: '5', label: 'Database Tables' },
    { value: '6', label: 'Foreign Keys' },
    { value: '3', label: 'Entity Relationships' },
    { value: '2', label: 'User Roles' },
    { value: '1', label: 'PDF Engine' },
    { value: '6', label: 'Migration Scripts' },
    { value: '7', label: 'Frontend Pages' },
    { value: '13', label: 'Reusable Components' },
    { value: '2', label: 'Chart Types' },
    { value: '3', label: 'Role Protection Levels' },
  ]

  const decisions = [
    {
      title: 'Why Spring Boot?',
      problem: 'The project needed a backend that could ship quickly while remaining maintainable and production-friendly.',
      decision: 'I chose Spring Boot as the core backend framework because it gives an enterprise-grade ecosystem with embedded Tomcat, auto-configuration, dependency injection, and strong Spring Security integration.',
      reasoning: 'That gives a reliable foundation for controllers, services, repositories, and authentication without forcing unnecessary custom infrastructure.',
      demonstrates: 'Understanding of enterprise backend development and maintainable service layering.',
    },
    {
      title: 'Why JWT Authentication?',
      problem: 'The frontend needed a stateless auth model that would work seamlessly with a React SPA and not depend on server-side sessions.',
      decision: 'I implemented JWT-based authentication with access tokens, role claims, and adminId embedded in the token.',
      reasoning: 'JWT keeps the authentication flow stateless and scales horizontally, which is better suited for SaaS-style deployments than session affinity.',
      demonstrates: 'Scalable authentication design rather than ad-hoc login logic.',
    },
    {
      title: 'Why MySQL Instead of MongoDB?',
      problem: 'Invoice data is relational by nature and needs integrity across clients, invoices, line items, and billing context.',
      decision: 'I used MySQL with relational mappings rather than a document database.',
      reasoning: 'Invoices depend on referential integrity, transaction safety, and predictable joins, which are strengths of relational databases.',
      demonstrates: 'Correct database selection based on the business model.',
    },
    {
      title: 'Why Shared Schema Multi-Tenancy?',
      problem: 'The project needed to isolate businesses while keeping implementation simple and deployment cost-effective.',
      decision: 'I used a shared-schema multi-tenant design with adminId-based filtering on every data access path.',
      reasoning: 'This keeps the system easier to operate than separate schemas while still preventing cross-business leakage through enforced access constraints.',
      demonstrates: 'SaaS architecture thinking with practical trade-offs.',
    },
    {
      title: 'Why Server-side PDF Generation?',
      problem: 'Invoices need to be generated consistently and professionally, not depend on browser rendering quirks.',
      decision: 'I implemented server-side PDF generation using iText and streamed the invoice to the client as a downloadable attachment.',
      reasoning: 'This ensures consistent formatting, better reliability, and a solid backend document pipeline.',
      demonstrates: 'Backend document generation and operational reliability.',
    },
    {
      title: 'Why React + TypeScript?',
      problem: 'The UI needed to be maintainable as the billing workflow grew beyond throwaway prototypes.',
      decision: 'I chose React with TypeScript to add compile-time safety and stronger interfaces around API responses and UI state.',
      reasoning: 'That reduces runtime errors around billing data and makes API contracts easier to evolve safely.',
      demonstrates: 'Engineering discipline and maintainability-minded frontend choices.',
    },
  ]

  const highlights = [
    'REST API Design',
    'JWT Authentication',
    'Spring Security',
    'BCrypt Password Hashing',
    'Multi-Tenant SaaS',
    'JPA Relationships',
    'Repository Pattern',
    'PDF Generation',
    'Dashboard Analytics',
    'Database Migrations',
    'Role Based Authorization',
    'Exception Handling',
    'Validation',
    'DTO Design',
    'Pagination',
    'Filtering',
    'Clean Architecture',
    'Configuration Management',
  ]

  const challenges = [
    {
      title: 'Hibernate Proxy Serialization',
      rootCause: 'Jackson tried to serialize lazy-loaded Hibernate proxies and hit a proxy interceptor that was not safe to expose.',
      solution: 'I annotated the relevant relationships and entities to avoid recursive serialization and protect the response shape.',
      lesson: 'ORM behavior and JSON serialization have to be considered together when building real backend APIs.',
    },
    {
      title: 'Spring Security CORS',
      rootCause: 'The browser blocked requests between the React frontend and the Spring backend because the security layer handled CORS before controller logic.',
      solution: 'I configured CORS through the Spring Security filter chain so the backend would accept the expected cross-origin requests.',
      lesson: 'Framework-level security flows must be configured at the correct layer, not just by adding annotations.',
    },
    {
      title: 'JWT adminId Extraction',
      rootCause: 'Staff users needed to inherit the correct business context from the authentication token without exposing unrelated data.',
      solution: 'I embedded adminId in the token and extracted it in the auth pipeline so every service call could enforce the right tenant context.',
      lesson: 'Authentication claims are often the cleanest way to carry business context through a stateless system.',
    },
    {
      title: 'JPA Circular References',
      rootCause: 'Entity relationships caused recursive object graphs to appear in API responses and break serialization.',
      solution: 'I introduced controlled JSON annotations and shaped the DTO layer to prevent loops while preserving the data the frontend needed.',
      lesson: 'Entity design and API contract design need to stay aligned for maintainable backend development.',
    },
  ]

  const timeline = [
    ['Day 1', 'Architecture Planning • Authentication • Database Design'],
    ['Day 2', 'Clients Module • Invoices Module'],
    ['Day 3', 'Role Management • Dashboard APIs'],
    ['Day 4', 'PDF Generation • Analytics • Business Logic'],
    ['Day 5', 'Frontend Integration • Testing • Bug Fixes'],
    ['Day 6', 'Deployment • Optimization • Final Demo'],
  ]

  return (
    <div className="case-study-page" style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100dvh' }}>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, background: 'var(--bg)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.2rem 3rem' }}>
        <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>TG</div>
        <button onClick={() => onNavigate('portfolio')} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <ArrowRight size={16} />
          Back
        </button>
      </nav>

      <section style={{ padding: '8rem 3rem 5rem', borderBottom: '1px solid var(--border)' }}>
        <motion.div initial="hidden" animate="visible" variants={containerVariants} className="case-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '3rem', alignItems: 'center', maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ paddingTop: '2rem' }}>
            <motion.div variants={fadeIn} custom={0} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--text3)', marginBottom: '0.8rem' }}>InvoiceFlow · Multi-Tenant Billing SaaS</motion.div>
            <motion.h1 variants={fadeIn} custom={1} style={{ fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.05, marginBottom: '1.25rem' }}>InvoiceFlow</motion.h1>
            <motion.p variants={fadeIn} custom={2} className="case-hero-lead" style={{ fontSize: '1.35rem', color: 'var(--text2)', marginBottom: '1.2rem', fontWeight: 300 }}>Production-grade invoice and billing management platform for businesses with secure authentication, multi-tenant isolation, and server-side PDF generation.</motion.p>
            <motion.p variants={fadeIn} custom={3} className="case-hero-copy" style={{ fontSize: '1rem', color: 'var(--text2)', lineHeight: 1.8, maxWidth: '600px', marginBottom: '2rem' }}>Built under a six-day competitive timeline, InvoiceFlow focuses on traditional enterprise backend engineering: authentication, role-based access, tenant-aware business logic, and reliable document generation.</motion.p>
            <motion.div variants={fadeIn} custom={4} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
              {['Java', 'Spring Boot', 'Spring Security', 'JWT', 'Hibernate', 'MySQL', 'React', 'TypeScript', 'Tailwind CSS', 'Axios', 'Recharts', 'iText PDF', 'Vite'].map((tech) => (
                <span key={tech} style={{ padding: '0.5rem 0.9rem', border: '1px solid var(--border)', borderRadius: '999px', fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text2)' }}>{tech}</span>
              ))}
            </motion.div>
            <motion.div variants={fadeIn} custom={5} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://github.com/tejasgehlot/InvoiceFlow.git" target="_blank" rel="noreferrer" style={{ padding: '0.8rem 1.4rem', background: 'var(--text)', color: 'var(--bg)', border: 'none', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                <Github size={14} />
                GitHub
              </a>
              <button style={{ padding: '0.8rem 1.4rem', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer' }}>Live Demo</button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="case-hero-media"
            style={{
              width: '100%',
              height: 'auto',
              minHeight: 'clamp(240px, 55vw, 430px)',
              aspectRatio: '16 / 10',
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(0.75rem, 2vw, 1rem)',
            }}
          >
            <img
              src={invoiceFlowImage}
              alt="InvoiceFlow Preview"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Project Overview</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text2)', lineHeight: 1.8 }}>
          <p style={{ marginBottom: '1.2rem' }}>InvoiceFlow helps businesses manage clients, invoices, staff members, billing workflows, dashboards, and PDF invoice generation in a single platform.</p>
          <p>Every business operates in complete isolation through a shared-schema multi-tenant architecture, and the backend is built around production concerns such as authentication, authorization, data integrity, and reliable document output.</p>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Project Metrics</motion.h2>
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>System Architecture</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="case-two-col" style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '2rem', alignItems: 'start' }}>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ display: 'grid', gap: '0.7rem' }}>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>React + TypeScript</div>
              <div style={{ textAlign: 'center', color: 'var(--text2)' }}>↓</div>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Axios + JWT</div>
              <div style={{ textAlign: 'center', color: 'var(--text2)' }}>↓</div>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Spring Boot REST API</div>
              <div style={{ textAlign: 'center', color: 'var(--text2)' }}>↓</div>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>Business Services</div>
              <div style={{ textAlign: 'center', color: 'var(--text2)' }}>↓</div>
              <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', textAlign: 'center' }}>MySQL Database</div>
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--text3)', marginBottom: '1rem' }}>Integrations</div>
            <div style={{ display: 'grid', gap: '0.8rem' }}>
              {['Spring Security', 'JWT', 'BCrypt', 'iText PDF', 'Recharts'].map((item) => <div key={item} style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', color: 'var(--text2)' }}>{item}</div>)}
            </div>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>My Contribution</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="case-two-col" style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: '2rem' }}>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>Built by me</div>
            <div style={{ display: 'grid', gap: '0.7rem', color: 'var(--text2)' }}>
              {['Spring Boot backend', 'REST APIs', 'Spring Security Configuration', 'JWT Authentication', 'JWT Filter', 'BCrypt Authentication', 'Role Based Authorization', 'Business Logic', 'JPA Entity Design', 'Repository Layer', 'Database Schema', 'PDF Generation Engine', 'Dashboard Analytics APIs', 'Invoice Number Generation', 'Multi-Tenant Architecture', 'Frontend Integration', 'Deployment Configuration'].map((item) => <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}><span style={{ width: '6px', height: '6px', background: 'var(--text)', borderRadius: '50%', marginTop: '0.5rem' }} /> <span>{item}</span></div>)}
            </div>
          </div>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>Project scope</div>
            <div style={{ display: 'grid', gap: '0.7rem', color: 'var(--text2)' }}>
              {['Backend architecture', 'Security implementation', 'Tenant-aware business rules', 'Invoice generation workflow', 'Analytics endpoints'].map((item) => <div key={item}>{item}</div>)}
            </div>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Engineering Decisions</motion.h2>
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Authentication Flow</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '900px', margin: '0 auto', border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
          <div style={{ display: 'grid', gap: '0.8rem' }}>
            {['Login Request', 'BCrypt Password Verification', 'JWT Generation', 'Token stored in Browser', 'Axios Interceptor', 'JwtFilter Validation', 'AdminId Extraction', 'Business Service', 'Database Query filtered by adminId', 'Response'].map((step, idx) => (
              <div key={step} className="case-flow-step" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text3)', minWidth: '70px' }}>{idx + 1}</div>
                <div style={{ padding: '0.8rem 1rem', border: '1px solid var(--border)', flex: 1, color: 'var(--text2)' }}>{step}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Core Business Logic</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
          {['Multi-Tenant Data Isolation', 'Auto Invoice Number Generation', 'Role-Based Access Control', 'Server-side PDF Generation', 'Dashboard Analytics', 'CORS Configuration'].map((item) => <div key={item} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem', color: 'var(--text2)' }}>{item}</div>)}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Technical Highlights</motion.h2>
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Challenges & Solutions</motion.h2>
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
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Multi-Tenant Architecture</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="case-two-col" style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {['Admin A', 'Admin B'].map((admin) => (
            <div key={admin} style={{ border: '1px solid var(--border)', padding: '1.5rem', background: 'var(--card-bg)' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.6rem' }}>{admin}</div>
              <div style={{ color: 'var(--text2)', lineHeight: 1.8 }}>Clients · Invoices · Staff · Dashboard</div>
            </div>
          ))}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '900px', margin: '1.5rem auto 0', color: 'var(--text2)', lineHeight: 1.8 }}>Every query is filtered by adminId extracted from the authenticated JWT so zero cross-business data leakage occurs.</motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Security</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {['JWT Authentication', 'BCrypt Password Hashing', 'Role Based Access Control', 'Spring Security Filter Chain', 'Protected Routes', 'Input Validation', 'CORS Configuration', 'DTO Validation', 'Admin Isolation', 'Authorization Checks'].map((item) => <div key={item} style={{ border: '1px solid var(--border)', padding: '1.25rem', background: 'var(--card-bg)', display: 'flex', alignItems: 'center', gap: '0.7rem' }}><ShieldCheck size={16} color="var(--text2)" /><span style={{ color: 'var(--text2)' }}>{item}</span></div>)}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Database Design</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.8rem' }}>
            {['Users', 'Clients', 'Invoices', 'Invoice Items', 'Business Settings'].map((table) => <div key={table} style={{ padding: '0.9rem 1rem', border: '1px solid var(--border)', textAlign: 'center', color: 'var(--text2)' }}>{table}</div>)}
          </div>
          <div style={{ marginTop: '1.2rem', lineHeight: 1.8, color: 'var(--text2)' }}>The schema is designed around one-to-many and many-to-one relationships with foreign keys that preserve tenant integrity and billing consistency.</div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>What Makes This Project Different</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {['Built under competition against an experienced Amazon engineer', 'Real SaaS multi-tenancy', 'Production-grade authentication', 'Server-side PDF generation', 'Business-focused architecture instead of tutorial CRUD'].map((item, idx) => <div key={item} style={{ border: '1px solid var(--border)', padding: '1.5rem', background: 'var(--card-bg)' }}><div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '0.7rem' }}>{idx + 1}</div><div style={{ color: 'var(--text2)', lineHeight: 1.7 }}>{item}</div></div>)}
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Skills Demonstrated</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="case-two-col" style={{ maxWidth: '1120px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>Backend Engineering</div>
            <div style={{ display: 'grid', gap: '0.7rem', color: 'var(--text2)' }}>{['REST APIs', 'Spring Security', 'JWT', 'BCrypt', 'Hibernate', 'JPA', 'Repository Pattern', 'DTO Design', 'Exception Handling', 'Validation', 'PDF Generation', 'Analytics APIs', 'Role Based Access', 'Database Design'].map((item) => <div key={item}>{item}</div>)}</div>
          </div>
          <div style={{ border: '1px solid var(--border)', padding: '2rem', background: 'var(--card-bg)' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', marginBottom: '1rem' }}>Software Architecture</div>
            <div style={{ display: 'grid', gap: '0.7rem', color: 'var(--text2)' }}>{['Multi-Tenant SaaS', 'Authentication Design', 'Shared Schema Strategy', 'Business Logic Design', 'REST Architecture', 'System Scalability', 'Clean Layered Architecture', 'Configuration Management'].map((item) => <div key={item}>{item}</div>)}</div>
          </div>
        </motion.div>
      </section>

      <section style={{ padding: '5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.1rem', fontWeight: 700, marginBottom: '2.5rem', maxWidth: '1120px', marginLeft: 'auto', marginRight: 'auto' }}>Development Timeline</motion.h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gap: '1rem' }}>
          {timeline.map(([day, label], idx) => <div key={day} className="case-timeline-row" style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem' }}><div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text3)', minWidth: '80px' }}>{day}</div><div style={{ color: 'var(--text2)' }}>{label}</div></div>)}
        </motion.div>
      </section>

      <section style={{ padding: '6rem 3rem', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '2rem', textTransform: 'uppercase', fontFamily: "'Space Mono', monospace", letterSpacing: '0.1em' }}>Ready to Build?</motion.h2>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: '0 auto 3rem' }}>
          <a href="https://github.com/tejasgehlot/InvoiceFlow.git" target="_blank" rel="noreferrer" style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'var(--text)', color: 'var(--bg)', border: 'none', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s', textDecoration: 'none', textAlign: 'center' }}>View GitHub Repository</a>
          <button style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>Live Demo</button>
          <button style={{ padding: '0.75rem 1.5rem', width: '100%', background: 'transparent', color: 'var(--text)', border: '1px solid var(--border)', borderRadius: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s' }}>Architecture Diagram</button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ paddingTop: '2rem', borderTop: '1px solid var(--border)', color: 'var(--text3)', fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Built with Java • Spring Boot • React • TypeScript • Tailwind CSS • MySQL • Axios • Recharts • iText PDF • Vite</motion.div>
      </section>
    </div>
  )
}

export default InvoiceFlowCaseStudy
