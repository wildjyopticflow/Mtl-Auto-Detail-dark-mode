import { motion } from 'motion/react'
import { ArrowRight, CheckCircle, Sun, Shield, Eye, ThermometerSun } from 'lucide-react'

const IMG1 = 'https://static.wixstatic.com/media/8f8c7d_244f1c88b2444b758ab337d212125db4~mv2.jpg/v1/fill/w_800,h_880,al_c,q_80,enc_avif,quality_auto/8f8c7d_244f1c88b2444b758ab337d212125db4~mv2.jpg'
const IMG2 = 'https://static.wixstatic.com/media/8f8c7d_da44a193df264343ab3bf3a025a03021~mv2.jpeg/v1/fill/w_800,h_880,al_c,q_80,enc_avif,quality_auto/IMG_7263.jpeg'

const benefits = [
  { icon: <Sun size={22} className="text-[#CE2026]" />, title: 'UV Protection', desc: 'Block up to 99% of harmful UV rays — protect your skin and your interior.' },
  { icon: <ThermometerSun size={22} className="text-[#CE2026]" />, title: 'Heat Rejection', desc: 'Keep your cabin up to 60% cooler. Reduce AC load and improve fuel economy.' },
  { icon: <Shield size={22} className="text-[#CE2026]" />, title: 'Safety Film', desc: 'In case of impact, safety tint holds shattered glass together — protecting occupants.' },
  { icon: <Eye size={22} className="text-[#CE2026]" />, title: 'Privacy & Style', desc: 'Sleek, dark finish adds an instant premium look and keeps prying eyes out.' },
]

const tintOptions = [
  { name: 'Dyed Film', desc: 'Entry-level tint, good heat and UV blocking at an affordable price point.', level: 'Good' },
  { name: 'Ceramic Film', desc: 'Premium nano-ceramic particles for maximum heat rejection without metallic interference.', level: 'Best' },
  { name: 'Carbon Film', desc: 'Non-reflective carbon layer with excellent heat and UV protection. Fade-resistant.', level: 'Better' },
]

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export default function WindowTinting() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={IMG1} alt="Window tinting" className="page-hero-bg" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(155,24,29,0.70) 0%, rgba(0,0,0,0.35) 100%)' }} />
        <div className="container page-hero-content">
          <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: 0.7 }}>
            <span className="section-label">Our Services</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#fff', marginTop: 8, marginBottom: 16 }}>
              Window <span style={{ color: '#CE2026' }}>Tinting</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, fontSize: 17, marginBottom: 28 }}>
              Professional window tint installation that enhances privacy, comfort, and your vehicle's look — all in one visit.
            </p>
            <a href="#contact" className="btn-primary">
              Get a Quote <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Why Tint?</span>
            <h2 className="section-title">More Than Just <span>Looks</span></h2>
            <div className="red-divider red-divider-center" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '28px 24px',
                  borderTop: '3px solid var(--color-accent)',
                }}
              >
                <div style={{ marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.65 }}>{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Film options + image */}
      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label">Film Options</span>
              <h2 className="section-title">Choose Your <span>Tint Level</span></h2>
              <div className="red-divider" />
              <p style={{ color: 'var(--color-text-muted)', marginTop: 20, marginBottom: 28, lineHeight: 1.8 }}>
                We carry a range of tint grades to match your needs and budget. All films are professionally installed with a lifetime warranty against bubbling and peeling.
              </p>
              <div className="flex flex-col gap-4">
                {tintOptions.map((o) => (
                  <div
                    key={o.name}
                    style={{
                      background: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 16,
                    }}
                  >
                    <CheckCircle size={20} className="text-[#CE2026] shrink-0 mt-0.5" />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16 }}>{o.name}</span>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#fff',
                            background: 'var(--color-primary)',
                            borderRadius: 4,
                            padding: '2px 8px',
                          }}
                        >
                          {o.level}
                        </span>
                      </div>
                      <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
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
                src={IMG2}
                alt="Window tinting result"
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

      {/* CTA */}
      <section style={{ background: 'var(--color-primary)', padding: '72px 0' }}>
        <div className="container text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', marginBottom: 16 }}>
              Ready for Tinted Windows?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>
              Call or email us today to book your window tinting appointment.
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
