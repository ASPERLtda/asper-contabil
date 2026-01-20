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
                Expertise e Compromisso com a{" "}
                <span className="text-gold">Excelência</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com mais de 09 anos de atuação no mercado, sou especialista em perícias contábeis judiciais e extrajudiciais,
                 oferecendo análises técnicas precisas e laudos fundamentados nas normas brasileiras de contabilidade.
              </p>
              <p>
                Minha formação sólida e experiência diversificada me permitem atuar em diferentes áreas,
                 desde a elaboração de pareceres técnicos e laudos periciais na esfera trabalhista e cível,
                  sempre entregando resultados sólidos para a parta em que estou prestando assistência técnica.
              </p>
              <p>
                A <b>ASPER</b> auxilia os advogados, empresas e partes em processos judiciais e extrajudiciais. 
                Através da nossa consultoria especializada, atuamos em todas as fases processuais, sempre com fundamentação técnica rigorosa,
                 contribuindo para o fortalecimento da estratégia jurídica e proporcionando segurança e confiabilidade aos resultados. Atendemos em todo o Brasil.

              </p>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
