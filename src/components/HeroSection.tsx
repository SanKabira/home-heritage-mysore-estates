export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh]"
      style={{ backgroundImage: "url('/images/hero-drone.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#4B2E2E]/60 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
          Discover the Timeless Charm of Mysuru’s Estates
        </h1>
        <p className="max-w-xl text-lg md:text-2xl mb-8">
          Exclusive heritage properties, weekly insights, and investment opportunities.
        </p>
        <div className="flex space-x-4">
          <a href="#listings" className="bg-[#FFD166] text-[#4B2E2E] font-semibold px-6 py-3 rounded shadow hover:bg-yellow-500 transition">
            Browse Estates
          </a>
          <a href="/newspaper/latest.pdf" target="_blank" rel="noopener noreferrer" className="border border-[#FFD166] text-[#FFD166] px-6 py-3 rounded hover:bg-[#FFD166] hover:text-[#4B2E2E] transition">
            Read Latest Newspaper
          </a>
        </div>
      </div>
    </section>
  );
}