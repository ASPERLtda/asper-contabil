import { useState, FormEvent, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

// Configuração do EmailJS
const EMAILJS_SERVICE_ID = "service_07ucocr";
const EMAILJS_TEMPLATE_ID = "template_xxikbcj";
const EMAILJS_PUBLIC_KEY = "RL4v4wonOZT7BZEZj";

// Configuração do reCAPTCHA
const RECAPTCHA_SITE_KEY = "6LfE8lAsAAAAAMX6Oze-X5Y6B6SJdJ4j-MYmPxRi";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "",
    mensagem: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast({
        title: "Verificação necessária",
        description: "Por favor, confirme que você não é um robô.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.nome,
          from_email: formData.email,
          phone: formData.telefone,
          service_type: formData.servico,
          message: formData.mensagem,
          to_email: "aspericias.contato@gmail.com",
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        servico: "",
        mensagem: "",
      });

      // Reset do captcha após envio
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato pelo telefone.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const contactInfo = [
    {
      icon: Phone,
      label: "Telefone",
      value: "(31) 98869-8172",
      href: "tel:+553188698172",
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "aspericias.contato@gmail.com",
      href: "mailto:aspericias.contato@gmail.com",
    },
    {
      icon: MapPin,
      label: "Endereço",
      value: "Belo Horizonte, MG",
      href: null,
    },
    {
      icon: Clock,
      label: "Horário",
      value: "Seg - Sex: 9h às 18h",
      href: null,
    },
  ];

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-gold font-medium text-sm tracking-wider uppercase mb-3">
            Contato
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground leading-tight mb-4 whitespace-nowrap">
            Solicite um Orçamento <span className="text-gold">Técnico Especializado</span>
          </h2>
          <p className="text-muted-foreground">
            Entre em contato para solicitar orçamento e obter suporte técnico especializado em perícia contábil judicial e extrajudicial.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-gold transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-hero-gradient rounded-2xl p-6 text-cream">
              <h3 className="font-display text-xl font-semibold mb-3">
                Solicite um Orçamento Técnico
              </h3>
              <p className="text-cream/70 text-sm mb-4">
                Solicite seu orçamento sem compromisso e com análise técnica adequada a sua necessidade.
              </p>
              <Button variant="secondary" size="sm" asChild>
                <a href="https://wa.me/message/HRU5OY3BFNFME1" target="_blank" rel="noopener noreferrer">
                  Entrar em Contato
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-elegant border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Nome Completo
                  </label>
                  <Input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="h-12"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="h-12"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Telefone
                  </label>
                  <Input
                    name="telefone"
                    type="tel"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Tipo de Serviço
                  </label>
                  <Input
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    placeholder="Ex: Perícia Judicial"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva brevemente seu caso ou dúvida..."
                  className="min-h-[140px] resize-none"
                  required
                />
              </div>

              <div className="mb-6 flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={handleCaptchaChange}
                />
              </div>

              <Button className="w-full h-12 group" size="lg" disabled={isLoading || !captchaToken}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
