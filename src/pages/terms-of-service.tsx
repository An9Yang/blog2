import { Link } from "react-router-dom";
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import CategoriesDropdown from "@/components/CategoriesDropdown";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <div className="flex flex-1 items-center gap-8">
              <Link to="/blogs" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
                Blogs
              </Link>
              <CategoriesDropdown />
              <Link to="/contact" className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900">
                Contact
              </Link>
            </div>
            <div className="flex flex-1 justify-center">
              <Link to="/" className="group flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 transition-transform group-hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="12" r="1" fill="currentColor" />
                    <circle cx="14" cy="12" r="1" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Read<span className="text-blue-600">X</span>
                </span>
              </Link>
            </div>
            <div className="flex flex-1 items-center justify-end gap-2">
              <button type="button" className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100">
                <Search className="h-4.5 w-4.5" />
              </button>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100">
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100">
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100">
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100">
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-blue-600"></div>
          <p className="text-lg text-gray-600">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Agreement to Terms</h2>
            <p className="mb-6 text-gray-700">
              By accessing and using ReadX, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Use License</h2>
            <p className="mb-4 text-gray-700">
              Permission is granted to temporarily access the materials on ReadX for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software on ReadX</li>
              <li>Remove any copyright or proprietary notations</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">User Content</h2>
            <p className="mb-6 text-gray-700">
              You retain ownership of any content you submit to ReadX. By posting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content in connection with the service.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Disclaimer</h2>
            <p className="mb-6 text-gray-700">
              The materials on ReadX are provided "as is". ReadX makes no warranties, expressed or implied, and hereby disclaims all other warranties. ReadX does not warrant that the materials are accurate, reliable, or correct.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Limitations</h2>
            <p className="mb-6 text-gray-700">
              In no event shall ReadX or its suppliers be liable for any damages arising out of the use or inability to use the materials on ReadX, even if ReadX has been notified of the possibility of such damage.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Modifications</h2>
            <p className="mb-6 text-gray-700">
              ReadX may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the current version of these Terms of Service.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <a href="mailto:legal@readx.com" className="text-blue-600 hover:underline">
                legal@readx.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <Link to="/" className="mb-4 inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="12" r="1" fill="currentColor" />
                  <circle cx="14" cy="12" r="1" fill="currentColor" />
                </svg>
              </div>
              <span className="text-xl font-bold">Read<span className="text-blue-400">X</span></span>
            </Link>
            <p className="mt-8 text-sm text-gray-400">
              Design and Developed By <a href="#" className="text-white hover:text-blue-400">Flowbuzz</a>. Powered By <a href="#" className="text-white hover:text-blue-400">Webflow</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
