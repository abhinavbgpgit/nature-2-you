import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { sc, scImages } from "./curriculumData"

// Simple line icons for the cards (aria-hidden; the card title carries the meaning).
const ICONS = {
  leaf: <path d="M6 26C6 13 15 6 27 6c0 12-7 21-20 21M6 26l11-11" />,
  handPlant: (
    <>
      <path d="M16 16V9m0 0c0-3 2-5 5-5 0 3-2 5-5 5Zm0 0c0-3-2-5-5-5 0 3 2 5 5 5Z" />
      <path d="M4 22h6l4 2h6a2 2 0 0 0 0-4h-4m-12 6h5l8 3 10-6a2 2 0 0 0-2-3l-6 3" />
    </>
  ),
  bookPlant: (
    <>
      <path d="M4 8c4-1 8 0 12 2v18c-4-2-8-3-12-2V8Zm24 0c-4-1-8 0-12 2v18c4-2 8-3 12-2V8Z" />
      <path d="M22 13c0-3 2-5 4-5 0 3-2 5-4 5Z" />
    </>
  ),
  people: (
    <>
      <circle cx="16" cy="9" r="3.5" />
      <circle cx="7" cy="12" r="2.8" />
      <circle cx="25" cy="12" r="2.8" />
      <path d="M10 26c0-4 3-7 6-7s6 3 6 7M2 25c0-3 2-6 5-6 1.5 0 2.5.4 3.4 1M30 25c0-3-2-6-5-6-1.5 0-2.5.4-3.4 1" />
    </>
  ),
  bed: (
    <>
      <path d="M3 24h26M5 24c0-4 5-6 11-6s11 2 11 6" />
      <path d="M10 18v-5m0 0c0-2 1.5-3.5 3.5-3.5 0 2-1.5 3.5-3.5 3.5ZM22 18v-6m0 0c0-2-1.5-3.5-3.5-3.5 0 2 1.5 3.5 3.5 3.5Z" />
    </>
  ),
  trowel: <path d="M20 4l8 8-9 9-4-4-9 9-2-2 9-9-4-4 9-9Zm-5 13 5-5" />,
  handshake: (
    <>
      <path d="M3 12l6-4 6 3 5-3 9 4M3 12v8l9 7c1 .8 2.5.6 3.2-.4l.5-.7M29 12v8l-6 4" />
      <path d="M12 15l4 4c1 1 2.5 1 3.5 0s1-2.5 0-3.5l-4-4" />
    </>
  ),
}

function Icon({ name }) {
  return (
    <svg className="sc-icon" viewBox="0 0 32 32" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

function Photo({ name, lang, className = "" }) {
  const image = scImages[name]
  return (
    <figure className={`fm-photo ${className}`}>
      <img src={image.src} alt={image.alt[lang]} loading="lazy" />
      <figcaption>
        <a href={image.source} target="_blank" rel="noreferrer">
          📷 {image.credit}
        </a>
      </figcaption>
    </figure>
  )
}

function Table({ head, rows, firstIsHeader = true }) {
  return (
    <div className="nf-table-wrap sc-table">
      <table className="nf-table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, j) =>
                j === 0 && firstIsHeader ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>,
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SectionHead({ title, text }) {
  return (
    <div className="sc-head">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

// Adds .is-visible to .sc-reveal elements as they scroll into view.
function useReveal(rootRef) {
  useEffect(() => {
    const els = rootRef.current?.querySelectorAll(".sc-reveal") ?? []
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible")
            io.unobserve(e.target)
          }
        }),
      { rootMargin: "0px 0px -10% 0px" },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [rootRef])
}

function Syllabus({ lang }) {
  const s = sc.syllabus
  const L = s.labels
  const [active, setActive] = useState(0)
  const [openUnits, setOpenUnits] = useState(() => new Set([0]))
  const tabRefs = useRef([])

  const toggleUnit = (i) =>
    setOpenUnits((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  // Arrow keys move between tabs (WAI-ARIA tabs pattern).
  const onTabKey = (e) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const next = (active + dir + s.tabs.length) % s.tabs.length
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="section sc-section" id="syllabus">
      <SectionHead title={s.title[lang]} text={s.text[lang]} />
      <div className="sc-tabs" role="tablist" aria-label={s.title[lang]}>
        {s.tabs.map((tab, i) => (
          <button
            type="button"
            role="tab"
            id={`tab-${tab.id}`}
            aria-controls={`panel-${tab.id}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            className={`sc-tab ${active === i ? "is-active" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={onTabKey}
            ref={(el) => (tabRefs.current[i] = el)}
            key={tab.id}
          >
            {tab.tab[lang]}
          </button>
        ))}
      </div>

      {s.tabs.map((tab, i) => (
        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className={`sc-panel ${active === i ? "is-active" : ""}`}
          key={tab.id}
        >
          <h3 className="sc-panel-title">{tab.heading[lang]}</h3>
          <div className="sc-info">
            <span>{tab.info.time[lang]}</span>
            <span>{tab.info.goal[lang]}</span>
          </div>
          <div className={tab.image ? "sc-panel-intro has-img" : "sc-panel-intro"}>
            <p>{tab.intro[lang]}</p>
            {tab.image && <Photo name={tab.image} lang={lang} className="sc-panel-photo" />}
          </div>

          {tab.kind === "table" && (
            <Table head={[L.unit[lang], L.teach[lang], L.activity[lang], L.outcome[lang]]} rows={tab.rows[lang]} />
          )}
          {tab.kind === "table3" && (
            <Table head={[L.unit[lang], L.learn[lang], L.project[lang]]} rows={tab.rows[lang]} />
          )}
          {tab.kind === "accordion" && (
            <>
              <div className="sc-acc-tools">
                <button type="button" className="sc-link-btn" onClick={() => setOpenUnits(new Set(tab.units.map((_, j) => j)))}>
                  {sc.ui.openAll[lang]}
                </button>
                <button type="button" className="sc-link-btn" onClick={() => setOpenUnits(new Set())}>
                  {sc.ui.closeAll[lang]}
                </button>
              </div>
              <div className="sc-accordion">
                {tab.units.map((unit, j) => {
                  const open = openUnits.has(j)
                  return (
                    <div className={`sc-acc-item ${open ? "is-open" : ""}`} key={unit.t.en}>
                      <h4>
                        <button
                          type="button"
                          className="sc-acc-trigger"
                          aria-expanded={open}
                          aria-controls={`unit-${j}`}
                          onClick={() => toggleUnit(j)}
                        >
                          <span>{unit.t[lang]}</span>
                          <span className="sc-acc-sign" aria-hidden="true">{open ? "−" : "+"}</span>
                        </button>
                      </h4>
                      <div className="sc-acc-body" id={`unit-${j}`}>
                        <div className="sc-unit">
                          <div>
                            <h5>📖 {L.learn[lang]}</h5>
                            <p>{unit.learn[lang]}</p>
                            {unit.recipe && (
                              <div className="sc-recipe">
                                <strong>🧪 {L.recipe[lang]}</strong>
                                {unit.recipe[lang].split("\n\n").map((para) => (
                                  <p key={para}>{para}</p>
                                ))}
                              </div>
                            )}
                            {unit.caution && (
                              <p className="sc-caution">
                                ⚠️ <strong>{L.caution[lang]}:</strong> {unit.caution[lang]}
                              </p>
                            )}
                            <h5>🛠️ {L.practical[lang]}</h5>
                            <p>{unit.practical[lang]}</p>
                            <h5>🎯 {L.outcome[lang]}</h5>
                            <p className="sc-outcome">{unit.outcome[lang]}</p>
                          </div>
                          <Photo name={unit.image} lang={lang} className="sc-unit-photo" />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="sc-small">{tab.note[lang]}</p>
            </>
          )}
        </div>
      ))}
    </section>
  )
}

function Faq({ lang }) {
  const [open, setOpen] = useState(() => new Set())
  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  return (
    <section className="section sc-section bg-white" id="faq">
      <SectionHead title={sc.faq.title[lang]} />
      <div className="sc-accordion sc-faq">
        {sc.faq.items.map((item, i) => {
          const isOpen = open.has(i)
          return (
            <div className={`sc-acc-item ${isOpen ? "is-open" : ""}`} key={item.q.en}>
              <h3>
                <button type="button" className="sc-acc-trigger" aria-expanded={isOpen} aria-controls={`faq-${i}`} onClick={() => toggle(i)}>
                  <span>{item.q[lang]}</span>
                  <span className="sc-acc-sign" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              <div className="sc-acc-body" id={`faq-${i}`}>
                <p className="sc-faq-answer">{item.a[lang]}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default function SchoolCurriculumPage({ language }) {
  const lang = language === "hi" ? "hi" : "en"
  const rootRef = useRef(null)
  useReveal(rootRef)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const print = () => window.print()

  return (
    <div className="sc-page" ref={rootRef}>
      {/* Section navigation, sticky under the site header */}
      <nav className="sc-subnav" aria-label={sc.brand[lang]}>
        <a className="sc-brand" href="#home">
          {sc.brand[lang]}
        </a>
        <div className="sc-subnav-links">
          {sc.nav.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label[lang]}
            </a>
          ))}
        </div>
        <button type="button" className="sc-print" onClick={print}>
          {sc.print[lang]}
        </button>
      </nav>

      {/* 1. Hero */}
      <section className="section sc-hero" id="home">
        <div className="sc-hero-grid">
          <div>
            <p className="sc-pill">{sc.hero.pill[lang]}</p>
            <h1>{sc.hero.title[lang]}</h1>
            <p className="sc-subtitle">{sc.hero.subtitle[lang]}</p>
            <p className="sc-lead">{sc.hero.text[lang]}</p>
            <div className="sc-buttons">
              <a className="sc-btn sc-btn-primary" href="#syllabus">
                {sc.hero.primary[lang]}
              </a>
              <a className="sc-btn sc-btn-outline" href="#pilot">
                {sc.hero.secondary[lang]}
              </a>
            </div>
            <div className="sc-stats">
              {sc.hero.stats.map((stat) => (
                <div className="sc-stat" key={stat.big.en}>
                  <strong>{stat.big[lang]}</strong>
                  <span>{stat.small[lang]}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="sc-hero-art">
            <Photo name={sc.hero.image} lang={lang} className="sc-hero-photo" />
          </div>
        </div>
      </section>

      {/* 2. Why */}
      <section className="section sc-section bg-white" id="why">
        <div className="sc-reveal">
          <SectionHead title={sc.why.title[lang]} text={sc.why.text[lang]} />
          <div className="sc-grid-2">
            {sc.why.cards.map((card) => (
              <article className="sc-card" key={card.t.en}>
                <Icon name={card.icon} />
                <h3>{card.t[lang]}</h3>
                <p>{card.d[lang]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Policy */}
      <section className="section sc-section sc-green" id="policy">
        <div className="sc-reveal">
          <SectionHead title={sc.policy.title[lang]} text={sc.policy.text[lang]} />
          <div className="sc-grid-2">
            {sc.policy.cards.map((card) => (
              <article className="sc-card sc-policy-card" key={card.t.en}>
                <h3>{card.t[lang]}</h3>
                <ul className="fm-list">
                  {card.points[lang].map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <p className="sc-fit">{card.fit[lang]}</p>
              </article>
            ))}
          </div>
          <p className="sc-small">{sc.policy.note[lang]}</p>
        </div>
      </section>

      {/* 4. Syllabus */}
      <Syllabus lang={lang} />

      {/* 5. Needs */}
      <section className="section sc-section bg-white" id="needs">
        <div className="sc-reveal">
          <SectionHead title={sc.needs.title[lang]} text={sc.needs.text[lang]} />
          <div className="sc-grid-3">
            {sc.needs.cards.map((card) => (
              <article className="sc-card" key={card.t.en}>
                <Icon name={card.icon} />
                <h3>{card.t[lang]}</h3>
                <p>{card.d[lang]}</p>
              </article>
            ))}
          </div>
          <div className="sc-needs-row">
            <div className="sc-card">
              <h3>🧺 {sc.needs.checklistTitle[lang]}</h3>
              <ul className="faq-checklist sc-checklist">
                {sc.needs.checklist[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <Photo name={sc.needs.image} lang={lang} className="sc-needs-photo" />
          </div>
          <h3 className="sc-h3">🌦 {sc.needs.seasonsTitle[lang]}</h3>
          <Table head={sc.needs.seasonsHead[lang]} rows={sc.needs.seasons[lang]} />
          <p className="sc-small">{sc.needs.seasonsNote[lang]}</p>
        </div>
      </section>

      {/* 6. Assessment */}
      <section className="section sc-section" id="assessment">
        <div className="sc-reveal">
          <SectionHead title={sc.assessment.title[lang]} text={sc.assessment.text[lang]} />
          <div className="sc-assess">
            <Table head={sc.assessment.head[lang]} rows={sc.assessment.rows[lang]} />
            <aside className="sc-diary" aria-label={sc.assessment.diary.title[lang]}>
              <h3>📒 {sc.assessment.diary.title[lang]}</h3>
              {sc.assessment.diary.lines.map((line) => (
                <p key={line.k.en}>
                  <strong>{line.k[lang]}:</strong> {line.v[lang]}
                </p>
              ))}
              <div className="sc-diary-draw">{sc.assessment.diary.drawing[lang]}</div>
            </aside>
          </div>
        </div>
      </section>

      {/* 7. Subjects */}
      <section className="section sc-section bg-white" id="subjects">
        <div className="sc-reveal">
          <SectionHead title={sc.subjects.title[lang]} text={sc.subjects.text[lang]} />
          <div className="sc-grid-subjects">
            {sc.subjects.items.map((item) => (
              <article className="sc-card sc-subject" key={item.t.en}>
                <span className="sc-emoji" aria-hidden="true">{item.icon}</span>
                <h3>{item.t[lang]}</h3>
                <p>
                  <strong>{sc.subjects.learnLabel[lang]}:</strong> {item.learn[lang]}
                </p>
                <p>
                  <strong>{sc.subjects.exampleLabel[lang]}:</strong> {item.ex[lang]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Safety */}
      <section className="section sc-section" id="safety">
        <div className="sc-safety sc-reveal">
          <span className="sc-safety-icon" aria-hidden="true">⚠️</span>
          <div>
            <SectionHead title={sc.safety.title[lang]} text={sc.safety.text[lang]} />
            <ul className="sc-rules">
              {sc.safety.rules[lang].map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Pilot */}
      <section className="section sc-section bg-white" id="pilot">
        <div className="sc-reveal">
          <SectionHead title={sc.pilot.title[lang]} text={sc.pilot.text[lang]} />
          <ol className="sc-timeline">
            {sc.pilot.steps.map((step, i) => (
              <li key={step.t.en}>
                <span className="sc-dot">{i + 1}</span>
                <small>{step.when[lang]}</small>
                <h3>{step.t[lang]}</h3>
                <p>{step.d[lang]}</p>
              </li>
            ))}
          </ol>
          <div className="sc-badges">
            {sc.pilot.badges.map((b) => (
              <span key={b.en}>{b[lang]}</span>
            ))}
          </div>
          <div className="sc-cta">
            <div>
              <h3>{sc.pilot.cta.title[lang]}</h3>
              <p>{sc.pilot.cta.text[lang]}</p>
            </div>
            <button type="button" className="sc-btn sc-btn-white" onClick={print}>
              {sc.pilot.cta.button[lang]}
            </button>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <Faq lang={lang} />

      {/* 11. Closing block (the site footer follows) */}
      <section className="sc-foot">
        <div>
          <strong>{sc.brand[lang]}</strong>
          <p>{sc.footer.tagline[lang]}</p>
        </div>
        <div>
          <strong>{sc.footer.orgsTitle[lang]}</strong>
          <ul>
            {sc.footer.orgs[lang].map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
        </div>
        <div className="sc-foot-links">
          <strong>{sc.ui.others[lang]}</strong>
          <Link to="/for/teachers">👩‍🏫 {lang === "hi" ? "शिक्षकों के लिए" : "For teachers"}</Link>
          <Link to="/for/urban-families">🏙️ {lang === "hi" ? "शहरी परिवारों के लिए" : "For city families"}</Link>
        </div>
        <p className="sc-foot-note">{sc.footer.note[lang]}</p>
      </section>
    </div>
  )
}
