import { Calendar } from "lucide-react";

const Header = () => (
  <header className="bg-background/95 backdrop-blur-md border-b border-border h-16 w-full fixed top-0 left-0 z-50 shadow-sm">
    <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6 lg:px-8">
      <a href="https://www.invixium.com">
        <img
          src="/images/logo-sticky.svg"
          alt="Invixium Logo"
          className="h-12 w-auto object-contain"
        />
      </a>
      <nav className="hidden lg:flex items-center gap-8">
        <a href="#why-choose" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Why Visit Us</a>
        <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Solutions</a>
        <a href="#customer-stories" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Customer Stories</a>
        <a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Partners</a>
        <a href="#contact-form" className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium inline-flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Schedule A Meeting
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
