import { Link, NavLink } from "react-router-dom"
import farm2homeLogo from "../assets/farm2home_logo.png"

const headerCopy = {
  en: {
    name: "Farm2Home",
    sub: "Natural Farming Movement",
    join: "Join Movement",
    nav: [
      ["Home", "/"],
      ["Natural Farming", "/natural-farming"],
      ["Farming Model", "/farming-model"],
      ["Videos", "/videos"],
      ["Blog", "/blog"],
      ["Research", "/research"],
      ["Community", "/community"],
    ],
  },
  hi: {
    name: "फार्म2होम",
    sub: "प्राकृतिक खेती आंदोलन",
    join: "आंदोलन से जुड़ें",
    nav: [
      ["होम", "/"],
      ["प्राकृतिक खेती", "/natural-farming"],
      ["खेती मॉडल", "/farming-model"],
      ["वीडियो", "/videos"],
      ["ब्लॉग", "/blog"],
      ["रिसर्च", "/research"],
      ["समुदाय", "/community"],
    ],
  },
}

export default function Header({ language, setLanguage }) {
  const content = headerCopy[language]

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img src={farm2homeLogo} alt="Farm2Home logo" />
          <span>
            <strong>{content.name}</strong>
            <small>{content.sub}</small>
          </span>
        </Link>
        <nav className="desktop-nav">
          {content.nav.map(([label, to]) => (
            <NavLink
              to={to}
              end={to === "/"}
              className={({ isActive }) => `nav-link ${isActive ? "selected" : ""}`}
              key={to}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(language === "hi" ? "en" : "hi")}
            aria-label="Toggle website language"
          >
            <span className={language === "en" ? "active" : ""}>EN</span>
            <span className={language === "hi" ? "active" : ""}>हिंदी</span>
          </button>
          <Link className="join-link" to="/community">
            {content.join}
          </Link>
        </div>
      </div>
      <nav className="mobile-nav">
        {content.nav.map(([label, to]) => (
          <NavLink to={to} end={to === "/"} key={to}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
