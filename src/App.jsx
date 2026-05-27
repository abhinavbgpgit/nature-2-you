import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import BlogPage from "./pages/BlogPage"
import CommunityPage from "./pages/CommunityPage"
import FarmingModelPage from "./pages/FarmingModelPage"
import HomePage from "./pages/HomePage"
import NaturalFarmingPage from "./pages/NaturalFarmingPage"
import CsrConceptPage from "./pages/CsrConceptPage"
import Model1Page from "./pages/Model1Page"
import ResearchPage from "./pages/ResearchPage"
import VideosPage from "./pages/VideosPage"

function App() {
  const [language, setLanguage] = useState("en")
  return (
    <main className={`site ${language === "hi" ? "hindi-mode" : ""}`} lang={language}>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/natural-farming" element={<NaturalFarmingPage language={language} />} />
        <Route path="/farming-model" element={<FarmingModelPage language={language} />} />
        <Route path="/videos" element={<VideosPage language={language} />} />
        <Route path="/blog" element={<BlogPage language={language} />} />
        <Route path="/research" element={<ResearchPage language={language} />} />
        <Route path="/community" element={<CommunityPage language={language} />} />
        <Route path="/investor/csr-concept" element={<CsrConceptPage language={language} />} />
        <Route path="/investor/model-1" element={<Model1Page />} />
      </Routes>
      <Footer language={language} />
    </main>
  )
}

export default App
