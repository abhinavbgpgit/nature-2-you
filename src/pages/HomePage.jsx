import { useState } from "react"
import { Link } from "react-router-dom"
import biodiversityImage from "../assets/Biodiversity.png"
import buildSoilFertilityImage from "../assets/build_soil_fertility.png"
import doNotHarmImage from "../assets/do_not_harm.png"
import naturalCyclesImage from "../assets/Natural_Cycles.png"
import outsideInputsImage from "../assets/outside_inputs.png"
import heroBackground from "../assets/hero_bg.png"
import { homeContent } from "./homeContent"

export default function HomePage({ language }) {
  const { hero, principles } = homeContent[language] ?? homeContent.en
  const [activePrinciple, setActivePrinciple] = useState(null)
  const doNoHarm = principles.items[0]
  const buildSoilFertility = principles.items[1]
  const biodiversity = principles.items[2]
  const naturalCycles = principles.items[3]
  const outsideInputs = principles.items[4]
  const remainingPrinciples = principles.items.slice(5)

  return (
    <>
      <section
        className="home-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(17,44,25,0.92), rgba(17,44,25,0.52), rgba(17,44,25,0.12)), url("${heroBackground}")`,
        }}
      >
        <div className="home-copy">
          <p className="hero-badge">{hero.badge}</p>
          <h1>{hero.title}</h1>
          <p>{hero.text}</p>
          <div className="hero-actions">
            <Link className="primary-btn" to="/natural-farming">
              {hero.learn}
            </Link>
            <Link className="secondary-btn" to="/farming-model">
              {hero.explore}
            </Link>
          </div>
        </div>
      </section>
      <section className="principles-showcase" aria-labelledby="principles-title">
        <div className="principles-shell">
          <header className="principles-intro">
            <p className="eyebrow">{principles.eyebrow}</p>
            <h2 className="principles-title" id="principles-title">{principles.title}</h2>
            <p className="principles-lead">{principles.intro}</p>
          </header>
          <PrincipleFeature
            item={doNoHarm}
            image={doNotHarmImage}
            imageAlt={language === "hi" ? "प्राकृतिक खेती और सुरक्षित मिट्टी" : "Natural farming and protected soil"}
          />
          <PrincipleFeature
            item={buildSoilFertility}
            image={buildSoilFertilityImage}
            imageAlt={language === "hi" ? "उर्वर मिट्टी में बढ़ता पौधा" : "A plant growing in fertile soil"}
            mediaRight
          />
          <PrincipleFeature
            item={biodiversity}
            image={biodiversityImage}
            imageAlt={language === "hi" ? "जैव विविधता से भरा प्राकृतिक खेत" : "A natural farm rich in biodiversity"}
          />
          <PrincipleFeature
            item={naturalCycles}
            image={naturalCyclesImage}
            imageAlt={language === "hi" ? "प्राकृतिक खेती में पोषण चक्र" : "The nutrient cycle in natural farming"}
            mediaRight
          />
          <PrincipleFeature
            item={outsideInputs}
            image={outsideInputsImage}
            imageAlt={language === "hi" ? "खेत के बाहरी संसाधनों को कम करना" : "Minimizing outside inputs in natural farming"}
          />
          <div className="principles-list">
            {remainingPrinciples.map((item, index) => {
              const isOpen = activePrinciple === index
              const panelId = `principle-panel-${item.number}`

              return (
                <article className={`principle-row ${isOpen ? "open" : ""}`} key={item.number}>
                  <button
                    className="principle-toggle"
                    type="button"
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    onClick={() => setActivePrinciple(isOpen ? null : index)}
                  >
                    <span className="principle-index">{item.number}</span>
                    <span className="principle-heading">
                      <strong>
                        {item.title}
                        {item.altTitle && <small>{item.altTitle}</small>}
                      </strong>
                      <span>{item.summary}</span>
                    </span>
                    <span className="principle-action" aria-hidden="true">{isOpen ? "\u2212" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className="principle-body" id={panelId}>
                      {item.highlight && (
                        <aside className="principle-insight">
                          <strong>{item.highlight.title}</strong>
                          <p>{item.highlight.text}</p>
                        </aside>
                      )}
                      <div className={`principle-groups ${item.groups.length === 1 ? "single" : ""}`}>
                        {item.groups.map((group) => (
                          <div className="principle-group" key={group.title}>
                            <h3>{group.title}</h3>
                            <ul>
                              {group.points.map((point) => (
                                <li key={point}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

function renderBold(text) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)
}

function PrincipleFeature({ item, image, imageAlt, mediaRight = false }) {
  return (
    <article className={`principle-feature ${mediaRight ? "media-right" : ""}`}>
      <div className="principle-feature-media">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="principle-feature-content">
        <span className="feature-number">{item.number}</span>
        <h3>
          {item.title}
          {item.altTitle && <small>{item.altTitle}</small>}
        </h3>
        <p className="feature-summary">{renderBold(item.summary)}</p>
        {item.highlight && (
          <aside className="feature-insight">
            <strong>{item.highlight.title}</strong>
            <p>{item.highlight.text}</p>
          </aside>
        )}
        <div className="feature-detail-grid">
          {item.groups.map((group) => (
            <div className="principle-group" key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
