import { Link } from "react-router-dom";
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import CategoriesDropdown from "@/components/CategoriesDropdown";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center">
            {/* Left Navigation */}
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
                className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Contact
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex flex-1 justify-center">
              <Link to="/" className="group flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 transition-transform group-hover:scale-105">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="12" r="1" fill="currentColor" />
                    <circle cx="14" cy="12" r="1" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Read<span className="text-blue-600">X</span>
                </span>
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex flex-1 items-center justify-end gap-2">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
                aria-label="Search"
              >
                <Search className="h-4.5 w-4.5" />
              </button>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
              >
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">
            Get In Touch
          </h1>
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-blue-600"></div>
          <p className="text-lg text-gray-600">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="h-12 w-full rounded-lg border border-gray-300 px-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h2>
                <p className="text-gray-600">
                  Feel free to reach out to us through any of the following methods. We're here to help!
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:hello@readx.com"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      hello@readx.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Business Street
                      <br />
                      San Francisco, CA 94103
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="mb-4 font-semibold text-gray-900">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, href: "https://facebook.com" },
                    { icon: Twitter, href: "https://twitter.com" },
                    { icon: Instagram, href: "https://instagram.com" },
                    { icon: Linkedin, href: "https://linkedin.com" },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link to="/" className="mb-6 flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
                    <path
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="12" r="1" fill="currentColor" />
                    <circle cx="14" cy="12" r="1" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-bold">
                  Read<span className="text-blue-400">X</span>
                </span>
              </Link>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Menu</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-sm text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-sm text-gray-400 hover:text-white">
                    Terms of Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">CMS</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/blogs" className="text-sm text-gray-400 hover:text-white">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/blog/digital-transformation" className="text-sm text-gray-400 hover:text-white">
                    Blog Single
                  </Link>
                </li>
                <li>
                  <Link to="/category/innovation" className="text-sm text-gray-400 hover:text-white">
                    Category Single
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Utility</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    License
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Changelog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Style Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8 border-t border-gray-800 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">Follow</h3>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              Design and Developed By{" "}
              <a href="#" className="text-white hover:text-blue-400">
                Flowbuzz
              </a>
              . Powered By{" "}
              <a href="#" className="text-white hover:text-blue-400">
                Webflow
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Made in Webflow Badge */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://webflow.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-lg transition-shadow hover:shadow-xl"
        >
          <svg className="h-4 w-4 text-blue-600" viewBox="0 0 200 200" fill="currentColor">
            <path d="M150.8 73.9c-8.4 0-15.2 6.8-15.2 15.2v37c0 8.4 6.8 15.2 15.2 15.2s15.2-6.8 15.2-15.2v-37c0-8.4-6.8-15.2-15.2-15.2zm-101.6 0c-8.4 0-15.2 6.8-15.2 15.2v37c0 8.4 6.8 15.2 15.2 15.2s15.2-6.8 15.2-15.2v-37c0-8.4-6.8-15.2-15.2-15.2z" />
          </svg>
          Made in Webflow
        </a>
      </div>
    </div>
  );
}
