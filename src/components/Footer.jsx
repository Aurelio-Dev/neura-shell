import { BrandMark } from './UI'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <BrandMark dark />
        <nav aria-label="Footer navigation">
          <a href="/#technology">Technology</a>
          <a href="/#products">Products</a>
          <a href="/#interface">Interface</a>
          <a href="/#materials">Materials</a>
          <a href="/#contact">Contact</a>
        </nav>
        <p>© 2089 NEURA//SHELL<br />Cybernetic systems division</p>
      </div>
      <div className="container site-footer__bottom">
        <p>// 01 - Future interface protection since - 2089</p>
        <div><a href="/#top">Privacy</a><a href="/#top">Legal</a><a href="/#top">Terms</a></div>
      </div>
    </footer>
  )
}

export default Footer
