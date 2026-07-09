import { Link } from "react-router-dom"
// import heroBackground from "../../assets/hero_bg.png"
import heroBackground from "../../assets/hero1.png"

const blackOutline = {
  textShadow:
    "0 0 6px rgba(0,0,0,1), 0 0 14px rgba(0,0,0,0.95), 0 0 28px rgba(0,0,0,0.85), 0 0 48px rgba(0,0,0,0.6)",
}

const strongOutline = {
  textShadow:
    "0 0 10px rgba(0,0,0,1), 0 0 22px rgba(0,0,0,0.95), 0 0 40px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)",
}

export default function Hero({ hero }) {
  return (
    <section
      className="flex min-h-[calc(100vh-74px)] mt-[74px] items-center bg-center bg-cover px-5 pb-5 lg:px-10 lg:pb-[78px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 42%), url("${heroBackground}")`,
      }}
    >
      <div className="relative z-[1] max-w-[1000px] text-white animate-[fadeInUp_0.8s_ease_both]">
        <p
          className="inline-flex mb-[22px] ml-10 border border-white/[.34] rounded-full bg-white/10 px-4 py-[10px] text-[0.76rem] font-bold tracking-[0.16em] uppercase animate-[fadeInUp_0.6s_ease_both]"
          style={blackOutline}
        >
          {hero.badge}
        </p>
        <h1
          className="m-0 max-w-[700px] ml-10 text-[clamp(1rem,4.5vw,4rem)] font-black leading-[0.96] animate-[fadeInUp_0.8s_ease_both]"
          style={strongOutline}
        >
          {hero.title}
        </h1>
        <div className="flex flex-wrap gap-3 mt-8 ml-10 animate-[fadeInUp_1s_ease_both]">
          <Link className="primary-btn" to="/natural-farming">
            {hero.learn}
          </Link>
          <Link className="secondary-btn" to="/farming-model">
            {hero.explore}
          </Link>
        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  )
}
