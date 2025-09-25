import { useState } from "react";
import { ArrowRight, Brain, Users, BarChart3, Shield, BookOpen, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Landing = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Evaluation",
      description: "Linear Law-based Feature Transformation with Sentiment Analysis for accurate intern assessment",
      badge: "AI"
    },
    {
      icon: Users,
      title: "Multi-Role Management",
      description: "Seamless coordination between students, advisors, and company supervisors",
      badge: "Collaboration"
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Comprehensive dashboards with progress tracking and performance insights",
      badge: "Analytics"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with role-based access control",
      badge: "Security"
    }
  ];

  const roles = [
    {
      id: "student",
      title: "Student",
      icon: GraduationCap,
      description: "Track your internship progress, submit reports, and receive AI-powered feedback",
      color: "bg-primary"
    },
    {
      id: "advisor",
      title: "University Advisor",
      icon: BookOpen,
      description: "Monitor student progress, review evaluations, and coordinate with companies",
      color: "bg-ai"
    },
    {
      id: "supervisor",
      title: "Company Supervisor",
      icon: Building2,
      description: "Evaluate interns, provide feedback, and access AI-powered insights",
      color: "bg-success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">InternConnect</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-background via-primary/5 to-ai/10">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-ai/10 text-ai border-ai/20">
            AI-Powered Internship Management
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-ai bg-clip-text text-transparent">
            Bridge Universities & Industry with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            InternConnect revolutionizes internship management through Linear Law-based Feature Transformation 
            and advanced sentiment analysis, creating seamless connections between students, advisors, and supervisors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant">
              Start Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Intelligent Internship Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of internship coordination with our AI-powered platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 border-border/50">
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center ${
                    feature.badge === "AI" ? "bg-gradient-ai" : "bg-gradient-primary"
                  } mb-4`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="w-fit mx-auto mb-2">
                    {feature.badge}
                  </Badge>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Choose Your Role
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access tailored dashboards designed for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {roles.map((role) => (
              <Card 
                key={role.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-elegant ${
                  selectedRole === role.id ? 'ring-2 ring-primary shadow-elegant' : ''
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${role.color} flex items-center justify-center mb-4`}>
                    <role.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed mb-6">
                    {role.description}
                  </CardDescription>
                  <Button 
                    className="w-full" 
                    variant={selectedRole === role.id ? "default" : "outline"}
                  >
                    Access Dashboard
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-background to-ai/10">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Transform Your Internship Program?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of students, advisors, and companies already using InternConnect
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant">
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/50 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-hero rounded-md flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-foreground">InternConnect</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 InternConnect. Bridging Universities & Industry with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;