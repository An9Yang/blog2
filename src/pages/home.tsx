import { Link } from "react-router-dom";
import { Search, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link
                to="/blogs"
                className="text-gray-900 hover:text-gray-600 font-medium text-sm"
              >
                Blogs
              </Link>
              <Link
                to="/categories"
                className="text-gray-900 hover:text-gray-600 font-medium text-sm"
              >
                Categories
              </Link>
              <Link
                to="/contact"
                className="text-gray-900 hover:text-gray-600 font-medium text-sm"
              >
                Contact
              </Link>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-white"
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
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Search className="w-5 h-5" />
              </Button>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-800"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Title Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Blog & Resources
            </h1>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Large Featured Card - Left Side */}
            <div className="lg:col-span-2">
              <Link
                to="/blog/digital-transformation"
                className="group block relative rounded-2xl overflow-hidden h-[500px]"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80')",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white text-sm font-medium">
                      Innovation
                    </span>
                    <span className="text-white text-sm">August 19, 2024</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    Digital Transformation for Agencies
                  </h2>
                  <p className="text-white/90 text-lg">
                    Explore how agencies can successfully implement digital
                    transformation to stay competitive.
                  </p>
                </div>
              </Link>
            </div>

            {/* Small Cards - Right Side */}
            <div className="lg:col-span-1 flex flex-col gap-8">
              {/* Innovation Card */}
              <Link
                to="/blog/innovation-business-success"
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                    alt="Innovation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-semibold">
                      Innovation
                    </span>
                    <span className="text-gray-500 text-sm">
                      August 19, 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    The Role of Innovation in Business Success
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Understand how innovation is critical for business success
                    and how to cultivate it.
                  </p>
                </div>
              </Link>

              {/* Marketing Card */}
              <Link
                to="/blog/future-business-strategy"
                className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&q=80"
                    alt="Marketing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 text-sm font-semibold">
                      Marketing
                    </span>
                    <span className="text-gray-500 text-sm">
                      August 19, 2024
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    The Future of Business Strategy
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Explore how evolving business strategies, driven by data and
                    innovation, are essential for long-term success.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
