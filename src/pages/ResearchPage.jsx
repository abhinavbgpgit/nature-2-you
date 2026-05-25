import { PageHero, SectionIntro } from "./pageShared"

export default function ResearchPage({ language }) {
  const hi = language === "hi"
  const areas = hi
    ? ["मिट्टी स्वास्थ्य डेटा", "पानी रोकने के अध्ययन", "रासायनिक खेती का प्रभाव", "पोषण तुलना"]
    : ["Soil health data", "Water retention studies", "Chemical farming impact", "Nutrition comparison"]
  return (
    <>
      <PageHero
        eyebrow={hi ? "वैज्ञानिक रिसर्च" : "Scientific research"}
        title={hi ? "कहानियों के साथ प्रमाण भी।" : "Evidence alongside stories."}
        text={hi ? "प्राकृतिक खेती से जुड़े अध्ययनों को सरल चार्ट और सारांश में समझें।" : "Understand natural farming studies through clear summaries and visual data."}
        image="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="section research-band">
        <SectionIntro
          eyebrow={hi ? "अध्ययन क्षेत्र" : "Study areas"}
          title={hi ? "भरोसा बनाने वाला डेटा।" : "Data that builds confidence."}
        />
        <div className="research-list research-page-list">
          {areas.map((item, index) => (
            <div key={item}><span style={{ width: `${42 + index * 14}%` }} />{item}</div>
          ))}
        </div>
      </section>
      <section className="section evidence-cards">
        {[
          [hi ? "मिट्टी" : "Soil", hi ? "जैविक गतिविधि और उर्वरता को समझें।" : "Understand biological activity and fertility."],
          [hi ? "पानी" : "Water", hi ? "नमी संरक्षण और सिंचाई दक्षता देखें।" : "Study moisture retention and irrigation efficiency."],
          [hi ? "पोषण" : "Nutrition", hi ? "फसल गुणवत्ता की तुलना पढ़ें।" : "Read crop quality comparisons."],
        ].map(([title, text]) => (
          <article key={title}><h3>{title}</h3><p>{text}</p></article>
        ))}
      </section>
    </>
  )
}
