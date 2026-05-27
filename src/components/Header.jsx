import { useEffect, useRef, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import farm2homeLogo from "../assets/farm2home_logo.png"

const headerCopy = {
  en: {
    name: "Farm2Home",
    sub: "Natural Farming Movement",
    join: "Join Movement",
    nav: [
      ["Home", "/"],
      ["Farming Model", "/farming-model"],
      ["Videos", "/videos"],
      ["Blog", "/blog"],
      ["Research", "/research"],
      ["Community", "/community"],
    ],
    investor: {
      label: "Investor",
      items: [
        ["CSR Concept", "/investor/csr-concept"],
        ["Model 1", "/investor/model-1"],
      ],
    },
  },
  hi: {
    name: "फार्म2होम",
    sub: "प्राकृतिक खेती आंदोलन",
    join: "आंदोलन से जुड़ें",
    nav: [
      ["होम", "/"],
      ["खेती मॉडल", "/farming-model"],
      ["वीडियो", "/videos"],
      ["ब्लॉग", "/blog"],
      ["रिसर्च", "/research"],
      ["समुदाय", "/community"],
    ],
    investor: {
      label: "निवेशक",
      items: [
        ["CSR Concept", "/investor/csr-concept"],
        ["Model 1", "/investor/model-1"],
      ],
    },
  },
}

function InvestorDropdown({ investor }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const wrapperRef = useRef(null)

  function handleMouseEnter() {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 200)
  }

  useEffect(() => {
    function onClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", onClickOutside)
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [])

  return (
    <div
      className="nav-dropdown-wrapper"
      ref={wrapperRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="nav-link nav-dropdown-trigger">
        {investor.label}
        <span className={`dropdown-arrow ${open ? "open" : ""}`}>▾</span>
      </span>
      {open && (
        <div className="nav-dropdown">
          {investor.items.map(([label, to]) => (
            <NavLink
              to={to}
              className={({ isActive }) => `nav-dropdown-item ${isActive ? "selected" : ""}`}
              key={to}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Header({ language, setLanguage }) {
  const content = headerCopy[language]
  const [home, ...rest] = content.nav

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
          <NavLink
            to={home[1]}
            end
            className={({ isActive }) => `nav-link ${isActive ? "selected" : ""}`}
          >
            {home[0]}
          </NavLink>
          <InvestorDropdown investor={content.investor} />
          {rest.map(([label, to]) => (
            <NavLink
              to={to}
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
        {content.investor.items.map(([label, to]) => (
          <NavLink to={to} key={to}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
