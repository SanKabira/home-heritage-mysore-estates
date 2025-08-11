import Link from 'next/link';

export default function MarketInsights() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-[#E5E5E5] text-[#4B2E2E]">
      <h2 className="text-3xl font-serif font-bold mb-10 text-center">
        Mysuru Real Estate Trends – August 2025 Snapshot
      </h2>
      <div className="flex flex-col md:flex-row items-center md:justify-around space-y-8 md:space-y-0">
        {/* Mini infographic */}
        <ul className="list-disc list-inside text-lg max-w-md space-y-3">
          <li>Heritage property prices: <strong>↑ 12% YoY</strong></li>
          <li>Avg. premium estate size: <strong>5,200 sq. ft.</strong></li>
          <li>Investor share: <strong>40% domestic</strong>, <strong>25% NRI</strong></li>
          <li>Hotspots: Lakshmipuram, Chamundi Foothills, Jayalakshmipuram</li>
        </ul>
        {/* Text and CTA */}
        <div className="max-w-md text-lg leading-relaxed">
          <p>
            Our Insights Team combines heritage market data with modern analytics to guide buyers and investors. 
            From price trajectories to zoning updates, our weekly reports keep you ahead.
          </p>
          <Link href="/insights" className="inline-block mt-6 px-6 py-3 bg-[#FFD166] text-[#4B2E2E] font-semibold rounded shadow hover:bg-yellow-500 transition">
            View Full Insights
          </Link>
        </div>
      </div>
    </section>
  );
}