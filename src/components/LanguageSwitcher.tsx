import { useLanguage, Language } from "@/contexts/LanguageContext";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
  { code: "it", label: "IT", flag: "🇮🇹" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`w-8 h-8 text-xl rounded-full transition-all duration-200 flex items-center justify-center ${
            language === lang.code
              ? "ring-2 ring-primary scale-110"
              : "opacity-60 hover:opacity-100 hover:scale-105"
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
