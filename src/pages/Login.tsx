import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, Eye, EyeOff, Loader2, Network } from "lucide-react";

type UserRole = "student" | "advisor" | "company" | "admin";

const Login = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const roles: { value: UserRole; label: string }[] = [
    { value: "student", label: "Student" },
    { value: "advisor", label: "Advisor" },
    { value: "company", label: "Company" },
    { value: "admin", label: "Admin" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 bg-background">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Network className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">InternConnect</span>
          </div>

          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to access your dashboard</p>
          </div>

          {/* Role Selector */}
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {roles.map((role) => (
              <button
                key={role.value}
                onClick={() => setSelectedRole(role.value)}
                className={`flex-1 py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                  selectedRole === role.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>

          {/* Login Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={formData.rememberMe}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, rememberMe: checked as boolean })
                      }
                    />
                    <Label
                      htmlFor="remember"
                      className="text-sm font-normal cursor-pointer"
                    >
                      Remember me
                    </Label>
                  </div>
                  <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-border" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">OR</span>
                  </div>
                </div>

                {/* SSO Options */}
                <div className="space-y-2">
                  <Button type="button" variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Continue with Google
                  </Button>
                  <Button type="button" variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M11.4 24H0V8.4h11.4V24zM24 24H12.6V8.4H24V24zM11.4 7.2H0V0h11.4v7.2z"
                      />
                    </svg>
                    Continue with Microsoft
                  </Button>
                </div>

                {/* Register Link */}
                <p className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-primary hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Right Side - Branding */}
      <div className="hidden md:flex flex-1 items-center justify-center p-12 bg-gradient-to-br from-primary via-primary to-purple-600 text-primary-foreground">
        <div className="max-w-md space-y-8 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3">
            <Network className="h-16 w-16" />
            <span className="text-4xl font-bold">InternConnect</span>
          </div>

          {/* Tagline */}
          <h2 className="text-2xl font-semibold">AI-Powered University-Industry Bridge</h2>

          {/* Illustration Placeholder */}
          <div className="relative h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm" />
            <div className="relative grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 w-16 bg-white/20 rounded-lg animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-semibold">Linear Law-based Transformation</h3>
                <p className="text-sm text-white/80">Advanced AI grading with mathematical precision</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-semibold">Intelligent Sentiment Analysis</h3>
                <p className="text-sm text-white/80">Deep understanding of feedback quality</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <div>
                <h3 className="font-semibold">Real-time Collaboration</h3>
                <p className="text-sm text-white/80">Seamless communication across all stakeholders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
