import { ArrowRight, MessageCircle, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-dark text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,32,217,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(16,181,46,0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline */}
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Seus clientes estão no <span className="text-transparent bg-gradient-to-r from-green-400 via-purple-400 to-pink-400 bg-clip-text">WhatsApp</span>.
              <br />
              Sua empresa também deveria estar.
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Não deixe seus concorrentes saírem na frente. Comece hoje mesmo a transformar 
              conversas em vendas com o CRM mais inteligente do mercado.
            </p>
          </div>

          {/* Benefits Highlight */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-2xl flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Setup Imediato</h3>
                <p className="text-gray-300 text-sm">Configure em minutos, não em semanas</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">IA Inclusa</h3>
                <p className="text-gray-300 text-sm">Inteligência artificial em todos os planos</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Suporte BR</h3>
                <p className="text-gray-300 text-sm">Atendimento 100% em português</p>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/20">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Sparkles className="h-4 w-4" />
                <span>Oferta limitada</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Primeiro mês por apenas R$ 97
              </h3>
              
              <p className="text-gray-300 mb-6">
                Comece hoje com investimento mínimo: <strong className="text-green-400">R$ 97</strong>
              </p>
              
              <div className="text-sm text-gray-400">
                ⏰ Válido apenas para os próximos <strong className="text-white">50 clientes</strong>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="btn-domous text-2xl px-12 py-8 group shadow-2xl"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero meu CRM agora
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Sem permanência</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Suporte incluso</span>
              </div>
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-gray-400 text-sm mb-4">
              Transforme seu atendimento no WhatsApp hoje mesmo
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60 text-xs">
              <div>🔒 SSL Seguro</div>
              <div>✅ LGPD Compliance</div>
              <div>🇧🇷 Feito no Brasil</div>
              <div>⭐ 4.9/5 avaliação</div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                © 2024 Domous - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;