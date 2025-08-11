export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl font-serif font-bold mb-4 text-[#4B2E2E]">About HOME</h2>
        <p className="text-lg leading-relaxed text-[#4B2E2E]">
          We curate Mysuru's finest heritage and luxury estates, blending royal-era charm with modern comforts.
          Our team brings deep local expertise and a passion for preservation to every listing and client journey.
        </p>
      </div>
      <div className="rounded overflow-hidden shadow">
        <img src="/images/hero-drone.jpg" alt="Mysuru Estates" className="w-full h-72 object-cover" />
      </div>
    </section>
  )
}