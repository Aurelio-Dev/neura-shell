import Header from './Header'
import Footer from './Footer'
import { SectionHeader, StatusDot, TechnicalButton } from './UI'
import valkyrieVisor from '../assets/neura-shell/valkyrie-visor.png'
import brushedTitanium from '../assets/neura-shell/Brushed Titanium Plating.png'
import transparentPolymer from '../assets/neura-shell/Transparent Polymer Tubing.png'
import adaptiveWhiteCeramic from '../assets/neura-shell/Adaptive White Ceramic.png'
import microLedSensorMatrix from '../assets/neura-shell/Micro-LED Sensor Matrix.png'
import productAegis from '../assets/neura-shell/product-aegis.jpg'
import productSamurai from '../assets/neura-shell/product-samurai.jpg'

const quickMetrics = [
  ['0.3ms', 'Neural response'],
  ['99.1%', 'Sync precision'],
  ['240Hz', 'Optical refresh'],
  ['48h', 'Active cycle'],
]

const overviewFeatures = [
  {
    code: 'OVR-01',
    title: 'Augmented Perception',
    body: 'Layered tactical overlays translate threat vectors, distance, and intent into a clean visual stack.',
  },
  {
    code: 'OVR-02',
    title: 'Biometric Feedback',
    body: 'Cardiac, ocular, and neural telemetry tune the visor to the operator as conditions shift.',
  },
  {
    code: 'OVR-03',
    title: 'Environmental Reading',
    body: 'Depth, thermal, and spectral sensors rebuild the surroundings into decision-ready awareness.',
  },
]

const specifications = [
  ['Neural Response Latency', '0.3', 'ms'],
  ['Optical Refresh Rate', '240', 'Hz'],
  ['Sync Precision', '99.1', '%'],
  ['Active Cycle', '48', 'h'],
  ['Total Load', '14', 'kg'],
  ['Sensor Coverage', '360', 'deg'],
  ['Environmental Resistance', 'IP68', ''],
  ['Power Core Efficiency', '93.4', '%'],
]

const architectureModules = [
  {
    code: 'MODULE 01',
    tone: 'pink',
    title: 'Neural Visor HUD',
    body: 'Real-time environmental analysis, biometric monitoring, and adaptive visual overlays.',
  },
  {
    code: 'MODULE 02',
    tone: 'cyan',
    title: 'Respirator Core',
    body: 'Integrated airflow and filtration support for extended operation in contaminated zones.',
  },
  {
    code: 'MODULE 03',
    tone: 'green',
    title: 'Titanium Exo-Frame',
    body: 'Lightweight structural support with modular pressure-resistant geometry.',
  },
  {
    code: 'MODULE 04',
    tone: 'yellow',
    title: 'Optical Sensor Nodes',
    body: 'Distributed micro-sensor network for depth reading, tracking, and dynamic focus.',
  },
]

const operationalContexts = [
  ['ENV-01', 'Urban Navigation', 'Dense movement, hostile visibility, and rapid environmental interpretation.'],
  ['ENV-02', 'Tactical Recon', 'Long-range optical tracking with low-signature passive scanning modes.'],
  ['ENV-03', 'Hazard Environments', 'Sealed filtration and pressure-stable operation across toxic zones.'],
  ['ENV-04', 'Biomedical Assistance', 'Continuous vitals monitoring with neural-assisted response prompting.'],
  ['ENV-05', 'Augmented Monitoring', 'Persistent surveillance overlays fused with live biometric correlation.'],
]

const materials = [
  {
    category: 'Structural',
    code: 'MAT-TI-6AL-4V',
    name: 'Brushed Titanium Plating',
    body: 'Aerospace-grade structural shell with anti-glare finish.',
    texture: 'titanium',
    image: brushedTitanium,
  },
  {
    category: 'Conduit',
    code: 'MAT-TP-UV12',
    name: 'Transparent Polymer Tubing',
    body: 'Pressure-stable conduits for airflow, coolant, and signal routing.',
    texture: 'polymer',
    image: transparentPolymer,
  },
  {
    category: 'Lining',
    code: 'MAT-CW-09',
    name: 'Adaptive White Ceramic',
    body: 'Thermal-resistant inner lining with neural contact isolation.',
    texture: 'ceramic',
    image: adaptiveWhiteCeramic,
  },
  {
    category: 'Optics',
    code: 'MAT-LED-44',
    name: 'Micro-LED Sensor Matrix',
    body: 'Distributed emitter grid powering the optical feed array.',
    texture: 'sensors',
    image: microLedSensorMatrix,
  },
]

const syncMetrics = [
  ['Cognitive Sync', '94%', 'pink'],
  ['Visual Feed Accuracy', '78%', 'cyan'],
  ['Environmental Mapping', '87%', 'green'],
  ['Biometric Stability', '99%', 'yellow'],
]

const relatedPrototypes = [
  {
    model: 'NS-02',
    name: 'Aegis Respirator',
    category: 'Filtration',
    image: productAegis,
    href: '/#products',
  },
  {
    model: 'NS-03',
    name: 'Samurai Shell Suit',
    category: 'Exo-Armor',
    image: productSamurai,
    href: '/#products',
  },
  {
    model: 'NS-FRAME',
    name: 'Titanium Exo-Frame',
    category: 'Structure',
    image: brushedTitanium,
    href: '/#materials',
  },
]

function ValkyrieVisorPage() {
  return (
    <div className="site-shell">
      <Header requestHref="#request" />
      <main className="prototype-detail">
        <section className="prototype-hero technical-grid" id="top">
          <div className="container prototype-hero__layout">
            <div className="prototype-hero__copy">
              <p className="hero-badge"><StatusDot /> Prototype detail - Valkyrie series</p>
              <h1>Valkyrie <span>Visor</span></h1>
              <p className="prototype-kicker">NS-01 / Adaptive neural vision interface</p>
              <p className="prototype-hero__intro">
                A high-precision visual interface engineered for neural synchronization, biometric tracking,
                environmental scanning, and augmented perception in hostile operational conditions.
              </p>
              <div className="button-row">
                <TechnicalButton href="#request" variant="pink">Request Prototype</TechnicalButton>
                <TechnicalButton href="#specs" variant="outline">View Specifications</TechnicalButton>
              </div>
            </div>
            <div className="prototype-hero__visual" aria-label="NS-01 Valkyrie Visor product render">
              <img src={valkyrieVisor} alt="NS-01 Valkyrie Visor" />
              <span className="prototype-hero__scan" aria-hidden="true" />
              <span className="prototype-hero__corner prototype-hero__corner--tl" aria-hidden="true" />
              <span className="prototype-hero__corner prototype-hero__corner--br" aria-hidden="true" />
              <span className="prototype-hero__render"><StatusDot color="green" /> Render - VLK-01</span>
              <span className="prototype-hero__model">Model NS-01 / MK.VII</span>
            </div>
          </div>
        </section>

        <section className="prototype-metrics" aria-label="Valkyrie Visor quick metrics">
          <div className="container prototype-metrics__grid">
            {quickMetrics.map(([value, label]) => (
              <div className="prototype-metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section prototype-overview" id="overview">
          <div className="container">
            <SectionHeader
              number="01"
              label="Product Overview"
              title="Precision Beyond Human Sight"
              description="The Valkyrie Visor expands human perception through real-time environmental analysis, neural-assisted visual processing, and biometric synchronization."
            />
            <div className="prototype-feature-grid">
              {overviewFeatures.map((feature) => (
                <article className="prototype-feature-card" key={feature.code}>
                  <span>{feature.code}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section prototype-specs" id="specs">
          <div className="container">
            <SectionHeader
              number="02"
              label="Data Sheet"
              title="Technical Specifications"
              description="Core performance values for NS-01 field evaluation and operator fitting."
            />
            <div className="prototype-spec-grid">
              {specifications.map(([label, value, unit]) => (
                <div className="prototype-spec" key={label}>
                  <span>{label}</span>
                  <strong>{value}<small>{unit}</small></strong>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section prototype-architecture">
          <div className="container">
            <SectionHeader
              number="03"
              label="System Architecture"
              title="System Architecture"
              description="Core modules engineered as independently serviceable units inside the Valkyrie platform."
            />
            <div className="prototype-architecture-grid">
              {architectureModules.map((module) => (
                <article className={`prototype-module prototype-module--${module.tone}`} key={module.code}>
                  <div>
                    <span className="prototype-module__icon" aria-hidden="true" />
                    <span className="prototype-module__code">{module.code}</span>
                  </div>
                  <h3>{module.title}</h3>
                  <p>{module.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section prototype-operations">
          <div className="container">
            <SectionHeader
              number="04"
              label="Operational Context"
              title="Operational Context"
              description="Deployment contexts where adaptive visual processing and synchronized biometrics create a decisive advantage."
            />
            <div className="prototype-operations-grid">
              {operationalContexts.map(([code, title, body]) => (
                <article className="prototype-operation-card" key={code}>
                  <div><StatusDot /><span>{code}</span></div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section prototype-materials">
          <div className="container">
            <SectionHeader
              number="05"
              label="Material Composition"
              title="Material Composition"
              description="Aerospace-grade materials specified for durability, precision, and neural interface stability."
            />
            <div className="prototype-material-grid">
              {materials.map((material) => (
                <article className="prototype-material-card" key={material.code}>
                  <div className={`prototype-material-card__image material-texture--${material.texture}`}>
                    {material.image && <img src={material.image} alt={material.name} />}
                  </div>
                  <div className="prototype-material-card__body">
                    <span>{material.code}</span>
                    <h3>{material.name}</h3>
                    <p>{material.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section prototype-sync">
          <div className="container prototype-sync__layout">
            <div>
              <SectionHeader
                number="06"
                label="Human-Machine Synchronization"
                title="Human-Machine Synchronization"
                description="The visor converts biometric signals, visual stimuli, and environmental data into continuous operational awareness."
                dark
              />
            </div>
            <div className="prototype-sync-panel" aria-label="Human-machine synchronization telemetry">
              <div className="prototype-sync-panel__bar">
                <span><StatusDot color="green" /> Neural link active</span>
                <span>VLK-SYNC / 94.8</span>
              </div>
              <div className="prototype-sync-panel__wave" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="prototype-sync-bars">
                {syncMetrics.map(([label, pct, tone]) => (
                  <div className={`prototype-sync-metric prototype-sync-metric--${tone}`} key={label}>
                    <div><span>{label}</span><strong>{pct}</strong></div>
                    <i style={{ width: pct }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section prototype-related">
          <div className="container">
            <SectionHeader
              number="07"
              label="Related Prototypes"
              title="Related Prototypes"
              description="Companion systems sharing the same materials language and operational stack."
            />
            <div className="prototype-related-grid">
              {relatedPrototypes.map((prototype) => (
                <a className="prototype-related-card" href={prototype.href} key={prototype.model}>
                  <div>
                    <img src={prototype.image} alt={prototype.name} />
                  </div>
                  <span>{prototype.category}</span>
                  <h3>{prototype.name}</h3>
                  <p>{prototype.model}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="prototype-final-cta" id="request">
          <div className="container prototype-final-cta__content">
            <SectionHeader number="08" label="Request Access" dark align="center" />
            <h2>Request Access to the <span>Valkyrie Series</span></h2>
            <p>
              Enter the next layer of augmented perception through experimental neural interface systems
              engineered for human-machine integration.
            </p>
            <div className="button-row button-row--center">
              <TechnicalButton href="mailto:prototype@neurashell.systems" variant="pink">Request Prototype</TechnicalButton>
              <TechnicalButton href="/#interface" variant="dark-outline">View Documentation</TechnicalButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ValkyrieVisorPage
