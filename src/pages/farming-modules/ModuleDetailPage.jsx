import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { detailHeadings, detailUi, findModule, modules, modulesIntro } from "./modulesData"
import { ModulePhoto } from "./ModuleCards"

// Order of the six sections on every module page.
const SECTION_ORDER = ["cost", "space", "daily", "farmLink", "income", "risks"]

// `cost`, `space` and `income` have a headline value plus points; the rest are plain lists.
function sectionPoints(section, lang) {
  return Array.isArray(section[lang]) ? section[lang] : section.points[lang]
}

export default function ModuleDetailPage({ language }) {
  const lang = language === "hi" ? "hi" : "en"
  const { slug } = useParams()
  const module = findModule(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Tutorial-style modules (e.g. the incubator) have their own page and no `detail`.
  if (!module?.detail) {
    return (
      <section className="section fm-detail">
        <p className="section-copy">{detailUi.notFound[lang]}</p>
        <Link className="fm-back" to="/farming-model#modules">
          {detailUi.back[lang]}
        </Link>
      </section>
    )
  }

  const { detail } = module
  const others = modules.filter((m) => m.slug !== module.slug)

  return (
    <>
      <section className="section fm-detail">
        <Link className="fm-back" to="/farming-model#modules">
          {detailUi.back[lang]}
        </Link>
        <div className="fm-detail-head">
          <div>
            <p className="eyebrow">{modulesIntro.eyebrow[lang]}</p>
            <h1 className="section-title">
              <span aria-hidden="true">{module.icon}</span> {module.title[lang]}
            </h1>
            <p className="section-copy">{module.summary[lang]}</p>
            <dl className="fm-card-facts fm-detail-facts">
              <div>
                <dt>{modulesIntro.linkLabel[lang]}</dt>
                <dd>{module.link[lang]}</dd>
              </div>
              <div>
                <dt>{modulesIntro.incomeLabel[lang]}</dt>
                <dd>{module.incomeType[lang]}</dd>
              </div>
            </dl>
          </div>
          <ModulePhoto slug={module.slug} alt={module.title[lang]} className="fm-photo-large" />
        </div>

        {/* Quick summary of the three headline numbers */}
        <div className="fm-quick">
          {["cost", "space", "income"].map((key) => (
            <a className="fm-quick-item" href={`#${key}`} key={key}>
              <span aria-hidden="true">{detailHeadings[key].icon}</span>
              <small>{detailHeadings[key][lang]}</small>
              <strong>{detail[key].value[lang]}</strong>
            </a>
          ))}
        </div>

        <div className="fm-sections">
          {SECTION_ORDER.map((key) => (
            <article className="fm-section" id={key} key={key}>
              <h2>
                <span aria-hidden="true">{detailHeadings[key].icon}</span> {detailHeadings[key][lang]}
              </h2>
              {detail[key].value && <p className="fm-section-value">{detail[key].value[lang]}</p>}
              <ul className="fm-list">
                {sectionPoints(detail[key], lang).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="fm-note">{detailUi.estimate[lang]}</p>
      </section>

      <section className="section bg-white">
        <h2 className="fm-others-title">{detailUi.others[lang]}</h2>
        <div className="fm-others">
          {others.map((m) => (
            <Link className="fm-other" to={`/farming-model/${m.slug}`} key={m.slug}>
              <span aria-hidden="true">{m.icon}</span>
              {m.title[lang]}
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
