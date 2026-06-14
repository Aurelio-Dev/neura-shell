import { ProductVisual, SectionHeader, StatusDot } from './UI'
import productValkyrie from '../assets/neura-shell/product-valkyrie.png'
import productAegis from '../assets/neura-shell/product-aegis.jpg'
import productSamurai from '../assets/neura-shell/product-samurai.jpg'

const products = [
  {
    model: 'NS-01',
    name: 'Valkyrie Visor',
    variant: 'visor',
    image: productValkyrie,
    description: 'Full-spectrum neural interface visor with adaptive HUD, biometric tracking and transparent AR overlay. Designed for elite reconnaissance and urban navigation.',
    tags: ['Neural Interface', 'AR Overlay', '240 Hz HUD'],
  },
  {
    model: 'NS-02',
    name: 'Aegis Respirator',
    variant: 'respirator',
    image: productAegis,
    description: 'Transparent cybernetic respirator with dual-filtration and integrated jaw-mounted sensor array. Fuses seamlessly into NEURA//SHELL helmets.',
    tags: ['99.4% Filtration', '72H Runtime', 'Smart O2 Reg'],
  },
  {
    model: 'NS-03',
    name: 'Samurai Shell Suit',
    variant: 'suit',
    image: productSamurai,
    description: 'White ceramic composite full-body exo-armor. Modular panels, titanium articulation joints and embedded biosensors inspired by feudal plate design.',
    tags: ['Ceramic Composite', 'Modular Panels', 'Impact Grade 10'],
  },
]

function Products() {
  return (
    <section className="section products-section" id="products">
      <div className="container">
        <SectionHeader
          number="04"
          label="Prototype Series"
          title="Prototype Series"
          description="3 units - limited first production"
        />
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.model}>
              <div className="product-card__visual">
                <span className="model-badge">{product.model}</span>
                <span className="prototype-badge"><StatusDot color="red" /> Prototype</span>
                <ProductVisual source={product.image} variant={product.variant} compact label={`${product.model} / ${product.name}`} />
              </div>
              <div className="product-card__body">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="tag-list">
                  {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href="#contact" className="card-button">View Details <span>+</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
