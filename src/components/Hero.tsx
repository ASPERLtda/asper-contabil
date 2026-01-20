import { ArrowRight, Target, Shield, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-cream space-y-8">
            <div className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm rounded-full px-4 py-2 animate-fade-in">
              <Target className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium">
                +09 anos de experiência em perícia contábil
              </span>
            </div>

            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Alerrandro Silva
              <span className="block text-gradient-gold mt-2">
               Perito Contábil Judicial
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-cream/80 leading-relaxed max-w-xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Especialista em perícias contábeis judiciais e extrajudiciais.
              Laudos técnicos precisos e fundamentados para a defesa dos seus
              direitos.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="group font-semibold"
                asChild
              >
                <a href="https://wa.me/message/HRU5OY3BFNFME1" target="_blank" rel="noopener noreferrer">
                  Entrar em Contato
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="hidden lg:block relative">
            <div className="space-y-4">
              <div
                className="bg-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-cream/10 animate-slide-in-right"
                style={{ animationDelay: "0.2s" }}
              >
                <Shield className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display text-xl font-semibold text-cream mb-2">
                  Confiabilidade
                </h3>
                <p className="text-cream/70 text-sm">
                  Laudos embasados em normativas contábeis e legislação vigente.
                </p>
              </div>

              <div
                className="bg-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-cream/10 ml-12 animate-slide-in-right"
                style={{ animationDelay: "0.3s" }}
              >
                <TrendingUp className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display text-xl font-semibold text-cream mb-2">
                  Precisão Técnica
                </h3>
                <p className="text-cream/70 text-sm">
                  Análises detalhadas com metodologia rigorosa e transparente.
                </p>
              </div>

              <div
                className="bg-cream/10 backdrop-blur-sm rounded-2xl p-6 border border-cream/10 animate-slide-in-right"
                style={{ animationDelay: "0.4s" }}
              >
                <Target className="w-10 h-10 text-gold mb-4" />
                <h3 className="font-display text-xl font-semibold text-cream mb-2">
                  Resultados Técnicos Consistentes
                </h3>
                <p className="text-cream/70 text-sm">
                  Atuação técnica orientada à entrega de resultados sólidos, com suporte qualificado à parte assistida, sempre com rigor metodológico e alinhamento ao contexto processual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-cream/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
