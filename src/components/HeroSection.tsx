import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Advanced AI Assistant",
    "Code Generation Engine", 
    "Project Creator",
    "Creative Companion"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--ai-glow)/0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-glow/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-surface-elevated border border-border mb-8 hover:shadow-subtle transition-smooth">
          <Sparkles className="w-4 h-4 text-ai-glow mr-2" />
          <span className="text-sm text-text-secondary">Powered by Advanced AI Technology</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Meet Your New
          <br />
          <span className="bg-gradient-ai bg-clip-text text-transparent animate-pulse">
            {texts[currentText]}
          </span>
        </h1>

        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          LovableAdvanced combines cutting-edge AI with intuitive design to create, code, and innovate 
          beyond traditional boundaries. Experience the future of AI-assisted development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-gradient-ai hover:opacity-90 transition-smooth shadow-ai group">
            <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Start Creating
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-border hover:bg-surface-elevated transition-smooth">
            <Cpu className="w-5 h-5 mr-2" />
            Explore Capabilities
          </Button>
        </div>

        {/* AI Capabilities Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Code2, title: "Code Generation", desc: "Advanced multi-language coding" },
            { icon: Sparkles, title: "Creative AI", desc: "Images, content, and design" },
            { icon: Cpu, title: "Smart Analysis", desc: "Deep project understanding" }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-surface-elevated border border-border rounded-lg p-6 hover:shadow-elevated transition-smooth group hover:-translate-y-2"
            >
              <item.icon className="w-8 h-8 text-ai-glow mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2 text-text-primary">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;