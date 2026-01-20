import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAsper from "@/images/asper-transparente.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img
              src={logoAsper}
              alt="ASPER Perícias & Consultoria LTDA"
              className="h-72 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <Button variant="secondary" size="sm" className="ml-4 group font-semibold" asChild>
              <a href="https://wa.me/message/HRU5OY3BFNFME1" target="_blank" rel="noopener noreferrer">
                Entrar em Contato
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="secondary" className="mt-4 w-full group font-semibold" asChild>
                <a href="https://wa.me/message/HRU5OY3BFNFME1" target="_blank" rel="noopener noreferrer">
                  Entrar em Contato
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
