import { Link } from "react-router-dom"
import { SectionIntro } from "../pageShared"
import { modules, modulesIntro } from "./modulesData"
import { moduleImages } from "./moduleImages"

// Photo with a small credit line, shared by the cards and the module pages.
export function ModulePhoto({ slug, alt, className = "" }) {
  const image = moduleImages[slug]
  if (!image) return <div className={`fm-photo fm-photo-empty ${className}`} aria-hidden="true" />
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

export function ModuleCard({ module, lang }) {
  return (
    <article className="fm-card">
      <ModulePhoto slug={module.slug} alt={module.title[lang]} />
      <div className="fm-card-body">
        <h3>
          <span aria-hidden="true">{module.icon}</span> {module.title[lang]}
        </h3>
        <p>{module.summary[lang]}</p>
        <dl className="fm-card-facts">
          <div>
            <dt>{modulesIntro.linkLabel[lang]}</dt>
            <dd>{module.link[lang]}</dd>
          </div>
          <div>
            <dt>{modulesIntro.incomeLabel[lang]}</dt>
            <dd>{module.incomeType[lang]}</dd>
          </div>
        </dl>
        <Link className="fm-card-cta" to={`/farming-model/${module.slug}`}>
          {modulesIntro.cta[lang]}
        </Link>
      </div>
    </article>
  )
}

export default function ModuleCards({ language }) {
  const lang = language === "hi" ? "hi" : "en"
  return (
    <section className="section bg-white" id="modules">
      <SectionIntro
        eyebrow={modulesIntro.eyebrow[lang]}
        title={modulesIntro.title[lang]}
        text={modulesIntro.text[lang]}
      />
      <div className="fm-grid">
        {modules.map((module) => (
          <ModuleCard module={module} lang={lang} key={module.slug} />
        ))}
      </div>
    </section>
  )
}
