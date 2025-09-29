import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BarChart3, 
  FileText, 
  Briefcase, 
  TrendingUp, 
  MessageSquare, 
  FileCheck,
  Target
} from "lucide-react";

const menuItems = [
  { icon: BarChart3, label: "Dashboard", path: "/student", emoji: "📊" },
  { icon: FileText, label: "Applications", path: "/student/applications", emoji: "📝" },
  { icon: Briefcase, label: "Current Internship", path: "/student/internship", emoji: "📋" },
  { icon: TrendingUp, label: "Evaluations", path: "/student/evaluations", emoji: "📈" },
  { icon: MessageSquare, label: "Messages", path: "/student/messages", emoji: "💬" },
  { icon: FileCheck, label: "Documents", path: "/student/documents", emoji: "📄" },
  { icon: Target, label: "Career Insights", path: "/student/insights", emoji: "🎯" },
];

export const StudentSidebar = () => {
  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col">
      {/* User Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/placeholder.svg" alt="Juan" />
            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-foreground">Juan Martinez</h3>
            <p className="text-sm text-muted-foreground">Computer Science Major</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                <span className="text-base">{item.emoji}</span>
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};