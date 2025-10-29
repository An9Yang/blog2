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
              <Link
                to="/categories"
                className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                <span>Categories</span>
                <ChevronDown className="h-3.5 w-3.5 text-gray-500 transition-transform group-hover:translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
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
                href="mailto:hello@readx.com"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100"
              >
                <Mail className="h-4.5 w-4.5" />
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
            Blog & Resources
          </h1>
          <div className="mx-auto h-1 w-16 rounded-full bg-blue-600"></div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
            {/* Large Featured Card */}
            <div>
              <Link
                to="/blog/digital-transformation"
                className="group relative block overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                    alt="Digital Transformation"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="rounded-md bg-white/90 px-3 py-1 font-medium text-gray-900 backdrop-blur-sm">
                      Innovation
                    </span>
                    <span className="font-medium text-white/90">August 19, 2024</span>
                  </div>
                  <h2 className="mb-3 text-3xl font-bold text-white">
                    Digital Transformation for Agencies
                  </h2>
                  <p className="text-base text-white/90">
                    Explore how agencies can successfully implement digital
                    transformation to stay competitive.
                  </p>
                </div>
              </Link>
            </div>

            {/* Small Cards */}
            <div className="flex flex-col gap-8 lg:h-[500px]">
              {/* Innovation Card */}
              <Link
                to="/blog/innovation"
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:h-[246px] lg:flex-row"
              >
                <div className="h-48 w-full overflow-hidden lg:h-full lg:w-[45%]">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Innovation"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 lg:py-8 lg:px-7">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600">Innovation</span>
                    <span className="text-xs text-gray-500">August 19, 2024</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold leading-tight text-gray-900">
                    The Role of Innovation in Business Success
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Understand how innovation is critical for business success and how to cultivate it.
                  </p>
                </div>
              </Link>

              {/* Marketing Card */}
              <Link
                to="/blog/strategy"
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:h-[246px] lg:flex-row"
              >
                <div className="h-48 w-full overflow-hidden lg:h-full lg:w-[45%]">
                  <img
                    src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80"
                    alt="Strategy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 lg:py-8 lg:px-7">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-blue-600">Marketing</span>
                    <span className="text-xs text-gray-500">August 19, 2024</span>
                  </div>
                  <h3 className="mb-4 text-xl font-semibold leading-tight text-gray-900">
                    The Future of Business Strategy
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Explore how evolving business strategies, driven by data and innovation, are essential for long-term success.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Section */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-start justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Marketing</h2>
              <p className="text-gray-600">
                Delve into the latest marketing trends and strategies.
              </p>
            </div>
            <Link
              to="/category/marketing"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovative Marketing Strategies for Agencies",
                desc: "Discover cutting-edge strategies that set your agency apart.",
                img: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&q=80",
              },
              {
                title: "The Power of Brand Positioning",
                desc: "Learn how strategic positioning differentiates your agency.",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
              },
              {
                title: "The Future of Business Strategy",
                desc: "Explore evolving strategies driven by data and innovation.",
                img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={`/blog/${idx}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-600">Marketing</span>
                    <span className="text-gray-500">August 19, 2024</span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-600">{item.desc}</p>
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                    Read Now
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Browse All Blogs!
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl bg-blue-600 px-8 py-16 lg:px-16">
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white lg:text-4xl">
                  Subscribe to our email
                  <br />
                  newsletter for explorers!
                </h2>
              </div>
              <div className="flex w-full max-w-md gap-3">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="h-12 flex-1 rounded-lg border-0 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="rounded-lg bg-white px-6 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="border-t border-gray-100 bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-start justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Innovation</h2>
              <p className="text-gray-600">
                Discover innovations reshaping industries and business models.
              </p>
            </div>
            <Link
              to="/category/innovation"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "The Impact of Emerging Technologies on Business",
                desc: "Discover how technologies reshape the business landscape.",
                img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
              },
              {
                title: "Digital Transformation for Agencies",
                desc: "Learn how to leverage digital transformation effectively.",
                img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
              },
              {
                title: "The Role of Innovation in Business Success",
                desc: "Understand how innovation drives business success.",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
                featured: true,
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                to={`/blog/${idx}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-600">Innovation</span>
                    <span className="text-gray-500">August 19, 2024</span>
                  </div>
                  <h3 className={`mb-2 text-lg font-semibold ${item.featured ? 'text-blue-600' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-600">{item.desc}</p>
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                    Read Now
                  </button>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/blogs"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Browse All Blogs!
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Explore Our Featured Categories
            </h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-blue-600"></div>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Lightbulb, name: "Innovation", desc: "Latest innovations reshaping industries." },
              { icon: Flag, name: "Leadership", desc: "Insights into fostering strong teams." },
              { icon: Megaphone, name: "Marketing", desc: "Latest marketing trends and strategies." },
              { icon: TrendingUp, name: "Growth", desc: "Strategies for scaling your business.", featured: true },
            ].map((cat, idx) => (
              <Link
                key={idx}
                to={`/category/${cat.name.toLowerCase()}`}
                className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-blue-200"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-blue-100 transition-transform group-hover:scale-110">
                    <cat.icon className="h-7 w-7 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className={`mb-2 text-center text-lg font-semibold transition-colors ${cat.featured ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                  {cat.name}
                </h3>
                <p className="text-center text-sm text-gray-600">{cat.desc}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/blogs"
              className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Browse All Blogs!
            </Link>
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
                {["Home", "Contact", "Privacy Policy", "Terms of Services"].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-sm text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">CMS</h3>
              <ul className="space-y-3">
                {["Blogs", "Blog Single", "Category Single", "Tag Single", "Author Single"].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-sm text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Utility</h3>
              <ul className="space-y-3">
                {["License", "Changelog", "Style Guide", "Password", "404"].map((item) => (
                  <li key={item}>
                    <Link to="/" className="text-sm text-gray-400 hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
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
    </div>
  );
}
