import { motion } from 'motion/react'
import { ArrowRight, CheckCircle, BookOpen, Users, Award, Clock } from 'lucide-react'

const HERO_IMG   = 'https://static.wixstatic.com/media/8f8c7d_7625320df8fd42d8b2aa4bed6b68cd78~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_80,enc_avif,quality_auto/8f8c7d_7625320df8fd42d8b2aa4bed6b68cd78~mv2.jpg'
const CERT_BADGE = 'https://static.wixstatic.com/media/8f8c7d_4cb450eaf07a4a41a89926d2119383d8~mv2.png/v1/fill/w_600,h_400,al_c,q_85,enc_avif,quality_auto/AM%20CERT%201.png'
const DETAIL_IMG = 'https://static.wixstatic.com/media/8f8c7d_15a862fc40f64a12aa8e05c99d69484c~mv2.jpg/v1/fill/w_800,h_540,al_c,q_80,enc_avif,quality_auto/Detail%201.jpg'
const PERSON_IMG = 'https://static.wixstatic.com/media/8f8c7d_a879e475b4794a2c9a933fed890bc43e~mv2.jpg/v1/fill/w_700,h_900,al_c,q_80,enc_avif,quality_auto/16f2a7d9-f684-4e27-8795-0a498cbfb2e7.jpg'

const courses = [
  {
    level: 'Basic',
    icon: <BookOpen size={24} className="text-[#CE2026]" />,
    title: 'Introduction to Detailing',
    desc: 'Perfect for beginners. Learn the fundamentals of exterior and interior detailing, product knowledge, and safe techniques.',
    includes: ['Hand wash & drying techniques', 'Interior vacuum & wipe-down', 'Decontamination & clay bar', 'Basic polishing fundamentals'],
  },
  {
    level: 'Intermediate',
    icon: <Award size={24} className="text-[#CE2026]" />,
    title: 'Professional Detailing',
    desc: 'Step up your skills with machine polishing, paint correction, and advanced interior extraction methods.',
    includes: ['Machine polishing (DA & rotary)', 'Paint correction & swirl removal', 'Interior extraction & steam cleaning', 'Chemical selection & safety'],
  },
  {
    level: 'Advanced',
    icon: <Users size={24} className="text-[#CE2026]" />,
    title: 'Specialist Certification',
    desc: 'Master-level techniques including ceramic coating application, PPF basics, and vinyl wrapping fundamentals.',
    includes: ['Ceramic coating application', 'PPF prep & install basics', 'Vinyl wrap fundamentals', 'Business & client management'],
  },
]

const perks = [
  { icon: <Clock size={20} className="text-[#CE2026]" />, title: 'Flexible Scheduling', desc: 'Weekday and weekend slots available — work around your schedule.' },
  { icon: <Award size={20} className="text-[#CE2026]" />, title: 'AM Certification', desc: 'Graduate with an industry-recognised AM certification upon completion.' },
  { icon: <Users size={20} className="text-[#CE2026]" />, title: 'Small Class Sizes', desc: 'Hands-on training in small groups ensures personalised attention.' },
  { icon: <BookOpen size={20} className="text-[#CE2026]" />, title: 'Real Vehicles', desc: 'All training is done on real cars — not mock-ups or panels.' },
]

const fade = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }

export default function Certification() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <img src={HERO_IMG} alt="Certification course" className="page-hero-bg" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(155,24,29,0.72) 0%, rgba(0,0,0,0.35) 100%)' }} />
        <div className="container page-hero-content">
          <motion.div variants={fade} initial="hidden" animate="show" transition={{ duration: 0.7 }}>
            <span className="section-label">Education</span>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 700, color: '#fff', marginTop: 8, marginBottom: 16 }}>
              Detailing <span style={{ color: '#CE2026' }}>Certification</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 540, fontSize: 17, marginBottom: 28 }}>
              Learn from certified professionals. Our courses take you from detailing basics to advanced techniques — and graduate you with an industry-recognised AM certification.
            </p>
            <a href="#contact" className="btn-primary">
              Enquire Now <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why learn with us */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label">Why Train With Us</span>
              <h2 className="section-title">
                Learn From <span>Montreal's Best</span>
              </h2>
              <div className="red-divider" />
              <p style={{ color: 'var(--color-text-muted)', marginTop: 20, marginBottom: 20, lineHeight: 1.8 }}>
                Our certification courses are taught by the same technicians who've spent over a decade perfecting vehicles for Montreal's most discerning clients. You won't learn from textbooks — you'll learn by doing.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 32, lineHeight: 1.8 }}>
                Whether you're looking to start a detailing career, grow an existing business, or simply master the craft for personal satisfaction — our courses are built around real-world results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {perks.map(p => (
                  <div key={p.title} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    {p.icon}
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15, marginBottom: 3 }}>{p.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              <img
                src={DETAIL_IMG}
                alt="Detailing training"
                style={{
                  width: '100%',
                  borderRadius: 'var(--radius-xl)',
                  objectFit: 'cover',
                  aspectRatio: '16/9',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
              <div
                style={{
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <img src={CERT_BADGE} alt="AM Certification" style={{ height: 64, width: 'auto', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, marginBottom: 4 }}>AM Certified</div>
                  <div style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>All graduates receive official AM certification — recognised by the automotive detailing industry.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section style={{ background: 'var(--color-surface)', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            variants={fade} initial="hidden" whileInView="show"
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="section-label">Course Levels</span>
            <h2 className="section-title">Find Your <span>Program</span></h2>
            <div className="red-divider red-divider-center" />
            <p style={{ color: 'var(--color-text-muted)', maxWidth: 480, margin: '16px auto 0' }}>
              Three levels to match your starting point — from complete beginner to aspiring specialist.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <motion.div
                key={c.level}
                variants={fade} initial="hidden" whileInView="show"
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: 'var(--color-bg)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ background: 'var(--color-primary)', padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {c.icon}
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                      {c.level}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: '#fff', marginTop: 8 }}>{c.title}</h3>
                </div>
                <div style={{ padding: '24px 24px 28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: 20 }}>{c.desc}</p>
                  <ul className="flex flex-col gap-2.5" style={{ flex: 1 }}>
                    {c.includes.map(item => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <CheckCircle size={15} className="text-[#CE2026] shrink-0 mt-0.5" />
                        <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="btn-outline-red mt-6 justify-center">
                    Enquire <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section style={{ background: 'var(--color-bg)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img
                src={PERSON_IMG}
                alt="Course instructor"
                style={{
                  width: '100%',
                  maxWidth: 440,
                  margin: '0 auto',
                  display: 'block',
                  borderRadius: 'var(--radius-xl)',
                  objectFit: 'cover',
                  aspectRatio: '3/4',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </motion.div>
            <motion.div
              variants={fade} initial="hidden" whileInView="show"
              viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <span className="section-label">Your Instructor</span>
              <h2 className="section-title">
                Trained by <span>Professionals</span>
              </h2>
              <div className="red-divider" />
              <p style={{ color: 'var(--color-text-muted)', marginTop: 20, marginBottom: 20, lineHeight: 1.8 }}>
                Our instructors are the same AM-certified technicians who've built Meticulous Montreal's reputation for perfection over 10+ years. They bring real-world expertise directly to the classroom.
              </p>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: 32, lineHeight: 1.8 }}>
                Insurance-approved and continuously updated on the latest products and techniques — our training is the closest thing to an apprenticeship in Montreal's detailing industry.
              </p>
              <a href="#contact" className="btn-primary">
                Start Your Journey <ArrowRight size={16} />
              </a>
            </motion.div>
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
              Ready to <span>Get Certified?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>
              Contact us to learn about upcoming course dates, pricing, and availability.
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
