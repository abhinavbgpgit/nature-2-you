import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { audienceImages, audiences, audienceUi, findAudience } from "./audienceData"

function Photo({ name, alt, className = "" }) {
  const image = audienceImages[name]
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

function Table({ head, rows }) {
  return (
    <div className="nf-table-wrap">
      <table className="nf-table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (j === 0 ? <th scope="row" key={j}>{cell}</th> : <td key={j}>{cell}</td>))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Block({ block, lang }) {
  switch (block.type) {
    case "p":
      return <p className="section-copy aud-p">{block.text[lang]}</p>
    case "callout":
      return <p className={`inc-callout ${block.tone === "warning" ? "inc-warning" : ""}`}>{block.tone === "warning" ? "⚠️ " : "💡 "}{block.text[lang]}</p>
    case "cards":
      return (
        <div className="aud-cards">
          {block.items.map((item) => (
            <article className="aud-card" key={item.t.en}>
              <span className="aud-card-icon" aria-hidden="true">{item.icon}</span>
              <h3>{item.t[lang]}</h3>
              <p>{item.d[lang]}</p>
            </article>
          ))}
        </div>
      )
    case "steps":
      return (
        <ol className="nf-steps">
          {block.items[lang].map((step, i) => (
            <li className="nf-step" key={step.t}>
              <span className="nf-step-num">{i + 1}</span>
              <div>
                <h3>{step.t}</h3>
                <p>{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      )
    case "activities":
      return (
        <div className="aud-activities">
          {block.items.map((act) => (
            <article className={`inc-step ${act.image ? "has-img" : ""}`} key={act.t.en}>
              <div className="inc-step-text">
                <h3>{act.t[lang]}</h3>
                <p className="aud-meta">
                  <strong>🧺 {audienceUi.materials[lang]}:</strong> {act.materials[lang]}
                </p>
                <p className="aud-meta">
                  <strong>⏱️ {audienceUi.time[lang]}:</strong> {act.time[lang]}
                </p>
                <ol className="aud-mini-steps">
                  {act.steps[lang].map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
              {act.image && <Photo name={act.image} alt={act.t[lang]} />}
            </article>
          ))}
        </div>
      )
    case "table":
      return <Table head={block.head[lang]} rows={block.rows[lang]} />
    case "checklist":
      return (
        <ul className="faq-checklist aud-checklist">
          {block.items[lang].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case "quiz":
      return (
        <div className="aud-quiz">
          {block.items.map((item, i) => (
            <details className="aud-quiz-item" key={item.q.en}>
              <summary>
                <span className="aud-quiz-num">{i + 1}</span>
                {item.q[lang]}
                <span className="aud-quiz-cta">{audienceUi.showAnswer[lang]}</span>
              </summary>
              <p>✅ {item.a[lang]}</p>
            </details>
          ))}
        </div>
      )
    default:
      return null
  }
}

export default function AudiencePage({ language }) {
  const lang = language === "hi" ? "hi" : "en"
  const { slug } = useParams()
  const audience = findAudience(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // School children have their own curriculum page, so only guides with sections render here.
  if (!audience?.sections) {
    return (
      <section className="section fm-detail">
        <p className="section-copy">{audienceUi.notFound[lang]}</p>
      </section>
    )
  }

  const { hero } = audience
  const others = audiences.filter((a) => a.slug !== audience.slug)

  return (
    <>
      <section className="section fm-detail">
        <div className="fm-detail-head">
          <div>
            <p className="eyebrow">
              {audience.icon} {hero.eyebrow[lang]}
            </p>
            <h1 className="section-title">{hero.title[lang]}</h1>
            <p className="section-copy">{hero.text[lang]}</p>
          </div>
          <Photo name={hero.image} alt={hero.imageAlt[lang]} className="fm-photo-large" />
        </div>
      </section>

      {audience.sections.map((section, i) => (
        <section className={`section aud-section ${i % 2 === 0 ? "bg-white" : ""}`} key={section.title.en}>
          <div className={section.image ? "aud-with-photo" : ""}>
            <div>
              <h2 className="inc-title">{section.title[lang]}</h2>
              {section.text && <p className="section-copy aud-p">{section.text[lang]}</p>}
              {section.blocks.map((block, j) => (
                <Block block={block} lang={lang} key={j} />
              ))}
            </div>
            {section.image && <Photo name={section.image} alt={section.imageAlt[lang]} className="aud-side-photo" />}
          </div>
        </section>
      ))}

      <section className="section bg-white">
        <h2 className="fm-others-title">{audienceUi.others[lang]}</h2>
        <div className="fm-others">
          {others.map((a) => (
            <Link className="fm-other" to={`/for/${a.slug}`} key={a.slug}>
              <span aria-hidden="true">{a.icon}</span>
              {a.menuLabel[lang]}
            </Link>
          ))}
          <Link className="fm-other" to="/natural-farming">
            <span aria-hidden="true">🌱</span>
            {lang === "hi" ? "प्राकृतिक खेती क्या है?" : "What is natural farming?"}
          </Link>
        </div>
      </section>
    </>
  )
}
