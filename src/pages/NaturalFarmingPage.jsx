import { Link } from "react-router-dom"
import { data, pick } from "./pageData"
import { PageHero, SectionIntro } from "./pageShared"
import { faqQuestions } from "./naturalFarmingFaqData"

export default function NaturalFarmingPage({ language }) {
  const hi = language === "hi"
  return (
    <>
      <PageHero
        eyebrow={hi ? "प्राकृतिक खेती" : "Natural farming"}
        title={hi ? "प्राकृतिक खेती क्या है ?" : "Bringing the soil back to life."}
        text={
          hi
            ? "नीचे स्क्रॉल करें और देखें ।"
            : "A low-input way of farming that puts soil, water, and family health at the center."
        }
        image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="section">
        <SectionIntro
          eyebrow={hi ? "फायदे" : "Benefits"}
          title={hi ? "खेती जो खेत को थकाती नहीं, सुधारती है।" : "Farming that improves the field instead of exhausting it."}
        />
        <div className="feature-grid">
          {data.benefits.map(([enTitle, hiTitle, enText, hiText], index) => (
            <article className="feature-card" key={enTitle}>
              <span className="feature-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pick(language, enTitle, hiTitle)}</h3>
              <p>{pick(language, enText, hiText)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="split-layout">
          <SectionIntro
            eyebrow={hi ? "इकोसिस्टम प्रवाह" : "Ecosystem flow"}
            title={hi ? "गाय से स्वस्थ धरती तक।" : "From native cow to healthy earth."}
            text={
              hi
                ? "ये सभी चरण एक चक्रीय और स्थानीय कृषि प्रणाली बनाते हैं।"
                : "Each stage supports a circular and locally resilient farming system."
            }
          />
          <div className="ecosystem">
            {data.ecosystem.map(([en, hindi]) => (
              <div className="eco-node" key={en}>{pick(language, en, hindi)}</div>
            ))}
          </div>
        </div>
      </section>
      <section className="section principles-band">
        <SectionIntro
          eyebrow={hi ? "मुख्य सिद्धांत" : "Core principles"}
          title={hi ? "शुरुआत के छह आधार।" : "Six foundations to begin with."}
        />
        <div className="principles-grid">
          {data.principles.map(([en, hindi]) => (
            <div className="principle-pill" key={en}>{pick(language, en, hindi)}</div>
          ))}
        </div>
      </section>
      <section className="section bg-white faq-teaser">
        <SectionIntro
          eyebrow={hi ? "सामान्य प्रश्न" : "Common questions"}
          title={hi ? "आपके मन में जो सवाल हैं?" : "The questions on your mind?"}
          text={
            hi
              ? "किसी भी सवाल पर क्लिक करें और विस्तार से जवाब पढ़ें।"
              : "Tap any question to read a detailed answer."
          }
        />
        <div className="faq-teaser-grid">
          {faqQuestions.map((q) => (
            <Link
              className="faq-teaser-card"
              to={`/natural-farming/faq#${q.id}`}
              key={q.id}
            >
              <span className="faq-teaser-num">{q.num}</span>
              <h3>{hi ? q.question.hi : q.question.en}</h3>
              <span className="faq-teaser-cta">
                {hi ? "जवाब देखें →" : "See answer →"}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
