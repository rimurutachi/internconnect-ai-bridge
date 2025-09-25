import { useState } from "react";
import { 
  Brain, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Calendar, 
  Upload,
  Bell,
  CheckCircle,
  Clock,
  AlertCircle,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const StudentDashboard = () => {
  const [aiProcessing, setAiProcessing] = useState(false);

  const stats = [
    {
      title: "Internship Progress",
      value: "68%",
      description: "8 weeks completed",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "AI Evaluation Score",
      value: "8.7/10",
      description: "Excellent performance",
      icon: Brain,
      color: "text-ai"
    },
    {
      title: "Reports Submitted",
      value: "12/15",
      description: "3 pending",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "Feedback Received",
      value: "24",
      description: "This month",
      icon: MessageSquare,
      color: "text-warning"
    }
  ];

  const recentActivities = [
    {
      type: "ai-evaluation",
      title: "AI Performance Analysis Completed",
      description: "Your latest report has been evaluated with a score of 9.2/10",
      time: "2 hours ago",
      status: "completed"
    },
    {
      type: "feedback",
      title: "Supervisor Feedback Received",
      description: "Excellent work on the project documentation",
      time: "1 day ago",
      status: "new"
    },
    {
      type: "report",
      title: "Weekly Report Due",
      description: "Submit your week 9 progress report",
      time: "3 days",
      status: "pending"
    }
  ];

  const handleAIAnalysis = () => {
    setAiProcessing(true);
    setTimeout(() => setAiProcessing(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Student Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Alex Chen</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-destructive text-xs p-0 flex items-center justify-center">
                3
              </Badge>
            </Button>
            <Button size="sm" className="bg-gradient-ai hover:opacity-90">
              <Brain className="w-4 h-4 mr-2" />
              AI Assistant
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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
            {/* AI Analysis Card */}
            <Card className="bg-gradient-to-br from-ai/5 to-ai/10 border-ai/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-ai" />
                    <CardTitle className="text-ai">AI Performance Analysis</CardTitle>
                  </div>
                  <Badge className="bg-ai/10 text-ai border-ai/20">LLT + Sentiment</Badge>
                </div>
                <CardDescription>
                  Get instant insights on your internship performance using our advanced AI evaluation system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Overall Performance Score</span>
                    <span className="text-2xl font-bold text-ai">8.7/10</span>
                  </div>
                  <Progress value={87} className="w-full" />
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold text-success">9.2</div>
                      <div className="text-xs text-muted-foreground">Technical Skills</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-primary">8.5</div>
                      <div className="text-xs text-muted-foreground">Communication</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-warning">8.4</div>
                      <div className="text-xs text-muted-foreground">Initiative</div>
                    </div>
                  </div>
                  <Button 
                    onClick={handleAIAnalysis}
                    disabled={aiProcessing}
                    className="w-full bg-gradient-ai hover:opacity-90 shadow-ai"
                  >
                    {aiProcessing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Processing Analysis...
                      </>
                    ) : (
                      <>
                        <Brain className="w-4 h-4 mr-2" />
                        Run New Analysis
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="reports" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>
              
              <TabsContent value="reports" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Submission Status</span>
                      <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Report
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { week: "Week 9", status: "pending", due: "In 3 days" },
                      { week: "Week 8", status: "submitted", score: "9.2/10" },
                      { week: "Week 7", status: "submitted", score: "8.8/10" }
                    ].map((report, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {report.status === "pending" ? (
                            <Clock className="w-5 h-5 text-warning" />
                          ) : (
                            <CheckCircle className="w-5 h-5 text-success" />
                          )}
                          <div>
                            <div className="font-medium">{report.week} Report</div>
                            <div className="text-sm text-muted-foreground">
                              {report.status === "pending" ? `Due ${report.due}` : `Score: ${report.score}`}
                            </div>
                          </div>
                        </div>
                        <Badge variant={report.status === "pending" ? "destructive" : "default"}>
                          {report.status === "pending" ? "Pending" : "Submitted"}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="feedback">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="font-medium">Sarah Johnson - Tech Supervisor</div>
                          <Badge className="bg-ai/10 text-ai">AI Analyzed</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          "Excellent work on the API documentation. Your attention to detail and clear explanations demonstrate strong technical communication skills."
                        </p>
                        <div className="text-xs text-muted-foreground">2 days ago</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <div className="flex-1">
                          <div className="font-medium">Team Meeting</div>
                          <div className="text-sm text-muted-foreground">Tomorrow, 2:00 PM</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === "completed" ? "bg-success" :
                      activity.status === "new" ? "bg-ai" : "bg-warning"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground">{activity.title}</div>
                      <div className="text-xs text-muted-foreground mb-1">{activity.description}</div>
                      <div className="text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="ghost">
                  <FileText className="w-4 h-4 mr-2" />
                  Submit Weekly Report
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message Supervisor
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;