import { Check, X, Crown } from "lucide-react";

const features = [
  {
    feature: "IA Integrada",
    domous: true,
    competitor1: false,
    competitor2: "Adicional R$ 200/mês"
  },
  {
    feature: "Suporte em Português",
    domous: true,
    competitor1: false,
    competitor2: false
  },
  {
    feature: "WhatsApp Nativo",
    domous: true,
    competitor1: "Via terceiros",
    competitor2: true
  },
  {
    feature: "Setup Gratuito",
    domous: true,
    competitor1: "R$ 500-2000",
    competitor2: "R$ 800-1500"
  },
  {
    feature: "Sem Fidelidade",
    domous: true,
    competitor1: false,
    competitor2: false
  },
  {
    feature: "Preço Mensal",
    domous: "A partir de R$ 197",
    competitor1: "R$ 500-800",
    competitor2: "R$ 600-900"
  },
  {
    feature: "Consultoria Inclusa (Plano Avançado)",
    domous: true,
    competitor1: "R$ 2000/mês extra",
    competitor2: "Não disponível"
  },
  {
    feature: "Dashboard em Português",
    domous: true,
    competitor1: false,
    competitor2: false
  }
];

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Por que escolher o <span className="text-domous-gradient">Domous CRM</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comparação direta com os principais concorrentes do mercado
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="bg-white rounded-3xl shadow-card-domous overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-6 font-semibold text-domous-dark">Recursos</th>
                    <th className="text-center p-6 bg-gradient-domous text-white relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white text-domous-purple px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Crown className="h-3 w-3" />
                          <span>Melhor Escolha</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="font-bold text-lg">Domous CRM</div>
                        <div className="text-sm opacity-90">Feito no Brasil</div>
                      </div>
                    </th>
                    <th className="text-center p-6">
                      <div className="font-semibold text-gray-700">Concorrente A</div>
                      <div className="text-sm text-gray-500">CRM Internacional</div>
                    </th>
                    <th className="text-center p-6">
                      <div className="font-semibold text-gray-700">Concorrente B</div>
                      <div className="text-sm text-gray-500">CRM Internacional</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-b border-gray-100 hover:bg-gray-50 ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="p-6 font-medium text-domous-dark">
                        {item.feature}
                      </td>
                      <td className="p-6 text-center bg-gradient-to-r from-green-50 to-blue-50">
                        {typeof item.domous === 'boolean' ? (
                          item.domous ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
                              <Check className="h-5 w-5 text-white" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                              <X className="h-5 w-5 text-white" />
                            </div>
                          )
                        ) : (
                          <span className="font-semibold text-domous-purple">{item.domous}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof item.competitor1 === 'boolean' ? (
                          item.competitor1 ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
                              <Check className="h-5 w-5 text-white" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                              <X className="h-5 w-5 text-white" />
                            </div>
                          )
                        ) : (
                          <span className="text-gray-700">{item.competitor1}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof item.competitor2 === 'boolean' ? (
                          item.competitor2 ? (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full">
                              <Check className="h-5 w-5 text-white" />
                            </div>
                          ) : (
                            <div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
                              <X className="h-5 w-5 text-white" />
                            </div>
                          )
                        ) : (
                          <span className="text-gray-700">{item.competitor2}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-3xl p-8 shadow-card-domous max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-domous-dark mb-4">
              A escolha é óbvia
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Por que pagar mais por menos recursos quando você pode ter tudo no Domous 
              com suporte em português e sem fidelidade?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Melhor Preço", "IA Inclusa", "Suporte BR", "Sem Fidelidade"].map((benefit, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-domous-blue via-domous-purple to-domous-pink p-[2px]"
                >
                  <span className="block px-3 py-1 bg-white rounded-full text-domous-purple font-semibold">
                    {benefit}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;