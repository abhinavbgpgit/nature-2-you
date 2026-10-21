import { useEffect } from "react"
import { Link } from "react-router-dom"
import { incubator, incubatorImages } from "./incubatorData"

function Photo({ name, alt, className = "" }) {
  const image = incubatorImages[name]
  return (
    <figure className={`fm-photo ${className}`}>
      <img src={image.src} alt={alt} loading="lazy" />
      <figcaption>
        <a href={image.source} target="_blank" rel="noreferrer">
          📷 {image.credit}
        </a>
      </figcaption>
    </figure>
  )
}

// Cross-section of the thermocol incubator, labelled in the current language.
function IncubatorDiagram({ labels }) {
  const eggs = [70, 120, 170, 220, 270, 320]
  return (
    <svg className="inc-diagram" viewBox="0 0 680 380" role="img" aria-label={labels.box}>
      {/* box walls and lid */}
      <rect x="30" y="80" width="460" height="260" rx="10" className="inc-wall" />
      <rect x="48" y="98" width="424" height="224" rx="4" className="inc-inside" />
      <rect x="22" y="56" width="476" height="30" rx="8" className="inc-wall" />
      <rect x="150" y="60" width="150" height="22" rx="3" className="inc-glass" />
      {[340, 370, 400, 430].map((x) => (
        <circle cx={x} cy="71" r="5" className="inc-hole" key={x} />
      ))}

      {/* bulbs */}
      {[110, 410].map((x) => (
        <g key={x}>
          <rect x={x - 8} y="98" width="16" height="14" className="inc-metal" />
          <circle cx={x} cy="126" r="14" className="inc-bulb" />
        </g>
      ))}
      {/* fan */}
      <g transform="translate(260 122)">
        <rect x="-26" y="-22" width="52" height="44" rx="6" className="inc-metal" />
        <circle r="16" className="inc-fan" />
        <path d="M0 -14 Q8 -4 0 0 Q-8 -4 0 -14 M14 0 Q4 8 0 0 Q4 -8 14 0 M0 14 Q-8 4 0 0 Q8 4 0 14 M-14 0 Q-4 -8 0 0 Q-4 8 -14 0" className="inc-blade" />
      </g>

      {/* shavings and eggs */}
      <rect x="48" y="290" width="300" height="32" className="inc-shavings" />
      {eggs.map((x) => (
        <ellipse cx={x} cy="276" rx="19" ry="25" className="inc-egg" key={x} />
      ))}
      {/* partition + water */}
      <rect x="360" y="230" width="6" height="92" className="inc-metal" />
      <path d="M380 262 h80 l-8 60 h-64 z" className="inc-bowl" />
      <rect x="386" y="272" width="68" height="44" className="inc-water" />

      {/* sensor */}
      <line x1="230" y1="98" x2="230" y2="232" className="inc-wire" />
      <rect x="224" y="232" width="12" height="18" rx="3" className="inc-sensor" />

      {/* controller outside */}
      <rect x="540" y="150" width="110" height="70" rx="8" className="inc-controller" />
      <rect x="552" y="162" width="86" height="28" rx="3" className="inc-screen" />
      <text x="595" y="182" className="inc-screen-text" textAnchor="middle">37.6°</text>
      <path d="M540 200 C 515 200, 505 112, 490 112" className="inc-wire" />

      {/* labels */}
      <g className="inc-label">
        <text x="225" y="36" textAnchor="middle">{labels.lid}</text>
        <line x1="225" y1="42" x2="225" y2="60" />
        <text x="385" y="36" textAnchor="middle">{labels.vents}</text>
        <line x1="385" y1="42" x2="385" y2="64" />
        <text x="110" y="168" textAnchor="middle">{labels.bulb}</text>
        <text x="260" y="168" textAnchor="middle">{labels.fan}</text>
        <text x="244" y="246">{labels.sensor}</text>
        <text x="595" y="242" textAnchor="middle">{labels.controller}</text>
        <text x="420" y="252" textAnchor="middle">{labels.water}</text>
        <text x="198" y="364" textAnchor="middle">{labels.eggs}</text>
        <text x="595" y="300" textAnchor="middle">{labels.box}</text>
        <line x1="545" y1="300" x2="490" y2="300" />
      </g>
    </svg>
  )
}

export default function IncubatorPage({ language }) {
  const lang = language === "hi" ? "hi" : "en"
  const c = incubator

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="section fm-detail">
        <Link className="fm-back" to="/farming-model#modules">
          {c.ui.back[lang]}
        </Link>
        <div className="fm-detail-head">
          <div>
            <p className="eyebrow">{c.hero.eyebrow[lang]}</p>
            <h1 className="section-title">🥚 {c.hero.title[lang]}</h1>
            <p className="section-copy">{c.hero.text[lang]}</p>
          </div>
          <Photo name="box" alt={c.build.imgAlt[lang].box} className="fm-photo-large" />
        </div>

        <div className="fm-quick inc-facts">
          {c.facts.map((fact) => (
            <div className="fm-quick-item" key={fact.label.en}>
              <small>{fact.label[lang]}</small>
              <strong>{fact.value[lang]}</strong>
            </div>
          ))}
        </div>

        <div className="inc-two">
          <article className="fm-section">
            <h2>💡 {c.why.title[lang]}</h2>
            <ul className="fm-list">
              {c.why.points[lang].map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
          <article className="fm-section">
            <h2>🧰 {c.materials.title[lang]}</h2>
            <ul className="inc-materials">
              {c.materials.items[lang].map((item) => (
                <li key={item.t}>
                  <strong>{item.t}</strong>
                  <span>{item.d}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section bg-white">
        <h2 className="inc-title">{c.diagram.title[lang]}</h2>
        <div className="inc-diagram-wrap">
          <IncubatorDiagram labels={c.diagram.labels[lang]} />
        </div>

        <h2 className="inc-title">{c.build.title[lang]}</h2>
        <ol className="inc-steps">
          {c.build.steps[lang].map((step, i) => (
            <li className={`inc-step ${step.img ? "has-img" : ""}`} key={step.t}>
              <div className="inc-step-text">
                <span className="inc-step-num">
                  {c.ui.stepLabel[lang]} {i + 1}
                </span>
                <h3>{step.t}</h3>
                <p>{step.d}</p>
              </div>
              {step.img && <Photo name={step.img} alt={c.build.imgAlt[lang][step.img]} />}
            </li>
          ))}
        </ol>
        <p className="inc-callout inc-warning">⚠️ {c.safety[lang]}</p>
      </section>

      <section className="section">
        <div className="inc-two">
          <article className="fm-section">
            <h2>🥚 {c.eggs.title[lang]}</h2>
            <ul className="fm-list">
              {c.eggs.points[lang].map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
          <p className="inc-callout">💧 {c.humidity[lang]}</p>
        </div>

        <h2 className="inc-title">{c.timeline.title[lang]}</h2>
        <ol className="inc-timeline">
          {c.timeline.steps[lang].map((step) => (
            <li className="inc-day" key={step.day}>
              <span className="inc-day-badge">{step.day}</span>
              <div className="inc-day-body">
                <h3>{step.t}</h3>
                <p>{step.d}</p>
                {step.img === "candle" && (
                  <div className="inc-candle">
                    <div>
                      <Photo name="candleOk" alt={c.timeline.imgAlt[lang].candleOk} />
                      <p>✅ {c.timeline.candleCaption[lang][0]}</p>
                    </div>
                    <div>
                      <Photo name="candleNo" alt={c.timeline.imgAlt[lang].candleNo} />
                      <p>❌ {c.timeline.candleCaption[lang][1]}</p>
                    </div>
                  </div>
                )}
                {step.img && step.img !== "candle" && (
                  <Photo name={step.img} alt={c.timeline.imgAlt[lang][step.img]} className="inc-day-photo" />
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section bg-white">
        <div className="fm-detail-head">
          <div>
            <h2 className="inc-title">{c.result.title[lang]}</h2>
            <p className="section-copy">{c.result.text[lang]}</p>
            <div className="nf-table-wrap inc-table">
              <table className="nf-table">
                <thead>
                  <tr>
                    {c.result.head[lang].map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.result.rows[lang].map((row) => (
                    <tr key={row[1] + row[0]}>
                      {row.map((cell, i) => (i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="inc-callout">⭐ {c.result.lesson[lang]}</p>
          </div>
          <Photo name={c.result.img} alt={c.result.imgAlt[lang]} className="fm-photo-large" />
        </div>

        <h2 className="inc-title">{c.problems.title[lang]}</h2>
        <div className="nf-table-wrap">
          <table className="nf-table">
            <thead>
              <tr>
                {c.problems.head[lang].map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.problems.rows[lang].map(([problem, fix]) => (
                <tr key={problem}>
                  <th scope="row">{problem}</th>
                  <td>{fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="fm-note">{c.ui.note[lang]}</p>
        <div className="inc-links">
          <Link className="fm-back" to="/farming-model#modules">
            {c.ui.back[lang]}
          </Link>
          <Link className="fm-card-cta" to="/farming-model/poultry">
            {c.ui.poultry[lang]}
          </Link>
        </div>
      </section>
    </>
  )
}
