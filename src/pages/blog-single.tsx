import { Link } from "react-router-dom";
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import CategoriesDropdown from "@/components/CategoriesDropdown";

export default function BlogSingle() {
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
      <section className="relative pt-24 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm">
            <Link to="/category/innovation" className="font-medium text-blue-600 hover:underline">
              Innovation
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">August 19, 2024</span>
          </div>

          {/* Title */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 lg:text-6xl">
            Digital Transformation for Agencies
          </h1>

          {/* Subtitle */}
          <p className="mb-12 text-lg text-gray-600 lg:text-xl">
            Explore how agencies can successfully implement digital transformation to stay competitive.
          </p>

          {/* Hero Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
              alt="Digital Transformation"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_380px]">
            {/* Left Column - Main Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Introduction</h2>
              <p className="mb-8 text-base leading-relaxed text-gray-700">
                Digital transformation is no longer optional for agencies; it's a necessity. As clients demand more digital solutions, agencies must adapt to stay relevant.
              </p>

              {/* The Need for Digital Transformation */}
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                The Need for Digital Transformation
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-700">
                In a world where technology is rapidly advancing, digital transformation allows agencies to streamline operations, improve client services, and stay ahead of the competition.
              </p>

              {/* Implementing Digital Solutions */}
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Implementing Digital Solutions
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-700">
                Digital transformation involves integrating digital technology into all areas of your agency, fundamentally changing how you operate and deliver value to clients. This includes adopting cloud-based tools, automating processes, and using data analytics to make informed decisions.
              </p>

              {/* Content Image */}
              <div className="my-12 overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                  alt="Digital Transformation"
                  className="h-auto w-full object-cover"
                />
              </div>

              {/* Successful Digital Transformation Case Studies */}
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Successful Digital Transformation Case Studies
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-700">
                Agency K adopted a comprehensive digital transformation strategy that resulted in a 35% increase in client satisfaction. Another example is Agency L, which used data analytics to refine its marketing strategies, leading to higher conversion rates.
              </p>

              {/* Conclusion */}
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Conclusion</h2>
              <p className="mb-8 text-base leading-relaxed text-gray-700">
                Digital transformation is key to staying competitive in today's fast-paced market. Agencies that embrace digital tools and strategies will be better positioned to meet client demands and drive long-term success.
              </p>

              {/* Tags */}
              <div className="mb-12 mt-12 flex flex-wrap gap-3">
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  Innovation
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  Business
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                  Strategy
                </span>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                  alt="Lucas Reed"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Lucas Reed</h3>
                  <p className="text-sm text-gray-600">Director of Leadership Development</p>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Featured Post Section */}
              <div>
                <h3 className="mb-6 text-xl font-bold text-gray-900">Featured Post</h3>
                <div className="space-y-6">
                  {/* Featured Post 1 */}
                  <Link
                    to="/blog/innovation"
                    className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:flex-row"
                  >
                    <div className="h-32 w-full overflow-hidden lg:h-auto lg:w-[45%]">
                      <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                        alt="The Role of Innovation in Business Success"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-semibold text-blue-600">Innovation</span>
                        <span className="text-gray-500">August 19, 2024</span>
                      </div>
                      <h4 className="text-base font-semibold leading-tight text-gray-900">
                        The Role of Innovation in Business Success
                      </h4>
                    </div>
                  </Link>

                  {/* Featured Post 2 */}
                  <Link
                    to="/blog/strategy"
                    className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:flex-row"
                  >
                    <div className="h-32 w-full overflow-hidden lg:h-auto lg:w-[45%]">
                      <img
                        src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80"
                        alt="The Future of Business Strategy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4">
                      <div className="mb-2 flex items-center justify-between text-xs">
                        <span className="font-semibold text-blue-600">Marketing</span>
                        <span className="text-gray-500">August 19, 2024</span>
                      </div>
                      <h4 className="text-base font-semibold leading-tight text-gray-900">
                        The Future of Business Strategy
                      </h4>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Newsletter Subscription */}
              <div className="rounded-2xl bg-blue-600 p-8">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Suscribe to our newsletter
                </h3>
                <p className="mb-6 text-sm text-white/90">
                  At risus viverra adipiscing at in tellus integer feugiat nisl pretiua
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="h-12 w-full rounded-lg border-0 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="submit"
                    className="h-12 w-full rounded-lg bg-white text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
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

      {/* Read More Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Read More</h2>
            <div className="mx-auto h-1 w-16 rounded-full bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Blog Card 1 */}
            <Link
              to="/blog/leadership"
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="Developing Emotional Intelligence in Leadership"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-600">Leadership</span>
                  <span className="text-gray-500">August 20, 2024</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Developing Emotional Intelligence in Leadership
                </h3>
                <p className="mb-4 flex-1 text-sm text-gray-600">
                  Understand the role of emotional intelligence in effective leadership and how to cultivate it within your organization.
                </p>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Blog Card 2 */}
            <Link
              to="/blog/growth"
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80"
                  alt="Building a Sustainable Growth Strategy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-600">Growth</span>
                  <span className="text-gray-500">August 20, 2024</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  Building a Sustainable Growth Strategy
                </h3>
                <p className="mb-4 flex-1 text-sm text-gray-600">
                  Explore the importance of sustainability in growth strategies and how to balance short-term gains with long-term success.
                </p>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>

            {/* Blog Card 3 */}
            <Link
              to="/blog/emerging-tech"
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="The Impact of Emerging Technologies on Business"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center justify-between text-xs">
                  <span className="font-semibold text-blue-600">Innovation</span>
                  <span className="text-gray-500">August 19, 2024</span>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  The Impact of Emerging Technologies on Business
                </h3>
                <p className="mb-4 flex-1 text-sm text-gray-600">
                  Discover how emerging technologies are reshaping the business landscape and what it means for your company.
                </p>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  Read Now
                </button>
              </div>
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
                {["Blogs", "Blog Single", "Category Single", "Tag Single", "Author Single"].map(
                  (item) => (
                    <li key={item}>
                      <Link to="/" className="text-sm text-gray-400 hover:text-white">
                        {item}
                      </Link>
                    </li>
                  )
                )}
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
