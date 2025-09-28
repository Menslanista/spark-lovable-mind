import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Zap, 
  Eye, 
  Users, 
  Shield, 
  Sparkles,
  Activity,
  Search,
  Mic,
  Code2,
  Palette,
  BarChart3
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const AdvancedFeatures = () => {
  const { toast } = useToast();
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [performanceScore, setPerformanceScore] = useState(0);
  const [aiProcessing, setAiProcessing] = useState(false);

  useEffect(() => {
    // Simulate performance monitoring
    const interval = setInterval(() => {
      setPerformanceScore(Math.floor(Math.random() * 20) + 80);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const advancedFeatures = [
    {
      id: "voice-ai",
      title: "Voice AI Assistant",
      description: "Natural voice interaction with advanced speech recognition and synthesis",
      icon: Mic,
      color: "from-violet-500 to-purple-600",
      demo: () => {
        setAiProcessing(true);
        setTimeout(() => {
          setAiProcessing(false);
          toast({
            title: "Voice AI Activated",
            description: "Listening for your command...",
          });
        }, 2000);
      }
    },
    {
      id: "realtime-collab",
      title: "Real-time Collaboration",
      description: "Multi-user editing with live cursors and instant synchronization",
      icon: Users,
      color: "from-emerald-500 to-teal-600",
      demo: () => {
        toast({
          title: "Collaboration Mode",
          description: "3 users joined the session",
        });
      }
    },
    {
      id: "ai-code-gen",
      title: "AI Code Generation",
      description: "Generate production-ready code from natural language descriptions",
      icon: Code2,
      color: "from-blue-500 to-cyan-600",
      demo: () => {
        setActiveDemo("code-gen");
        setTimeout(() => setActiveDemo(null), 4000);
      }
    },
    {
      id: "visual-ai",
      title: "Visual AI Designer",
      description: "Transform sketches and wireframes into functional components",
      icon: Palette,
      color: "from-rose-500 to-pink-600",
      demo: () => {
        toast({
          title: "Visual AI Processing",
          description: "Converting sketch to React component...",
        });
      }
    },
    {
      id: "smart-debug",
      title: "Intelligent Debugging",
      description: "AI-powered error detection with automatic fix suggestions",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      demo: () => {
        toast({
          title: "Debug AI Active",
          description: "Analyzing code for potential issues...",
        });
      }
    },
    {
      id: "performance-ai",
      title: "Performance Optimizer",
      description: "Real-time performance analysis with optimization recommendations",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-600",
      demo: () => {
        setActiveDemo("performance");
        setTimeout(() => setActiveDemo(null), 3000);
      }
    }
  ];

  return (
    <section id="advanced-features" className="py-24 bg-gradient-to-b from-surface to-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-ai text-white border-0">
            <Sparkles className="w-3 h-3 mr-1" />
            Next-Generation Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai bg-clip-text text-transparent">
            Revolutionary AI Capabilities
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Experience the future of development with our cutting-edge AI features that push the boundaries of what's possible.
          </p>
        </div>

        {/* Performance Monitor */}
        <div className="mb-12">
          <Card className="p-6 bg-surface-elevated border-border shadow-elegant hover:shadow-glow transition-all duration-500">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-ai">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">System Performance</h3>
                  <p className="text-sm text-text-secondary">Real-time monitoring</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-text-primary">{performanceScore}%</div>
                <div className="text-xs text-text-secondary">Optimal</div>
              </div>
            </div>
            <Progress value={performanceScore} className="h-2" />
            <div className="flex justify-between mt-2 text-xs text-text-muted">
              <span>CPU: 23%</span>
              <span>Memory: 1.2GB</span>
              <span>Network: 45ms</span>
            </div>
          </Card>
        </div>

        {/* Advanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advancedFeatures.map((feature) => (
            <Card 
              key={feature.id}
              className="group p-6 bg-surface-elevated border-border shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>

              <Button 
                onClick={feature.demo}
                variant="outline" 
                size="sm"
                className="w-full border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                disabled={aiProcessing && feature.id === "voice-ai"}
              >
                {aiProcessing && feature.id === "voice-ai" ? (
                  <>
                    <div className="animate-pulse w-4 h-4 bg-primary rounded-full mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 mr-2" />
                    Try Demo
                  </>
                )}
              </Button>
            </Card>
          ))}
        </div>

        {/* Live Code Generation Demo */}
        {activeDemo === "code-gen" && (
          <Card className="p-8 bg-surface-elevated border-primary/20 shadow-glow animate-fade-in">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-gradient-ai mr-3">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary">AI Code Generation in Progress</h4>
            </div>
            <div className="bg-background rounded-lg p-4 font-mono text-sm">
              <div className="text-text-secondary mb-2">// Generating React component from: "Create a responsive card with hover effects"</div>
              <div className="text-green-400">
                <div className="animate-typing">const ResponsiveCard = (&#123; title, description &#125;) =&gt; &#123;</div>
                <div className="animate-typing" style={{ animationDelay: "1s" }}>  return (</div>
                <div className="animate-typing" style={{ animationDelay: "2s" }}>    &lt;div className="p-6 rounded-xl shadow-lg hover:scale-105"&gt;</div>
                <div className="animate-typing" style={{ animationDelay: "3s" }}>      &lt;h3&gt;&#123;title&#125;&lt;/h3&gt;</div>
              </div>
            </div>
          </Card>
        )}

        {/* Performance Analytics Demo */}
        {activeDemo === "performance" && (
          <Card className="p-8 bg-surface-elevated border-primary/20 shadow-glow animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-gradient-ai mr-3">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary">Performance Analysis</h4>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-green-400">98.7%</div>
                <div className="text-sm text-text-secondary">Performance Score</div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-blue-400">1.2s</div>
                <div className="text-sm text-text-secondary">Load Time</div>
              </div>
              <div className="text-center p-4 bg-surface rounded-lg">
                <div className="text-2xl font-bold text-purple-400">0.8MB</div>
                <div className="text-sm text-text-secondary">Bundle Size</div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};

export default AdvancedFeatures;