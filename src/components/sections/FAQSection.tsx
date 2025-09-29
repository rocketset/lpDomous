import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Preciso de equipe técnica para usar o Domous?",
    answer: "Não! O Domous foi desenvolvido para ser simples e intuitivo. Oferecemos setup gratuito e treinamento completo para sua equipe. Em poucos minutos você já estará usando todas as funcionalidades."
  },
  {
    question: "Quantas mensagens posso disparar por mês?",
    answer: "Não há limite de mensagens nos planos. Você pode enviar quantas mensagens precisar para seus contatos. O importante é seguir as boas práticas do WhatsApp para manter sua conta sempre ativa."
  },
  {
    question: "Precisa ser API oficial do WhatsApp?",
    answer: "Trabalhamos tanto com WhatsApp Web quanto com API oficial. Para a maioria dos negócios, o WhatsApp Web é suficiente e não tem custos adicionais. Para grandes volumes, recomendamos a API oficial (cobrança separada pelo WhatsApp)."
  },
  {
    question: "Tem fidelidade ou multa para cancelar?",
    answer: "Não! Você pode cancelar a qualquer momento sem multas ou taxas. Acreditamos que nosso produto deve conquistar você pelos resultados, não por contratos forçados."
  },
  {
    question: "Como funciona o primeiro mês por R$ 97?",
    answer: "É uma oferta especial para novos clientes testarem o sistema. No primeiro mês você paga apenas R$ 97 independente do plano escolhido. A partir do segundo mês, o valor fica o preço normal do plano."
  },
  {
    question: "A IA realmente funciona ou é só marketing?",
    answer: "A IA do Domous é treinada especificamente para vendas e atendimento no WhatsApp. Ela aprende com suas conversas e melhora com o tempo. Nossos clientes reportam 47% de aumento médio em conversões."
  },
  {
    question: "Posso integrar com meu sistema atual?",
    answer: "Sim! Temos API completa e integrações nativas com as principais ferramentas do mercado. No plano Avançado, oferecemos consultoria para integrações customizadas."
  },
  {
    question: "Como funciona o suporte técnico?",
    answer: "Oferecemos suporte 100% em português via WhatsApp, chat e e-mail. Tempo médio de resposta: 30 minutos em horário comercial. Planos superiores têm suporte prioritário."
  },
  {
    question: "Posso testar antes de contratar?",
    answer: "Sim! Além do primeiro mês com desconto, oferecemos demonstração gratuita onde mostramos o sistema funcionando na prática com seus dados reais."
  },
  {
    question: "O que acontece se eu ultrapassar o número de usuários?",
    answer: "Você pode adicionar usuários extras por R$ 47/mês cada um. Ou fazer upgrade para um plano superior a qualquer momento. Sem taxas ou multas para mudanças de plano."
  }
];

const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Perguntas <span className="text-domous-gradient">frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre o Domous CRM
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-domous hover:shadow-lg transition-all duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left p-6 focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-domous-dark pr-8">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem === index ? (
                      <Minus className="h-5 w-5 text-domous-purple" />
                    ) : (
                      <Plus className="h-5 w-5 text-domous-purple" />
                    )}
                  </div>
                </button>
                
                {openItem === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t pt-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-subtle rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-domous-dark mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão e te ajudar a escolher o melhor plano.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5583981195186?text=Olá! Gostaria de falar no WhatsApp sobre o Domous CRM." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-domous"
                >
                  Falar no WhatsApp
                </a>
                <a 
                  href="https://wa.me/5583981195186?text=Olá! Gostaria de ver uma demonstração do Domous CRM." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white text-domous-purple font-semibold rounded-xl border-2 border-domous-purple hover:bg-domous-purple hover:text-white transition-colors"
                >
                  Ver Demonstração
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;