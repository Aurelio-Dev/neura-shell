import { SectionHeader, StatusDot } from './UI'

const systems = [
  {
    code: 'NS-SYS-01',
    symbol: '<>',
    title: 'Neural Visor HUD',
    description: 'Real-time environmental analysis, biometric monitoring and augmented visual layers rendered at 240 Hz directly onto the retinal plane.',
    metric: '240 Hz',
    label: 'Refresh Rate',
  },
  {
    code: 'NS-SYS-02',
    symbol: 'O',
    title: 'Respirator Core',
    description: 'Transparent cybernetic breathing system integrated into the jawline and neck. Triple-filtered with smart oxygen regulation for 72-hour continuous use.',
    metric: '99.4 %',
    label: 'Filtration',
  },
  {
    code: 'NS-SYS-03',
    symbol: '[]',
    title: 'Titanium Exo-Frame',
    description: 'Lightweight brushed titanium structure with modular mechanical components. Field-serviceable and pressure-rated for extreme environments.',
    metric: '1.4 kg',
    label: 'Total Mass',
  },
]

function Technology() {
  return (
    <section className="section technology-section" id="technology">
      <div className="container">
        <SectionHeader
          number="03"
          label="Core Systems"
          title={<>Engineered<br />Beyond Protection</>}
          description="Three independent systems - visor, respirator, and frame - engineered as a single unified platform."
        />
        <div className="feature-grid">
          {systems.map((system) => (
            <article className="feature-card" key={system.code}>
              <div className="card-status"><StatusDot color="red" /></div>
              <span className="feature-card__code">{system.code}</span>
              <span className="feature-card__symbol">{system.symbol}</span>
              <h3>{system.title}</h3>
              <p>{system.description}</p>
              <div className="feature-card__metric">
                <strong>{system.metric}</strong>
                <span>{system.label}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technology
