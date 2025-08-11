type YouTubeVideo = {
  id: string
  title: string
}

const videos: YouTubeVideo[] = [
  { id: 'dQw4w9WgXcQ', title: 'Sample Video 1' },
  { id: 'oHg5SJYRHA0', title: 'Sample Video 2' },
  { id: '9bZkp7q19f0', title: 'Sample Video 3' },
]

export default function YouTubeVideos() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-[#E5E5E5] text-[#4B2E2E]">
      <h2 className="text-3xl font-serif font-bold mb-10 text-center">Video Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map(({ id, title }) => (
          <div key={id} className="group">
            <div className="relative w-full pt-[56.25%] rounded overflow-hidden shadow">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}