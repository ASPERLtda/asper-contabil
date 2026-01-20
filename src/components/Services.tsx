import {
  Scale,
  Calculator,
  FileText,
  Banknote,
  Briefcase,
  LineChart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Perícia Judicial",
      description:
        "Atuação como perito do juízo ou assistente técnico em processos judiciais, com elaboração de laudos e pareceres técnicos devidamente fundamentados, observância rigorosa dos critérios metodológicos e adequada contextualização às provas e aos elementos constantes dos autos.",
    },
    {
      icon: Calculator,
      title: "Cálculos Trabalhistas",
      description:
        "Apuração de verbas rescisórias, horas extras, diferenças salariais, indenizações por danos morais e materiais, lucros cessantes e demais direitos trabalhistas, com acompanhamento integral da ação, incluindo atuação na fase de conhecimento, bem como na análise e impugnação de cálculos apresentados pela parte contrária e pela contadoria judicial.",
    },
    {
      icon: FileText,
      title: "Laudos Contábeis",
      description:
        "Elaboração de pareceres e laudos técnicos em matéria contábil, abrangendo a análise e correção dos pedidos formulados na petição inicial sob o aspecto financeiro, com potencial geração de efeitos econômicos positivos para a demanda, bem como a liquidação dos pedidos, conforme exigência introduzida pela Reforma Trabalhista (Lei nº 13.467/2017).",
    },
    {
      icon: Banknote,
      title: "Perícia Bancária",
      description:
        "Atuação especializada em perícia bancária, com ênfase na assistência técnica em demandas trabalhistas envolvendo a categoria bancária, bem como em ações cíveis que demandem análise financeira, contratos bancários, financiamentos e operações de crédito.",
    },
    {
      icon: Briefcase,
      title: "Perícia Extrajudicial",
      description:
        "Assessoria técnica especializada para advogados e empresas, voltada à análise contábil estratégica, definição de critérios técnicos e suporte qualificado à condução de demandas judiciais e extrajudiciais.",
    },
    {
      icon: LineChart,
      title: "Consultoria Pericial",
      description:
        "Prestação de assessoria técnica especializada para advogados e empresas, com atuação na análise contábil de demandas complexas, definição de critérios técnicos, esclarecimento de aspectos financeiros relevantes e suporte qualificado à condução de processos judiciais e extrajudiciais.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm tracking-wider uppercase mb-3">
            Serviços
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Soluções Especializadas em{" "}
            <span className="text-gold">Perícia Contábil</span>
          </h2>
          <p className="text-muted-foreground">
            Prestação de serviços especializados em perícia contábil, abrangendo demandas trabalhistas e cíveis,
             com atuação técnica estruturada e adequada às necessidades de cada processo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-gold/50 transition-all duration-300 hover:shadow-elegant cursor-pointer"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-gold/10 flex items-center justify-center mb-4 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-gold transition-colors" />
                </div>
                <CardTitle className="font-display text-xl text-foreground group-hover:text-gold transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
