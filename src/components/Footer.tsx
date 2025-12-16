const Footer = () => {
  return (
    <footer className="py-10 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg font-semibold text-foreground">
              Dhiffushi Excursions
            </p>
            <p className="text-sm text-muted-foreground">
              Local island trips, done right.
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dhiffushi Excursions. Made with care on Dhiffushi Island.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
