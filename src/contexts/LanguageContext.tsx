import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "ru" | "it";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.excursions": "Excursions",
    "nav.howItWorks": "How it works",
    "nav.contact": "Contact",
    
    // Hero
    "hero.location": "Dhiffushi Island, Maldives",
    "hero.title": "The easiest way to explore Dhiffushi",
    "hero.subtitle": "Trusted local excursions. Clear prices. Real people.",
    "hero.viewExcursions": "View excursions",
    "hero.chatWhatsApp": "Chat on WhatsApp",
    
    // Excursions
    "excursions.title": "Our Excursions",
    "excursions.subtitle": "Handpicked experiences with verified local captains. All prices are fixed — no bargaining needed.",
    "excursions.book": "Book via WhatsApp",
    "excursion.turtle.name": "Snorkeling with Turtles",
    "excursion.turtle.desc": "Swim alongside sea turtles in their natural habitat at nearby reefs.",
    "excursion.dolphin.name": "Dolphin Cruise at Sunset",
    "excursion.dolphin.desc": "Watch dolphins play as the sun sets over the Indian Ocean.",
    "excursion.sandbank.name": "Sandbank Picnic",
    "excursion.sandbank.desc": "Private escape to a pristine sandbank surrounded by turquoise water.",
    "excursion.fishing.name": "Fishing Trip",
    "excursion.fishing.desc": "Traditional line fishing with local captains. Keep what you catch.",
    "excursion.island.name": "Island Hopping",
    "excursion.island.desc": "Visit neighboring local islands and experience authentic Maldivian life.",
    "excursion.jetski.name": "Jet Ski Tour",
    "excursion.jetski.desc": "Adrenaline-filled ride across crystal-clear waters. Experience speed and freedom on a jet ski.",
    
    // Why Book
    "whyBook.title": "Why book with us",
    "whyBook.subtitle": "We believe in transparency, safety, and genuine human connection.",
    "whyBook.reason1.title": "Fixed prices, no bargaining",
    "whyBook.reason1.desc": "What you see is what you pay. No surprises.",
    "whyBook.reason2.title": "English, Russian & Italian support",
    "whyBook.reason2.desc": "Communicate easily in your language.",
    "whyBook.reason3.title": "Verified local captains",
    "whyBook.reason3.desc": "We work only with experienced, trustworthy locals.",
    "whyBook.reason4.title": "No prepayment scams",
    "whyBook.reason4.desc": "Pay only when you meet us on the island.",
    "whyBook.reason5.title": "We stay in touch",
    "whyBook.reason5.desc": "Support before, during, and after your trip.",
    
    // How It Works
    "howItWorks.title": "How it works",
    "howItWorks.subtitle": "Three simple steps to your perfect day.",
    "howItWorks.step1.title": "Choose excursion",
    "howItWorks.step1.desc": "Browse our trips and find what excites you.",
    "howItWorks.step2.title": "Message us on WhatsApp",
    "howItWorks.step2.desc": "We'll confirm availability and arrange everything.",
    "howItWorks.step3.title": "Enjoy your day on the ocean",
    "howItWorks.step3.desc": "Show up, relax, and make unforgettable memories.",
    
    // Reviews
    "reviews.title": "What guests say",
    "reviews.subtitle": "Recommended by guests staying on Dhiffushi",
    "review1.text": "The turtle snorkeling was magical. No rush, just us and the ocean. Exactly what we needed.",
    "review1.name": "Sarah & Tom",
    "review1.location": "Germany",
    "review2.text": "Finally, someone who speaks Russian! Everything was organized perfectly. Highly recommend.",
    "review2.name": "Anastasia",
    "review2.location": "Russia",
    "review3.text": "Simple, honest, reliable. The dolphin cruise was the highlight of our trip.",
    "review3.name": "Marco",
    "review3.location": "Italy",
    
    // Contact
    "contact.location": "Dhiffushi Island, Maldives",
    "contact.title": "Ready to explore?",
    "contact.subtitle": "We are on the island. You can always reach us. No complicated booking forms — just a simple conversation.",
    "contact.button": "Start a conversation",
    
    // Footer
    "footer.brand": "Dhiffushi Excursions",
    "footer.tagline": "Local island trips, done right.",
    "footer.copyright": "Made with care on Dhiffushi Island.",
    
    // Durations
    "duration.1-2hours": "1-2 hours",
    "duration.2-3hours": "2-3 hours",
    "duration.1.5-2hours": "1.5-2 hours",
    "duration.3-4hours": "3-4 hours",
    "duration.halfDay": "Half day",
  },
  ru: {
    // Header
    "nav.excursions": "Экскурсии",
    "nav.howItWorks": "Как это работает",
    "nav.contact": "Контакты",
    
    // Hero
    "hero.location": "Остров Диффуши, Мальдивы",
    "hero.title": "Самый простой способ исследовать Диффуши",
    "hero.subtitle": "Надёжные местные экскурсии. Понятные цены. Реальные люди.",
    "hero.viewExcursions": "Смотреть экскурсии",
    "hero.chatWhatsApp": "Написать в WhatsApp",
    
    // Excursions
    "excursions.title": "Наши экскурсии",
    "excursions.subtitle": "Отобранные маршруты с проверенными местными капитанами. Все цены фиксированные — без торга.",
    "excursions.book": "Забронировать через WhatsApp",
    "excursion.turtle.name": "Снорклинг с черепахами",
    "excursion.turtle.desc": "Плавайте рядом с морскими черепахами в их естественной среде обитания.",
    "excursion.dolphin.name": "Круиз с дельфинами на закате",
    "excursion.dolphin.desc": "Наблюдайте за игрой дельфинов на закате над Индийским океаном.",
    "excursion.sandbank.name": "Пикник на песчаной косе",
    "excursion.sandbank.desc": "Уединённый отдых на нетронутой песчаной косе в бирюзовой воде.",
    "excursion.fishing.name": "Рыбалка",
    "excursion.fishing.desc": "Традиционная рыбалка с местными капитанами. Улов — ваш.",
    "excursion.island.name": "Путешествие по островам",
    "excursion.island.desc": "Посетите соседние острова и познакомьтесь с мальдивской культурой.",
    "excursion.jetski.name": "Прогулка на гидромотоциклах",
    "excursion.jetski.desc": "Адреналиновая поездка по кристально чистой воде. Ощутите скорость и свободу.",
    
    // Why Book
    "whyBook.title": "Почему бронировать у нас",
    "whyBook.subtitle": "Мы верим в прозрачность, безопасность и искреннее общение.",
    "whyBook.reason1.title": "Фиксированные цены, без торга",
    "whyBook.reason1.desc": "Платите ровно столько, сколько указано. Без сюрпризов.",
    "whyBook.reason2.title": "Поддержка на английском, русском и итальянском",
    "whyBook.reason2.desc": "Общайтесь легко на своём языке.",
    "whyBook.reason3.title": "Проверенные местные капитаны",
    "whyBook.reason3.desc": "Работаем только с опытными, надёжными местными.",
    "whyBook.reason4.title": "Без предоплаты и обмана",
    "whyBook.reason4.desc": "Платите только при встрече на острове.",
    "whyBook.reason5.title": "Мы всегда на связи",
    "whyBook.reason5.desc": "Поддержка до, во время и после поездки.",
    
    // How It Works
    "howItWorks.title": "Как это работает",
    "howItWorks.subtitle": "Три простых шага к идеальному дню.",
    "howItWorks.step1.title": "Выберите экскурсию",
    "howItWorks.step1.desc": "Посмотрите наши маршруты и найдите то, что вам нравится.",
    "howItWorks.step2.title": "Напишите нам в WhatsApp",
    "howItWorks.step2.desc": "Мы подтвердим наличие и всё организуем.",
    "howItWorks.step3.title": "Наслаждайтесь океаном",
    "howItWorks.step3.desc": "Приходите, расслабьтесь и получите незабываемые впечатления.",
    
    // Reviews
    "reviews.title": "Отзывы гостей",
    "reviews.subtitle": "Рекомендовано гостями, отдыхающими на Диффуши",
    "review1.text": "Снорклинг с черепахами был волшебным. Никакой спешки, только мы и океан. Именно то, что нужно.",
    "review1.name": "Сара и Том",
    "review1.location": "Германия",
    "review2.text": "Наконец кто-то говорит по-русски! Всё организовано идеально. Очень рекомендую.",
    "review2.name": "Анастасия",
    "review2.location": "Россия",
    "review3.text": "Просто, честно, надёжно. Круиз с дельфинами стал главным впечатлением нашего отпуска.",
    "review3.name": "Марко",
    "review3.location": "Италия",
    
    // Contact
    "contact.location": "Остров Диффуши, Мальдивы",
    "contact.title": "Готовы к приключениям?",
    "contact.subtitle": "Мы на острове. Вы всегда можете с нами связаться. Никаких сложных форм — просто напишите.",
    "contact.button": "Начать разговор",
    
    // Footer
    "footer.brand": "Dhiffushi Excursions",
    "footer.tagline": "Местные экскурсии, как надо.",
    "footer.copyright": "Сделано с заботой на острове Диффуши.",
    
    // Durations
    "duration.1-2hours": "1-2 часа",
    "duration.2-3hours": "2-3 часа",
    "duration.1.5-2hours": "1,5-2 часа",
    "duration.3-4hours": "3-4 часа",
    "duration.halfDay": "Полдня",
  },
  it: {
    // Header
    "nav.excursions": "Escursioni",
    "nav.howItWorks": "Come funziona",
    "nav.contact": "Contatti",
    
    // Hero
    "hero.location": "Isola di Dhiffushi, Maldive",
    "hero.title": "Il modo più semplice per esplorare Dhiffushi",
    "hero.subtitle": "Escursioni locali affidabili. Prezzi chiari. Persone vere.",
    "hero.viewExcursions": "Vedi escursioni",
    "hero.chatWhatsApp": "Chatta su WhatsApp",
    
    // Excursions
    "excursions.title": "Le nostre escursioni",
    "excursions.subtitle": "Esperienze selezionate con capitani locali verificati. Tutti i prezzi sono fissi — nessuna contrattazione.",
    "excursions.book": "Prenota via WhatsApp",
    "excursion.turtle.name": "Snorkeling con le tartarughe",
    "excursion.turtle.desc": "Nuota accanto alle tartarughe marine nel loro habitat naturale.",
    "excursion.dolphin.name": "Crociera con i delfini al tramonto",
    "excursion.dolphin.desc": "Guarda i delfini giocare mentre il sole tramonta sull'Oceano Indiano.",
    "excursion.sandbank.name": "Picnic sulla secca",
    "excursion.sandbank.desc": "Fuga privata su una secca incontaminata circondata da acqua turchese.",
    "excursion.fishing.name": "Gita di pesca",
    "excursion.fishing.desc": "Pesca tradizionale con capitani locali. Tieni ciò che peschi.",
    "excursion.island.name": "Tour delle isole",
    "excursion.island.desc": "Visita le isole vicine e vivi l'autentica vita maldiviana.",
    "excursion.jetski.name": "Tour in moto d'acqua",
    "excursion.jetski.desc": "Corsa adrenalinica su acque cristalline. Sperimenta velocità e libertà su un jet ski.",
    
    // Why Book
    "whyBook.title": "Perché prenotare con noi",
    "whyBook.subtitle": "Crediamo nella trasparenza, sicurezza e connessione umana genuina.",
    "whyBook.reason1.title": "Prezzi fissi, nessuna contrattazione",
    "whyBook.reason1.desc": "Quello che vedi è quello che paghi. Nessuna sorpresa.",
    "whyBook.reason2.title": "Supporto in inglese, russo e italiano",
    "whyBook.reason2.desc": "Comunica facilmente nella tua lingua.",
    "whyBook.reason3.title": "Capitani locali verificati",
    "whyBook.reason3.desc": "Lavoriamo solo con locali esperti e affidabili.",
    "whyBook.reason4.title": "Nessuna truffa con pagamento anticipato",
    "whyBook.reason4.desc": "Paga solo quando ci incontri sull'isola.",
    "whyBook.reason5.title": "Restiamo in contatto",
    "whyBook.reason5.desc": "Supporto prima, durante e dopo il viaggio.",
    
    // How It Works
    "howItWorks.title": "Come funziona",
    "howItWorks.subtitle": "Tre semplici passi per la tua giornata perfetta.",
    "howItWorks.step1.title": "Scegli l'escursione",
    "howItWorks.step1.desc": "Sfoglia i nostri viaggi e trova quello che ti entusiasma.",
    "howItWorks.step2.title": "Scrivici su WhatsApp",
    "howItWorks.step2.desc": "Confermeremo la disponibilità e organizzeremo tutto.",
    "howItWorks.step3.title": "Goditi la giornata sull'oceano",
    "howItWorks.step3.desc": "Presentati, rilassati e crea ricordi indimenticabili.",
    
    // Reviews
    "reviews.title": "Cosa dicono gli ospiti",
    "reviews.subtitle": "Raccomandato dagli ospiti che soggiornano a Dhiffushi",
    "review1.text": "Lo snorkeling con le tartarughe è stato magico. Nessuna fretta, solo noi e l'oceano. Esattamente ciò di cui avevamo bisogno.",
    "review1.name": "Sarah e Tom",
    "review1.location": "Germania",
    "review2.text": "Finalmente qualcuno che parla russo! Tutto organizzato perfettamente. Altamente raccomandato.",
    "review2.name": "Anastasia",
    "review2.location": "Russia",
    "review3.text": "Semplice, onesto, affidabile. La crociera con i delfini è stata il momento clou del nostro viaggio.",
    "review3.name": "Marco",
    "review3.location": "Italia",
    
    // Contact
    "contact.location": "Isola di Dhiffushi, Maldive",
    "contact.title": "Pronto per esplorare?",
    "contact.subtitle": "Siamo sull'isola. Puoi sempre raggiungerci. Nessun modulo complicato — solo una semplice conversazione.",
    "contact.button": "Inizia una conversazione",
    
    // Footer
    "footer.brand": "Dhiffushi Excursions",
    "footer.tagline": "Escursioni locali, fatte bene.",
    "footer.copyright": "Fatto con cura sull'isola di Dhiffushi.",
    
    // Durations
    "duration.1-2hours": "1-2 ore",
    "duration.2-3hours": "2-3 ore",
    "duration.1.5-2hours": "1,5-2 ore",
    "duration.3-4hours": "3-4 ore",
    "duration.halfDay": "Mezza giornata",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && ["en", "ru", "it"].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
