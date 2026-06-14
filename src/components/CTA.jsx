import { SectionHeader, TechnicalButton } from './UI'
import vectorWaveOne from '../assets/neura-shell/vector-wave-1.svg'
import vectorWaveTwo from '../assets/neura-shell/vector-wave-2.svg'

const stats = [
  ['200', 'Units - First Series'],
  ['2089', 'Production Year'],
  ['AA+', 'Safety Certification'],
]

function CTA() {
  return (
    <section className="cta-section" id="contact">
      <img className="cta-orbit cta-orbit--one" src={vectorWaveOne} alt="" aria-hidden="true" />
      <img className="cta-orbit cta-orbit--two" src={vectorWaveTwo} alt="" aria-hidden="true" />
      <div className="container cta-content">
        <SectionHeader number="07" label="Early Access - 2089" dark align="center" />
        <h2>Designing the Future of <span>Augmented Humanity</span></h2>
        <p>A premium cybernetic platform combining protection, intelligence and industrial beauty. Built for the operators, explorers, and pioneers of the next century.</p>
        <div className="button-row button-row--center">
          <TechnicalButton href="mailto:prototype@neurashell.systems" variant="pink">Request Early Access</TechnicalButton>
          <TechnicalButton href="#technology" variant="dark-outline">View Documentation</TechnicalButton>
        </div>
        <div className="cta-stats">
          {stats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTA
