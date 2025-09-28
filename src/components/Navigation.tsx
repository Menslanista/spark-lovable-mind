import { Button } from "@/components/ui/button";
import { Zap, Code, Brain, Settings } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-ai rounded-lg flex items-center justify-center shadow-ai">
            <Brain className="w-5 h-5 text-background" />
          </div>
          <span className="text-xl font-bold bg-gradient-ai bg-clip-text text-transparent">
            LovableAdvanced
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#capabilities" className="text-text-secondary hover:text-text-primary transition-smooth">
            Capabilities
          </a>
          <a href="#playground" className="text-text-secondary hover:text-text-primary transition-smooth">
            Playground
          </a>
          <a href="#docs" className="text-text-secondary hover:text-text-primary transition-smooth">
            Documentation
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <Button variant="default" size="sm" className="bg-gradient-ai hover:opacity-90 transition-smooth shadow-ai">
            <Zap className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;