import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold text-[#4B2E2E]">
          HOME
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-[#4B2E2E] font-medium">
          <a href="#about" className="hover:text-heritageBrown">About</a>
          <a href="#listings" className="hover:text-heritageBrown">Listings</a>
          <a href="#videos" className="hover:text-heritageBrown">Videos</a>
          <a href="#testimonials" className="hover:text-heritageBrown">Testimonials</a>
          <a href="#contact" className="hover:text-heritageBrown">Contact</a>
        </nav>
      </div>
    </header>
  )
}