import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { PageHero } from "./pageShared"
import { faqHero, faqQuestions, faqSections } from "./naturalFarmingFaqData"

function Block({ block, lang }) {
  switch (block.type) {
    case "p":
      return <p className="faq-p">{block[lang]}</p>
    case "label":
      return <p className="faq-label">{block[lang]}</p>
    case "h4":
      return <h3 className="faq-subhead">{block[lang]}</h3>
    case "callout":
      return <p className="faq-callout">{block[lang]}</p>
    case "quote":
      return <blockquote className="faq-quote">{block[lang]}</blockquote>
    case "ul":
      return (
        <ul className="faq-list">
          {block[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case "checklist":
      return (
        <ul className="faq-checklist">
          {block[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )
    case "steps":
      return (
        <div className="faq-steps">
          {block.items[lang].map((step, i) => (
            <div className="faq-step" key={i}>
              <span className="faq-step-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <strong>{step.t}</strong>
                <p>{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      )
    case "table":
      return (
        <div className="faq-table-wrap">
          <table className="faq-table">
            <thead>
              <tr>
                {block.head[lang].map((h, i) => (
                  <th key={i}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows[lang].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

export default function NaturalFarmingFaqPage({ language }) {
  const lang = language === "hi" ? "hi" : "en"
  const hi = lang === "hi"
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    // Wait a frame so the section is in the DOM before scrolling to it.
    const id = hash.slice(1)
    const target = document.getElementById(id)
    if (target) target.scrollIntoView({ behavior: "smooth" })
  }, [hash])

  return (
    <div className="faq-page">
      <PageHero
        eyebrow={faqHero.eyebrow[lang]}
        title={faqHero.title[lang]}
        text={faqHero.text[lang]}
        image={faqHero.image}
      >
        <Link to="/natural-farming" className="csr-outline-btn faq-back">
          {hi ? "← प्राकृतिक खेती पर वापस" : "← Back to Natural farming"}
        </Link>
      </PageHero>

      <section className="section faq-body">
        {/* On-page navigation */}
        <nav className="faq-toc" aria-label={hi ? "प्रश्न सूची" : "Questions"}>
          <Link to="/natural-farming" className="faq-toc-back">
            {hi ? "← प्राकृतिक खेती पर वापस" : "← Back to Natural farming"}
          </Link>
          {faqQuestions.map((q) => (
            <a className="faq-toc-item" href={`#${q.id}`} key={q.id}>
              <span className="faq-toc-num">{q.num}</span>
              <span>{q.question[lang]}</span>
            </a>
          ))}
        </nav>

        <div className="faq-sections">
          {faqSections.map((section) => (
            <article className="faq-section" id={section.id} key={section.id}>
              <header className="faq-section-head">
                <span className="faq-section-num">{section.num}</span>
                <h2>{section.title[lang]}</h2>
              </header>
              <div className="faq-section-body">
                {section.blocks.map((block, i) => (
                  <Block block={block} lang={lang} key={i} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
