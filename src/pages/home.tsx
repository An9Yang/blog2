import { Link } from "react-router-dom";
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const navLinkClass =
    "text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors";
  const iconButtonClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-blue-500 hover:text-blue-600";

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      {/* Navigation Bar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center">
            {/* Left Navigation Links */}
            <div className="flex flex-1 items-center gap-9">
              <Link to="/blogs" className={navLinkClass}>
                Blogs
              </Link>
              <Link to="/categories" className="flex items-center gap-1">
                <span className={navLinkClass}>Categories</span>
                <ChevronDown className="h-4 w-4 text-slate-400" />
              </Link>
              <Link to="/contact" className={navLinkClass}>
                Contact
              </Link>
            </div>

            {/* Center Logo */}
            <div className="flex flex-1 justify-center">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600">
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
            <div className="flex flex-1 items-center justify-end gap-3">
              <button
                type="button"
                className={`${iconButtonClass} hover:bg-blue-50`}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconButtonClass} hover:bg-blue-50`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@readx.com"
                className={`${iconButtonClass} hover:bg-blue-50`}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconButtonClass} hover:bg-blue-50`}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconButtonClass} hover:bg-blue-50`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${iconButtonClass} hover:bg-blue-50`}
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Title Section */}
      <section className="bg-[#F5F7FB] py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Blog & Resources
            </h1>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-600"></div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="bg-[#F5F7FB] pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[540px_minmax(0,1fr)] lg:items-start lg:gap-y-12 lg:gap-x-11 xl:grid-cols-[560px_minmax(0,1fr)]">
            {/* Large Featured Card - Left Side */}
            <div className="flex justify-center lg:justify-start">
              <Link
                to="/blog/digital-transformation"
                className="group relative block w-full max-w-[480px] overflow-hidden rounded-[32px] shadow-[0_30px_60px_-32px_rgba(15,23,42,0.65)] sm:aspect-square lg:max-w-[540px] lg:aspect-auto lg:h-[540px] xl:max-w-[560px]"
              >
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                    alt="Digital Transformation for Agencies"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/5" />
                </div>

                <div className="relative flex h-full flex-col justify-end gap-6 p-8 sm:p-10">
                  <div className="flex items-center justify-between text-sm font-medium text-white/80">
                    <span className="text-white/90">Innovation</span>
                    <span className="text-white/90">August 19, 2024</span>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-[34px] font-semibold leading-tight text-white transition-colors duration-300 group-hover:text-blue-200 sm:text-[40px]">
                    Digital Transformation for Agencies
                    </h2>
                    <p className="max-w-lg text-base text-white/80 sm:text-lg">
                      Explore how agencies can successfully implement digital
                      transformation to stay competitive.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Small Cards - Right Side */}
            <div className="flex flex-col gap-11 lg:h-[540px] lg:justify-between">
              {/* Innovation Card */}
              <Link
                to="/blog/innovation-business-success"
                className="group flex flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_24px_60px_-35px_rgba(15,23,42,0.6)] transition-shadow hover:shadow-[0_34px_70px_-32px_rgba(15,23,42,0.6)] lg:flex-1 lg:flex-row lg:items-stretch"
              >
                <div className="w-full lg:h-full lg:w-[52%] lg:shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Innovation"
                    className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 lg:h-full lg:w-full lg:rounded-l-[28px]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-7 lg:p-9">
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
                    <span className="text-blue-600">Innovation</span>
                    <span className="text-slate-400">August 19, 2024</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[22px] font-semibold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      The Role of Innovation in Business Success
                    </h3>
                    <p className="text-[15px] leading-snug text-slate-500">
                      Understand how innovation is critical for business success
                      and how to cultivate it.
                    </p>
                  </div>
                </div>
              </Link>

              {/* Marketing Card */}
              <Link
                to="/blog/future-business-strategy"
                className="group flex flex-col overflow-hidden rounded-[28px] border border-white/60 bg-white shadow-[0_24px_60px_-35px_rgba(15,23,42,0.6)] transition-shadow hover:shadow-[0_34px_70px_-32px_rgba(15,23,42,0.6)] lg:flex-1 lg:flex-row lg:items-stretch"
              >
                <div className="w-full lg:h-full lg:w-[52%] lg:shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80"
                    alt="Marketing"
                    className="h-56 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 lg:h-full lg:w-full lg:rounded-l-[28px]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6 p-7 lg:p-9">
                  <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
                    <span className="text-blue-600">Marketing</span>
                    <span className="text-slate-400">August 19, 2024</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-[22px] font-semibold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                      The Future of Business Strategy
                    </h3>
                    <p className="text-[15px] leading-snug text-slate-500">
                      Explore how evolving business strategies, driven by data and
                      innovation, are essential for long-term success.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
