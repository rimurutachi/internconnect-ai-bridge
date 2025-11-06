import { AIProcessingVisualization } from "@/components/AIProcessingVisualization";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-ai-accent/5 to-background">
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold bg-gradient-to-r from-ai-primary to-ai-secondary bg-clip-text text-transparent">
            AI Evaluation Processing
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-time visualization of the InternConnect AI evaluation system
          </p>
        </div>
        <AIProcessingVisualization />
      </div>
    </div>
  );
};

export default Index;
