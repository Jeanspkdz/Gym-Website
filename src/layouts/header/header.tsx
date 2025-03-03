import headerLogo from "@/assets/img/logo-nav.png"

export const Header = () => {
  return (
    <header className="header container">
      <nav className="nav">
        <img src={`${headerLogo}`} alt="Gym Logo" className="nav__logo"/>
      </nav>
    </header>
  )
}
