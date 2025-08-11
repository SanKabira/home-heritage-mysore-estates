import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4B2E2E] text-[#FFD166] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <nav className="mb-6 md:mb-0 space-x-6 font-semibold">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/listings" className="hover:text-white">Listings</Link>
          <Link href="/newspaper" className="hover:text-white">Newspaper</Link>
          <Link href="/insights" className="hover:text-white">Insights</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>
        <div className="space-x-6 text-2xl">
          <a href="https://wa.me/yourwhatsapp" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M..."/></svg>
          </a>
          <a href="https://instagram.com/yourhandle" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M..."/></svg>
          </a>
          <a href="https://youtube.com/yourchannel" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <svg className="w-6 h-6 inline-block" fill="currentColor" viewBox="0 0 24 24"><path d="M..."/></svg>
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-[#FFD166]/80">
        © {new Date().getFullYear()} HOME – Heritage of Mysore Estates. All rights reserved.
      </div>
    </footer>
  );
}