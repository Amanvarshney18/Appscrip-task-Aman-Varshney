

export default function Header() {
  return (
    <header className="header">
      <div className="container header-top">
        <div>☰</div>
        <div className="logo">LOGO</div>
        <div className="header-icons">
          <span>🔍</span>
          <span>♡</span>
          <span>🛍</span>
          <span>ENG</span>
        </div>
      </div>
      <nav className="nav container">
        <a href="#">SHOP</a>
        <a href="#">SKILLS</a>
        <a href="#">STORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT US</a>
      </nav>
    </header>
  )
}