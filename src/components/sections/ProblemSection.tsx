import { AlertTriangle, Clock, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "Perda de leads esquecidos no WhatsApp",
    description: "Mensagens importantes se perdem no meio de centenas de conversas"
  },
  {
    icon: Clock,
    title: "Atendimento lento e desorganizado",
    description: "Sem controle de quem respondeu o quê e quando responder"
  },
  {
    icon: TrendingDown,
    title: "Falta de clareza no funil de vendas",
    description: "Não sabe quantos leads tem, em que etapa estão ou quais são as chances"
  },
  {
    icon: Users,
    title: "Dificuldade de escalar comercial",
    description: "Impossível crescer sem perder qualidade no atendimento"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Reconhece esses <span className="text-domous-gradient">problemas</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A maioria das empresas perde oportunidades valiosas todos os dias por não ter controle sobre seus leads
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="card-domous text-center group hover:scale-105"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <IconComponent className="h-8 w-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-domous-dark mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-6 py-3 rounded-full text-lg font-medium">
            <AlertTriangle className="h-5 w-5" />
            <span>Cada lead perdido é receita que vai embora</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;