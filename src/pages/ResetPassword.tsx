import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, CheckCircle2, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Password strength calculation
  const calculatePasswordStrength = (pwd: string): number => {
    let strength = 0;
    if (pwd.length >= 8) strength += 25;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength += 25;
    if (/\d/.test(pwd)) strength += 25;
    if (/[^a-zA-Z0-9]/.test(pwd)) strength += 25;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(password);
  
  const getStrengthColor = (strength: number) => {
    if (strength < 50) return "bg-destructive";
    if (strength < 75) return "bg-warning";
    return "bg-success";
  };

  const getStrengthText = (strength: number) => {
    if (strength === 0) return "";
    if (strength < 50) return "Weak";
    if (strength < 75) return "Medium";
    return "Strong";
  };

  // Password requirements
  const requirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One number", met: /\d/.test(password) },
    { label: "One special character", met: /[^a-zA-Z0-9]/.test(password) },
  ];

  const allRequirementsMet = requirements.every((req) => req.met);
  const passwordsMatch = password === confirmPassword && confirmPassword !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!allRequirementsMet) {
      return;
    }

    if (!passwordsMatch) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            InternConnect
          </h1>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            {!isSuccess ? (
              <>
                <CardTitle className="text-2xl">Create New Password</CardTitle>
                <CardDescription>
                  Enter your new password below
                </CardDescription>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <CardTitle className="text-2xl mb-2">Password Reset Complete</CardTitle>
                <CardDescription className="text-base">
                  Your password has been successfully reset
                </CardDescription>
              </div>
            )}
          </CardHeader>

          <CardContent>
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* New Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your new password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Password Strength Indicator */}
                  {password && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={passwordStrength} 
                          className="h-2"
                        />
                        <span className="text-xs font-medium min-w-[60px]">
                          {getStrengthText(passwordStrength)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Password Requirements Checklist */}
                {password && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Password must contain:</p>
                    <div className="space-y-1">
                      {requirements.map((req, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 text-sm"
                        >
                          {req.met ? (
                            <Check className="h-4 w-4 text-success" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground" />
                          )}
                          <span className={req.met ? "text-success" : "text-muted-foreground"}>
                            {req.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your new password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`pl-10 pr-10 ${
                        confirmPassword && !passwordsMatch ? "border-destructive" : ""
                      } ${passwordsMatch ? "border-success" : ""}`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                  {confirmPassword && !passwordsMatch && (
                    <p className="text-sm text-destructive">Passwords do not match</p>
                  )}
                  {passwordsMatch && (
                    <p className="text-sm text-success">Passwords match</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading || !allRequirementsMet || !passwordsMatch}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Resetting...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </Button>
              </form>
            ) : (
              <div className="space-y-4">
                <Button
                  className="w-full"
                  onClick={handleGoToLogin}
                >
                  Go to Login
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    You can now sign in with your new password
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Help */}
        {!isSuccess && (
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm text-primary hover:underline"
            >
              Back to login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
