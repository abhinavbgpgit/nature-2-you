import { PageHero, SectionIntro } from "./pageShared"

export default function CommunityPage({ language }) {
  const hi = language === "hi"
  return (
    <>
      <PageHero
        eyebrow={hi ? "समुदाय" : "Community"}
        title={hi ? "मिट्टी के लिए साथ आएं।" : "Come together for living soil."}
        text={hi ? "किसान, युवा, स्वयंसेवक और निवेशक इस आंदोलन का हिस्सा बन सकते हैं।" : "Farmers, youth, volunteers, and investors can all be part of this movement."}
        image="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="section plantation">
        <div className="max-w-4xl">
          <p className="eyebrow light">{hi ? "वृक्षारोपण मिशन" : "Plantation mission"}</p>
          <h2 className="section-title text-white">{hi ? "हर खेत में पेड़।" : "Trees in every farm."}</h2>
          <p className="section-copy text-light">{hi ? "पेड़ छाया, पक्षी, मिट्टी सुरक्षा, वर्षा चक्र और कार्बन कमी के लिए आवश्यक हैं।" : "Trees support shade, birds, soil protection, rainfall cycles, and carbon reduction."}</p>
        </div>
      </section>
      <section className="section community-section">
        <div className="community-panel">
          <SectionIntro
            eyebrow={hi ? "संपर्क" : "Connect"}
            title={hi ? "आज ही जुड़ना शुरू करें।" : "Start participating today."}
          />
          <div className="community-actions">
            <a href="https://wa.me/" target="_blank" rel="noreferrer">{hi ? "व्हाट्सऐप से जुड़ें" : "Join on WhatsApp"}</a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">{hi ? "यूट्यूब वीडियो" : "Watch YouTube"}</a>
            <a href="mailto:hello@naturalfarming.in">{hi ? "निवेशक संपर्क" : "Investor Contact"}</a>
          </div>
        </div>
      </section>
    </>
  )
}
