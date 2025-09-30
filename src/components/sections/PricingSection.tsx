import { Check, Crown, Sparkles, Users, MessageCircle, Headphones, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essencial",
    price: "197",
    originalPrice: null,
    description: "Ideal para quem está começando a organizar o atendimento",
    popular: false,
    features: [
      "1 usuário incluso",
      "1 conexão WhatsApp",
      "Todas as funcionalidades completas",
      "IA integrada",
      "Suporte via WhatsApp",
      "Conta ativa em minutos"
    ],
    cta: "Começar com o Essencial",
    link: "https://pay.hotmart.com/K102155992V?off=53rfm1yf",
    icon: MessageCircle
  },
  {
    name: "Profissional",
    price: "297",
    originalPrice: null,
    description: "Perfeito para empresas que querem escalar",
    popular: true,
    features: [
      "Até 3 usuários",
      "Até 2 conexões WhatsApp",
      "Todas as funcionalidades completas",
      "IA integrada avançada",
      "Relatórios detalhados e segmentados",
      "Suporte prioritário",
      "Conta ativa em minutos"
    ],
    cta: "Quero o Profissional",
    link: "https://pay.hotmart.com/K102155992V?off=lx81guor",
    bonus: "Por apenas R$ 100 a mais que o Essencial, você triplica usuários e conexões",
    icon: Crown
  },
  {
    name: "Avançado",
    price: "369",
    originalPrice: null,
    description: "Para equipes comerciais que precisam de performance máxima",
    popular: false,
    features: [
      "Até 5 usuários",
      "Até 3 conexões WhatsApp",
      "Todas as funcionalidades completas",
      "IA integrada premium",
      "Campanhas segmentadas avançadas",
      "Integração via API",
      "Assessoria Domous inclusa",
      "Suporte premium"
    ],
    cta: "Quero o Avançado",
    link: "https://pay.hotmart.com/K102155992V?off=uykcul5k",
    bonus: "Por menos que metade do custo de um atendente júnior, você tem CRM completo + assessoria",
    icon: Sparkles
  },
  {
    name: "Enterprise",
    price: "Sob Consulta",
    originalPrice: null,
    description: "Para empresas que precisam de escala e personalização",
    popular: false,
    features: [
      "Usuários ilimitados",
      "Conexões ilimitadas",
      "Todas as funcionalidades completas",
      "IA customizada",
      "APIs, automações e integrações exclusivas",
      "Customizações sob demanda",
      "Treinamentos dedicados",
      "Gerente de conta exclusivo"
    ],
    cta: "Solicitar Proposta Enterprise",
    link: "https://wa.me/5583981195186",
    icon: Users
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-domous text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Zap className="h-4 w-4" />
            <span>Oferta especial para novos clientes</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-domous-dark mb-6">
            Outros CRMs com IA custam de <span className="text-red-500">R$ 500 a R$ 800/mês</span>.<br />
            Na Domous você tem <span className="text-domous-gradient">tudo isso</span> — a partir de R$ 197/mês.
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
            E para novos clientes, o <strong className="text-domous-accent-1">primeiro mês sai por apenas R$ 97</strong> use o cupom <strong className="text-domous-accent-1">DOMOUSCRM</strong>, conta ativa em minutos.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "bg-gradient-domous text-white shadow-domous border-2 border-transparent scale-105"
                    : "card-domous"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white text-domous-purple px-4 py-2 rounded-full text-sm font-bold">
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                    plan.popular ? "bg-white/20" : "bg-gradient-domous"
                  }`}>
                    <IconComponent className={`h-8 w-8 ${plan.popular ? "text-white" : "text-white"}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-domous-dark"}`}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    {plan.price === "Sob Consulta" ? (
                      <div className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-domous-dark"}`}>
                        {plan.price}
                      </div>
                    ) : (
                      <>
                        <div className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-domous-dark"}`}>
                          R$ {plan.price}
                          <span className="text-lg font-normal">/mês</span>
                        </div>
                        <div className={`text-sm ${plan.popular ? "text-white/80" : "text-muted-foreground"}`}>
                          Primeiro mês: R$ 97
                        </div>
                      </>
                    )}
                  </div>
                  
                  <p className={`text-sm leading-relaxed ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-white" : "text-domous-green"
                      }`} />
                      <span className={`text-sm ${plan.popular ? "text-white/90" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.bonus && (
                  <div className={`text-xs font-medium mb-6 p-3 rounded-xl ${
                    plan.popular 
                      ? "bg-white/10 text-white/90" 
                      : "bg-domous-accent-1/10 text-domous-accent-1"
                  }`}>
                    💡 {plan.bonus}
                  </div>
                )}

                <Button
                  className={`w-full font-semibold py-6 text-base group ${
                    plan.popular
                      ? "bg-white text-domous-purple hover:bg-white/90"
                      : "btn-domous"
                  }`}

                  onClick={() => window.open(plan.link, "_blank")}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Setup & Training Add-on */}
        <div className="text-center mt-16">
          <div className="rounded-3xl p-8 max-w-4xl mx-auto bg-gradient-to-r from-domous-blue via-domous-purple to-domous-pink p-[3px]">
            <div className="bg-white rounded-3xl p-8 text-domous-dark">
              <h3 className="text-2xl font-bold mb-4">
                🚀 Setup Completo + Treinamento Especializado
              </h3>
              <p className="text-lg mb-6">
                Quer começar com tudo configurado e sua equipe 100% treinada? 
                Oferecemos implementação completa para você focar apenas nos resultados.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="font-semibold mb-3">✅ Setup Completo Inclui:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Configuração completa da IA personalizada</li>
                    <li>• Importação e organização de contatos</li>
                    <li>• Criação de funil de vendas customizado</li>
                    <li>• Templates de mensagens para seu negócio</li>
                    <li>• Integrações com suas ferramentas atuais</li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h4 className="font-semibold mb-3">🎓 Treinamento Inclui:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Treinamento ao vivo para toda equipe (call de 1h)</li>
                    <li>• Manual personalizado do seu negócio</li>
                    <li>• Sessões de dúvidas por 30 dias</li>
                    <li>• Estratégias de conversão específicas</li>
                    <li>• Acompanhamento de resultados</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-2xl font-bold mb-2">
                  Investimento único: R$ 947
                </p>
                <p className="text-sm mb-6">
                  (Parcelável em até 3x no cartão)
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://wa.me/5583981195186?text=Olá! Gostaria de contratar o Setup Completo + Treinamento Especializado do Domous CRM por R$947." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-domous-purple text-white font-semibold px-8 py-3 rounded-xl hover:bg-domous-purple/90 transition-colors"
                  >
                    Quero Setup + Treinamento
                  </a>
                  <a 
                    href="https://wa.me/5583981195186?text=Olá! Gostaria de falar com um especialista sobre o Setup Completo + Treinamento do Domous CRM." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="border border-domous-purple text-domous-purple font-semibold px-8 py-3 rounded-xl hover:bg-domous-purple hover:text-white transition-colors"
                  >
                    Falar com especialista
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
