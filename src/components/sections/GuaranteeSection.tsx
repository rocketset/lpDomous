import { Shield, CheckCircle, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4" />
              <span>Garantia de baixo risco</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
              Teste o Domous CRM <span className="text-domous-gradient">sem riscos</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Estamos tão confiantes no resultado que oferecemos total flexibilidade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-domous-dark mb-2">
                      Sem fidelidade
                    </h3>
                    <p className="text-muted-foreground">
                      Cancele a qualquer momento sem multas ou taxas adicionais.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-domous-dark mb-2">
                      Conta ativa rapidamente
                    </h3>
                    <p className="text-muted-foreground">
                      Sua conta fica pronta em minutos para você começar a usar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-domous-dark mb-2">
                      Suporte dedicado
                    </h3>
                    <p className="text-muted-foreground">
                      Treinamento completo e suporte em português para sua equipe.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-domous-dark mb-2">
                      Primeiro mês por R$ 97
                    </h3>
                    <p className="text-muted-foreground">
                      Teste todas as funcionalidades com investimento mínimo.
                    </p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="btn-domous w-full sm:w-auto"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Começar agora sem riscos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Content - Risk Comparison */}
            <div className="space-y-6">
              <div className="card-domous">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-domous-dark">Com o Domous</h3>
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-3" />
                    <span>Sem fidelidade ou multas</span>
                  </li>
                  <li className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-3" />
                    <span>Conta ativa em minutos</span>
                  </li>
                  <li className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-3" />
                    <span>Primeiro mês com desconto</span>
                  </li>
                  <li className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-3" />
                    <span>Suporte em português</span>
                  </li>
                </ul>
              </div>

              <div className="card-domous bg-red-50 border-red-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-red-700">Outros CRMs</h3>
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <X className="h-5 w-5 text-white" />
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-red-600">
                    <X className="h-4 w-4 mr-3" />
                    <span>Contratos de 12 meses</span>
                  </li>
                  <li className="flex items-center text-red-600">
                    <X className="h-4 w-4 mr-3" />
                    <span>Taxa de setup R$ 500-2000</span>
                  </li>
                  <li className="flex items-center text-red-600">
                    <X className="h-4 w-4 mr-3" />
                    <span>Preços de R$ 500-800/mês</span>
                  </li>
                  <li className="flex items-center text-red-600">
                    <X className="h-4 w-4 mr-3" />
                    <span>Suporte em inglês</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;