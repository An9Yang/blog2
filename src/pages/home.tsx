import { Link } from "react-router-dom";
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ChevronDown,
  Lightbulb,
  Flag,
  Megaphone,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Navigation Bar - Fixed with Enhanced Glassmorphism */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur-xl shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center">
            {/* Left Navigation Links */}
            <div className="flex flex-1 items-center gap-10">
              <Link
                to="/blogs"
                className="relative text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Blogs
              </Link>
              <Link
                to="/categories"
                className="group relative flex items-center gap-2 text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:text-blue-600"
              >
                <span>Categories</span>
                <ChevronDown className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:rotate-180 group-hover:text-blue-600" />
              </Link>
              <Link
                to="/contact"
                className="relative text-[15px] font-semibold text-slate-700 transition-all duration-300 hover:text-blue-600 after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-blue-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex flex-1 justify-center">
              <Link to="/" className="group flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-blue-500/40">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="14" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Read<span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">X</span>
                </span>
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex flex-1 items-center justify-end gap-3">
              <button
                type="button"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
                aria-label="Search"
              >
                <Search className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </button>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="mailto:hello@readx.com"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Mail className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Title Section */}
      <section className="relative pt-40 pb-24">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-50 via-blue-100/20 to-transparent blur-3xl"></div>
        </div>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl">
              Blog & Resources
            </h1>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg shadow-blue-500/30"></div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Large Featured Card - Left Side */}
            <div className="lg:col-span-2">
              <Link
                to="/blog/digital-transformation"
                className="group relative block overflow-hidden rounded-[32px] shadow-[0_20px_70px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_30px_90px_-15px_rgba(0,0,0,0.4)]"
              >
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[580px]">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                    alt="Digital Transformation for Agencies"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/10" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-10 lg:p-12">
                  <div className="mb-6 flex items-center justify-between text-sm font-semibold">
                    <span className="rounded-full bg-white/20 px-4 py-1.5 text-white backdrop-blur-sm">
                      Innovation
                    </span>
                    <span className="text-white/90">August 19, 2024</span>
                  </div>
                  <div className="space-y-5">
                    <h2 className="text-[42px] font-bold leading-tight text-white transition-all duration-300 group-hover:text-blue-200">
                      Digital Transformation for Agencies
                    </h2>
                    <p className="max-w-2xl text-lg leading-relaxed text-white/90">
                      Explore how agencies can successfully implement digital
                      transformation to stay competitive.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Small Cards - Right Side */}
            <div className="flex flex-col gap-10 lg:h-[580px] lg:justify-between">
              {/* Innovation Card */}
              <Link
                to="/blog/innovation-business-success"
                className="group flex flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:flex-1 lg:flex-row"
              >
                <div className="h-64 w-full overflow-hidden lg:h-full lg:w-[48%]">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Innovation"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-5 p-8">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">
                      Innovation
                    </span>
                    <span className="text-slate-400">August 19, 2024</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[22px] font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                      The Role of Innovation in Business Success
                    </h3>
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      Understand how innovation is critical for business success
                      and how to cultivate it.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Marketing Card */}
              <Link
                to="/blog/future-business-strategy"
                className="group flex flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] lg:flex-1 lg:flex-row"
              >
                <div className="h-64 w-full overflow-hidden lg:h-full lg:w-[48%]">
                  <img
                    src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80"
                    alt="Marketing"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-5 p-8">
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">
                      Marketing
                    </span>
                    <span className="text-slate-400">August 19, 2024</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[22px] font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                      The Future of Business Strategy
                    </h3>
                    <p className="text-[15px] leading-relaxed text-slate-600">
                      Explore how evolving business strategies, driven by data
                      and innovation, are essential for long-term success.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 flex items-start justify-between">
            <div>
              <h2 className="mb-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
                Marketing
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                Delve into the latest marketing trends and effective campaign
                strategies.
              </p>
            </div>
            <Link
              to="/marketing"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <span className="relative z-10">View More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          </div>

          {/* Marketing Blog Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <Link
              to="/blog/innovative-marketing-strategies"
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80"
                  alt="Innovative Marketing Strategies"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                    Marketing
                  </span>
                  <span className="text-sm text-slate-400">August 19, 2024</span>
                </div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  Innovative Marketing Strategies for Agencies
                </h3>
                <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">
                  Discover cutting-edge marketing strategies that can set your
                  agency apart from the competition.
                </p>
                <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              to="/blog/brand-positioning"
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Brand Positioning"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                    Marketing
                  </span>
                  <span className="text-sm text-slate-400">August 19, 2024</span>
                </div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  The Power of Brand Positioning
                </h3>
                <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">
                  Learn how strategic brand positioning can differentiate your
                  agency and drive success.
                </p>
                <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              to="/blog/future-business-strategy-marketing"
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80"
                  alt="Business Strategy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                    Marketing
                  </span>
                  <span className="text-sm text-slate-400">August 19, 2024</span>
                </div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  The Future of Business Strategy
                </h3>
                <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">
                  Explore how evolving business strategies, driven by data and
                  innovation, are essential for long-term success.
                </p>
                <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Read Now
                </button>
              </div>
            </Link>
          </div>

          {/* Browse All Blogs Button */}
          <div className="mt-16 text-center">
            <Link
              to="/blogs"
              className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-14 py-4 text-lg font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              <span className="relative z-10">Browse All Blogs!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[48px] bg-gradient-to-br from-blue-600 via-blue-600 to-blue-500 p-px shadow-2xl shadow-blue-500/40">
            <div className="relative overflow-hidden rounded-[47px] bg-gradient-to-br from-blue-600 via-blue-600 to-blue-500 px-12 py-20 lg:px-16 lg:py-24">
              <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"></div>

              <div className="relative flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-5xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl">
                    Subscribe to our email
                    <br />
                    newsletter for explorers!
                  </h2>
                </div>
                <div className="flex w-full max-w-xl flex-shrink-0 items-center gap-4">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="h-16 flex-1 rounded-full border-0 px-7 text-base font-medium text-slate-900 placeholder:text-slate-400 shadow-xl shadow-black/10 focus:outline-none focus:ring-4 focus:ring-white/40 transition-all duration-300"
                  />
                  <button className="group relative h-16 overflow-hidden rounded-full bg-white px-10 text-base font-bold text-slate-900 shadow-xl shadow-black/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-0.5">
                    <span className="relative z-10">Submit</span>
                    <div className="absolute inset-0 bg-slate-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 flex items-start justify-between">
            <div>
              <h2 className="mb-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
                Innovation
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                Discover the latest innovations reshaping industries and
                business models.
              </p>
            </div>
            <Link
              to="/innovation"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              <span className="relative z-10">View More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          </div>

          {/* Innovation Blog Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <Link
              to="/blog/emerging-technologies-business"
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Emerging Technologies"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                    Innovation
                  </span>
                  <span className="text-sm text-slate-400">August 19, 2024</span>
                </div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  The Impact of Emerging Technologies on Business
                </h3>
                <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">
                  Discover how emerging technologies are reshaping the business
                  landscape and what it means for your company.
                </p>
                <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Card 2 */}
            <Link
              to="/blog/digital-innovation"
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Digital Transformation"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                    Innovation
                  </span>
                  <span className="text-sm text-slate-400">August 19, 2024</span>
                </div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  Digital Transformation for Agencies
                </h3>
                <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">
                  Learn how agencies can leverage digital transformation to stay
                  competitive in modern markets.
                </p>
                <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Card 3 */}
            <Link
              to="/blog/role-of-innovation"
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-1"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="Innovation in Business"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
                    Innovation
                  </span>
                  <span className="text-sm text-slate-400">August 19, 2024</span>
                </div>
                <h3 className="mb-4 text-xl font-bold leading-snug text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                  The Role of Innovation in Business Success
                </h3>
                <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">
                  Understand how innovation is critical for business success and
                  how to cultivate it.
                </p>
                <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5">
                  Read Now
                </button>
              </div>
            </Link>
          </div>

          {/* Browse All Blogs Button */}
          <div className="mt-16 text-center">
            <Link
              to="/blogs"
              className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-14 py-4 text-lg font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              <span className="relative z-10">Browse All Blogs!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-20 text-center">
            <h2 className="mb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
              Explore Our Featured Categories
            </h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 shadow-lg shadow-blue-500/30"></div>
          </div>

          {/* Categories Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Innovation Card */}
            <Link
              to="/category/innovation"
              className="group rounded-[32px] border border-slate-200/80 bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            >
              <div className="mb-8 flex justify-center">
                <div className="rounded-[24px] bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  <Lightbulb className="h-14 w-14 text-blue-600" strokeWidth={2} />
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                Innovation
              </h3>
              <p className="text-center text-[15px] leading-relaxed text-slate-600">
                Discover the latest innovations reshaping industries and
                business models.
              </p>
            </Link>

            {/* Leadership Card */}
            <Link
              to="/category/leadership"
              className="group rounded-[32px] border border-slate-200/80 bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            >
              <div className="mb-8 flex justify-center">
                <div className="rounded-[24px] bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  <Flag className="h-14 w-14 text-blue-600" strokeWidth={2} />
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                Leadership
              </h3>
              <p className="text-center text-[15px] leading-relaxed text-slate-600">
                Insights into leadership practices for fostering strong teams
                and culture.
              </p>
            </Link>

            {/* Marketing Card */}
            <Link
              to="/category/marketing"
              className="group rounded-[32px] border border-slate-200/80 bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            >
              <div className="mb-8 flex justify-center">
                <div className="rounded-[24px] bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  <Megaphone className="h-14 w-14 text-blue-600" strokeWidth={2} />
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                Marketing
              </h3>
              <p className="text-center text-[15px] leading-relaxed text-slate-600">
                Delve into the latest marketing trends and effective campaign
                strategies.
              </p>
            </Link>

            {/* Growth Card */}
            <Link
              to="/category/growth"
              className="group rounded-[32px] border border-slate-200/80 bg-white p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:-translate-y-2"
            >
              <div className="mb-8 flex justify-center">
                <div className="rounded-[24px] bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                  <TrendingUp className="h-14 w-14 text-blue-600" strokeWidth={2} />
                </div>
              </div>
              <h3 className="mb-4 text-center text-2xl font-bold text-blue-600 transition-colors duration-300 group-hover:text-blue-700">
                Growth
              </h3>
              <p className="text-center text-[15px] leading-relaxed text-slate-600">
                Explore strategies and tips for scaling your business and
                driving growth.
              </p>
            </Link>
          </div>

          {/* Browse All Blogs Button */}
          <div className="text-center">
            <Link
              to="/blogs"
              className="group relative inline-block overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-14 py-4 text-lg font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1"
            >
              <span className="relative z-10">Browse All Blogs!</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Link to="/" className="group mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30 transition-all duration-300 group-hover:scale-105">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-white"
                  >
                    <path
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="10" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="14" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-2xl font-extrabold tracking-tight">
                  Read<span className="text-blue-400">X</span>
                </span>
              </Link>
              <p className="text-base leading-relaxed text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            {/* Menu Column */}
            <div>
              <h3 className="mb-6 text-base font-bold tracking-wide">Menu</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Terms of Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* CMS Column */}
            <div>
              <h3 className="mb-6 text-base font-bold tracking-wide">CMS</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/blogs"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/single"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Blog Single
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/single"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Category Single
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tag/single"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Tag Single
                  </Link>
                </li>
                <li>
                  <Link
                    to="/author/single"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Author Single
                  </Link>
                </li>
              </ul>
            </div>

            {/* Utility Column */}
            <div>
              <h3 className="mb-6 text-base font-bold tracking-wide">Utility</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/license"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    License
                  </Link>
                </li>
                <li>
                  <Link
                    to="/changelog"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/style-guide"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Style Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/password"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    Password
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="text-[15px] text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    404
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Follow Section */}
          <div className="mb-10 border-t border-slate-800 pt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold tracking-wide">Follow</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Twitter className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400"
                >
                  <Linkedin className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-10 text-center">
            <p className="text-[15px] leading-relaxed text-slate-400">
              Design and Developed By{" "}
              <a
                href="https://flowbuzz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition-colors duration-300 hover:text-blue-400"
              >
                Flowbuzz
              </a>
              . Powered By{" "}
              <a
                href="https://webflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white transition-colors duration-300 hover:text-blue-400"
              >
                Webflow
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
