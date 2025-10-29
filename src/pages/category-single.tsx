import { Link, useParams } from "react-router-dom";
import {
  Search,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ChevronDown,
} from "lucide-react";

// Category data
const categoryData: Record<string, {
  title: string;
  description: string;
  articles: Array<{
    title: string;
    description: string;
    date: string;
    image: string;
    slug: string;
  }>;
}> = {
  innovation: {
    title: "Innovation",
    description: "Discover the latest innovations reshaping industries and business models.",
    articles: [
      {
        title: "The Impact of Emerging Technologies on Business",
        description: "Discover how emerging technologies are reshaping the business landscape and what it means for your company.",
        date: "August 19, 2024",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80",
        slug: "emerging-tech"
      },
      {
        title: "Digital Transformation for Agencies",
        description: "Explore how agencies can successfully implement digital transformation to stay competitive.",
        date: "August 19, 2024",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
        slug: "digital-transformation"
      },
      {
        title: "The Role of Innovation in Business Success",
        description: "Understand how innovation is critical for business success and how to cultivate it.",
        date: "August 19, 2024",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
        slug: "innovation-success"
      }
    ]
  },
  leadership: {
    title: "Leadership",
    description: "Insights into leadership practices for fostering strong teams and culture.",
    articles: [
      {
        title: "Developing Emotional Intelligence in Leadership",
        description: "Understand the role of emotional intelligence in effective leadership and how to cultivate it within your organization.",
        date: "August 20, 2024",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
        slug: "leadership"
      }
    ]
  },
  marketing: {
    title: "Marketing",
    description: "Delve into the latest marketing trends and effective campaign strategies.",
    articles: [
      {
        title: "Innovative Marketing Strategies for Agencies",
        description: "Discover cutting-edge marketing strategies that can set your agency apart from the competition.",
        date: "August 19, 2024",
        image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
        slug: "marketing-strategies"
      },
      {
        title: "The Future of Business Strategy",
        description: "Explore evolving strategies driven by data and innovation.",
        date: "August 19, 2024",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80",
        slug: "strategy"
      }
    ]
  },
  growth: {
    title: "Growth",
    description: "Explore strategies and tips for scaling your business and driving growth.",
    articles: [
      {
        title: "Building a Sustainable Growth Strategy",
        description: "Explore the importance of sustainability in growth strategies and how to balance short-term gains with long-term success.",
        date: "August 20, 2024",
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
        slug: "growth"
      },
      {
        title: "Scaling Your Business in 2024",
        description: "Learn the strategies needed to effectively scale your business in the current economic landscape.",
        date: "August 19, 2024",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
        slug: "business-scaling"
      }
    ]
  }
};

export default function CategorySingle() {
  const { slug } = useParams<{ slug: string }>();
  const category = categoryData[slug || "innovation"] || categoryData.innovation;
  const [featuredArticle, ...otherArticles] = category.articles;

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-bold tracking-tight text-gray-900">
              <span className="text-blue-600">{category.title}</span> Articles
            </h1>
            <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-blue-600"></div>
            <p className="text-lg text-gray-600">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Featured Article Card */}
      {featuredArticle && (
        <section className="pb-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              to={`/blog/${featuredArticle.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md lg:flex-row"
            >
              <div className="h-96 w-full overflow-hidden lg:h-auto lg:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-12 lg:p-16">
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="font-semibold text-blue-600">{category.title}</span>
                  <span className="text-gray-500">{featuredArticle.date}</span>
                </div>
                <h2 className="mb-4 text-4xl font-bold text-gray-900">
                  {featuredArticle.title}
                </h2>
                <p className="mb-6 text-base text-gray-700">
                  {featuredArticle.description}
                </p>
                <button className="w-fit rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                  Read Now
                </button>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Article Grid - 3 Columns */}
      {otherArticles.length > 0 && (
        <section className="pb-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherArticles.map((article, idx) => (
                <Link
                  key={idx}
                  to={`/blog/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center justify-between text-xs">
                      <span className="font-semibold text-blue-600">{category.title}</span>
                      <span className="text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-900">
                      {article.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-gray-600">
                      {article.description}
                    </p>
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                      Read Now
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
