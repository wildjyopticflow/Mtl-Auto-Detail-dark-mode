import { motion } from 'motion/react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const IMG = 'https://static.wixstatic.com/media/8f8c7d_23ae179d7d4449668630e474844c43ca~mv2.jpg/v1/fill/w_900,h_1000,al_c,q_80,enc_avif,quality_auto/8f8c7d_23ae179d7d4449668630e474844c43ca~mv2.jpg'

const benefits = [
  'Hundreds of colours and finishes available',
  'Chip, scratch, and corrosion resistant',
  'More durable than traditional paint',
  'Environmentally friendly — no solvents',
  'Ideal for wheels, calipers, and metal components',
  'Smooth, even finish every time',
]

const steps = [
  { n: '01', title: 'Preparation', desc: 'All parts are sandblasted and degreased to ensure a clean surface for optimal adhesion.' },
  { n: '02', title: 'Application', desc: 'Electrostatically charged powder is applied evenly to the part for complete, uniform coverage.' },
  { n: '03', title: 'Curing', desc: 'Parts are baked in an oven at 400°F, creating a hard, durable polymer finish.' },
  { n: '04', title: 'Inspection', desc: 'Every piece is inspected for quality before leaving our facility.' },
]

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export default function PowderCoating() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={IMG} alt="Powder coated wheels" className="page-hero-bg" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(155,24,29,0.70) 0%, rgba(0,0,0,0.4) 100%)' }} />
        <div className="container page-hero-content">
          <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: 0.7 }}>
            <span className="section-label">Our Services</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#fff', marginTop: 8, marginBottom: 16 }}>
              Powder <span style={{ color: '#CE2026' }}>Coating</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, fontSize: 17, marginBottom: 28 }}>
              Durable, chip-resistant powder coating for wheels, calipers, and metal components. Hundreds of finishes to choose from.
            </p>
            <a href="#contact" className="btn-primary">
              Get a Quote <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label">Powder Coating</span>
              <h2 className="section-title">
                Built to <span>Last a Lifetime</span>
              </h2>
              <div className="red-divider" />
              <p style={{ color: 'var(--color-text-muted)', marginTop: 20, marginBottom: 28, lineHeight: 1.8 }}>
                Powder coating is the gold standard for wheel and component finishing. Unlike liquid paint, it creates a thick, uniform shell that resists chipping, fading, and corrosion — even in Montreal's brutal winters.
              </p>
              <ul className="flex flex-col gap-3">
                {benefits.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#CE2026] shrink-0 mt-0.5" />
                    <span style={{ fontSize: 15, color: 'var(--color-text-muted)' }}>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4" style={{ marginTop: 56 }}>
                <a href="#contact" className="btn-primary">Book Now <ArrowRight size={15} /></a>
                <a href="tel:5148038488" className="btn-outline-red">Call Us</a>
              </div>
            </motion.div>

            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img
                src={IMG}
                alt="Powder coated wheels"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-xl)',
                  objectFit: 'cover',
                  aspectRatio: '1',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Our Powder Coating <span>Process</span></h2>
            <div className="red-divider red-divider-center" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 24px',
                  boxShadow: 'var(--shadow-sm)',
                  borderTop: '4px solid var(--color-accent)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 48,
                    fontWeight: 700,
                    color: 'rgba(155,24,29,0.12)',
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {s.n}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#111', padding: '72px 0' }}>
        <div className="container text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-light" style={{ marginBottom: 16 }}>
              Refresh Your <span>Wheels Today</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>
              Contact us for a free quote on powder coating your wheels or components.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5148038488" className="btn-primary">Call 514-803-8488 <ArrowRight size={15} /></a>
              <a href="mailto:meticulousmontreal@gmail.com" className="btn-secondary">Email Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
