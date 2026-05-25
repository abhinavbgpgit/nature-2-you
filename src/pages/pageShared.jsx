export function PageHero({ eyebrow, title, text, image, children }) {
  return (
    <section className="page-hero" style={{ "--hero-image": `url("${image}")` }}>
      <div className="page-hero-copy">
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
        {children}
      </div>
    </section>
  )
}

export function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {text && <p className="section-copy">{text}</p>}
    </div>
  )
}
