import { Target, Zap, TrendingUp, BarChart3, Clock, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Nunca mais perder leads",
    description: "Sistema inteligente de follow-up e lembretes automáticos garantem que nenhuma oportunidade seja esquecida."
  },
  {
    icon: Zap,
    title: "Atendimento rápido e escalável",
    description: "IA responde instantaneamente e distribui conversas para sua equipe de forma inteligente."
  },
  {
    icon: TrendingUp,
    title: "Mais conversões sem aumentar equipe",
    description: "Automação e inteligência artificial fazem o trabalho pesado, aumentando resultados com o mesmo time."
  },
  {
    icon: BarChart3,
    title: "Clareza total sobre oportunidades",
    description: "Dashboard visual mostra exatamente onde estão seus leads e quanto cada um vale."
  },
  {
    icon: Clock,
    title: "Crescimento previsível com estratégia",
    description: "Relatórios detalhados te ajudam a tomar decisões baseadas em dados reais."
  },
  {
    icon: DollarSign,
    title: "Economia de tempo e redução de custos",
    description: "Automatize processos manuais e reduza custos operacionais significativamente."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Transforme seu negócio com <span className="text-domous-gradient">resultados reais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Veja como o Domous CRM pode revolucionar sua operação comercial e acelerar seus resultados
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="card-domous group hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mb-6 bg-gradient-domous rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-domous-dark mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;