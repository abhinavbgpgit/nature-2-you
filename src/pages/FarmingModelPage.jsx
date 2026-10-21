import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PageHero, SectionIntro } from "./pageShared"
import ModuleCards from "./farming-modules/ModuleCards"

export default function FarmingModelPage({ language }) {
  const hi = language === "hi"
  const { hash } = useLocation()

  // "← All modules" links back to #modules; scroll there once the page renders.
  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" })
  }, [hash])

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
    
      <ModuleCards language={language} />
      
    </>
  )
}
