import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Award, Clock, ChevronRight, Palette, SunDim, Settings, GraduationCap } from 'lucide-react'

const HERO_IMG   = 'https://static.wixstatic.com/media/8f8c7d_0d6abb2672544614a4619a290c99183d~mv2.jpg/v1/fill/w_1200,h_750,al_c,q_85,enc_auto/8f8c7d_0d6abb2672544614a4619a290c99183d~mv2.jpg'
const CAR_IMG    = 'https://static.wixstatic.com/media/8f8c7d_f483dce8cafe4271bf05610300199914f000.jpg/v1/fill/w_800,h_500,al_c,q_80,enc_auto/8f8c7d_f483dce8cafe4271bf05610300199914f000.jpg'
const PERSON_IMG = 'https://static.wixstatic.com/media/8f8c7d_d29d4c76f0d545868388bc462cec4cff~mv2.jpg/v1/fill/w_600,h_600,al_c,q_80,enc_avif,quality_auto/65b89c3b-49a6-499d-9cd0-f13492c469da.jpg'

const services = [
  {
    to: '/vinyl-wrapping',
    title: 'Vinyl Wrapping',
    desc: "Transform your vehicle's look with premium full or partial vinyl wraps. Every curve, covered to perfection.",
    icon: <Palette size={26} className="text-[#CE2026]" />,
  },
  {
    to: '/window-tinting',
    title: 'Window Tinting',
    desc: 'Reduce glare, block UV rays, and add a sleek finish with professional-grade window tint films.',
    icon: <SunDim size={26} className="text-[#CE2026]" />,
  },
  {
    to: '/powder-coating',
    title: 'Powder Coating',
    desc: 'Durable, chip-resistant powder coating for wheels and components. Hundreds of colours available.',
    icon: <Settings size={26} className="text-[#CE2026]" />,
  },
  {
    to: '/protection-film',
    title: 'Paint Protection Film',
    desc: 'Invisible armour for your paint. PPF shields against rock chips, scratches, and road debris.',
    icon: <Shield size={26} className="text-[#CE2026]" />,
  },
  {
    to: '/certification',
    title: 'Certification Courses',
    desc: 'Learn from the best. Our professional detailing certification courses go from basics to advanced techniques.',
    icon: <GraduationCap size={26} className="text-[#CE2026]" />,
  },
]

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Vehicles Transformed' },
  { value: '5★', label: 'Google Rating' },
  { value: '100%', label: 'Satisfaction Guarantee' },
]

const testimonials = [
  {
    name: 'Marc D.',
    text: 'Absolutely incredible work. My car looks better than the day I drove it off the lot. The attention to detail is unmatched in Montreal.',
    stars: 5,
  },
  {
    name: 'Sophie L.',
    text: 'Professional, fast, and the results speak for themselves. The vinyl wrap on my SUV is flawless. 10/10 would recommend.',
    stars: 5,
  },
  {
    name: 'Kevin T.',
    text: 'I had PPF installed on my new car and the service was exceptional from start to finish. These guys really know their craft.',
    stars: 5,
  },
]

// Staggered container + children — skill requires orchestrated reveals, not a single block fade
const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
}
const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: '#0a0a0a',
          overflow: 'hidden',
        }}
      >
        {/* Background image — slightly more present */}
        <img
          src={HERO_IMG}
          alt="Hero car"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', opacity: 0.58,
          }}
        />

        {/* Layer 1 — Strong left-to-right dark vignette: makes text readable, reveals car on right */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.75) 32%, rgba(5,5,5,0.42) 58%, transparent 100%)',
        }} />

        {/* Layer 2 — Red brand warmth radiating from bottom-left */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at -5% 110%, rgba(155,24,29,0.55) 0%, transparent 52%)',
        }} />

        {/* Layer 3 — Top vignette so navbar area stays dark */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '38%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)',
        }} />

        {/* Layer 4 — Bottom page transition */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '220px',
          background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)',
        }} />

        {/* Layer 5 — Subtle grain for luxury texture depth */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          opacity: 0.035,
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px' }}>
          {/* Staggered container — each child animates in with offset delay */}
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="show"
            style={{ maxWidth: 680 }}
          >
            {/* Label */}
            <motion.span
              variants={heroItem}
              className="section-label"
              style={{ color: '#CE2026', display: 'inline-block', marginBottom: 14 }}
            >
              Montreal's Premier Auto Specialists
            </motion.span>

            {/* Headline */}
            <motion.h1
              variants={heroItem}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(38px, 6vw, 72px)',
                fontWeight: 700,
                color: '#fff',
                lineHeight: 1.08,
                marginBottom: 24,
              }}
            >
              We Don't Just Fix Cars.{' '}
              <span style={{ color: '#CE2026' }}>We Perfect Them.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={heroItem}
              style={{ fontSize: 18, color: 'rgba(255,255,255,0.78)', maxWidth: 520, lineHeight: 1.75, marginBottom: 36 }}
            >
              Unmatched quality from 10+ years of precision expertise and a passion for excellence.
              Every vehicle receives the highest level of care.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItem} className="flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                Book Your Appointment <ArrowRight size={16} />
              </a>
              <Link to="/vinyl-wrapping" className="btn-secondary">
                View Services <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={heroItem}
              className="flex flex-wrap gap-6 mt-10"
              style={{
                paddingTop: 24,
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              {[
                { icon: <Star size={15} className="text-[#CE2026]" />, text: '5-Star Rated' },
                { icon: <Shield size={15} className="text-[#CE2026]" />, text: 'Insurance-Approved' },
                { icon: <Award size={15} className="text-[#CE2026]" />, text: 'AM Certified' },
                { icon: <Clock size={15} className="text-[#CE2026]" />, text: 'By Appointment' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  {icon}
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.70)', fontFamily: 'var(--font-heading)', fontWeight: 600, letterSpacing: '0.04em' }}>{text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section style={{ background: 'transparent', padding: '96px 0' }}>
        <div className="container">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-label">What We Do</span>
            <h2 className="section-title">
              Premium <span>Automotive Services</span>
            </h2>
            <div className="red-divider red-divider-center" />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: 520, margin: '0 auto', marginTop: 16 }}>
              From vinyl wraps to paint protection film, our expert team delivers showroom-quality results on every single job.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.to}
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={s.to} className="service-card block h-full" style={{ textDecoration: 'none' }}>
                  <div style={{ padding: '36px 28px 32px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div
                      style={{
                        width: 52, height: 52,
                        background: 'rgba(155,24,29,0.08)',
                        borderRadius: 12,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 24, marginBottom: 20,
                      }}
                    >
                      {s.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 20, fontWeight: 700,
                        color: 'var(--color-text)',
                        marginBottom: 10,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 15, color: 'var(--color-text-muted)', lineHeight: 1.65, marginBottom: 20 }}>
                      {s.desc}
                    </p>
                    <span
                      style={{
                        fontSize: 13,
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        color: 'var(--color-accent)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        marginTop: 'auto',
                        paddingTop: '20px'
                      }}
                    >
                      Learn More <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Stats ─────────────────────────────────── */}
      <section style={{ background: 'transparent', padding: '96px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                style={{
                  position: 'absolute', top: -16, left: -16,
                  width: '100%', height: '100%',
                  border: '3px solid var(--color-accent)',
                  borderRadius: 'var(--radius-lg)',
                  zIndex: 0,
                }}
              />
              <img
                src={CAR_IMG}
                alt="Detailed car"
                style={{
                  position: 'relative', zIndex: 1,
                  width: '100%', borderRadius: 'var(--radius-lg)',
                  objectFit: 'cover', aspectRatio: '4/3',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </motion.div>

            {/* Text side */}
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            >
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                10+ Years of <span>Precision &amp; Passion</span>
              </h2>
              <div className="red-divider" />
              <p style={{ color: 'var(--color-text-muted)', marginTop: 20, marginBottom: 20, lineHeight: 1.8 }}>
                Meticulous Montreal was born from an unwavering commitment to perfection. We've spent over a decade mastering every aspect of automotive aesthetics — from intricate vinyl wraps to invisible paint protection film.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 48, lineHeight: 1.8 }}>
                We work with insurance providers and are proud AM-certified technicians. Our appointment-only model ensures every vehicle gets the time and dedication it deserves.
              </p>
              <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 64 }}>
                {stats.map((s) => (
                  <div key={s.label} className="stat-card">
                    <div
                      style={{
                        fontSize: 32,
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        color: 'var(--color-primary)',
                        marginBottom: 4,
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--color-text-muted)', fontWeight: 600 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="btn-primary">
                Get a Free Quote <ArrowRight size={16} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section style={{ background: 'transparent', padding: '96px 0' }}>
        <div className="container">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-label">What Clients Say</span>
            <h2 className="section-title-light">
              Trusted by <span>Montreal's Car Enthusiasts</span>
            </h2>
            <div className="red-divider red-divider-center" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderLeft: '3px solid var(--color-accent)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '32px 28px',
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={16} fill="#CE2026" className="text-[#CE2026]" />
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.75, marginBottom: 20, fontSize: 15 }}>
                  "{t.text}"
                </p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, letterSpacing: '0.06em' }}>
                  — {t.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(125deg, #7A1217 0%, #9B181D 40%, #CE2026 100%)',
          padding: '80px 0',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Depth layers on the CTA banner */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 90% 50%, rgba(255,255,255,0.08) 0%, transparent 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 10% 50%, rgba(0,0,0,0.25) 0%, transparent 55%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 4vw, 44px)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: 16,
              }}
            >
              First-Time Customer? Save 10%
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.80)', marginBottom: 32, fontSize: 17, maxWidth: 480, margin: '0 auto 32px' }}>
              Book your Complete Detail package and mention this offer for 10% off your first visit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5148038488" className="btn-secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 7.08 7.08l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call 514-803-8488
              </a>
              <a href="mailto:meticulousmontreal@gmail.com" className="btn-secondary">
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Owner Photo ──────────────────────────────────── */}
      <section style={{ background: 'transparent', padding: '96px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <span className="section-label">Our Promise</span>
              <h2 className="section-title">
                Precision In <span>Every Detail</span>
              </h2>
              <div className="red-divider" />
              <p style={{ color: 'var(--color-text-muted)', marginTop: 20, marginBottom: 16, lineHeight: 1.8 }}>
                At Meticulous Montreal, every job is treated as a masterpiece. We don't rush. We don't cut corners. We obsess over every panel, seam, and surface until the result is nothing short of perfect.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 32, lineHeight: 1.8 }}>
                Whether it's a daily driver or a supercar, your vehicle gets the same uncompromising standard of care. That's the Meticulous promise.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  'Premium materials &amp; industry-certified products',
                  'Insurance-approved workmanship',
                  'Fully certified AM technicians',
                  'Appointment-only — your vehicle gets full attention',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      style={{
                        width: 20, height: 20, borderRadius: '50%',
                        background: 'var(--color-primary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: 2,
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p
                      style={{ fontSize: 15, color: 'var(--color-text-muted)' }}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            >
              <img
                src={PERSON_IMG}
                alt="Meticulous Montreal team"
                style={{
                  width: '100%',
                  maxWidth: 480,
                  margin: '0 auto',
                  borderRadius: 'var(--radius-xl)',
                  boxShadow: 'var(--shadow-lg)',
                  objectFit: 'cover',
                  aspectRatio: '1',
                  display: 'block',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
