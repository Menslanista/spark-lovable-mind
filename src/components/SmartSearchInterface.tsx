import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Clock, 
  Star, 
  Folder, 
  FileText, 
  Code, 
  Image,
  Database,
  Zap,
  Brain,
  TrendingUp
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SmartSearchInterface = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);

  const mockResults = [
    {
      id: 1,
      type: "component",
      title: "Advanced Button Component",
      description: "Highly customizable button with animations and accessibility features",
      path: "/src/components/ui/button.tsx",
      score: 98,
      icon: Code,
      tags: ["React", "TypeScript", "Accessible"]
    },
    {
      id: 2,
      type: "function",
      title: "AI Text Generation",
      description: "Generate human-like text using advanced language models",
      path: "/src/utils/aiGenerator.ts",
      score: 95,
      icon: Brain,
      tags: ["AI", "NLP", "Generation"]
    },
    {
      id: 3,
      type: "hook",
      title: "usePerformanceMonitor",
      description: "Real-time performance monitoring and optimization suggestions",
      path: "/src/hooks/usePerformanceMonitor.ts",
      score: 92,
      icon: TrendingUp,
      tags: ["Performance", "Monitoring", "Optimization"]
    },
    {
      id: 4,
      type: "database",
      title: "User Analytics Schema",
      description: "Comprehensive user behavior tracking and analytics database design",
      path: "/database/schemas/analytics.sql",
      score: 89,
      icon: Database,
      tags: ["Database", "Analytics", "Schema"]
    },
    {
      id: 5,
      type: "asset",
      title: "Hero Background Animation",
      description: "Smooth gradient animation for hero sections with GPU acceleration",
      path: "/src/assets/animations/hero-bg.json",
      score: 87,
      icon: Image,
      tags: ["Animation", "Graphics", "Performance"]
    }
  ];

  const suggestions = [
    "React component with animations",
    "TypeScript interface for user data",
    "Performance optimization techniques",
    "AI-powered search algorithms",
    "Database schema for analytics",
    "Responsive design patterns",
    "Authentication flow implementation",
    "Real-time collaboration features"
  ];

  useEffect(() => {
    if (searchQuery.length > 2) {
      const filtered = suggestions.filter(s => 
        s.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 4));
    } else {
      setSearchSuggestions([]);
    }
  }, [searchQuery]);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setSearchQuery(query);
    
    // Simulate AI-powered search
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const filtered = mockResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.description.toLowerCase().includes(query.toLowerCase()) ||
      result.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    setSearchResults(filtered);
    setIsSearching(false);
    
    toast({
      title: "AI Search Complete",
      description: `Found ${filtered.length} relevant results using semantic analysis`,
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'component': return Code;
      case 'function': return Zap;
      case 'hook': return Brain;
      case 'database': return Database;
      case 'asset': return Image;
      default: return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'component': return 'from-blue-500 to-cyan-600';
      case 'function': return 'from-green-500 to-teal-600';
      case 'hook': return 'from-purple-500 to-pink-600';
      case 'database': return 'from-orange-500 to-red-600';
      case 'asset': return 'from-indigo-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-surface to-surface-elevated">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-ai text-white border-0">
            <Search className="w-3 h-3 mr-1" />
            Intelligent Search
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai bg-clip-text text-transparent">
            AI-Powered Code Discovery
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Find exactly what you need with semantic search, intelligent suggestions, and context-aware results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search Interface */}
          <Card className="p-8 mb-8 bg-surface-elevated border-border shadow-elegant">
            <div className="relative">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted w-5 h-5" />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                    placeholder="Search components, functions, hooks, or describe what you need..."
                    className="pl-12 pr-4 py-4 text-lg bg-surface border-border focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                  />
                  
                  {/* Search Suggestions */}
                  {searchSuggestions.length > 0 && (
                    <Card className="absolute top-full left-0 right-0 mt-2 p-2 bg-surface-elevated border-border shadow-glow z-10">
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearch(suggestion)}
                          className="w-full text-left px-4 py-3 hover:bg-surface rounded-lg transition-colors text-text-secondary hover:text-text-primary"
                        >
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-3 text-text-muted" />
                            {suggestion}
                          </div>
                        </button>
                      ))}
                    </Card>
                  )}
                </div>
                
                <Button 
                  onClick={() => handleSearch(searchQuery)}
                  disabled={isSearching}
                  className="px-8 py-4 bg-gradient-ai text-white border-0 hover:opacity-90 text-lg"
                >
                  {isSearching ? (
                    <>
                      <div className="animate-spin w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5 mr-2" />
                      AI Search
                    </>
                  )}
                </Button>
                
                <Button variant="outline" className="px-4 py-4">
                  <Filter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-text-primary">
                  Search Results ({searchResults.length})
                </h3>
                <div className="text-sm text-text-secondary">
                  Powered by AI semantic analysis
                </div>
              </div>
              
              {searchResults.map((result) => {
                const IconComponent = getTypeIcon(result.type);
                return (
                  <Card key={result.id} className="p-6 bg-surface-elevated border-border shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getTypeColor(result.type)}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-semibold text-text-primary">
                              {result.title}
                            </h4>
                            <Badge variant="secondary" className="text-xs">
                              {result.type}
                            </Badge>
                            <div className="flex items-center text-xs text-text-muted">
                              <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                              {result.score}%
                            </div>
                          </div>
                          
                          <p className="text-text-secondary mb-3 leading-relaxed">
                            {result.description}
                          </p>
                          
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center text-sm text-text-muted">
                              <Folder className="w-4 h-4 mr-2" />
                              {result.path}
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2 mt-3">
                            {result.tags.map((tag: string, tagIndex: number) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm">
                        <FileText className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {/* No Results */}
          {searchResults.length === 0 && searchQuery && !isSearching && (
            <Card className="p-8 text-center bg-surface-elevated border-border">
              <Search className="w-12 h-12 text-text-muted mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-text-primary mb-2">No results found</h3>
              <p className="text-text-secondary">
                Try different keywords or explore our suggested searches above
              </p>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartSearchInterface;