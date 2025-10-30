import { Link } from "react-router-dom";
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import CategoriesDropdown from "@/components/CategoriesDropdown";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <div className="flex flex-1 items-center gap-8">
              <Link
                to="/blogs"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                Blogs
              </Link>
              <CategoriesDropdown />
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
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
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-blue-600"></div>
          <p className="text-lg text-gray-600">Last updated: January 2025</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Introduction</h2>
            <p className="mb-6 text-gray-700">
              At ReadX, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Information We Collect</h2>
            <p className="mb-4 text-gray-700">We may collect information about you in a variety of ways, including:</p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
              <li>Personal Data: Name, email address, and contact information you provide</li>
              <li>Usage Data: Information about how you use our website</li>
              <li>Cookies: Data collected through cookies and similar tracking technologies</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            <p className="mb-4 text-gray-700">We use the information we collect to:</p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Send you newsletters and marketing communications</li>
              <li>Respond to your inquiries and support needs</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Data Security</h2>
            <p className="mb-6 text-gray-700">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Your Rights</h2>
            <p className="mb-4 text-gray-700">You have the right to:</p>
            <ul className="mb-6 list-disc space-y-2 pl-6 text-gray-700">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:privacy@readx.com" className="text-blue-600 hover:underline">
                privacy@readx.com
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
