import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

const LOGO = 'https://static.wixstatic.com/media/8f8c7d_b39ac99f9bdb4794a076fe01f5691098~mv2.png/v1/fill/w_332,h_149,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MA%20LOGO%20WHITE.png'

const serviceLinks = [
  { to: '/vinyl-wrapping',  label: 'Vinyl Wrapping' },
  { to: '/window-tinting',  label: 'Window Tinting' },
  { to: '/powder-coating',  label: 'Powder Coating' },
  { to: '/protection-film', label: 'Protection Film' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  const isServiceActive = serviceLinks.some(l => location.pathname === l.to)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navBg = scrolled
    ? 'bg-[#111111] shadow-lg'
    : 'bg-black/40 backdrop-blur-sm'

  const linkBase = 'px-4 py-2 text-base font-semibold tracking-wide transition-colors duration-200 rounded'
  const linkActive = 'text-[#CE2026] underline underline-offset-4'
  const linkInactive = 'text-white hover:text-white/80'

  const getLinkStyle = (isActive: boolean) => ({
    fontFamily: 'var(--font-heading)',
    color: isActive ? '#CE2026' : '#ffffff'
  })

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${navBg}`}
      style={{ borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <img src={LOGO} alt="Meticulous Montreal" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Home */}
            <NavLink
              to="/"
              end
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              style={({ isActive }) => getLinkStyle(isActive)}
            >
              Home
            </NavLink>

            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`${linkBase} flex items-center gap-1 ${isServiceActive ? linkActive : linkInactive}`}
                style={{ ...getLinkStyle(isServiceActive), background: 'none', border: 'none', cursor: 'pointer' }}
                onClick={() => setDropdownOpen(v => !v)}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-[#111111] border border-white/10 rounded-lg shadow-xl overflow-hidden"
                    style={{ zIndex: 100 }}
                  >
                    {serviceLinks.map(({ to, label }) => (
                      <NavLink
                        key={to}
                        to={to}
                        onClick={() => setDropdownOpen(false)}
                        className={({ isActive }) =>
                          `block px-5 py-3 text-sm font-semibold transition-colors text-center ` +
                          (isActive ? 'bg-white/10' : 'hover:bg-white/5')
                        }
                        style={({ isActive }) => getLinkStyle(isActive)}
                      >
                        {label}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Certification */}
            <NavLink
              to="/certification"
              className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}
              style={({ isActive }) => getLinkStyle(isActive)}
            >
              Certification
            </NavLink>
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:5148038488"
              className="hidden md:flex items-center gap-2 text-white text-sm font-semibold transition-colors"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <Phone size={15} className="text-[#CE2026]" />
              514-803-8488
            </a>
            <a href="#contact" className="hidden md:inline-flex btn-primary py-2.5 px-5 text-sm">
              Book Now
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#111111] border-t border-white/10 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-semibold rounded transition-colors ` +
                  (isActive ? 'bg-white/5' : 'hover:bg-white/5')
                }
                style={({ isActive }) => getLinkStyle(isActive)}
              >
                Home
              </NavLink>

              {/* Services group in mobile */}
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Services
                </p>
                <div className="flex flex-col gap-0.5 pl-3 border-l border-white/10">
                  {serviceLinks.map(({ to, label }) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block py-2 text-sm font-semibold transition-colors ` +
                        (isActive ? '' : 'hover:opacity-80')
                      }
                      style={({ isActive }) => getLinkStyle(isActive)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              </div>

              <NavLink
                to="/certification"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-sm font-semibold rounded transition-colors ` +
                  (isActive ? 'bg-white/5' : 'hover:bg-white/5')
                }
                style={({ isActive }) => getLinkStyle(isActive)}
              >
                Certification
              </NavLink>

              <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-3">
                <a href="tel:5148038488" className="flex items-center gap-2 text-white/80 text-sm px-4 hover:text-white transition-colors">
                  <Phone size={15} className="text-[#CE2026]" /> 514-803-8488
                </a>
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mx-4 justify-center">
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
