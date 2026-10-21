import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import BlogPage from "./pages/BlogPage"
import CommunityPage from "./pages/CommunityPage"
import FarmingModelPage from "./pages/FarmingModelPage"
import ModuleDetailPage from "./pages/farming-modules/ModuleDetailPage"
import IncubatorPage from "./pages/farming-modules/IncubatorPage"
import AudiencePage from "./pages/audience/AudiencePage"
import SchoolCurriculumPage from "./pages/school-curriculum/SchoolCurriculumPage"
import HomePage from "./pages/home/HomePage"
import NaturalFarmingPage from "./pages/NaturalFarmingPage"
import NaturalFarmingFaqPage from "./pages/NaturalFarmingFaqPage"
import CsrConceptPage from "./pages/CsrConceptPage"
import Model1Page from "./pages/Model1Page"
import ResearchPage from "./pages/ResearchPage"
import VideosPage from "./pages/VideosPage"

function App() {
  const [language, setLanguage] = useState("hi")
  return (
    <main className={`site ${language === "hi" ? "hindi-mode" : ""}`} lang={language}>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/natural-farming" element={<NaturalFarmingPage language={language} />} />
        <Route path="/natural-farming/faq" element={<NaturalFarmingFaqPage language={language} />} />
        <Route path="/farming-model" element={<FarmingModelPage language={language} />} />
        <Route path="/farming-model/jugaad-incubator" element={<IncubatorPage language={language} />} />
        <Route path="/farming-model/:slug" element={<ModuleDetailPage language={language} />} />
        <Route path="/for/school-kids" element={<SchoolCurriculumPage language={language} />} />
        <Route path="/for/:slug" element={<AudiencePage language={language} />} />
        <Route path="/videos"element={<VideosPage language={language} />} />
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
