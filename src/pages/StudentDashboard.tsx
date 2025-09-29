import { StudentSidebar } from "@/components/student/StudentSidebar";
import { StudentHeader } from "@/components/student/StudentHeader";
import { CurrentInternshipCard } from "@/components/student/CurrentInternshipCard";
import { EvaluationsCard } from "@/components/student/EvaluationsCard";
import { SkillsAssessmentCard } from "@/components/student/SkillsAssessmentCard";
import { QuickActionsCard } from "@/components/student/QuickActionsCard";
import { AIInsightsCard, RecentMessagesCard, UpcomingDeadlinesCard } from "@/components/student/AIInsightsCard";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <StudentSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <StudentHeader />
        
        {/* Dashboard Content */}
        <div className="flex-1 p-6">
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-6">
              {/* Current Internship Card */}
              <CurrentInternshipCard />
              
              {/* Two Column Layout for Cards */}
              <div className="grid md:grid-cols-2 gap-6">
                <EvaluationsCard />
                <SkillsAssessmentCard />
              </div>
              
              {/* Quick Actions */}
              <QuickActionsCard />
            </div>
            
            {/* Right Sidebar */}
            <div className="space-y-6">
              <AIInsightsCard />
              <RecentMessagesCard />
              <UpcomingDeadlinesCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;