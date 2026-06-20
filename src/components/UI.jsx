export function BrandMark({ dark = false }) {
  return (
    <a className={`brand-mark ${dark ? 'brand-mark--dark' : ''}`} href="/#top" aria-label="NEURA SHELL home">
      <span>NEURA</span><i>//</i><span>SHELL</span>
    </a>
  )
}

export function SectionHeader({ number, label, title, description, dark = false, align = 'left' }) {
  return (
    <div className={`section-heading section-heading--${align} ${dark ? 'section-heading--dark' : ''}`}>
      <div className="section-heading__main">
        <p className="eyebrow">// {number} - {label}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-heading__description">{description}</p>}
    </div>
  )
}

export function TechnicalButton({ children, href, variant = 'dark', onClick }) {
  return (
    <a className={`technical-button technical-button--${variant}`} href={href} onClick={onClick}>
      {children}
      <span aria-hidden="true">+</span>
    </a>
  )
}

export function StatusDot({ color = 'pink' }) {
  return <span className={`status-dot status-dot--${color}`} aria-hidden="true" />
}

export function ProductVisual({ source, variant = 'visor', label, compact = false }) {
  return (
    <div className={`product-visual product-visual--${variant} ${compact ? 'product-visual--compact' : ''}`}>
      <div className="product-visual__corners" aria-hidden="true" />
      <img src={source} alt={label || `${variant} prototype rendering`} />
      <span className="product-visual__label">{label || 'NS PROTOTYPE / ACTIVE'}</span>
    </div>
  )
}

export function Waveform({ color = 'pink', seed = 0 }) {
  const offsets = [0, 5, -3, 3]
  const offset = offsets[seed % offsets.length]

  return (
    <svg className={`waveform waveform--${color}`} viewBox="0 0 180 108" aria-hidden="true">
      <g transform={`translate(${offset} 0)`}>
        <path d="M8 100 L8 15 L102 20 Z" />
        <path d="M8 83 L18 18 L121 23 Z" />
        <path d="M8 65 L29 21 L140 27 Z" />
      </g>
    </svg>
  )
}
