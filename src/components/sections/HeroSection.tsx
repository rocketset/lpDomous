import { useState } from "react";
import { ChevronRight, MessageCircle, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import dashboardImage from "@/assets/dashboard-domous.png";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-domous-purple/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-domous-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-6 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block text-domous-dark">Transforme</span>
                <span className="block text-domous-gradient">conversas em clientes</span>
                <span className="block text-domous-dark">com CRM + IA no WhatsApp</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Automatize seu atendimento, nunca mais perca leads e aumente conversões
                com o CRM mais inteligente do mercado.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <Button 
                size="lg" 
                className="btn-domous text-lg px-8 py-6 group"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Quero meu CRM agora
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-domous-green" />
                  <span>Setup gratuito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-domous-purple" />
                  <span>IA em todos os planos</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-domous-accent-1" />
                  <span>Suporte em português</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative flex justify-center items-center">
            <div 
              className="dashboard-3d max-w-2xl w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative">
                {/* Main Dashboard */}
                <div className="dashboard-layer relative rounded-3xl overflow-hidden shadow-domous bg-white">
                  <img
                    src={dashboardImage}
                    alt="Dashboard do Domous CRM com Inteligência Artificial"
                    className="w-full h-auto"
                  />
                  
                  {/* Floating Elements */}
                  <div className={`absolute top-8 -right-4 transition-all duration-500 ${isHovered ? 'transform translate-x-2 -translate-y-2' : ''}`}>
                    <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-domous-dark">IA Online</span>
                      </div>
                    </div>
                  </div>

                  <div className={`absolute bottom-8 -left-4 transition-all duration-500 ${isHovered ? 'transform -translate-x-2 translate-y-2' : ''}`}>
                    <div className="bg-domous-gradient text-white rounded-2xl p-4 shadow-lg">
                      <div className="text-sm font-medium">+47% conversões</div>
                      <div className="text-xs opacity-80">este mês</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;