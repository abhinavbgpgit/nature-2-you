import { useMemo, useState } from "react"
import { data, pick } from "./pageData"
import { PageHero } from "./pageShared"

export default function VideosPage({ language }) {
  const hi = language === "hi"
  const [category, setCategory] = useState("All")
  const [search, setSearch] = useState("")
  const categories = ["All", ...new Set(data.videos.map((video) => video.category[0]))]
  const filtered = useMemo(
    () =>
      data.videos.filter((video) => {
        const languageIndex = hi ? 1 : 0
        const matchesCategory = category === "All" || video.category[0] === category
        const matchesSearch = `${video.title[languageIndex]} ${video.desc[languageIndex]}`
          .toLowerCase()
          .includes(search.toLowerCase())
        return matchesCategory && matchesSearch
      }),
    [category, search, hi],
  )
  return (
    <>
      <PageHero
        eyebrow={hi ? "वीडियो गैलरी" : "Video gallery"}
        title={hi ? "देखें। सीखें। अपने खेत में अपनाएं।" : "Watch. Learn. Apply on your field."}
        text={
          hi
            ? "सरकारी मार्गदर्शन, किसान अनुभव, प्रशिक्षण और रिसर्च वीडियो।"
            : "Government guidance, farmer experience, training, and research videos."
        }
        image="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=2200&q=80"
      />
      <section className="section video-page">
        <div className="filter-bar">
          <div className="category-tabs">
            {categories.map((item) => (
              <button className={category === item ? "chosen" : ""} onClick={() => setCategory(item)} key={item}>
                {item === "All" ? (hi ? "सभी" : "All") : pick(language, item, data.videos.find((video) => video.category[0] === item).category[1])}
              </button>
            ))}
          </div>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder={hi ? "वीडियो खोजें" : "Search videos"}
            aria-label={hi ? "वीडियो खोजें" : "Search videos"}
          />
        </div>
        <div className="video-rail page-grid">
          {filtered.map((video) => (
            <article className="video-card" key={video.title[0]}>
              <div className="video-thumb"><span>{pick(language, ...video.category)}</span></div>
              <h3>{pick(language, ...video.title)}</h3>
              <p>{pick(language, ...video.desc)}</p>
              <button>{hi ? "देखें" : "Watch"}</button>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="empty-state">{hi ? "कोई वीडियो नहीं मिला।" : "No videos found."}</p>
        )}
      </section>
    </>
  )
}
