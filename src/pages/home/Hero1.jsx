import { Link } from "react-router-dom"
import heroBackground from "../../assets/hero_bg.png"

export default function Hero({ hero }) {
  return (
    <section
      className="flex min-h-screen items-center bg-center bg-cover pt-[74px] px-5 pb-5 lg:px-10 lg:pb-[78px]"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 42%), url("${heroBackground}")`,
      }}
    >
      <div className="relative z-[1] max-w-[1000px] text-white">
        <p className="inline-flex mb-[22px] ml-10 border border-white/[.34] rounded-full bg-white/10 px-4 py-[10px] text-[0.76rem] font-bold tracking-[0.16em] uppercase">
          {hero.badge}
        </p>
        <h1 className="m-0 max-w-[700px] ml-10 text-[clamp(1rem,4.5vw,4rem)] font-black leading-[0.96]">
          {hero.title}
        </h1>
        <p className="max-w-[500px] mt-[25px] mb-0 ml-10 text-[#e2f1df] text-[clamp(0.9rem,1.2vw,1.05rem)] leading-[1.7]">
          {hero.text}
        </p>
        <div className="flex flex-wrap gap-3 mt-8 ml-10">
          <Link className="primary-btn" to="/natural-farming">
            {hero.learn}
          </Link>
          <Link className="secondary-btn" to="/farming-model">
            {hero.explore}
          </Link>
        </div>
      </div>
    </section>
  )
}
