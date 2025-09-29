import { TrendingUp, ShoppingCart, Store, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "Assessoria de Marketing + Tráfego Pago",
    description: "Transformamos negócios em marcas fortes na sua região com estratégias de tráfego pago e campanhas que trazem clientes todos os dias.",
    highlights: ["Campanhas Google Ads", "Facebook e Instagram Ads", "Estratégia de marca regional", "ROI garantido"]
  },
  {
    icon: ShoppingCart,
    title: "Assessoria de E-commerce",
    description: "Gestão estratégica de anúncios e otimização da loja virtual, sempre com foco em aumentar faturamento e ROI.",
    highlights: ["Otimização de conversões", "Gestão de marketplace", "Automação de vendas", "Analytics avançado"]
  },
  {
    icon: Store,
    title: "Implantação de Lojas Virtuais",
    description: "Criação de lojas completas e integradas em plataformas como Tray, prontas para vender em múltiplos canais.",
    highlights: ["Desenvolvimento completo", "Integração com CRM", "Design responsivo", "Treinamento incluso"]
  },
  {
    icon: Target,
    title: "Consultoria de Crescimento",
    description: "Mapeamos gargalos, desenhamos planos personalizados e criamos estratégias para escalar de forma sustentável.",
    highlights: ["Diagnóstico empresarial", "Plano de crescimento", "Metas e KPIs", "Acompanhamento mensal"]
  }
];

const differentials = [
  "Estratégia sempre antes da mídia",
  "Suporte próximo e em português", 
  "Foco em resultados reais, não promessas",
  "Experiência prática em diferentes nichos"
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-domous-dark mb-6">
            Muito além do CRM: <span className="text-domous-gradient">soluções completas</span> para crescer seu negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Na Domous, oferecemos serviços estratégicos que vão além da tecnologia. 
            Atuamos para estruturar, impulsionar e escalar empresas de diferentes segmentos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="card-domous group hover:shadow-xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-domous rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-domous-dark mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2">
                      {service.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-domous-accent-1 rounded-full mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Differentials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-domous-dark mb-12">
            Diferenciais Domous
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((differential, index) => (
              <div key={index} className="card-domous text-center group hover:shadow-lg">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-domous-purple/10 to-domous-accent-1/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-3 h-3 bg-domous-accent-1 rounded-full" />
                </div>
                <p className="text-domous-dark font-medium text-sm">
                  {differential}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-domous rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Pronto para acelerar seu crescimento?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Combine o poder do Domous CRM com nossas consultorias especializadas 
              e veja sua empresa crescer de forma sustentável e estratégica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-domous-purple hover:bg-gray-100 font-semibold px-8 py-4"
                onClick={() => window.open('https://domous.com.br', '_blank')}
              >
                Conheça todos os serviços no site
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <span className="text-white/80 text-sm">ou</span>
              
              <button className="text-white font-semibold underline hover:no-underline">
                Agende uma conversa estratégica
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;