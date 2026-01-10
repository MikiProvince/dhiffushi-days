import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
  { code: "it", label: "Italiano" },
];

// SVG Flag components for crisp rendering
const FlagGB = () => (
  <svg viewBox="0 0 60 30" className="w-6 h-4 rounded-sm shadow-sm">
    <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const FlagRU = () => (
  <svg viewBox="0 0 60 30" className="w-6 h-4 rounded-sm shadow-sm">
    <rect width="60" height="10" fill="#fff"/>
    <rect y="10" width="60" height="10" fill="#0039A6"/>
    <rect y="20" width="60" height="10" fill="#D52B1E"/>
  </svg>
);

const FlagIT = () => (
  <svg viewBox="0 0 60 30" className="w-6 h-4 rounded-sm shadow-sm">
    <rect width="20" height="30" fill="#009246"/>
    <rect x="20" width="20" height="30" fill="#fff"/>
    <rect x="40" width="20" height="30" fill="#CE2B37"/>
  </svg>
);

const flagComponents: Record<Language, React.FC> = {
  en: FlagGB,
  ru: FlagRU,
  it: FlagIT,
};

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0.5">
      {languages.map((lang) => {
        const FlagComponent = flagComponents[lang.code];
        return (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`p-1.5 rounded transition-all duration-200 flex items-center justify-center ${
              language === lang.code
                ? "ring-2 ring-primary/80 ring-offset-1 ring-offset-background scale-110 bg-white/10"
                : "opacity-60 hover:opacity-100 hover:scale-105 hover:bg-white/5"
            }`}
            aria-label={`Switch to ${lang.label}`}
            title={lang.label}
          >
            <FlagComponent />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
