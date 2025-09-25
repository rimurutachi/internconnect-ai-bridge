import { useState } from "react";
import { 
  Users, 
  Brain, 
  FileText, 
  BarChart3, 
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  MessageSquare,
  Filter,
  Search,
  Building2,
  GraduationCap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const AdvisorDashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const overviewStats = [
    {
      title: "Active Students",
      value: "24",
      description: "This semester",
      icon: GraduationCap,
      color: "text-primary"
    },
    {
      title: "AI Evaluations",
      value: "156",
      description: "Completed this month",
      icon: Brain,
      color: "text-ai"
    },
    {
      title: "Partner Companies",
      value: "12",
      description: "Active partnerships",
      icon: Building2,
      color: "text-success"
    },
    {
      title: "Avg Performance",
      value: "8.3/10",
      description: "Class average",
      icon: TrendingUp,
      color: "text-warning"
    }
  ];

  const students = [
    {
      id: 1,
      name: "Alex Chen",
      company: "TechCorp Inc.",
      supervisor: "Sarah Johnson",
      aiScore: 8.7,
      progress: 68,
      status: "on-track",
      lastReport: "2 days ago",
      flagged: false
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      company: "InnovateIO",
      supervisor: "Mike Davis",
      aiScore: 9.2,
      progress: 75,
      status: "excellent",
      lastReport: "1 day ago",
      flagged: false
    },
    {
      id: 3,
      name: "James Wilson",
      company: "StartupXYZ",
      supervisor: "Lisa Chen",
      aiScore: 6.8,
      progress: 45,
      status: "needs-attention",
      lastReport: "5 days ago",
      flagged: true
    },
    {
      id: 4,
      name: "Emily Brown",
      company: "DataTech Solutions",
      supervisor: "Robert Kim",
      aiScore: 8.9,
      progress: 82,
      status: "excellent",
      lastReport: "1 day ago",
      flagged: false
    }
  ];

  const recentAlerts = [
    {
      type: "performance",
      student: "James Wilson",
      message: "AI analysis indicates declining performance trend",
      priority: "high",
      time: "2 hours ago"
    },
    {
      type: "report",
      student: "Multiple Students",
      message: "3 students have overdue weekly reports",
      priority: "medium",
      time: "4 hours ago"
    },
    {
      type: "evaluation",
      student: "Maria Rodriguez",
      message: "Exceptional performance noted by supervisor",
      priority: "low",
      time: "1 day ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-success bg-success/10 border-success/20";
      case "on-track": return "text-primary bg-primary/10 border-primary/20";
      case "needs-attention": return "text-destructive bg-destructive/10 border-destructive/20";
      default: return "text-muted-foreground bg-muted border-border";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "excellent": return "Excellent";
      case "on-track": return "On Track";
      case "needs-attention": return "Needs Attention";
      default: return "Unknown";
    }
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
              <h1 className="text-xl font-semibold text-foreground">Advisor Dashboard</h1>
              <p className="text-sm text-muted-foreground">Prof. David Smith - Computer Science</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button size="sm" className="bg-gradient-ai hover:opacity-90">
              <Brain className="w-4 h-4 mr-2" />
              AI Insights
            </Button>
            <Button size="sm" variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Export Reports
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {overviewStats.map((stat, index) => (
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

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* AI Insights Card */}
            <Card className="bg-gradient-to-br from-ai/5 to-ai/10 border-ai/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Brain className="w-5 h-5 text-ai" />
                    <CardTitle className="text-ai">AI Performance Insights</CardTitle>
                  </div>
                  <Badge className="bg-ai/10 text-ai border-ai/20">Real-time Analysis</Badge>
                </div>
                <CardDescription>
                  Comprehensive overview of student performance using Linear Law-based Feature Transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success mb-1">89%</div>
                    <div className="text-sm text-muted-foreground">Students On Track</div>
                    <Progress value={89} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-ai mb-1">8.3</div>
                    <div className="text-sm text-muted-foreground">Avg AI Score</div>
                    <Progress value={83} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-warning mb-1">92%</div>
                    <div className="text-sm text-muted-foreground">Report Compliance</div>
                    <Progress value={92} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Students Management */}
            <Tabs defaultValue="students" className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="students">Students</TabsTrigger>
                  <TabsTrigger value="companies">Companies</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search students..." className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <TabsContent value="students">
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="border-b bg-muted/30">
                          <tr>
                            <th className="text-left p-4 font-medium">Student</th>
                            <th className="text-left p-4 font-medium">Company</th>
                            <th className="text-left p-4 font-medium">AI Score</th>
                            <th className="text-left p-4 font-medium">Progress</th>
                            <th className="text-left p-4 font-medium">Status</th>
                            <th className="text-left p-4 font-medium">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((student) => (
                            <tr key={student.id} className="border-b hover:bg-muted/20 transition-colors">
                              <td className="p-4">
                                <div className="flex items-center space-x-3">
                                  {student.flagged && (
                                    <AlertTriangle className="w-4 h-4 text-warning" />
                                  )}
                                  <div>
                                    <div className="font-medium">{student.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                      Last report: {student.lastReport}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div>
                                  <div className="font-medium">{student.company}</div>
                                  <div className="text-sm text-muted-foreground">{student.supervisor}</div>
                                </div>
                              </td>
                              <td className="p-4">
                                <div className="text-lg font-semibold text-ai">{student.aiScore}/10</div>
                              </td>
                              <td className="p-4">
                                <div className="flex items-center space-x-2">
                                  <Progress value={student.progress} className="w-20" />
                                  <span className="text-sm">{student.progress}%</span>
                                </div>
                              </td>
                              <td className="p-4">
                                <Badge className={getStatusColor(student.status)}>
                                  {getStatusLabel(student.status)}
                                </Badge>
                              </td>
                              <td className="p-4">
                                <div className="flex items-center space-x-2">
                                  <Button size="sm" variant="ghost">
                                    <MessageSquare className="w-4 h-4" />
                                  </Button>
                                  <Button size="sm" variant="ghost">
                                    <BarChart3 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="companies">
                <Card>
                  <CardHeader>
                    <CardTitle>Partner Companies</CardTitle>
                    <CardDescription>Active internship partnerships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {["TechCorp Inc.", "InnovateIO", "StartupXYZ", "DataTech Solutions"].map((company, index) => (
                        <Card key={index} className="hover:shadow-card transition-all duration-300">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-medium">{company}</h3>
                              <Badge variant="outline">Active</Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {Math.floor(Math.random() * 5) + 1} students assigned
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="analytics">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance Analytics</CardTitle>
                    <CardDescription>Detailed insights and trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12 text-muted-foreground">
                      <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                      <p>Analytics dashboard coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-warning" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.priority === "high" ? "bg-destructive" :
                      alert.priority === "medium" ? "bg-warning" : "bg-success"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-foreground">{alert.student}</div>
                      <div className="text-xs text-muted-foreground mb-1">{alert.message}</div>
                      <div className="text-xs text-muted-foreground">{alert.time}</div>
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
                  <Users className="w-4 h-4 mr-2" />
                  Add New Student
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Building2 className="w-4 h-4 mr-2" />
                  Partner Companies
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <FileText className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button className="w-full justify-start bg-gradient-ai hover:opacity-90 text-white">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Analysis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorDashboard;