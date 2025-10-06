import { Home, Briefcase, MessageSquare, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: typeof Home;
  label: string;
  path: string;
}

const studentNavItems: NavItem[] = [
  { icon: Home, label: "Home", path: "/student" },
  { icon: Briefcase, label: "Internships", path: "/student/internships" },
  { icon: MessageSquare, label: "Messages", path: "/student/messages" },
  { icon: User, label: "Profile", path: "/student/profile" },
];

const supervisorNavItems: NavItem[] = [
  { icon: Home, label: "Home", path: "/supervisor" },
  { icon: Briefcase, label: "Interns", path: "/supervisor/interns" },
  { icon: MessageSquare, label: "Messages", path: "/supervisor/messages" },
  { icon: User, label: "Profile", path: "/supervisor/profile" },
];

interface BottomNavigationProps {
  type: "student" | "supervisor";
}

export const BottomNavigation = ({ type }: BottomNavigationProps) => {
  const location = useLocation();
  const navItems = type === "student" ? studentNavItems : supervisorNavItems;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-inset-bottom">
      <div className="grid grid-cols-4 h-16">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center space-y-1 transition-colors",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive && "fill-primary/10")} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
