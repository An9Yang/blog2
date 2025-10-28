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
  const navLinkClass =
    "text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors";
  const iconButtonClass =
    "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-blue-500 hover:text-blue-600";

  return (
    <div className="min-h-screen bg-[#F5F7FB]">
      {/* Navigation Bar - Fixed with Backdrop Blur */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
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
      <section className="bg-[#F5F7FB] pt-32 pb-20">
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

      {/* Marketing Section */}
      <section className="bg-[#F5F7FB] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 flex items-start justify-between">
            <div>
              <h2 className="mb-3 text-5xl font-bold text-slate-900">
                Marketing
              </h2>
              <p className="text-lg text-slate-600">
                Delve into the latest marketing trends and effective campaign
                strategies.
              </p>
            </div>
            <Link
              to="/marketing"
              className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              View More
            </Link>
          </div>

          {/* Marketing Blog Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: Innovative Marketing Strategies */}
            <Link
              to="/blog/innovative-marketing-strategies"
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80"
                  alt="Innovative Marketing Strategies for Agencies"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    Marketing
                  </span>
                  <span className="text-sm text-slate-400">
                    August 19, 2024
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  Innovative Marketing Strategies for Agencies
                </h3>
                <p className="mb-6 flex-1 text-sm text-slate-600">
                  Discover cutting-edge marketing strategies that can set your
                  agency apart from the competition.
                </p>
                <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Card 2: The Power of Brand Positioning */}
            <Link
              to="/blog/brand-positioning"
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="The Power of Brand Positioning"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    Marketing
                  </span>
                  <span className="text-sm text-slate-400">
                    August 19, 2024
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  The Power of Brand Positioning
                </h3>
                <p className="mb-6 flex-1 text-sm text-slate-600">
                  Learn how strategic brand positioning can differentiate your
                  agency and drive success.
                </p>
                <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Card 3: The Future of Business Strategy */}
            <Link
              to="/blog/future-business-strategy-marketing"
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80"
                  alt="The Future of Business Strategy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    Marketing
                  </span>
                  <span className="text-sm text-slate-400">
                    August 19, 2024
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  The Future of Business Strategy
                </h3>
                <p className="mb-6 flex-1 text-sm text-slate-600">
                  Explore how evolving business strategies, driven by data and
                  innovation, are essential for long-term success.
                </p>
                <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>
          </div>

          {/* Browse All Blogs Button */}
          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="inline-block rounded-full bg-blue-600 px-12 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Browse All Blogs!
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-[#F5F7FB] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-12 rounded-[40px] bg-gradient-to-r from-blue-600 to-blue-500 px-12 py-16 shadow-2xl lg:px-16 lg:py-20">
            <div className="flex-1">
              <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
                Subscribe to our email
                <br />
                newsletter for explorers!
              </h2>
            </div>
            <div className="flex flex-shrink-0 items-center gap-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="h-14 w-72 rounded-full border-0 px-6 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="h-14 rounded-full bg-white px-10 text-base font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:shadow-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-[#F5F7FB] py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 flex items-start justify-between">
            <div>
              <h2 className="mb-3 text-5xl font-bold text-slate-900">
                Innovation
              </h2>
              <p className="text-lg text-slate-600">
                Discover the latest innovations reshaping industries and
                business models.
              </p>
            </div>
            <Link
              to="/innovation"
              className="rounded-full bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg"
            >
              View More
            </Link>
          </div>

          {/* Innovation Blog Cards Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1: The Impact of Emerging Technologies */}
            <Link
              to="/blog/emerging-technologies-business"
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="The Impact of Emerging Technologies on Business"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    Innovation
                  </span>
                  <span className="text-sm text-slate-400">
                    August 19, 2024
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  The Impact of Emerging Technologies on Business
                </h3>
                <p className="mb-6 flex-1 text-sm text-slate-600">
                  Discover how emerging technologies are reshaping the business
                  landscape and what it means for your company.
                </p>
                <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Card 2: Digital Transformation */}
            <Link
              to="/blog/digital-innovation"
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Digital Transformation"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    Innovation
                  </span>
                  <span className="text-sm text-slate-400">
                    August 19, 2024
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                  Digital Transformation for Agencies
                </h3>
                <p className="mb-6 flex-1 text-sm text-slate-600">
                  Learn how agencies can leverage digital transformation to stay
                  competitive in modern markets.
                </p>
                <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Card 3: The Role of Innovation */}
            <Link
              to="/blog/role-of-innovation"
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/60 bg-white shadow-lg transition-all hover:shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="The Role of Innovation in Business Success"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600">
                    Innovation
                  </span>
                  <span className="text-sm text-slate-400">
                    August 19, 2024
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-blue-600 transition-colors group-hover:text-blue-700">
                  The Role of Innovation in Business Success
                </h3>
                <p className="mb-6 flex-1 text-sm text-slate-600">
                  Understand how innovation is critical for business success and
                  how to cultivate it.
                </p>
                <button className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>
          </div>

          {/* Browse All Blogs Button */}
          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="inline-block rounded-full bg-blue-600 px-12 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Browse All Blogs!
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              Explore Our Featured Categories
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-blue-600"></div>
          </div>

          {/* Categories Grid */}
          <div className="mb-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Innovation Card */}
            <Link
              to="/category/innovation"
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <Lightbulb className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-slate-900">
                Innovation
              </h3>
              <p className="text-center text-sm text-slate-600">
                Discover the latest innovations reshaping industries and
                business models.
              </p>
            </Link>

            {/* Leadership Card */}
            <Link
              to="/category/leadership"
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <Flag className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-slate-900">
                Leadership
              </h3>
              <p className="text-center text-sm text-slate-600">
                Insights into leadership practices for fostering strong teams
                and culture.
              </p>
            </Link>

            {/* Marketing Card */}
            <Link
              to="/category/marketing"
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <Megaphone className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-slate-900">
                Marketing
              </h3>
              <p className="text-center text-sm text-slate-600">
                Delve into the latest marketing trends and effective campaign
                strategies.
              </p>
            </Link>

            {/* Growth Card */}
            <Link
              to="/category/growth"
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                <div className="rounded-2xl bg-blue-50 p-4">
                  <TrendingUp className="h-12 w-12 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-3 text-center text-xl font-bold text-blue-600">
                Growth
              </h3>
              <p className="text-center text-sm text-slate-600">
                Explore strategies and tips for scaling your business and
                driving growth.
              </p>
            </Link>
          </div>

          {/* Browse All Blogs Button */}
          <div className="text-center">
            <Link
              to="/blogs"
              className="inline-block rounded-full bg-blue-600 px-12 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-xl"
            >
              Browse All Blogs!
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <Link to="/" className="mb-6 flex items-center gap-3">
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
                <span className="text-xl font-bold">
                  Read<span className="text-blue-400">X</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            {/* Menu Column */}
            <div>
              <h3 className="mb-4 text-base font-semibold">Menu</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Terms of Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* CMS Column */}
            <div>
              <h3 className="mb-4 text-base font-semibold">CMS</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/blogs"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/single"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Blog Single
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category/single"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Category Single
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tag/single"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Tag Single
                  </Link>
                </li>
                <li>
                  <Link
                    to="/author/single"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Author Single
                  </Link>
                </li>
              </ul>
            </div>

            {/* Utility Column */}
            <div>
              <h3 className="mb-4 text-base font-semibold">Utility</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/license"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    License
                  </Link>
                </li>
                <li>
                  <Link
                    to="/changelog"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/style-guide"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Style Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/password"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    Password
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    404
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Follow Section */}
          <div className="mb-8 border-t border-slate-800 pt-8">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold">Follow</h3>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-sm text-slate-400">
              Design and Developed By{" "}
              <a
                href="https://flowbuzz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                Flowbuzz
              </a>
              . Powered By{" "}
              <a
                href="https://webflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
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
