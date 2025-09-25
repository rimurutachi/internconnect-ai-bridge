import { useState } from "react";
import { 
  Users, 
  Brain, 
  FileText, 
  BarChart3, 
  MessageSquare,
  Calendar,
  Star,
  Target,
  Clock,
  CheckCircle,
  TrendingUp,
  Award,
  Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const SupervisorDashboard = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [selectedIntern, setSelectedIntern] = useState<number | null>(null);

  const companyStats = [
    {
      title: "Active Interns",
      value: "8",
      description: "Current semester",
      icon: Users,
      color: "text-primary"
    },
    {
      title: "AI Evaluations",
      value: "45",
      description: "This month",
      icon: Brain,
      color: "text-ai"
    },
    {
      title: "Avg Performance",
      value: "8.6/10",
      description: "Team average",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Completion Rate",
      value: "94%",
      description: "On-time submissions",
      icon: Target,
      color: "text-warning"
    }
  ];

  const interns = [
    {
      id: 1,
      name: "Alex Chen",
      university: "MIT",
      advisor: "Prof. David Smith",
      department: "Software Engineering",
      startDate: "Sep 2024",
      aiScore: 8.7,
      progress: 68,
      lastSubmission: "Weekly Report #9",
      skills: ["React", "Node.js", "API Design"],
      performance: "excellent"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      university: "Stanford",
      advisor: "Dr. Lisa Wong",
      department: "Data Science",
      startDate: "Sep 2024",
      aiScore: 9.1,
      progress: 75,
      lastSubmission: "Data Analysis Report",
      skills: ["Python", "Machine Learning", "SQL"],
      performance: "outstanding"
    },
    {
      id: 3,
      name: "Mike Davis",
      university: "UC Berkeley",
      advisor: "Prof. John Anderson",
      department: "Product Management",
      startDate: "Sep 2024",
      aiScore: 8.3,
      progress: 62,
      lastSubmission: "Product Strategy Doc",
      skills: ["Strategy", "Analytics", "Leadership"],
      performance: "good"
    }
  ];

  const recentEvaluations = [
    {
      intern: "Alex Chen",
      type: "Weekly Report",
      aiScore: 8.9,
      feedback: "Excellent technical documentation with clear problem-solving approach",
      date: "2 days ago",
      status: "completed"
    },
    {
      intern: "Sarah Johnson",
      type: "Project Milestone",
      aiScore: 9.2,
      feedback: "Outstanding data analysis and insightful recommendations",
      date: "3 days ago",
      status: "completed"
    },
    {
      intern: "Mike Davis",
      type: "Product Proposal",
      aiScore: 8.1,
      feedback: "Good strategic thinking, could improve on market analysis depth",
      date: "1 week ago",
      status: "pending-review"
    }
  ];

  const getPerformanceColor = (performance: string) => {
    switch (performance) {
      case "outstanding": return "text-ai bg-ai/10 border-ai/20";
      case "excellent": return "text-success bg-success/10 border-success/20";
      case "good": return "text-primary bg-primary/10 border-primary/20";
      default: return "text-muted-foreground bg-muted border-border";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Supervisor Dashboard</h1>
              <p className="text-sm text-muted-foreground">Sarah Wilson - Senior Engineering Manager, TechCorp Inc.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-gradient-ai hover:opacity-90">
              <Brain className="w-4 h-4 mr-2" />
              AI Insights
            </Button>
            <Button size="sm" variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Messages
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {companyStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-card transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Performance Overview */}
            <Card className="bg-gradient-to-br from-ai/5 to-ai/10 border-ai/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-ai" />
                    <CardTitle className="text-ai">AI Performance Analytics</CardTitle>
                  </div>
                  <Badge className="bg-ai/10 text-ai border-ai/20">LLT + Sentiment Analysis</Badge>
                </div>
                <CardDescription>
                  Advanced evaluation insights using Linear Law-based Feature Transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-ai mb-1">8.6</div>
                    <div className="text-xs text-muted-foreground">Team Average</div>
                    <Progress value={86} className="mt-2" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success mb-1">94%</div>
                    <div className="text-xs text-muted-foreground">Technical Skills</div>
                    <Progress value={94} className="mt-2" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">87%</div>
                    <div className="text-xs text-muted-foreground">Communication</div>
                    <Progress value={87} className="mt-2" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warning mb-1">91%</div>
                    <div className="text-xs text-muted-foreground">Initiative</div>
                    <Progress value={91} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="interns" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="interns">My Interns</TabsTrigger>
                <TabsTrigger value="evaluations">Evaluations</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>
              
              <TabsContent value="interns" className="space-y-4">
                <Card>
                  <CardContent className="p-0">
                    {interns.map((intern) => (
                      <div 
                        key={intern.id} 
                        className={`p-6 border-b last:border-b-0 hover:bg-muted/20 transition-colors cursor-pointer ${
                          selectedIntern === intern.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''
                        }`}
                        onClick={() => setSelectedIntern(selectedIntern === intern.id ? null : intern.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h3 className="text-lg font-semibold text-foreground">{intern.name}</h3>
                              <Badge className={getPerformanceColor(intern.performance)}>
                                {intern.performance}
                              </Badge>
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-ai fill-current" />
                                <span className="text-sm font-medium text-ai">{intern.aiScore}/10</span>
                              </div>
                            </div>
                            
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="text-sm text-muted-foreground mb-1">University & Department</div>
                                <div className="text-sm font-medium">{intern.university} - {intern.department}</div>
                              </div>
                              <div>
                                <div className="text-sm text-muted-foreground mb-1">Academic Advisor</div>
                                <div className="text-sm font-medium">{intern.advisor}</div>
                              </div>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <div className="text-sm text-muted-foreground mb-1">Progress</div>
                                <div className="flex items-center space-x-2">
                                  <Progress value={intern.progress} className="w-32" />
                                  <span className="text-sm font-medium">{intern.progress}%</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-muted-foreground mb-1">Latest Submission</div>
                                <div className="text-sm font-medium">{intern.lastSubmission}</div>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-4">
                              {intern.skills.map((skill, skillIndex) => (
                                <Badge key={skillIndex} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        {selectedIntern === intern.id && (
                          <div className="mt-4 pt-4 border-t space-y-4">
                            <div className="grid md:grid-cols-3 gap-4">
                              <Button className="w-full" size="sm">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Send Message
                              </Button>
                              <Button className="w-full" size="sm" variant="outline">
                                <BarChart3 className="w-4 h-4 mr-2" />
                                View Analytics
                              </Button>
                              <Button className="w-full bg-gradient-ai hover:opacity-90" size="sm">
                                <Brain className="w-4 h-4 mr-2" />
                                AI Evaluation
                              </Button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="evaluations">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Evaluations</CardTitle>
                    <CardDescription>AI-powered assessment results and feedback</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentEvaluations.map((evaluation, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-medium text-foreground">{evaluation.intern}</div>
                            <div className="text-sm text-muted-foreground">{evaluation.type}</div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center space-x-1 mb-1">
                              <Star className="w-4 h-4 text-ai fill-current" />
                              <span className="font-semibold text-ai">{evaluation.aiScore}/10</span>
                            </div>
                            <Badge variant={evaluation.status === "completed" ? "default" : "secondary"}>
                              {evaluation.status === "completed" ? "Complete" : "Pending"}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{evaluation.feedback}</p>
                        <div className="text-xs text-muted-foreground">{evaluation.date}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="feedback">
                <Card>
                  <CardHeader>
                    <CardTitle>Provide Feedback</CardTitle>
                    <CardDescription>Share your insights to help interns grow</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Select Intern
                      </label>
                      <select className="w-full p-2 border rounded-md bg-background">
                        <option value="">Choose an intern...</option>
                        {interns.map((intern) => (
                          <option key={intern.id} value={intern.id}>
                            {intern.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Feedback
                      </label>
                      <Textarea 
                        placeholder="Share your thoughts on the intern's performance, areas of improvement, and strengths..."
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                    
                    <div className="flex justify-between">
                      <Button variant="outline">Save Draft</Button>
                      <Button className="bg-gradient-primary hover:opacity-90">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Submit Feedback
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Building2 className="w-5 h-5 mr-2" />
                  TechCorp Inc.
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">Department</div>
                  <div className="font-medium">Software Engineering</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Program Duration</div>
                  <div className="font-medium">12 weeks</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Partnership Since</div>
                  <div className="font-medium">2020</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Meeting
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <FileText className="w-4 h-4 mr-2" />
                  Export Reports
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Award className="w-4 h-4 mr-2" />
                  Intern Certificates
                </Button>
                <Button className="w-full justify-start bg-gradient-ai hover:opacity-90 text-white">
                  <Brain className="w-4 h-4 mr-2" />
                  Bulk AI Analysis
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Mid-term Evaluations</div>
                    <div className="text-xs text-muted-foreground">Due in 3 days</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Project Presentations</div>
                    <div className="text-xs text-muted-foreground">Due in 1 week</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupervisorDashboard;