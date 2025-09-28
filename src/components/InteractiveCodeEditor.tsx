import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Play, 
  Square, 
  Download, 
  Share2, 
  Code, 
  Eye,
  Sparkles,
  Zap,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const InteractiveCodeEditor = () => {
  const { toast } = useToast();
  const [isRunning, setIsRunning] = useState(false);
  const [currentCode, setCurrentCode] = useState("");
  const [executionTime, setExecutionTime] = useState(0);
  const [livePreview, setLivePreview] = useState(false);

  const codeExamples = {
    react: `import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InteractiveButton = () => {
  const [clicks, setClicks] = useState(0);
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg"
      onClick={() => setClicks(clicks + 1)}
    >
      Clicked {clicks} times
    </motion.button>
  );
};

export default InteractiveButton;`,
    typescript: `interface User {
  id: number;
  name: string;
  email: string;
  preferences: UserPreferences;
}

interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  notifications: boolean;
  language: string;
}

class UserManager {
  private users: Map<number, User> = new Map();
  
  async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const id = Date.now();
    const user: User = { id, ...userData };
    
    this.users.set(id, user);
    await this.saveToDatabase(user);
    
    return user;
  }
  
  private async saveToDatabase(user: User): Promise<void> {
    // Simulated API call
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log('User saved:', user.name);
  }
}`,
    python: `import asyncio
from typing import List, Dict, Optional
from dataclasses import dataclass
from datetime import datetime

@dataclass
class AIModel:
    name: str
    version: str
    accuracy: float
    training_date: datetime
    
class AIModelManager:
    def __init__(self):
        self.models: Dict[str, AIModel] = {}
        
    async def train_model(self, name: str, data: List[Dict]) -> AIModel:
        print(f"Training model: {name}")
        
        # Simulate training process
        for i in range(10):
            await asyncio.sleep(0.1)
            progress = (i + 1) * 10
            print(f"Training progress: {progress}%")
            
        model = AIModel(
            name=name,
            version="1.0.0",
            accuracy=0.95 + (len(data) * 0.001),
            training_date=datetime.now()
        )
        
        self.models[name] = model
        return model

# Usage
async def main():
    manager = AIModelManager()
    model = await manager.train_model("sentiment_analyzer", [])
    print(f"Model trained: {model.name} - Accuracy: {model.accuracy:.2%}")

asyncio.run(main())`
  };

  const runCode = async () => {
    setIsRunning(true);
    setExecutionTime(0);
    
    const startTime = Date.now();
    
    // Simulate code execution with real-time timing
    const timer = setInterval(() => {
      setExecutionTime(Date.now() - startTime);
    }, 10);
    
    // Simulate execution time
    await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
    
    clearInterval(timer);
    setIsRunning(false);
    
    toast({
      title: "Code Executed Successfully",
      description: `Execution completed in ${(Date.now() - startTime)}ms`,
    });
  };

  const toggleLivePreview = () => {
    setLivePreview(!livePreview);
    toast({
      title: livePreview ? "Live Preview Disabled" : "Live Preview Enabled",
      description: livePreview ? "Manual execution mode" : "Real-time updates active",
    });
  };

  useEffect(() => {
    setCurrentCode(codeExamples.react);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-surface-elevated to-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-gradient-ai text-white border-0">
            <Code className="w-3 h-3 mr-1" />
            Interactive Development
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-ai bg-clip-text text-transparent">
            Live Code Environment
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience real-time code execution with advanced debugging and performance monitoring
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="p-6 bg-surface-elevated border-border shadow-elegant">
            {/* Editor Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <span className="text-text-secondary text-sm">Advanced Code Editor</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLivePreview}
                  className={livePreview ? "bg-primary/10 border-primary/40" : ""}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {livePreview ? "Live" : "Manual"}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={runCode}
                  disabled={isRunning}
                  className="bg-gradient-ai text-white border-0 hover:opacity-90"
                >
                  {isRunning ? (
                    <>
                      <Square className="w-4 h-4 mr-2" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Execute
                    </>
                  )}
                </Button>
                
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Execution Stats */}
            {(isRunning || executionTime > 0) && (
              <div className="mb-6 p-4 bg-surface rounded-lg border border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      {isRunning ? (
                        <div className="animate-pulse w-2 h-2 bg-green-400 rounded-full" />
                      ) : (
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                      )}
                      <span className="text-sm text-text-secondary">
                        {isRunning ? "Executing..." : "Completed"}
                      </span>
                    </div>
                    
                    <div className="text-sm text-text-secondary">
                      Execution time: <span className="font-mono text-text-primary">{executionTime}ms</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-xs text-text-muted">
                    <span>Memory: 2.4MB</span>
                    <span>CPU: 12%</span>
                    <span>Network: 0 requests</span>
                  </div>
                </div>
              </div>
            )}

            {/* Code Editor Tabs */}
            <Tabs defaultValue="react" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3 bg-surface">
                <TabsTrigger value="react" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  React/JSX
                </TabsTrigger>
                <TabsTrigger value="typescript" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  TypeScript
                </TabsTrigger>
                <TabsTrigger value="python" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Python
                </TabsTrigger>
              </TabsList>

              {Object.entries(codeExamples).map(([lang, code]) => (
                <TabsContent key={lang} value={lang} className="space-y-4">
                  <Card className="p-6 bg-background border border-border">
                    <pre className="text-sm overflow-x-auto">
                      <code className="text-text-primary whitespace-pre-wrap font-mono leading-relaxed">
                        {code}
                      </code>
                    </pre>
                  </Card>
                  
                  {/* Live Preview for React */}
                  {lang === 'react' && livePreview && (
                    <Card className="p-6 bg-gradient-to-br from-surface to-surface-elevated border border-primary/20">
                      <div className="flex items-center mb-4">
                        <Sparkles className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm font-medium text-text-primary">Live Preview</span>
                      </div>
                      <div className="flex justify-center">
                        <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition-transform">
                          Interactive Demo Button
                        </button>
                      </div>
                    </Card>
                  )}
                </TabsContent>
              ))}
            </Tabs>

            {/* AI Suggestions */}
            <Card className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-gradient-ai">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">AI Suggestions</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3 h-3 text-green-400 mr-2" />
                      Consider adding error boundaries for better error handling
                    </li>
                    <li className="flex items-center">
                      <AlertTriangle className="w-3 h-3 text-yellow-400 mr-2" />
                      Performance: Memoize the button component to prevent unnecessary re-renders
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="w-3 h-3 text-green-400 mr-2" />
                      Accessibility: Add proper ARIA labels for screen readers
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCodeEditor;