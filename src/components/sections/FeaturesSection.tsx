import { MessageCircle, Bot, Send, Kanban, BarChart3, Users, Globe, Zap, Tag, Clock } from "lucide-react";

const featuresDetails = [
  {
    icon: MessageCircle,
    title: "Chat unificado",
    description: "Centralize todas as conversas do WhatsApp em uma única interface intuitiva",
    features: ["Multi-WhatsApp", "Histórico completo", "Busca avançada", "Tags personalizadas"]
  },
  {
    icon: Bot,
    title: "Automação completa (IA, follow-up, lembretes)",
    description: "Inteligência artificial que trabalha 24/7 qualificando e nutrindo seus leads",
    features: ["IA conversacional", "Follow-up automático", "Lembretes inteligentes", "Qualificação de leads"]
  },
  {
    icon: Send,
    title: "Disparos em massa e campanhas",
    description: "Envie mensagens segmentadas e crie campanhas personalizadas facilmente",
    features: ["Listas segmentadas", "Agendamento", "Templates personalizados", "Métricas de engajamento"]
  },
  {
    icon: Kanban,
    title: "Funil + Kanban",
    description: "Visualize e gerencie todo seu pipeline de vendas de forma visual e intuitiva",
    features: ["Arrastar e soltar", "Etapas customizáveis", "Tempo por etapa", "Probabilidades"]
  },
  {
    icon: BarChart3,
    title: "Relatórios e métricas",
    description: "Dashboards completos com todas as métricas que você precisa para crescer",
    features: ["ROI por campanha", "Funil de conversão", "Performance da equipe", "Relatórios customizados"]
  },
  {
    icon: Users,
    title: "Multiusuário e filas",
    description: "Gerencie sua equipe e distribua atendimentos de forma inteligente",
    features: ["Perfis de acesso", "Filas automáticas", "Transferência de chats", "Controle de presença"]
  },
  {
    icon: Zap,
    title: "Integrações via API",
    description: "Conecte o Domous com suas ferramentas favoritas e sistemas existentes",
    features: ["APIs REST", "Webhooks", "Zapier", "Integrações personalizadas"]
  },
  {
    icon: Tag,
    title: "Etiquetas e segmentação de contatos",
    description: "Organize e segmente seus contatos de forma inteligente para campanhas direcionadas",
    features: ["Tags automáticas", "Segmentação avançada", "Filtros personalizados", "Grupos dinâmicos"]
  },
  {
    icon: Clock,
    title: "Mensagens agendadas e rápidas",
    description: "Programe envios e tenha respostas prontas para agilizar o atendimento",
    features: ["Agendamento inteligente", "Respostas rápidas", "Templates salvos", "Automação por horário"]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Funcionalidades que fazem a <span className="text-domous-gradient">diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Cada recurso foi pensado para resolver problemas reais de empresas que vendem pelo WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresDetails.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="card-domous group hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mb-6 border-2 border-gradient-domous rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform bg-gradient-to-r from-domous-blue via-domous-purple to-domous-pink p-[2px]">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <IconComponent className="h-8 w-8" style={{stroke: 'url(#gradient)'}} />
                  </div>
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--domous-blue))" />
                        <stop offset="50%" stopColor="hsl(var(--domous-purple))" />
                        <stop offset="100%" stopColor="hsl(var(--domous-pink))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                <h3 className="text-2xl font-semibold text-domous-dark mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-domous-accent-1 rounded-full mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-card-domous max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-domous-dark mb-4">
              Tudo isso em uma única plataforma
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Pare de usar 5 ferramentas diferentes. O Domous centraliza tudo que você precisa 
              para vender pelo WhatsApp com inteligência artificial.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["CRM", "WhatsApp", "IA", "Automação", "Relatórios", "Campanhas"].map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-domous text-white rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;