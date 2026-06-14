import Header from './components/Header'
import Hero from './components/Hero'
import Technology from './components/Technology'
import Products from './components/Products'
import InterfaceHUD from './components/InterfaceHUD'
import Materials from './components/Materials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Technology />
        <Products />
        <InterfaceHUD />
        <Materials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
