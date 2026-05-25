import { data, pick } from "./pageData"
import { PageHero, SectionIntro } from "./pageShared"

export default function FarmingModelPage({ language }) {
  const hi = language === "hi"
  return (
    <>
      <PageHero
        eyebrow={hi ? "खेती मॉडल" : "Farming model"}
        title={hi ? "बेहतर मिट्टी से बेहतर बाजार तक।" : "From better soil to better markets."}
        text={
          hi
            ? "किसानों और निवेशकों के लिए आय, लागत और लंबे समय के मूल्य को समझाने वाला मॉडल।"
            : "A model for farmers and investors to understand income, costs, and long-term value."
        }
        image="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="section">
        <SectionIntro
          eyebrow={hi ? "लागत तुलना" : "Cost comparison"}
          title={hi ? "इनपुट कम करें, मिट्टी का मूल्य बढ़ाएं।" : "Lower outside inputs. Increase soil value."}
        />
        <div className="comparison">
          <div>
            <h3>{hi ? "रासायनिक खेती" : "Chemical Farming"}</h3>
            <p>{hi ? "अधिक इनपुट खर्च, मिट्टी की थकान और बाजार भरोसे की चुनौती।" : "High input cost, soil fatigue, and market trust challenges."}</p>
          </div>
          <div>
            <h3>{hi ? "प्राकृतिक खेती" : "Natural Farming"}</h3>
            <p>{hi ? "कम खर्च, बेहतर मिट्टी और रसायन-मुक्त प्रीमियम ब्रांडिंग।" : "Lower cost, improving soil, and premium chemical-free branding."}</p>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <SectionIntro
          eyebrow={hi ? "बहु-आय मॉडल" : "Multiple income model"}
          title={hi ? "एक खेत, आय के कई अवसर।" : "One farm, multiple income opportunities."}
        />
        <div className="income-wide">
          {data.streams.map(([en, hindi]) => (
            <span key={en}>{pick(language, en, hindi)}</span>
          ))}
        </div>
      </section>
      <section className="section investor-band">
        <div className="split-layout">
          <SectionIntro
            eyebrow={hi ? "निवेशक के लिए" : "For investors"}
            title={hi ? "दीर्घकालिक कृषि मूल्य।" : "Long-term agricultural value."}
          />
          <div className="bullet-panel">
            {(hi
              ? ["टिकाऊ कृषि और जोखिम में कमी", "विश्वसनीय रसायन-मुक्त ब्रांड", "प्रीमियम और निर्यात बाजार संभावना", "मिट्टी की उर्वरता का दीर्घकालिक लाभ"]
              : ["Sustainable agriculture with reduced input risk", "A credible chemical-free brand", "Premium and export market potential", "Long-term soil fertility value"]
            ).map((point) => <p key={point}>{point}</p>)}
          </div>
        </div>
      </section>
    </>
  )
}
