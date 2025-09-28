import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Palette, 
  Database, 
  MessageSquare, 
  Zap, 
  Brain,
  FileText,
  Image,
  GitBranch,
  Workflow
} from "lucide-react";

const capabilities = [
  {
    category: "Code & Development",
    icon: Code,
    color: "ai-glow",
    features: [
      { name: "Multi-language Generation", desc: "TypeScript, Python, React, Node.js" },
      { name: "Architecture Planning", desc: "System design and scalability" },
      { name: "Debugging Assistant", desc: "Error detection and fixes" },
      { name: "Code Review", desc: "Best practices and optimization" }
    ]
  },
  {
    category: "Creative & Design",
    icon: Palette,
    color: "electric",
    features: [
      { name: "UI/UX Design", desc: "Modern, responsive interfaces" },
      { name: "Image Generation", desc: "AI-powered visual creation" },
      { name: "Brand Identity", desc: "Logos, colors, and typography" },
      { name: "Content Creation", desc: "Copy, documentation, and guides" }
    ]
  },
  {
    category: "Data & Intelligence",
    icon: Database,
    color: "ai-glow-soft",
    features: [
      { name: "Database Design", desc: "Schema optimization and queries" },
      { name: "API Integration", desc: "RESTful and GraphQL endpoints" },
      { name: "Analytics Setup", desc: "Tracking and insights" },
      { name: "Performance Monitoring", desc: "Real-time optimization" }
    ]
  },
  {
    category: "Collaboration",
    icon: MessageSquare,
    color: "electric-dim",
    features: [
      { name: "Interactive Chat", desc: "Context-aware conversations" },
      { name: "Project Management", desc: "Task planning and tracking" },
      { name: "Documentation", desc: "Auto-generated guides" },
      { name: "Team Workflows", desc: "Collaborative development" }
    ]
  }
];

const advancedFeatures = [
  { icon: Brain, title: "Neural Architecture", desc: "Advanced reasoning and problem-solving" },
  { icon: Zap, title: "Real-time Processing", desc: "Instant responses and live updates" },
  { icon: Workflow, title: "Workflow Automation", desc: "Streamlined development processes" },
  { icon: GitBranch, title: "Version Control", desc: "Integrated Git and deployment" },
  { icon: FileText, title: "Documentation AI", desc: "Automatic code and API docs" },
  { icon: Image, title: "Visual AI", desc: "Image analysis and generation" }
];

const CapabilitiesSection = () => {
  return (
    <section id="capabilities" className="py-24 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Advanced Capabilities
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Beyond Traditional AI Assistance
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience comprehensive AI capabilities that understand, create, and optimize 
            across every aspect of modern development.
          </p>
        </div>

        {/* Main Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {capabilities.map((category, idx) => (
            <Card key={idx} className="bg-surface-elevated border-border hover:shadow-elevated transition-smooth group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                    <category.icon className={`w-5 h-5 text-${category.color}`} />
                  </div>
                  <CardTitle className="text-text-primary">{category.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-text-primary">{feature.name}</h4>
                        <p className="text-sm text-text-secondary">{feature.desc}</p>
                      </div>
                      <Badge variant="secondary" className="ml-4 shrink-0">
                        AI
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advanced Features */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Advanced Features
          </h3>
          <p className="text-text-secondary">
            Cutting-edge AI technologies powering next-generation development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advancedFeatures.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-surface-subtle border border-border rounded-lg p-6 hover:bg-surface-elevated transition-smooth group hover:-translate-y-1"
            >
              <feature.icon className="w-8 h-8 text-ai-glow mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-text-primary mb-2">{feature.title}</h4>
              <p className="text-sm text-text-secondary">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;