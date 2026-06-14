import { useState } from 'react'
import { BrandMark, TechnicalButton } from './UI'

const navigation = [
  ['Technology', '#technology'],
  ['Products', '#products'],
  ['Interface', '#interface'],
  ['Materials', '#materials'],
  ['Contact', '#contact'],
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header" id="top">
      <div className="container site-header__inner">
        <BrandMark />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <b>Menu</b>
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <TechnicalButton href="#contact" variant="pink-outline">Request Prototype</TechnicalButton>
      </div>
    </header>
  )
}

export default Header
