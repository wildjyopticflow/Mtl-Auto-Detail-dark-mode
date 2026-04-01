import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const LOGO = 'https://static.wixstatic.com/media/8f8c7d_b39ac99f9bdb4794a076fe01f5691098~mv2.png/v1/fill/w_332,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MA%20LOGO%20WHITE.png'

const services = [
  { to: '/vinyl-wrapping',  label: 'Vinyl Wrapping' },
  { to: '/window-tinting',  label: 'Window Tinting' },
  { to: '/powder-coating',  label: 'Powder Coating' },
  { to: '/protection-film', label: 'Paint Protection Film' },
  { to: '/certification',   label: 'Certification Course' },
]

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#111111', color: 'rgba(255,255,255,0.75)' }}>
      {/* Main footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
          {/* Brand */}
          <div className="lg:col-span-1 pt-2">
            <img src={LOGO} alt="Meticulous Montreal" className="h-12 w-auto mb-5" style={{ marginTop: '24px' }} />
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              We don't just fix cars, we perfect them. Montreal's premier auto detailing, vinyl wrapping &amp; protection specialists.
            </p>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CE2026]"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              @meticulousmontreal
            </a>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm hover:text-[#CE2026] transition-colors"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:5148038488"
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  <Phone size={16} className="text-[#CE2026] mt-0.5 shrink-0" />
                  514-803-8488
                </a>
              </li>
              <li>
                <a
                  href="mailto:meticulousmontreal@gmail.com"
                  className="flex items-start gap-3 text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  <Mail size={16} className="text-[#CE2026] mt-0.5 shrink-0" />
                  meticulousmontreal@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  <MapPin size={16} className="text-[#CE2026] mt-0.5 shrink-0" />
                  Montreal, Quebec, H1E 4M1
                </span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="text-white font-bold text-sm mb-5 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Book an Appointment
            </h4>
            <p className="text-sm mb-5" style={{ color: 'rgba(255,255,255,0.55)' }}>
              By appointment only. Reach out to schedule your service or get a free quote.
            </p>
            <a href="tel:5148038488" className="btn-primary inline-flex justify-center w-full" style={{ padding: '11px 20px', fontSize: 13 }}>
              Call to Book
            </a>
            <a
              href="mailto:meticulousmontreal@gmail.com"
              className="btn-secondary inline-flex justify-center w-full"
              style={{ padding: '10px 20px', fontSize: 13, marginTop: 16 }}
            >
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Meticulous Montreal. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Save 10% on your first Complete Detail — mention this site when you call.
          </p>
        </div>
      </div>
    </footer>
  )
}
