import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import VinylWrapping from './pages/VinylWrapping'
import WindowTinting from './pages/WindowTinting'
import PowderCoating from './pages/PowderCoating'
import ProtectionFilm from './pages/ProtectionFilm'
import Certification from './pages/Certification'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/vinyl-wrapping" element={<VinylWrapping />} />
          <Route path="/window-tinting" element={<WindowTinting />} />
          <Route path="/powder-coating" element={<PowderCoating />} />
          <Route path="/protection-film" element={<ProtectionFilm />} />
          <Route path="/certification" element={<Certification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
