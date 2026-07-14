import { Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { SmoothScrollProvider } from './components/SmoothScrollProvider'
import { Ticker } from './components/Ticker'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'
import { AgeGate } from './components/AgeGate'
import { Home } from './pages/Home'
import { ProductPage } from './pages/ProductPage'
import { ContactPage } from './pages/ContactPage'
import { LegalPage } from './pages/LegalPage'

function App() {
  return (
    <CartProvider>
      <SmoothScrollProvider>
        <div id="app-shell">
          <div id="top" className="mesh-bg" aria-hidden="true" />
          <Ticker />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produit/:slug" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/conditions" element={<LegalPage docKey="conditions" />} />
            <Route path="/confidentialite" element={<LegalPage docKey="confidentialite" />} />
            <Route path="/cookies" element={<LegalPage docKey="cookies" />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
          <CartDrawer />
        </div>
        <AgeGate />
      </SmoothScrollProvider>
    </CartProvider>
  )
}

export default App
