import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import domousLogo from "@/assets/domous-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={domousLogo} alt="Domous CRM" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-domous-dark hover:text-domous-accent-1 font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('solution')}
              className="text-domous-dark hover:text-domous-accent-1 font-medium transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection('benefits')}
              className="text-domous-dark hover:text-domous-accent-1 font-medium transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-domous-dark hover:text-domous-accent-1 font-medium transition-colors"
            >
              Planos
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="btn-domous"
              onClick={() => scrollToSection('pricing')}
            >
              Começar agora
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-domous-dark" />
            ) : (
              <Menu className="h-6 w-6 text-domous-dark" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/50 py-6">
            <nav className="flex flex-col space-y-4 px-6">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left text-domous-dark hover:text-domous-accent-1 font-medium transition-colors py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('solution')}
                className="text-left text-domous-dark hover:text-domous-accent-1 font-medium transition-colors py-2"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-left text-domous-dark hover:text-domous-accent-1 font-medium transition-colors py-2"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left text-domous-dark hover:text-domous-accent-1 font-medium transition-colors py-2"
              >
                Planos
              </button>
              <Button 
                className="btn-domous mt-4"
                onClick={() => scrollToSection('pricing')}
              >
                Começar agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;