import { Users, Bot, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    step: "1",
    icon: Users,
    title: "Centralize seus contatos",
    description: "Conecte seus WhatsApp e importe todos os contatos. O sistema organiza automaticamente todas as conversas em um só lugar.",
    highlight: "Setup em 5 minutos"
  },
  {
    step: "2", 
    icon: Bot,
    title: "Ative a IA",
    description: "Configure a inteligência artificial para responder, qualificar leads e fazer follow-up automático 24 horas por dia.",
    highlight: "IA treinada para seu negócio"
  },
  {
    step: "3",
    icon: BarChart3,
    title: "Acompanhe resultados",
    description: "Visualize o funil de vendas, acompanhe métricas em tempo real e tome decisões baseadas em dados concretos.",
    highlight: "Dashboards em tempo real"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Como funciona na <span className="text-domous-gradient">prática</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            3 passos simples para transformar seu atendimento no WhatsApp
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-6 xl:-right-8">
                      <ArrowRight className="h-8 w-8 text-domous-accent-1" />
                    </div>
                  )}
                  
                  <div className="card-domous text-center group hover:shadow-xl">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gradient-domous text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 mt-4 bg-gradient-to-br from-domous-purple/10 to-domous-accent-1/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-10 w-10 text-domous-purple" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-domous-dark mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="inline-flex items-center text-domous-accent-1 font-semibold text-sm">
                      <div className="w-2 h-2 bg-domous-accent-1 rounded-full mr-2" />
                      {step.highlight}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-card-domous max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-domous-dark mb-4">
              Pronto para começar?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Todo o processo leva menos de 15 minutos. Nossa equipe oferece suporte via WhatsApp sempre que precisar.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Conta ativa rapidamente
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Treinamento disponível (R$ 947)
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Suporte em português
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;