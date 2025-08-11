type Listing = {
  id: string;
  name: string;
  description: string;
};

const listings: Listing[] = [
  {
    id: '1',
    name: 'Rajendra Vilas Palace Estate',
    description:
      'Perched on Chamundi Hill with panoramic city views; 6 acres, manicured gardens, marble halls.',
  },
  {
    id: '2',
    name: 'The Jasmine Courtyard',
    description:
      'Restored 1935 courtyard home with teak interiors, antique flooring, and private lotus pond.',
  },
  {
    id: '3',
    name: 'Goldleaf Manor',
    description:
      'Modern luxury villa inspired by Wadiyar architecture; features infinity pool & heritage façade.',
  },
];

export default function FeaturedListings() {
  return (
    <section id="listings" className="max-w-6xl mx-auto px-6 py-16 bg-white text-[#4B2E2E]">
      <h2 className="text-3xl font-serif font-bold mb-12 text-center">
        Featured Heritage & Luxury Estates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {listings.map(({ id, name, description }) => (
          <div
            key={id}
            className="border rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">{name}</h3>
            <p className="mb-6">{description}</p>
            <button className="px-5 py-2 bg-[#FFD166] text-[#4B2E2E] font-semibold rounded hover:bg-yellow-500 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}