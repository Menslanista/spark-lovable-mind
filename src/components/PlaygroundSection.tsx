import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Send, 
  Code, 
  Palette, 
  Database, 
  Loader2, 
  CheckCircle,
  Copy,
  Play
} from "lucide-react";

const demoResponses = {
  code: `// React Component with TypeScript
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface TaskItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ 
  id, 
  title, 
  completed, 
  onToggle 
}) => {
  return (
    <div className="flex items-center space-x-3 p-4 rounded-lg border">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
        className="w-4 h-4"
      />
      <span className={completed ? 'line-through opacity-60' : ''}>
        {title}
      </span>
    </div>
  );
};

export default TaskItem;`,
  design: `/* Modern Design System */
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --surface-glass: rgba(255, 255, 255, 0.1);
  --shadow-elevated: 0 20px 40px rgba(0, 0, 0, 0.1);
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-section {
  background: var(--primary-gradient);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: var(--shadow-elevated);
  transition: var(--transition-smooth);
}

.glass-card {
  background: var(--surface-glass);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}`,
  database: `-- Advanced User Management Schema
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  username VARCHAR(50) UNIQUE NOT NULL,
  profile_data JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Indexes for performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_created_at ON users(created_at);`
};

const PlaygroundSection = () => {
  const [activeTab, setActiveTab] = useState("code");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setShowResult(false);
    
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="playground" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Play className="w-4 h-4 mr-2" />
            Interactive Playground
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Experience AI in Action
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Try LovableAdvanced's capabilities with real-time generation across code, 
            design, and database tasks.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="code" className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Code Generation</span>
              </TabsTrigger>
              <TabsTrigger value="design" className="flex items-center space-x-2">
                <Palette className="w-4 h-4" />
                <span>Design System</span>
              </TabsTrigger>
              <TabsTrigger value="database" className="flex items-center space-x-2">
                <Database className="w-4 h-4" />
                <span>Database Schema</span>
              </TabsTrigger>
            </TabsList>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Panel */}
              <Card className="bg-surface-elevated border-border">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-text-primary">
                    <Send className="w-5 h-5 text-ai-glow" />
                    <span>Your Prompt</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder={
                      activeTab === "code" ? "Create a React component for a todo item with TypeScript..." :
                      activeTab === "design" ? "Design a modern glass-morphism card component with gradients..." :
                      "Create a user management schema with RLS policies..."
                    }
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-32 bg-surface-subtle border-border text-text-primary placeholder:text-text-muted"
                  />
                  <Button
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating}
                    className="w-full bg-gradient-ai hover:opacity-90 transition-smooth"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Generate
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              {/* Output Panel */}
              <Card className="bg-surface-elevated border-border">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-text-primary">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-electric" />
                      <span>Generated Result</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(demoResponses[activeTab as keyof typeof demoResponses])}
                      className="opacity-60 hover:opacity-100"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {showResult || !prompt ? (
                    <div className="bg-surface-subtle rounded-lg p-4 border border-border">
                      <pre className="text-sm text-text-secondary whitespace-pre-wrap overflow-x-auto">
                        <code>{demoResponses[activeTab as keyof typeof demoResponses]}</code>
                      </pre>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-48 text-text-muted">
                      <div className="text-center space-y-2">
                        <div className="w-12 h-12 border-2 border-ai-glow/20 border-t-ai-glow rounded-full animate-spin mx-auto" />
                        <p>Enter a prompt and click Generate to see AI in action</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Example Prompts */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Example Prompts:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Create a TypeScript interface for user profiles",
                  "Design a modern pricing card component",
                  "Build a real-time chat database schema"
                ].map((example, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    onClick={() => setPrompt(example)}
                    className="justify-start text-left h-auto p-3 border-border hover:bg-surface-elevated transition-smooth"
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundSection;