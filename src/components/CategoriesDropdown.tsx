import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Lightbulb, Flag, Megaphone, TrendingUp } from "lucide-react";

const categories = [
  { name: "Innovation", slug: "innovation", icon: Lightbulb },
  { name: "Leadership", slug: "leadership", icon: Flag },
  { name: "Marketing", slug: "marketing", icon: Megaphone },
  { name: "Growth", slug: "growth", icon: TrendingUp },
];

export default function CategoriesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
      >
        <span>Categories</span>
        <ChevronDown
          className={`h-3.5 w-3.5 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : "group-hover:translate-y-0.5"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl border border-gray-200 bg-white shadow-lg">
          <div className="p-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm transition-colors hover:bg-gray-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <category.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
                </div>
                <span className="font-medium text-gray-900">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
