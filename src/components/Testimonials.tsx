const testimonials = [
  {
    name: 'Arjun S.',
    quote:
      'HOME found us a jewel of a bungalow and guided us through every step with care and insight.'
  },
  {
    name: 'Meera & Vikram',
    quote:
      'Their heritage expertise and network are unmatched. We felt supported throughout.'
  },
  {
    name: 'Radhika P.',
    quote:
      'Professional, patient, and thoughtful. A standout experience in luxury real estate.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-serif font-bold mb-10 text-center text-[#4B2E2E]">What Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white border rounded-lg p-6 shadow">
            <p className="italic text-[#4B2E2E]">“{t.quote}”</p>
            <div className="mt-4 font-semibold text-[#4B2E2E]">— {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}