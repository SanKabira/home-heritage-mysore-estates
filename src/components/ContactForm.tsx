export default function ContactForm() {
  return (
    <section id="contact" className="bg-[#4B2E2E] text-[#FFD166] py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Get in Touch</h2>
        <form className="grid grid-cols-1 gap-4" action="mailto:info@example.com" method="post">
          <input className="px-4 py-3 rounded text-[#4B2E2E]" name="name" placeholder="Your name" required />
          <input className="px-4 py-3 rounded text-[#4B2E2E]" name="email" type="email" placeholder="Email" required />
          <textarea className="px-4 py-3 rounded text-[#4B2E2E]" name="message" rows={5} placeholder="Message" />
          <button className="mt-2 px-6 py-3 bg-[#FFD166] text-[#4B2E2E] font-semibold rounded shadow hover:bg-yellow-500 transition" type="submit">Send</button>
        </form>
      </div>
    </section>
  )
}