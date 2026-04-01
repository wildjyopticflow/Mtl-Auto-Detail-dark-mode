import { motion } from 'motion/react'
import { ArrowRight, CheckCircle, Shield } from 'lucide-react'

const HERO_IMG = 'https://static.wixstatic.com/media/8f8c7d_054b8890145c478bb42f26211d6be6d7~mv2.jpg/v1/crop/x_328,y_0,w_3457,h_5670/fill/w_900,h_1200,al_c,q_80,enc_avif,quality_auto/8f8c7d_054b8890145c478bb42f26211d6be6d7~mv2.jpg'
const SIDE_IMG = 'https://static.wixstatic.com/media/8f8c7d_b03bb1893aee4fafa7be0ee8e36cc506~mv2.jpg/v1/crop/x_0,y_202,w_675,h_775/fill/w_800,h_900,al_c,q_80,enc_avif,quality_auto/5f2244782feb9f340101e1be0559e5da.jpg'

const gallery = [
  'https://static.wixstatic.com/media/8f8c7d_f51314083df7415b8517779472048bec~mv2.jpg/v1/fill/w_600,h_720,al_c,q_80,enc_avif,quality_auto/Photo%202025-02-07%2C%2011%2003%2050%20AM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_5a019c4c3e4b485e94059e7450d8cfe7~mv2.jpg/v1/fill/w_600,h_720,al_c,q_80,enc_avif,quality_auto/Photo%202025-02-07%2C%2011%2008%2028%20AM_edited.jpg',
  'https://static.wixstatic.com/media/8f8c7d_958f35f340c54702b985348816ac431b~mv2.jpg/v1/fill/w_600,h_720,al_c,q_80,enc_avif,quality_auto/Photo%202025-02-07%2C%2011%2006%2035%20AM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_9c896d8d4e754af686f23ccef5fb405c~mv2.jpg/v1/fill/w_600,h_720,al_c,q_80,enc_avif,quality_auto/Photo%202025-02-07%2C%2011%2005%2035%20AM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_898da4ec8f5c480a8fe5db21c07c7995~mv2.jpg/v1/fill/w_600,h_720,al_c,q_80,enc_avif,quality_auto/Photo%202025-02-07%2C%2011%2004%2040%20AM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_5871936af72d49ea8a2da02c956ce898~mv2.jpg/v1/fill/w_600,h_720,al_c,q_80,enc_avif,quality_auto/Photo%202025-02-07%2C%2011%2005%2005%20AM_JPG.jpg',
]

const coverage = [
  { label: 'Full Front Package', desc: 'Hood, fenders, bumper, mirrors, and A-pillars.' },
  { label: 'Partial Front', desc: 'Bumper and partial hood — the most impact-prone zones.' },
  { label: 'Full Vehicle', desc: 'Complete paint protection from hood to tail.' },
  { label: 'Custom Coverage', desc: 'Protect any specific panels or areas you choose.' },
]

const features = [
  'Self-healing surface — minor scratches disappear with heat',
  'Hydrophobic top coat — water beads and rolls off',
  'Preserves factory paint and resale value',
  'Crystal-clear, optically transparent film',
  'Resistant to rock chips, road debris, and bug acid',
  'Works with insurance providers',
]

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export default function ProtectionFilm() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={HERO_IMG} alt="PPF installation" className="page-hero-bg" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(155,24,29,0.72) 0%, rgba(0,0,0,0.35) 100%)' }} />
        <div className="container page-hero-content">
          <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: 0.7 }}>
            <span className="section-label">Our Services</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#fff', marginTop: 8, marginBottom: 16 }}>
              Paint Protection <span style={{ color: '#CE2026' }}>Film</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, fontSize: 17, marginBottom: 28 }}>
              Invisible armour for your paint. PPF shields against rock chips, scratches, and road debris while preserving every detail of your vehicle's finish.
            </p>
            <a href="#contact" className="btn-primary">
              Get a Quote <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features + image */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label">Why PPF?</span>
              <h2 className="section-title">
                The Ultimate <span>Paint Protection</span>
              </h2>
              <div className="red-divider" />
              <p style={{ color: 'var(--color-text-muted)', marginTop: 20, marginBottom: 28, lineHeight: 1.8 }}>
                Paint Protection Film (PPF) is a virtually invisible urethane film applied to your vehicle's painted surfaces. It's the strongest line of defence against the daily hazards of the road — and it maintains your car's showroom finish for years.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#CE2026] shrink-0 mt-0.5" />
                    <span style={{ fontSize: 15, color: 'var(--color-text-muted)' }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a href="#contact" className="btn-primary">Book Now <ArrowRight size={15} /></a>
                <a href="tel:5148038488" className="btn-outline-red">Call Us</a>
              </div>
            </motion.div>

            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img
                src={SIDE_IMG}
                alt="PPF applied on vehicle"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-xl)',
                  objectFit: 'cover',
                  aspectRatio: '4/5',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Options */}
      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Coverage</span>
            <h2 className="section-title">Choose Your <span>Protection Package</span></h2>
            <div className="red-divider red-divider-center" />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: 480, margin: '16px auto 0' }}>
              From targeted partial coverage to full-vehicle protection — we tailor each installation to your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coverage.map((c, i) => (
              <motion.div
                key={c.label}
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 24px',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <Shield size={28} className="text-[#CE2026] mb-3" />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{c.label}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Our Work</span>
            <h2 className="section-title">PPF <span>Gallery</span></h2>
            <div className="red-divider red-divider-center" />
          </motion.div>
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <motion.div
                key={src}
                className="gallery-item"
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
              >
                <img src={src} alt={`PPF project ${i + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-primary)', padding: '72px 0' }}>
        <div className="container text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>
              Protect Your Investment Today
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>
              Contact us for a free PPF consultation and quote. We work with insurance providers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:5148038488" className="btn-secondary">Call 514-803-8488</a>
              <a href="mailto:meticulousmontreal@gmail.com" className="btn-secondary">Email Us</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
