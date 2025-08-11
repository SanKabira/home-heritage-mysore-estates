type ShortHighlight = {
  id: string;
  thumbnail: string;
  title: string;
};

const shorts: ShortHighlight[] = [
  {
    id: '1',
    thumbnail: '/images/short1.jpg',
    title: 'Royal Walkthrough: The Lakshmi Vilas Villa',
  },
  {
    id: '2',
    thumbnail: '/images/short2.jpg',
    title: 'Before & After: Heritage Restorations',
  },
  {
    id: '3',
    thumbnail: '/images/short3.jpg',
    title: 'Mysuru’s 3 Hottest Investment Pockets',
  },
];

export default function ShortsHighlights() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-[#E5E5E5] text-[#4B2E2E]">
      <h2 className="text-3xl font-serif font-bold mb-10 text-center">
        Experience Estates in 60 Seconds
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {shorts.map(({ id, thumbnail, title }) => (
          <div
            key={id}
            className="relative rounded overflow-hidden shadow-lg cursor-pointer group"
          >
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-16 h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <h3 className="p-4 text-lg font-semibold bg-white">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}