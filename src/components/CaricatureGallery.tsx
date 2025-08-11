type Caricature = {
  src: string
  alt: string
}

const caricatures: Caricature[] = [
  { src: '/caricatures/caricature1.jpg', alt: 'Caricature 1' },
  { src: '/caricatures/caricature2.jpg', alt: 'Caricature 2' },
  { src: '/caricatures/caricature3.jpg', alt: 'Caricature 3' },
]

export default function CaricatureGallery() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white text-[#4B2E2E]">
      <h2 className="text-3xl font-serif font-bold mb-10 text-center">Caricature Gallery</h2>
      {caricatures.length === 0 ? (
        <div className="text-center text-[#4B2E2E]/70">
          No caricatures yet. Add images to the <code className="px-1 py-0.5 bg-[#E5E5E5] rounded">public/caricatures</code> folder.
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {caricatures.map(({ src, alt }) => (
            <div key={src} className="rounded overflow-hidden shadow">
              <img src={src} alt={alt} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}