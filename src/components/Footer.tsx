import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-10 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-foreground">
              {t("footer.brand")}
            </p>
            <p className="text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dhiffushi Excursions. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
