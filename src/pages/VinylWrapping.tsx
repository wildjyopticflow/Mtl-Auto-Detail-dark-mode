import { motion } from 'motion/react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const HERO_BG = 'https://static.wixstatic.com/media/8f8c7d_0ec07b75250147b3b6e71af3a678ff7a~mv2.jpg/v1/fill/w_1200,h_800,al_c,q_80,enc_avif,quality_auto/Photo%202024-04-02%2C%206%2013%2002%E2%80%AFPM_JPG.jpg'

const gallery = [
  'https://static.wixstatic.com/media/8f8c7d_0ec07b75250147b3b6e71af3a678ff7a~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-04-02%2C%206%2013%2002%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_c10c446b1f8d4337bba5c55ab24d1768~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-04-02%2C%206%2012%2003%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_cb0b21e8814c47a48fcdc9420059f445~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-04-02%2C%206%2006%2005%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_07470cea2ab246dfa72d3798b6ee8561~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-04-02%2C%206%2013%2017%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_cb024508d293434f968fdedee061dbf1~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-04-02%2C%206%2013%2050%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_66d814f1440b4f4a82838727aab45b35~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/1f942a29-c12d-4470-95d0-a78e52763def_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_435d2d1c5c054f76b42aa89126a856f2~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/701a3c8f-a9e4-4942-8cc5-a8c69143b5f5_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_da566e15e47942eab4b92fe10b53542b~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/b5c1c812-4caa-47eb-a481-5b1e10d21bfa_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_e8b676b7d3ef4f51ab7024ea9237196c~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-11-12%2C%203%2051%2054%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_978a60a7e7594c6face82bd0fde8f0b9~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/16971982-3090-4d18-91f2-97c924c28859_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_431254a8d79c4dd6aa26b584a4b687dd~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/24809342-c2ed-408c-99e5-f82f3bafd415_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_caefd8ab8f64409aad1be5c542d76fd6~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-11-12%2C%203%2052%2012%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_3be97d6b1b7f4a6c98e57bec6378f5f5~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-11-12%2C%203%2050%2016%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_66f313249461430692da85a94b483abc~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/67047d61-d65e-41dd-90e5-3bc9ba433da2_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_c9f5eb472a7e43e99de9e72c064df8d5~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-04-02%2C%206%2013%2038%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_8ac1d988dc1147d99966e7356fb66bf4~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-11-12%2C%203%2050%2043%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_5aba5da46bbf41fc813e4445f817e9d8~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-11-12%2C%203%2051%2058%E2%80%AFPM_JPG.jpg',
  'https://static.wixstatic.com/media/8f8c7d_9f116ec18fcd48fb8f377f8a6a76c324~mv2.jpg/v1/fill/w_600,h_680,al_c,q_80,enc_avif,quality_auto/Photo%202024-11-12%2C%203%2050%2041%E2%80%AFPM_JPG.jpg',
]

const benefits = [
  'Full vehicle wraps or partial accent panels',
  'Colour change wraps — hundreds of finishes available',
  'Matte, satin, gloss, chrome, and textured films',
  'Protects original paint — fully reversible',
  'Professional installation with no bubbles or seams',
  'Interior &amp; exterior wrap applications',
]

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export default function VinylWrapping() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={HERO_BG} alt="Vinyl wrap" className="page-hero-bg" />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(155,24,29,0.65) 0%, rgba(0,0,0,0.3) 100%)',
          }}
        />
        <div className="container page-hero-content">
          <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: 0.7 }}>
            <span className="section-label">Our Services</span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 700,
                color: '#fff',
                marginTop: 8,
                marginBottom: 16,
              }}
            >
              Vinyl <span style={{ color: '#CE2026' }}>Wrapping</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, fontSize: 17, marginBottom: 28 }}>
              Transform your vehicle's appearance with premium vinyl wraps. Every curve, every panel — precision-wrapped to perfection.
            </p>
            <a href="#contact" className="btn-primary">
              Get a Free Quote <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About / Benefits */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">
                Premium Vinyl <span>Wraps for Every Vehicle</span>
              </h2>
              <div className="red-divider" />
              <p style={{ color: 'var(--color-text-muted)', marginTop: 20, marginBottom: 28, lineHeight: 1.8 }}>
                Our vinyl wrapping service goes far beyond a colour change. We use only premium-grade films from top manufacturers, applied by skilled technicians who treat your vehicle like their own.
              </p>
              <ul className="flex flex-col gap-3">
                {benefits.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#CE2026] shrink-0 mt-0.5" />
                    <span
                      style={{ fontSize: 15, color: 'var(--color-text-muted)' }}
                      dangerouslySetInnerHTML={{ __html: b }}
                    />
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4" style={{ marginTop: 56 }}>
                <a href="#contact" className="btn-primary">Book Now <ArrowRight size={15} /></a>
                <a href="tel:5148038488" className="btn-outline-red">514-803-8488</a>
              </div>
            </motion.div>

            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div
                style={{
                  background: 'var(--color-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '36px',
                  color: '#fff',
                }}
              >
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
                  Why Choose Vinyl Wrapping?
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 24, lineHeight: 1.75 }}>
                  Vinyl wrapping is the most versatile and cost-effective way to change or protect your vehicle's look. Unlike a repaint, it's fully reversible and preserves your original factory paint — protecting your car's resale value.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { v: 'Fully', l: 'Reversible' },
                    { v: 'Paint', l: 'Protective' },
                    { v: 'Custom', l: 'Finishes' },
                    { v: 'Fast', l: 'Turnaround' },
                  ].map(({ v, l }) => (
                    <div
                      key={l}
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: 'var(--radius-md)',
                        padding: '16px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700 }}>{v}</div>
                      <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', marginTop: 2 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Our Work</span>
            <h2 className="section-title">Vinyl Wrap <span>Gallery</span></h2>
            <div className="red-divider red-divider-center" />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: 480, margin: '16px auto 0' }}>
              Browse some of our recent vinyl wrapping projects — every one crafted with precision.
            </p>
          </motion.div>

          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <motion.div
                key={src}
                className="gallery-item"
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              >
                <img src={src} alt={`Vinyl wrap project ${i + 1}`} loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#111', padding: '80px 0' }}>
        <div className="container text-center">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <h2 className="section-title-light" style={{ marginBottom: 16 }}>
              Ready to <span>Transform Your Vehicle?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
              Contact us today for a free consultation and quote on your vinyl wrap project.
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
