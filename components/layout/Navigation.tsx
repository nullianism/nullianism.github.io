"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Translations, NavigationItem } from "@/lib/translations";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

interface NavigationProps {
  translations: Translations;
  navigationItems: NavigationItem[];
  availableLocales?: string[];
}

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.div className="w-6 h-6 relative" animate={isOpen ? "open" : "closed"}>
    <motion.span
      className="absolute h-0.5 w-full bg-current"
      style={{ top: "25%" }}
      variants={{
        open: { top: "50%", y: "-50%", rotate: 45 },
        closed: { top: "25%", y: "0%", rotate: 0 },
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
    <motion.span
      className="absolute h-0.5 w-full bg-current"
      style={{ top: "50%", y: "-50%" }}
      variants={{
        open: { opacity: 0 },
        closed: { opacity: 1 },
      }}
      transition={{ duration: 0.1 }}
    />
    <motion.span
      className="absolute h-0.5 w-full bg-current"
      style={{ top: "75%" }}
      variants={{
        open: { top: "50%", y: "-50%", rotate: -45 },
        closed: { top: "75%", y: "0%", rotate: 0 },
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    />
  </motion.div>
);

export default function Navigation({
  translations,
  navigationItems,
  availableLocales = [],
}: NavigationProps) {
  const pathname = usePathname();
  const params = useParams() as { locale?: string };
  const localePrefix = params?.locale ? `/${params.locale}` : "";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-blue-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/50 transition-shadow"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-xl font-bold text-white">0</span>
              </motion.div>
              <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent ml-2">
                {translations.site.name}
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              {navigationItems.map((item) => {
                const strippedPath = pathname.replace(
                  /^\/[a-zA-Z-]{2,5}(?=\/|$)/,
                  ""
                );
                const isActive = strippedPath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={`${localePrefix}${item.href}`}
                    className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg border border-purple-500/30"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                );
              })}
              
              {/* Language Switcher */}
              {availableLocales.length > 1 && (
                <LanguageSwitcher
                  availableLocales={availableLocales}
                  currentLocale={params?.locale as string || "en"}
                  className="ml-2"
                />
              )}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-300 hover:text-white transition-colors rounded-full"
                aria-label="Toggle menu"
              >
                <HamburgerIcon isOpen={isMenuOpen} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: "0%" }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-gray-900/90 pt-16"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="px-4 pt-4 pb-8 space-y-2">
                {navigationItems.map((item) => {
                  const strippedPath = pathname.replace(
                    /^\/[a-zA-Z-]{2,5}(?=\/|$)/,
                    ""
                  );
                  const isActive = strippedPath === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={`${localePrefix}${item.href}`}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-purple-500/30"
                          : "text-gray-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                {/* Mobile Language Switcher */}
                {availableLocales.length > 1 && (
                  <div className="pt-4 mt-4 border-t border-gray-700">
                    <LanguageSwitcher
                      availableLocales={availableLocales}
                      currentLocale={params?.locale as string || "en"}
                      className="px-4"
                    />
                  </div>
                )}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
