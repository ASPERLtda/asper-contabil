import { CheckCircle2 } from "lucide-react";
import perfilAlerrandro from "@/images/perfil-alerrandro.png";

const About = () => {
  
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/5] rounded-2xl bg-muted overflow-hidden shadow-elegant">
                <img
                  src={perfilAlerrandro}
                  alt="Alerrandro Silva - Perito Contábil"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold/20 rounded-2xl -z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/30 rounded-2xl -z-0" />
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <p className="text-gold font-medium text-sm tracking-wider uppercase mb-3">
                Sobre Mim
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Alerrandro Silva
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-gold font-semibold text-lg">Contador</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground text-lg">CRC 124937</span>
              </div>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed text-justify">
              <p>
                Com mais de 9 anos de atuação no mercado, sou especialista em perícias contábeis judiciais e extrajudiciais,
                 atuando na elaboração de análises técnicas precisas e laudos periciais fundamentados, em conformidade com as normas brasileiras de contabilidade.

              </p>
              <p>
               Minha formação e experiência diversificada permitem atuação em diferentes áreas do Direito,
                com destaque para as esferas trabalhista e cível, abrangendo a elaboração de pareceres técnicos,
                 laudos periciais e assistências técnicas, sempre com rigor metodológico e adequada valoração econômica das demandas.
              </p>
              <p>
                Desse modo, a <b>ASPER</b> foi criada para auxiliar advogados, empresas e partes em demandas judiciais e extrajudiciais. 
                Através da nossa consultoria especializada, atuamos em todas as fases processuais, sempre com fundamentação técnica rigorosa,
                 contribuindo para o fortalecimento da estratégia jurídica e proporcionando segurança e confiabilidade aos resultados.
              </p>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
