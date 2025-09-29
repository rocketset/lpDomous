import { CreditCard, Smartphone, Shield, Check } from "lucide-react";

const PaymentSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Formas de <span className="text-domous-gradient">pagamento</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Escolha a forma que for mais conveniente para você
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* PIX */}
            <div className="card-domous group hover:shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-domous-dark mb-4">
                  PIX
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pagamento instantâneo e seguro. Ativação imediata da sua conta após confirmação do pagamento.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-3" />
                    <span className="text-sm">Ativação instantânea</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-3" />
                    <span className="text-sm">Taxa zero</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Check className="h-4 w-4 mr-3" />
                    <span className="text-sm">Disponível 24/7</span>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl">
                  <p className="text-green-700 font-semibold text-sm">
                    🎉 Primeira escolha dos nossos clientes
                  </p>
                </div>
              </div>
            </div>

            {/* Cartão de Crédito */}
            <div className="card-domous group hover:shadow-xl">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CreditCard className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-domous-dark mb-4">
                  Cartão de Crédito
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pagamento recorrente automático. Sem preocupação com renovações mensais.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-blue-600">
                    <Check className="h-4 w-4 mr-3" />
                    <span className="text-sm">Cobrança automática</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Check className="h-4 w-4 mr-3" />
                    <span className="text-sm">Todas as bandeiras</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Check className="h-4 w-4 mr-3" />
                    <span className="text-sm">Cancelamento fácil</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-blue-700 font-semibold text-sm">
                    💳 Visa, Master, Elo, Amex, Hiper
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-12">
            <div className="bg-white rounded-3xl p-8 shadow-card-domous">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-center text-domous-dark mb-4">
                Pagamentos 100% Seguros
              </h3>
              
              <p className="text-center text-muted-foreground mb-6">
                Utilizamos criptografia de ponta e parceiros certificados para garantir a segurança total das suas transações.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Processamento</div>
                  <div className="font-semibold text-domous-dark">Asaas</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Certificação</div>
                  <div className="font-semibold text-domous-dark">SSL 256-bits</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">Compliance</div>
                  <div className="font-semibold text-domous-dark">PCI DSS Level 1</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentSection;