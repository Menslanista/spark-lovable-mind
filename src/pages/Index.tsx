import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import PlaygroundSection from "@/components/PlaygroundSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <CapabilitiesSection />
      <PlaygroundSection />
      
      {/* Footer */}
      <footer className="py-12 bg-surface-elevated border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-ai rounded-md" />
              <span className="text-text-primary font-semibold">LovableAdvanced</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-text-secondary">
              <a href="#" className="hover:text-text-primary transition-smooth">Documentation</a>
              <a href="#" className="hover:text-text-primary transition-smooth">API Reference</a>
              <a href="#" className="hover:text-text-primary transition-smooth">Community</a>
              <a href="#" className="hover:text-text-primary transition-smooth">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-text-muted">
            <p>© 2024 LovableAdvanced. Pushing the boundaries of AI-assisted development.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;