import { SectionHeader, StatusDot } from './UI'
import materialTitanium from '../assets/neura-shell/material-titanium.jpg'

const materials = [
  {
    category: 'Structural',
    id: 'MAT-TI-6AL-4V',
    name: 'Brushed Titanium Plating',
    texture: 'titanium',
    image: materialTitanium,
    description: 'Grade-5 aerospace titanium, hand-brushed to 320-grit. Tensile strength 950 MPa.',
  },
  {
    category: 'Respiratory',
    id: 'MAT-TP-UV12',
    name: 'Transparent Polymer Tubing',
    texture: 'polymer',
    description: 'UV-stable medical-grade polymer rated for 200 PSI continuous flow, zero off-gassing.',
  },
  {
    category: 'Armor',
    id: 'MAT-ZRO2-W',
    name: 'Adaptive White Ceramic',
    texture: 'ceramic',
    description: 'Zirconia-reinforced ceramic composite. 4x harder than standard polymer armor.',
  },
  {
    category: 'Optical',
    id: 'MAT-LED-N20R9',
    name: 'Micro-LED Status Sensors',
    texture: 'sensors',
    description: 'High-luminance 620 nm micro-LEDs with 50,000 h lifespan. Visible at 400 m.',
  },
]

function Materials() {
  return (
    <section className="section materials-section" id="materials">
      <div className="container">
        <SectionHeader
          number="06"
          label="Material Spec"
          title={<>Built with Premium<br />Synthetic Materials</>}
          description="Every material is specified for aerospace tolerances, then refined for wearable precision."
        />
        <div className="materials-grid">
          {materials.map((material) => (
            <article className="material-card" key={material.id}>
              <div
                className={`material-card__image material-texture--${material.texture}`}
                style={material.image ? { backgroundImage: `url(${material.image})` } : undefined}
              >
                <span><StatusDot color="silver" /> {material.category}</span>
              </div>
              <div className="material-card__body">
                <span>{material.id}</span>
                <h3>{material.name}</h3>
                <p>{material.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Materials
