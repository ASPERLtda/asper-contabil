import { Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                <span className="font-display font-bold text-lg text-cream">AS</span>
              </div>
              <div>
                <span className="font-display text-lg font-semibold">
                  Alerrandro Silva
                </span>
                <p className="text-xs text-cream/60 tracking-wider uppercase">
                  Perito Contábil
                </p>
              </div>
            </div>
            <p className="text-cream/60 text-sm">
              CRC-124937
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#inicio" className="text-cream/70 hover:text-gold transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-cream/70 hover:text-gold transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-cream/70 hover:text-gold transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-cream/70 hover:text-gold transition-colors">
              Contato
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alerrandrosilva"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 trnsition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-cream/70 group-hover:text-gold" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/asperltda/"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-cream/70 group-hover:text-gold" />
            </a>
            <a
              target="_blank"
              href="mailto:aspericias.contato@gmail.com"
              className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors group"
              aria-label="E-mail"
            >
              <Mail className="w-5 h-5 text-cream/70 group-hover:text-gold" />
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-cream/10 mt-8 pt-8 text-center">
          <p className="text-cream/50 text-sm">
            © {currentYear} Alerrandro Silva - Perito Contábil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
