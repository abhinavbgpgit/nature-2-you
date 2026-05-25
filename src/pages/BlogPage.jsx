import { data, pick } from "./pageData"
import { PageHero, SectionIntro } from "./pageShared"

export default function BlogPage({ language }) {
  const hi = language === "hi"
  return (
    <>
      <PageHero
        eyebrow={hi ? "ज्ञान केंद्र" : "Knowledge hub"}
        title={hi ? "खेती का ज्ञान, सरल भाषा में।" : "Farming knowledge in plain language."}
        text={hi ? "विज्ञान, खेती टिप्स, पर्यावरण और स्वस्थ भोजन पर उपयोगी लेख।" : "Useful reading on science, farming tips, environment, and healthy food."}
        image="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="section bg-white">
        <SectionIntro
          eyebrow={hi ? "नए लेख" : "Latest reading"}
          title={hi ? "खेत और जीवन के लिए विचार।" : "Ideas for the farm and everyday life."}
        />
        <div className="blog-grid">
          {data.articles.map(([categoryEn, categoryHi, titleEn, titleHi]) => (
            <article className="blog-card" key={titleEn}>
              <div className="blog-image" />
              <p>{pick(language, categoryEn, categoryHi)}</p>
              <h3>{pick(language, titleEn, titleHi)}</h3>
              <button className="text-link">{hi ? "पूरा लेख पढ़ें" : "Read article"} →</button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
