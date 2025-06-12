"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

// Common languages with their native names
const LANGUAGE_NAMES: Record<string, { name: string; nativeName: string }> = {
  ar: { name: "Arabic", nativeName: "العربية" },
  arz: { name: "Egyptian Arabic", nativeName: "مصرى" },
  az: { name: "Azerbaijani", nativeName: "Azərbaycan" },
  be: { name: "Belarusian", nativeName: "Беларуская" },
  bn: { name: "Bengali", nativeName: "বাংলা" },
  cs: { name: "Czech", nativeName: "Čeština" },
  da: { name: "Danish", nativeName: "Dansk" },
  de: { name: "German", nativeName: "Deutsch" },
  el: { name: "Greek", nativeName: "Ελληνικά" },
  en: { name: "English", nativeName: "English" },
  es: { name: "Spanish", nativeName: "Español" },
  et: { name: "Estonian", nativeName: "Eesti" },
  fa: { name: "Persian", nativeName: "فارسی" },
  fr: { name: "French", nativeName: "Français" },
  ha: { name: "Hausa", nativeName: "Hausa" },
  he: { name: "Hebrew", nativeName: "עברית" },
  hi: { name: "Hindi", nativeName: "हिन्दी" },
  id: { name: "Indonesian", nativeName: "Bahasa Indonesia" },
  is: { name: "Icelandic", nativeName: "Íslenska" },
  it: { name: "Italian", nativeName: "Italiano" },
  ja: { name: "Japanese", nativeName: "日本語" },
  jv: { name: "Javanese", nativeName: "Basa Jawa" },
  kk: { name: "Kazakh", nativeName: "Қазақша" },
  ko: { name: "Korean", nativeName: "한국어" },
  ky: { name: "Kyrgyz", nativeName: "Кыргызча" },
  la: { name: "Latin", nativeName: "Latina" },
  lt: { name: "Lithuanian", nativeName: "Lietuvių" },
  lv: { name: "Latvian", nativeName: "Latviešu" },
  mk: { name: "Macedonian", nativeName: "Македонски" },
  mr: { name: "Marathi", nativeName: "मराठी" },
  ng: { name: "Ndonga", nativeName: "Oshiwambo" },
  nl: { name: "Dutch", nativeName: "Nederlands" },
  no: { name: "Norwegian", nativeName: "Norsk" },
  pl: { name: "Polish", nativeName: "Polski" },
  pnb: { name: "Western Punjabi", nativeName: "پنجابی" },
  pt: { name: "Portuguese", nativeName: "Português" },
  ro: { name: "Romanian", nativeName: "Română" },
  ru: { name: "Russian", nativeName: "Русский" },
  sr: { name: "Serbian", nativeName: "Српски" },
  sv: { name: "Swedish", nativeName: "Svenska" },
  sw: { name: "Swahili", nativeName: "Kiswahili" },
  ta: { name: "Tamil", nativeName: "தமிழ்" },
  te: { name: "Telugu", nativeName: "తెలుగు" },
  tg: { name: "Tajik", nativeName: "Тоҷикӣ" },
  th: { name: "Thai", nativeName: "ไทย" },
  tl: { name: "Tagalog", nativeName: "Tagalog" },
  tr: { name: "Turkish", nativeName: "Türkçe" },
  tt: { name: "Tatar", nativeName: "Татарча" },
  ug: { name: "Uyghur", nativeName: "ئۇيغۇرچە" },
  uk: { name: "Ukrainian", nativeName: "Українська" },
  ur: { name: "Urdu", nativeName: "اردو" },
  uz: { name: "Uzbek", nativeName: "O'zbek" },
  vi: { name: "Vietnamese", nativeName: "Tiếng Việt" },
  wuu: { name: "Wu Chinese", nativeName: "吴语" },
  yue: { name: "Cantonese", nativeName: "粵語" },
  zh: { name: "Chinese", nativeName: "中文" },
};

interface LanguageSwitcherProps {
  availableLocales: string[];
  currentLocale: string;
  className?: string;
}

export default function LanguageSwitcher({
  availableLocales,
  currentLocale,
  className = "",
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
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

  // Get languages data
  const languages: Language[] = availableLocales.map(code => ({
    code,
    name: LANGUAGE_NAMES[code]?.name || code.toUpperCase(),
    nativeName: LANGUAGE_NAMES[code]?.nativeName || code.toUpperCase(),
  }));

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/[a-zA-Z-]{2,5}(?=\/|$)/, '') || '/';
    
    // Navigate to new locale
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
        aria-label="Select language"
      >
        <GlobeAltIcon className="w-4 h-4" />
        <span className="hidden sm:inline">{currentLanguage.nativeName}</span>
        <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
        <ChevronDownIcon 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-64 bg-gray-900/95 backdrop-blur-md border border-gray-700/50 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto"
          >
            <div className="py-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={`w-full px-4 py-2 text-left text-sm transition-colors flex items-center justify-between ${
                    language.code === currentLocale
                      ? "bg-purple-500/20 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="font-medium">{language.nativeName}</span>
                  <span className="text-xs text-gray-400 uppercase">{language.code}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
