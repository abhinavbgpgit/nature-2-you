import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { nu, nuImages } from "./nutrientsData"

function Photo({ name, lang, className = "" }) {
  const image = nuImages[name]
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

function Table({ head, rows }) {
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
              {row.map((cell, j) => (j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>))}
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

// Liebig's barrel: water only fills up to the shortest stave.
function Barrel({ label }) {
  const staves = [
    ["N", 190], ["P", 175], ["K", 185], ["Ca", 170], ["Mg", 180], ["S", 172], ["B", 105], ["Zn", 165], ["Fe", 178],
  ]
  const w = 34
  return (
    <svg className="nu-barrel" viewBox="0 0 360 260" role="img" aria-label={label}>
      <rect x="18" y="135" width={staves.length * w} height="100" className="nu-water" />
      {staves.map(([sym, h], i) => (
        <g key={sym}>
          <rect x={18 + i * w} y={235 - h} width={w - 3} height={h} rx="3" className={sym === "B" ? "nu-stave nu-stave-short" : "nu-stave"} />
          <text x={18 + i * w + (w - 3) / 2} y={235 - h + 18} textAnchor="middle" className="nu-stave-text">
            {sym}
          </text>
        </g>
      ))}
      <rect x="14" y="232" width={staves.length * w + 6} height="10" rx="4" className="nu-band" />
      <text x="180" y="256" textAnchor="middle" className="nu-caption">
        {label}
      </text>
    </svg>
  )
}

// Sun + CO2 + water → sugar + O2.
function Photosynthesis({ labels }) {
  return (
    <svg className="nu-photo-diagram" viewBox="0 0 520 300" role="img" aria-label="Photosynthesis">
      <circle cx="70" cy="60" r="34" className="nu-sun" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1={70 + Math.cos((a * Math.PI) / 180) * 42}
          y1={60 + Math.sin((a * Math.PI) / 180) * 42}
          x2={70 + Math.cos((a * Math.PI) / 180) * 54}
          y2={60 + Math.sin((a * Math.PI) / 180) * 54}
          className="nu-ray"
        />
      ))}
      <text x="70" y="128" textAnchor="middle" className="nu-label">{labels.sun}</text>
      <path d="M115 80 Q 190 110 225 135" className="nu-arrow-line" markerEnd="url(#nu-arrow)" />

      {/* plant */}
      <path d="M260 250 C 260 200 262 170 262 120" className="nu-stem" />
      <path d="M262 160 C 220 150 205 120 215 100 C 245 105 262 130 262 160 Z" className="nu-leaf" />
      <path d="M262 135 C 305 125 320 95 312 75 C 282 80 264 105 262 135 Z" className="nu-leaf" />
      <path d="M262 120 C 250 95 255 70 268 58 C 280 75 276 100 262 120 Z" className="nu-leaf" />
      <rect x="150" y="250" width="230" height="40" rx="6" className="nu-soil" />
      <path d="M260 250 l -24 30 M260 250 l 18 34 M260 250 l -4 36" className="nu-root" />

      <text x="470" y="70" textAnchor="middle" className="nu-label">{labels.co2}</text>
      <path d="M430 80 Q 370 95 318 100" className="nu-arrow-line" markerEnd="url(#nu-arrow)" />
      <text x="470" y="200" textAnchor="middle" className="nu-label">{labels.o2}</text>
      <path d="M318 150 Q 380 170 430 190" className="nu-arrow-line nu-out" markerEnd="url(#nu-arrow-o)" />
      <text x="80" y="275" textAnchor="middle" className="nu-label">{labels.water}</text>
      <path d="M140 270 Q 200 268 236 262" className="nu-arrow-line nu-water-line" markerEnd="url(#nu-arrow-w)" />
      <rect x="196" y="186" width="132" height="30" rx="15" className="nu-sugar" />
      <text x="262" y="206" textAnchor="middle" className="nu-sugar-text">{labels.sugar}</text>

      <defs>
        <marker id="nu-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#8a5a2b" />
        </marker>
        <marker id="nu-arrow-o" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#2d8a5a" />
        </marker>
        <marker id="nu-arrow-w" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#3b82b8" />
        </marker>
      </defs>
    </svg>
  )
}

// Old leaves vs new leaves — where deficiency shows first.
function LeafMap({ labels }) {
  return (
    <svg className="nu-leafmap" viewBox="0 0 520 340" role="img" aria-label={labels.arrow}>
      <path d="M200 320 L200 40" className="nu-stem" />
      {/* new leaves (top) */}
      <path d="M200 70 C 170 60 160 40 168 28 C 190 32 200 50 200 70 Z" className="nu-leaf-new" />
      <path d="M200 90 C 232 82 242 62 236 48 C 214 52 202 70 200 90 Z" className="nu-leaf-new" />
      {/* middle */}
      <path d="M200 160 C 150 150 130 120 140 100 C 175 106 198 130 200 160 Z" className="nu-leaf" />
      <path d="M200 185 C 252 176 272 146 264 124 C 228 130 204 156 200 185 Z" className="nu-leaf" />
      {/* old leaves (bottom) */}
      <path d="M200 260 C 135 252 108 214 118 186 C 162 192 196 224 200 260 Z" className="nu-leaf-old" />
      <path d="M200 285 C 268 276 294 238 284 210 C 238 218 204 250 200 285 Z" className="nu-leaf-old" />
      <rect x="120" y="318" width="160" height="16" rx="5" className="nu-soil" />

      <path d="M330 250 C 360 200 360 130 330 80" className="nu-arrow-line" markerEnd="url(#nu-up)" />
      <text x="372" y="170" className="nu-label nu-small">{labels.arrow}</text>

      <rect x="300" y="18" width="210" height="58" rx="10" className="nu-box-new" />
      <text x="405" y="42" textAnchor="middle" className="nu-label">{labels.newLeaves}</text>
      <text x="405" y="64" textAnchor="middle" className="nu-list">{labels.newList}</text>

      <rect x="300" y="262" width="210" height="58" rx="10" className="nu-box-old" />
      <text x="405" y="286" textAnchor="middle" className="nu-label">{labels.oldLeaves}</text>
      <text x="405" y="308" textAnchor="middle" className="nu-list">{labels.oldList}</text>

      <defs>
        <marker id="nu-up" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M0 0 L10 5 L0 10 z" fill="#8a5a2b" />
        </marker>
      </defs>
    </svg>
  )
}

function ElementDetail({ el, lang }) {
  const L = nu.elementsSection.labels
  return (
    <article className={`nu-detail nu-g-${el.group}`} aria-live="polite">
      <div className="nu-detail-head">
        <span className="nu-sym nu-sym-big">{el.sym}</span>
        <div>
          <h3>{el.name[lang]}</h3>
          <p className="nu-tag">{el.tag[lang]}</p>
        </div>
      </div>
      <div className={el.image ? "nu-detail-grid has-img" : "nu-detail-grid"}>
        <div>
          <h4>🌱 {L.role[lang]}</h4>
          <ul className="fm-list">
            {el.role[lang].map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <h4>🔍 {L.lack[lang]}</h4>
          <p>{el.lack[lang]}</p>
          {el.fact && <p className="sc-fit">💡 <strong>{L.fact[lang]}:</strong> {el.fact[lang]}</p>}
          {el.excess && <p className="sc-caution">⚠️ <strong>{L.excess[lang]}:</strong> {el.excess[lang]}</p>}
        </div>
        {el.image && <Photo name={el.image} lang={lang} className="nu-detail-photo" />}
      </div>
      <div className="nu-sources">
        <h4>🍃 {L.sources[lang]}</h4>
        <ul className="faq-checklist">
          {el.sources[lang].map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function Elements({ lang }) {
  const s = nu.elementsSection
  const [group, setGroup] = useState("all")
  const [selected, setSelected] = useState("N")
  const detailRef = useRef(null)
  const list = nu.elements.filter((e) => group === "all" || e.group === group)
  const current = nu.elements.find((e) => e.sym === selected)

  const pick = (sym) => {
    setSelected(sym)
    requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }))
  }

  return (
    <section className="section sc-section bg-white" id="elements">
      <SectionHead title={s.title[lang]} text={s.text[lang]} />
      <div className="nu-filters" role="group" aria-label={s.title[lang]}>
        {nu.groups.map((g) => (
          <button
            type="button"
            className={`nu-chip nu-chip-${g.id} ${group === g.id ? "is-active" : ""}`}
            aria-pressed={group === g.id}
            onClick={() => setGroup(g.id)}
            key={g.id}
          >
            {g.label[lang]}
          </button>
        ))}
      </div>

      <div className="nu-tiles">
        {list.map((el) => (
          <button
            type="button"
            className={`nu-tile nu-g-${el.group} ${selected === el.sym ? "is-selected" : ""}`}
            aria-pressed={selected === el.sym}
            onClick={() => pick(el.sym)}
            key={el.sym}
          >
            <span className="nu-sym">{el.sym}</span>
            <strong>{el.name[lang]}</strong>
            <small>{el.tag[lang]}</small>
            <span className={`nu-where nu-where-${el.where}`}>
              {s.labels.showsOn[lang]} {s.where[el.where][lang]}
            </span>
          </button>
        ))}
      </div>

      <div ref={detailRef} className="nu-detail-wrap">
        {current && <ElementDetail el={current} lang={lang} />}
      </div>

      {(group === "all" || group === "micro") && <p className="sc-caution nu-micro-note">⚠️ {s.microNote[lang]}</p>}
    </section>
  )
}

export default function NutrientsPage({ language }) {
  const lang = language === "hi" ? "hi" : "en"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sc-page nu-page">
      <nav className="sc-subnav" aria-label={nu.brand[lang]}>
        <a className="sc-brand" href="#intro">
          {nu.brand[lang]}
        </a>
        <div className="sc-subnav-links">
          {nu.nav.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label[lang]}
            </a>
          ))}
        </div>
        <button type="button" className="sc-print" onClick={() => window.print()}>
          🖨️ Print
        </button>
      </nav>

      {/* Hero */}
      <section className="section sc-hero" id="intro">
        <div className="sc-hero-grid">
          <div>
            <p className="sc-pill">{nu.hero.pill[lang]}</p>
            <h1>{nu.hero.title[lang]}</h1>
            <p className="sc-subtitle">{nu.hero.subtitle[lang]}</p>
            <p className="sc-lead">{nu.hero.text[lang]}</p>
            <div className="sc-buttons">
              <a className="sc-btn sc-btn-primary" href="#elements">
                {lang === "hi" ? "सभी तत्व देखें" : "See all elements"}
              </a>
              <a className="sc-btn sc-btn-outline" href="#recipes">
                {lang === "hi" ? "प्राकृतिक विधियाँ" : "Natural recipes"}
              </a>
            </div>
            <div className="sc-stats">
              {nu.hero.stats.map((stat) => (
                <div className="sc-stat" key={stat.small.en}>
                  <strong>{stat.big[lang]}</strong>
                  <span>{stat.small[lang]}</span>
                </div>
              ))}
            </div>
          </div>
          <Photo name={nu.hero.image} lang={lang} className="sc-hero-photo" />
        </div>
      </section>

      {/* Intro: groups, Liebig, natural farming view */}
      <section className="section sc-section bg-white">
        <SectionHead title={nu.intro.title[lang]} />
        <p className="sc-fit nu-eighteen">ℹ️ {nu.intro.eighteen[lang]}</p>
        <Table head={nu.intro.groupsHead[lang]} rows={nu.intro.groups[lang]} />

        <div className="nu-split">
          <div>
            <h3 className="sc-h3">🪣 {nu.intro.liebigTitle[lang]}</h3>
            <p>{nu.intro.liebig[lang]}</p>
          </div>
          <div className="nu-diagram-card">
            <Barrel label={nu.intro.barrelLabel[lang]} />
          </div>
        </div>

        <div className="nu-split">
          <div>
            <h3 className="sc-h3">🌾 {nu.intro.viewTitle[lang]}</h3>
            <p>{nu.intro.view[lang]}</p>
            <div className="sc-grid-2 nu-ways">
              {nu.intro.ways.map((w) => (
                <article className="sc-card" key={w.t.en}>
                  <span className="sc-emoji" aria-hidden="true">{w.icon}</span>
                  <h3>{w.t[lang]}</h3>
                  <p>{w.d[lang]}</p>
                </article>
              ))}
            </div>
          </div>
          <Photo name="hands" lang={lang} className="nu-side-photo" />
        </div>
        <p className="sc-caution">⚠️ {nu.intro.caution[lang]}</p>
      </section>

      {/* Sun, C, H, O */}
      <section className="section sc-section sc-green" id="sun">
        <SectionHead title={nu.sun.title[lang]} text={nu.sun.text[lang]} />
        <div className="nu-split">
          <div>
            <h3 className="sc-h3">🌞 {nu.sun.photoTitle[lang]}</h3>
            <p>{nu.sun.photo[lang]}</p>
            <p className="nu-equation">6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</p>
          </div>
          <div className="nu-diagram-card">
            <Photosynthesis labels={nu.sun.diagram[lang]} />
          </div>
        </div>
        <div className="nu-sun-cards">
          {nu.sun.cards.map((card) => (
            <article className="sc-card nu-sun-card" key={card.t.en}>
              <div className={card.image ? "nu-detail-grid has-img" : ""}>
                <div>
                  <span className="sc-emoji" aria-hidden="true">{card.icon}</span>
                  <h3>{card.t[lang]}</h3>
                  <p>{card.role[lang]}</p>
                  <p className="sc-fit">{card.lack[lang]}</p>
                </div>
                {card.image && <Photo name={card.image} lang={lang} className="nu-detail-photo" />}
              </div>
              <ul className="faq-checklist">
                {card.tips[lang].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* All elements */}
      <Elements lang={lang} />

      {/* Symptoms */}
      <section className="section sc-section" id="symptoms">
        <SectionHead title={nu.symptoms.title[lang]} text={nu.symptoms.text[lang]} />
        <div className="nu-diagram-card nu-leafmap-card">
          <LeafMap labels={nu.symptoms.labels[lang]} />
        </div>
        <div className="nu-gallery">
          {nu.symptoms.gallery.map((g) => (
            <div key={g.image}>
              <Photo name={g.image} lang={lang} />
              <p>{g.caption[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Summary */}
      <section className="section sc-section bg-white" id="summary">
        <SectionHead title={nu.summary.title[lang]} text={nu.summary.text[lang]} />
        <Table head={nu.summary.head[lang]} rows={nu.summary.rows[lang]} />
        <p className="sc-fit nu-rule">🧠 {nu.summary.rule[lang]}</p>
      </section>

      {/* Recipes */}
      <section className="section sc-section" id="recipes">
        <SectionHead title={nu.recipes.title[lang]} text={nu.recipes.text[lang]} />
        <div className="nu-recipes">
          {nu.recipes.items.map((r, i) => (
            <article className="sc-card nu-recipe-card" key={r.t.en}>
              <div className={r.image ? "nu-detail-grid has-img" : ""}>
                <div>
                  <span className="nu-num">{i + 1}</span>
                  <h3>{r.t[lang]}</h3>
                  <p>{r.intro[lang]}</p>
                  <div className="sc-recipe">
                    <strong>🧺 {nu.recipes.materials[lang]}</strong>
                    <p>{r.materials[lang]}</p>
                  </div>
                  <ol className="aud-mini-steps">
                    {r.steps[lang].map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ol>
                </div>
                {r.image && <Photo name={r.image} lang={lang} className="nu-detail-photo" />}
              </div>
            </article>
          ))}
        </div>

        <div className="nu-split">
          <div>
            <h3 className="sc-h3">🏠 {nu.recipes.homeTitle[lang]}</h3>
            <Table head={nu.recipes.homeHead[lang]} rows={nu.recipes.homeRows[lang]} />
          </div>
          <Photo name={nu.recipes.ashImage} lang={lang} className="nu-side-photo" />
        </div>
        <p className="sc-caution">⚠️ {nu.recipes.caution[lang]}</p>
      </section>

      {/* Tips */}
      <section className="section sc-section bg-white" id="tips">
        <SectionHead title={nu.tips.title[lang]} />
        <div className="sc-grid-2">
          {nu.tips.items.map((t) => (
            <article className="sc-card" key={t.t.en}>
              <span className="sc-emoji" aria-hidden="true">{t.icon}</span>
              <h3>{t.t[lang]}</h3>
              <p>{t.d[lang]}</p>
            </article>
          ))}
        </div>
        <p className="sc-small">{nu.footer.note[lang]}</p>
        <div className="fm-others nu-links">
          <Link className="fm-other" to="/natural-farming">🌱 {lang === "hi" ? "प्राकृतिक खेती" : "Natural farming"}</Link>
          <Link className="fm-other" to="/natural-farming/faq">❓ {lang === "hi" ? "सामान्य प्रश्न" : "Common questions"}</Link>
          <Link className="fm-other" to="/for/school-kids">🎒 {lang === "hi" ? "बाल कृषि पाठशाला" : "School curriculum"}</Link>
        </div>
      </section>
    </div>
  )
}
