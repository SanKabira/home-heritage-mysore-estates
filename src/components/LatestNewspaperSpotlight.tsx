import Link from 'next/link';

export default function LatestNewspaperSpotlight() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white text-[#4B2E2E]">
      <h2 className="text-3xl font-serif font-bold mb-6 text-center">
        This Week in HOME Heritage
      </h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-10">
        <img
          src="/images/newspaper-frontpage.jpg"
          alt="Latest Newspaper Front Page"
          className="w-full md:w-1/3 rounded shadow-lg mb-6 md:mb-0"
        />
        <div className="md:flex-1 text-lg leading-relaxed">
          <p className="mb-4">
            <strong>Market Watch:</strong> Mysuru’s luxury segment sees a 12% rise in heritage estate valuations.
          </p>
          <p className="mb-4">
            <strong>Feature Estate:</strong> A 1920s Wadiyar-era bungalow restored with contemporary interiors.
          </p>
          <p>
            <strong>Investment Insight:</strong> How heritage zoning boosts long-term capital growth.
          </p>
          <Link href="/newspaper/latest.pdf">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-6 py-3 bg-[#FFD166] text-[#4B2E2E] font-semibold rounded shadow hover:bg-yellow-500 transition"
            >
              Read Now
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}