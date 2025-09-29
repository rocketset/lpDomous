import { Bot, MessageSquare, BarChart3, Zap, FileText, Users2, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Centralize todos os atendimentos",
    description: "Uma única tela para gerenciar todos os WhatsApps da empresa"
  },
  {
    icon: Bot,
    title: "IA que responde, qualifica e faz follow-up",
    description: "Inteligência artificial trabalha 24/7 para você nunca perder uma oportunidade"
  },
  {
    icon: Zap,
    title: "Disparos automáticos e campanhas",
    description: "Envie mensagens segmentadas e campanhas em massa com facilidade"
  },
  {
    icon: BarChart3,
    title: "Funil visual Kanban para acompanhar vendas",
    description: "Visualize o andamento de cada negociação em tempo real"
  },
  {
    icon: FileText,
    title: "Relatórios claros e objetivos",
    description: "Métricas que realmente importam para tomar decisões estratégicas"
  },
  {
    icon: Users2,
    title: "Multiusuário e filas",
    description: "Distribua atendimentos automaticamente entre sua equipe"
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte em português",
    description: "Suporte brasileiro que entende suas necessidades específicas"
  }
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            O CRM feito para o <span className="text-domous-gradient">WhatsApp</span>, <br />
            com Inteligência Artificial em todos os planos
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Uma solução completa que transforma a forma como você se relaciona com seus clientes, 
            automatiza processos e aumenta suas vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="card-domous group hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mb-6 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform bg-gradient-to-r from-domous-blue via-domous-purple to-domous-pink p-[2px]">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                    <IconComponent className="h-7 w-7" style={{stroke: 'url(#gradient-solution)'}} />
                  </div>
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient-solution" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--domous-blue))" />
                        <stop offset="50%" stopColor="hsl(var(--domous-purple))" />
                        <stop offset="100%" stopColor="hsl(var(--domous-pink))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-domous-dark mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-domous text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-domous">
            <Bot className="h-6 w-6" />
            <span>Inteligência Artificial incluída em todos os planos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;