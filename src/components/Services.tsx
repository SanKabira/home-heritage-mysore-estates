const services = [
  {
    title: 'Heritage Sales',
    desc: 'Exclusive marketing and sale of historic and luxury estates',
  },
  {
    title: 'Buyer Advisory',
    desc: 'Data-driven guidance for discerning buyers and investors',
  },
  {
    title: 'Restoration Partners',
    desc: 'Trusted experts to preserve and elevate your property',
  },
]

export default function Services() {
  return (
    <section className="bg-[#E5E5E5] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-10 text-center text-[#4B2E2E]">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2 text-[#4B2E2E]">{s.title}</h3>
              <p className="text-[#4B2E2E]/80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}