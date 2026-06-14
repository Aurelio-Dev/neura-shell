import { ProductVisual, StatusDot, TechnicalButton } from './UI'
import heroProduct from '../assets/neura-shell/hero-product.png'

const stats = [
  ['0.3ms', 'Neural Response'],
  ['99.7%', 'Seal Integrity'],
  ['48h', 'Active Runtime'],
]

function Hero() {
  return (
    <section className="hero-section technical-grid" aria-labelledby="hero-title">
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="hero-badge"><StatusDot /> // 02 - HERO - NS-2089 ACTIVE SERIES</p>
          <h1 id="hero-title">Cybernetic<br />Interfaces<br /><span>for the Next</span><br />Human Era</h1>
          <p className="hero-intro">
            Advanced respirator helmets, neural visor systems and biomechanical armor designed for precision,
            protection and human-machine evolution.
          </p>
          <div className="button-row">
            <TechnicalButton href="#technology">Explore Technology</TechnicalButton>
            <TechnicalButton href="#products" variant="outline">View Prototype</TechnicalButton>
          </div>
          <div className="hero-stats">
            {stats.map(([value, label]) => (
              <div className="stat-item" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-stage__readout hero-stage__readout--left">
            <span>Transparent Respiration System</span>
            <b><StatusDot /> Active</b>
          </div>
          <div className="hero-stage__readout hero-stage__readout--left-bottom">
            <span>Titanium Jawline Frame</span>
            <b><StatusDot /> Active</b>
          </div>
          <ProductVisual source={heroProduct} variant="visor" label="NS-01 // VALKYRIE VISOR" />
          <div className="hero-stage__readout hero-stage__readout--right-top">
            <span>Neural Visor HUD</span>
            <b><StatusDot /> Active</b>
          </div>
          <div className="hero-stage__readout hero-stage__readout--right-bottom">
            <span>Bio Status Mesh-LEDs</span>
            <b><StatusDot /> Active</b>
          </div>
        </div>
      </div>
      <div className="scroll-index">Scroll / 02-07</div>
    </section>
  )
}

export default Hero
