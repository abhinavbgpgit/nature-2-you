import { useState } from "react"
import { Link } from "react-router-dom"
import { /* PageHero, */ SectionIntro } from "./pageShared"
import { faqQuestions } from "./naturalFarmingFaqData"
import { nfContent } from "./naturalFarmingContent"
import { nfImages, benefitImages, ecosystemImages, principleImages } from "./naturalFarmingImages"

// Photo with a small credit line; `description` doubles as the alt text.
function Photo({ image, description, className = "" }) {
  const { src, credit, source } = nfImages[image]
  return (
    <figure className={`nf-photo ${className}`}>
      <img src={src} alt={description} loading="lazy" />
      {credit && (
        <figcaption>
          <a href={source} target="_blank" rel="noreferrer">
            📷 {credit}
          </a>
        </figcaption>
      )}
    </figure>
  )
}

function ReadMoreButton({ open, onClick, more, less }) {
  return (
    <button type="button" className="nf-read-more" aria-expanded={open} onClick={onClick}>
      {open ? less : more}
      <span aria-hidden="true">{open ? "↑" : "↓"}</span>
    </button>
  )
}

// Keeps track of which items in a list are expanded.
function useOpenSet() {
  const [open, setOpen] = useState(() => new Set())
  const toggle = (key) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(key) ? next.delete(key) : next.add(key)
      return next
    })
  return [open, toggle]
}

const pad = (n) => String(n).padStart(2, "0")

// Renders "**bold** rest" text: parts wrapped in ** become <strong>.
const withBold = (text) =>
  text.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : part))

export default function NaturalFarmingPage({ language }) {
  const hi = language === "hi"
  const c = nfContent[hi ? "hi" : "en"]
  const [openBenefits, toggleBenefit] = useOpenSet()
  const [openPrinciples, togglePrinciple] = useOpenSet()
  const [openSteps, toggleStep] = useOpenSet()

  return (
    <div className="nf-page">
      {/* Hero hidden for now — uncomment to bring back the background-image banner.
      <PageHero
        eyebrow={hi ? "प्राकृतिक खेती" : "Natural farming"}
        title={hi ? "प्राकृतिक खेती क्या है ?" : "Bringing the soil back to life."}
        text={
          hi
            ? "मिट्टी, पानी और परिवार की सेहत को केंद्र में रखने वाली कम लागत की खेती। नीचे स्क्रॉल करें और विस्तार से जानें।"
            : "A low-input way of farming that puts soil, water, and family health at the center. Scroll down to explore it in detail."
        }
        image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2200&q=80"
      />
      */}

      {/* What is natural farming — nf-first adds room for the fixed header now that the hero is hidden */}
      <section className="section bg-white nf-first">
        <SectionIntro eyebrow={c.intro.eyebrow} title={c.intro.title} />
        <div className="nf-intro">
          <div>
            <div className="nf-more-text">
              {c.intro.paras.map((p) => (
                <p key={p}>{withBold(p)}</p>
              ))}
            </div>
          </div>
          <Photo image="whatIs" description={c.intro.photo} className="nf-photo-tall" />
        </div>
      </section>

      {/* Benefits */}
      <section className="section">
        <SectionIntro eyebrow={c.benefits.eyebrow} title={c.benefits.title} text={c.benefits.text} />
        <div className="feature-grid">
          {c.benefits.items.map((item, index) => {
            const open = openBenefits.has(index)
            return (
              <article className="feature-card nf-benefit-card" key={item.title}>
                <Photo image={benefitImages[index]} description={item.photo} />
                <span className="feature-number">{pad(index + 1)}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                {open && (
                  <ul className="nf-list">
                    {item.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                )}
                <ReadMoreButton
                  open={open}
                  onClick={() => toggleBenefit(index)}
                  more={c.readMore}
                  less={c.readLess}
                />
              </article>
            )
          })}
        </div>
      </section>

      {/* Ecosystem flow */}
      <section className="section bg-white">
        <SectionIntro eyebrow={c.ecosystem.eyebrow} title={c.ecosystem.title} text={c.ecosystem.text} />
        <ol className="nf-flow">
          {c.ecosystem.steps.map((step, index) => (
            <li className="nf-flow-step" key={step.title}>
              <Photo image={ecosystemImages[index]} description={step.photo} className="nf-photo-small" />
              <span className="feature-number">{pad(index + 1)}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Core principles */}
      <section className="section principles-band">
        <SectionIntro eyebrow={c.principles.eyebrow} title={c.principles.title} text={c.principles.text} />
        <div className="nf-principles">
          {c.principles.items.map((item, index) => {
            const open = openPrinciples.has(index)
            return (
              <article className="nf-principle" key={item.title}>
                <Photo image={principleImages[index]} description={item.photo} className="nf-principle-photo" />
                <div className="nf-principle-body">
                  <span className="feature-number">{pad(index + 1)}</span>
                  <h3>
                    {item.title} <small>{item.tag}</small>
                  </h3>
                  <p>{item.summary}</p>
                  {open && (
                    <div className="nf-principle-more">
                      <h4>{c.principles.howLabel}</h4>
                      <ol className="nf-list nf-list-numbered">
                        {item.how.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ol>
                      <p className="nf-why">{item.why}</p>
                    </div>
                  )}
                  <ReadMoreButton
                    open={open}
                    onClick={() => togglePrinciple(index)}
                    more={c.principles.readMore}
                    less={c.principles.readLess}
                  />
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* Chemical vs natural */}
      <section className="section bg-white">
        <SectionIntro eyebrow={c.compare.eyebrow} title={c.compare.title} text={c.compare.text} />
        <div className="nf-table-wrap">
          <table className="nf-table">
            <thead>
              <tr>
                {c.compare.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.compare.rows.map(([aspect, chem, nat]) => (
                <tr key={aspect}>
                  <th scope="row">{aspect}</th>
                  <td>{chem}</td>
                  <td className="nf-good">{nat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Getting started */}
      <section className="section">
        <SectionIntro eyebrow={c.start.eyebrow} title={c.start.title} text={c.start.text} />
        <div className="nf-intro">
          <div>
            <ol className="nf-steps">
              {c.start.steps.map((step, index) => {
                const open = openSteps.has(index)
                return (
                  <li className="nf-step" key={step.title}>
                    <span className="nf-step-num">{index + 1}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                      {open && <p className="nf-step-more">{step.more}</p>}
                      <ReadMoreButton
                        open={open}
                        onClick={() => toggleStep(index)}
                        more={c.start.readMore}
                        less={c.start.readLess}
                      />
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
          <Photo image="start" description={c.start.photo} className="nf-photo-tall" />
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="section bg-white faq-teaser">
        <SectionIntro eyebrow={c.faq.eyebrow} title={c.faq.title} text={c.faq.text} />
        <div className="faq-teaser-grid">
          {faqQuestions.map((q) => (
            <Link className="faq-teaser-card" to={`/natural-farming/faq#${q.id}`} key={q.id}>
              <span className="faq-teaser-num">{q.num}</span>
              <h3>{hi ? q.question.hi : q.question.en}</h3>
              <span className="faq-teaser-cta">{c.faq.cta}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
