import { Star, Quote, TrendingUp, Users, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    company: "Imobiliária Premium",
    role: "Diretor Comercial",
    content: "Aumentamos 65% as conversões em 3 meses. A IA do Domous qualifica os leads perfeitamente e nossa equipe foca apenas no que realmente vale a pena.",
    rating: 5,
    results: "+65% conversões"
  },
  {
    name: "Ana Costa",
    company: "Consultoria Empresarial",
    role: "CEO",
    content: "Nunca mais perdemos um lead. O sistema captura tudo automaticamente e a IA faz follow-up sem a gente precisar lembrar. Simplesmente fantástico!",
    rating: 5,
    results: "0 leads perdidos"
  },
  {
    name: "Roberto Mendes",
    company: "E-commerce Fashion",
    role: "Gerente de Vendas",
    content: "O funil visual mudou nossa forma de trabalhar. Agora sabemos exatamente onde cada cliente está e quais ações tomar. ROI de 380% no primeiro ano.",
    rating: 5,
    results: "ROI 380%"
  }
];

const stats = [
  {
    icon: Users,
    value: "2.847",
    label: "Empresas atendidas",
    suffix: "+"
  },
  {
    icon: MessageCircle,
    value: "1.2M",
    label: "Mensagens processadas/mês",
    suffix: ""
  },
  {
    icon: TrendingUp,
    value: "47%",
    label: "Aumento médio em conversões",
    suffix: "+"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Avaliação média dos clientes",
    suffix: "/5"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-8 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-domous-gradient mb-2">47%</div>
              <div className="text-muted-foreground">aumento médio em conversões</div>
            </div>
            <div className="w-px h-16 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-domous-gradient mb-2">24/7</div>
              <div className="text-muted-foreground">atendimento automatizado</div>
            </div>
            <div className="w-px h-16 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-domous-gradient mb-2">85%</div>
              <div className="text-muted-foreground">satisfação dos clientes</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-domous-dark mb-12">
            O que nossos clientes estão dizendo
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-domous relative group hover:shadow-glow"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-domous rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Quote className="h-4 w-4 text-white" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-domous-dark">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-domous-accent-1">
                      {testimonial.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="text-center">
          <p className="text-lg font-semibold text-domous-dark mb-8">
            Empresas de todos os segmentos confiam no Domous
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Imobiliárias", "E-commerce", "Consultorias", "Cursos Online", "Serviços", "Saúde"].map((segment, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gray-100 rounded-xl text-sm font-medium text-gray-600"
              >
                {segment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;