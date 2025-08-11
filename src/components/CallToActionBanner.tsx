export default function CallToActionBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-20 text-center text-white"
      style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
    >
      <div className="bg-[#4B2E2E]/80 py-16 px-6 rounded max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-6">
          Own a Piece of Mysuru’s Legacy
        </h2>
        <button className="px-8 py-4 bg-[#FFD166] text-[#4B2E2E] font-semibold rounded shadow hover:bg-yellow-500 transition">
          Book a Viewing
        </button>
      </div>
    </section>
  );
}