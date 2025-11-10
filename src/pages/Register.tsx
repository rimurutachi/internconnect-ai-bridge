import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Network,
  GraduationCap,
  Briefcase,
  ClipboardList,
  Shield,
  Check,
  Eye,
  EyeOff,
  Upload,
  Loader2,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type UserRole = "student" | "advisor" | "supervisor" | "admin";

const roleCards = [
  {
    value: "student" as UserRole,
    icon: GraduationCap,
    title: "Student",
    description: "Apply for internships and track progress",
    color: "primary",
  },
  {
    value: "advisor" as UserRole,
    icon: ClipboardList,
    title: "University Advisor",
    description: "Manage students and evaluate performance",
    color: "primary",
  },
  {
    value: "supervisor" as UserRole,
    icon: Briefcase,
    title: "Company Supervisor",
    description: "Post opportunities and evaluate interns",
    color: "purple",
  },
  {
    value: "admin" as UserRole,
    icon: Shield,
    title: "Admin",
    description: "Manage platform and users",
    color: "purple",
  },
];

const basicInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  dateOfBirth: z.string().optional(),
});

const studentSchema = z.object({
  university: z.string().min(1, "Please select a university"),
  studentId: z.string().min(1, "Student ID is required"),
  program: z.string().min(1, "Program is required"),
  graduationYear: z.string().min(4, "Invalid year"),
  yearLevel: z.string().min(1, "Please select year level"),
});

const advisorSchema = z.object({
  university: z.string().min(1, "Please select a university"),
  facultyId: z.string().min(1, "Faculty ID is required"),
  department: z.string().min(1, "Department is required"),
  position: z.string().min(1, "Position is required"),
  yearsExperience: z.string().min(1, "Years of experience is required"),
});

const supervisorSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  registrationNumber: z.string().min(1, "Registration number is required"),
  department: z.string().min(1, "Department is required"),
  position: z.string().min(1, "Position is required"),
  businessEmail: z.string().email("Invalid email address"),
});

const adminSchema = z.object({
  institutionAffiliation: z.string().min(1, "Institution is required"),
  adminLevel: z.string().min(1, "Please select admin level"),
  authorizationCode: z.string().min(1, "Authorization code is required"),
});

const securitySchema = z.object({
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain an uppercase letter")
    .regex(/[0-9]/, "Password must contain a number")
    .regex(/[^A-Za-z0-9]/, "Password must contain a special character"),
  confirmPassword: z.string(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

const Register = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const basicInfoForm = useForm({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dateOfBirth: "",
    },
  });

  const roleSpecificForm = useForm({
    resolver: zodResolver(
      selectedRole === "student"
        ? studentSchema
        : selectedRole === "advisor"
        ? advisorSchema
        : selectedRole === "supervisor"
        ? supervisorSchema
        : adminSchema
    ),
  });

  const securityForm = useForm({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const totalSteps = 4;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    setCurrentStep(1);
  };

  const handleNextStep = async () => {
    let isValid = true;

    if (currentStep === 1) {
      isValid = await basicInfoForm.trigger();
    } else if (currentStep === 2) {
      isValid = await roleSpecificForm.trigger();
    }

    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps - 1));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setRegistrationComplete(true);
    }, 2000);
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    
    if (strength <= 1) return { label: "Weak", color: "bg-destructive" };
    if (strength <= 3) return { label: "Medium", color: "bg-warning" };
    return { label: "Strong", color: "bg-success" };
  };

  const passwordValue = securityForm.watch("password");
  const passwordStrength = passwordValue ? getPasswordStrength(passwordValue) : null;

  if (registrationComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-purple-50">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-12 pb-8 space-y-6">
            <div className="flex justify-center">
              <div className="h-20 w-20 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-success animate-in zoom-in duration-500" />
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-foreground">Account Created!</h2>
              <p className="text-muted-foreground">
                Check your email to verify your account
              </p>
            </div>
            <Button onClick={() => navigate("/login")} className="w-full">
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-purple-50">
      <div className="w-full max-w-4xl space-y-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Network className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">InternConnect</span>
        </div>

        {/* Progress Bar */}
        {currentStep > 0 && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground text-center">
              Step {currentStep + 1} of {totalSteps}
            </p>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {currentStep === 0 && "Join InternConnect"}
              {currentStep === 1 && "Tell us about yourself"}
              {currentStep === 2 && "Role-specific details"}
              {currentStep === 3 && "Secure your account"}
            </CardTitle>
            <CardDescription>
              {currentStep === 0 && "Select your role to get started"}
              {currentStep === 1 && "Provide your basic information"}
              {currentStep === 2 && "Complete your profile"}
              {currentStep === 3 && "Set up your account security"}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {/* Step 1: Role Selection */}
            {currentStep === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roleCards.map((role) => {
                  const Icon = role.icon;
                  return (
                    <button
                      key={role.value}
                      onClick={() => handleRoleSelect(role.value)}
                      className="group p-6 border-2 border-border rounded-lg hover:border-primary transition-all hover:shadow-md text-left"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`h-16 w-16 rounded-full bg-${role.color}/10 flex items-center justify-center group-hover:bg-${role.color}/20 transition-colors`}>
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{role.title}</h3>
                          <p className="text-sm text-muted-foreground">{role.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Step 2: Basic Information */}
            {currentStep === 1 && (
              <Form {...basicInfoForm}>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={basicInfoForm.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={basicInfoForm.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={basicInfoForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@university.edu" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={basicInfoForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+1 (555) 000-0000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={basicInfoForm.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date of Birth</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Profile Photo</Label>
                    <div className="flex items-center gap-4">
                      {profileImage && (
                        <img
                          src={profileImage}
                          alt="Profile preview"
                          className="h-20 w-20 rounded-full object-cover"
                        />
                      )}
                      <label className="flex-1 cursor-pointer">
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                          <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>
                </form>
              </Form>
            )}

            {/* Step 3: Role-Specific Details */}
            {currentStep === 2 && selectedRole === "student" && (
              <Form {...roleSpecificForm}>
                <form className="space-y-4">
                  <FormField
                    control={roleSpecificForm.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>University/College *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select university" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="harvard">Harvard University</SelectItem>
                            <SelectItem value="mit">MIT</SelectItem>
                            <SelectItem value="stanford">Stanford University</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={roleSpecificForm.control}
                    name="studentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student ID Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="S123456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={roleSpecificForm.control}
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program/Degree *</FormLabel>
                          <FormControl>
                            <Input placeholder="Computer Science" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={roleSpecificForm.control}
                      name="graduationYear"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expected Graduation *</FormLabel>
                          <FormControl>
                            <Input placeholder="2025" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={roleSpecificForm.control}
                    name="yearLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Year Level *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">Year 1</SelectItem>
                            <SelectItem value="2">Year 2</SelectItem>
                            <SelectItem value="3">Year 3</SelectItem>
                            <SelectItem value="4">Year 4</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}

            {currentStep === 2 && selectedRole === "advisor" && (
              <Form {...roleSpecificForm}>
                <form className="space-y-4">
                  <FormField
                    control={roleSpecificForm.control}
                    name="university"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>University/College *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select university" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="harvard">Harvard University</SelectItem>
                            <SelectItem value="mit">MIT</SelectItem>
                            <SelectItem value="stanford">Stanford University</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={roleSpecificForm.control}
                    name="facultyId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Faculty ID Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="F123456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={roleSpecificForm.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department *</FormLabel>
                          <FormControl>
                            <Input placeholder="Computer Science" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={roleSpecificForm.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position/Title *</FormLabel>
                          <FormControl>
                            <Input placeholder="Professor" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={roleSpecificForm.control}
                    name="yearsExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years of Experience *</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}

            {currentStep === 2 && selectedRole === "supervisor" && (
              <Form {...roleSpecificForm}>
                <form className="space-y-4">
                  <FormField
                    control={roleSpecificForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Tech Corp Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={roleSpecificForm.control}
                    name="registrationNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Registration Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="REG123456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={roleSpecificForm.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department *</FormLabel>
                          <FormControl>
                            <Input placeholder="Engineering" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={roleSpecificForm.control}
                      name="position"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Position/Title *</FormLabel>
                          <FormControl>
                            <Input placeholder="Senior Manager" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={roleSpecificForm.control}
                    name="businessEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Email *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}

            {currentStep === 2 && selectedRole === "admin" && (
              <Form {...roleSpecificForm}>
                <form className="space-y-4">
                  <FormField
                    control={roleSpecificForm.control}
                    name="institutionAffiliation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution Affiliation *</FormLabel>
                        <FormControl>
                          <Input placeholder="InternConnect HQ" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={roleSpecificForm.control}
                    name="adminLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Admin Level *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="super">Super Admin</SelectItem>
                            <SelectItem value="platform">Platform Admin</SelectItem>
                            <SelectItem value="support">Support Admin</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={roleSpecificForm.control}
                    name="authorizationCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Authorization Code *</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter authorization code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            )}

            {/* Step 4: Security */}
            {currentStep === 3 && (
              <Form {...securityForm}>
                <form onSubmit={securityForm.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={securityForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password *</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type={showPassword ? "text" : "password"}
                              placeholder="Create a strong password"
                              {...field}
                            />
                          </FormControl>
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                        {passwordStrength && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${passwordStrength.color} transition-all`}
                                  style={{ width: `${(passwordValue.length / 12) * 100}%` }}
                                />
                              </div>
                              <span className="text-xs text-muted-foreground">{passwordStrength.label}</span>
                            </div>
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">Password must contain:</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Check className={`h-4 w-4 ${passwordValue?.length >= 8 ? "text-success" : "text-muted-foreground"}`} />
                        <span className={passwordValue?.length >= 8 ? "text-success" : "text-muted-foreground"}>
                          At least 8 characters
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className={`h-4 w-4 ${/[A-Z]/.test(passwordValue) ? "text-success" : "text-muted-foreground"}`} />
                        <span className={/[A-Z]/.test(passwordValue) ? "text-success" : "text-muted-foreground"}>
                          One uppercase letter
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className={`h-4 w-4 ${/[0-9]/.test(passwordValue) ? "text-success" : "text-muted-foreground"}`} />
                        <span className={/[0-9]/.test(passwordValue) ? "text-success" : "text-muted-foreground"}>
                          One number
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className={`h-4 w-4 ${/[^A-Za-z0-9]/.test(passwordValue) ? "text-success" : "text-muted-foreground"}`} />
                        <span className={/[^A-Za-z0-9]/.test(passwordValue) ? "text-success" : "text-muted-foreground"}>
                          One special character
                        </span>
                      </div>
                    </div>
                  </div>

                  <FormField
                    control={securityForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password *</FormLabel>
                        <div className="relative">
                          <FormControl>
                            <Input
                              type={showConfirmPassword ? "text" : "password"}
                              placeholder="Re-enter your password"
                              {...field}
                            />
                          </FormControl>
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                          >
                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      ℹ️ We'll send a verification email after registration
                    </p>
                  </div>

                  <FormField
                    control={securityForm.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            I agree to the{" "}
                            <a href="#" className="text-primary hover:underline">
                              Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-primary hover:underline">
                              Privacy Policy
                            </a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>
                </form>
              </Form>
            )}

            {/* Navigation Buttons */}
            {currentStep > 0 && currentStep < 3 && (
              <div className="flex justify-between mt-6 pt-6 border-t">
                <Button type="button" variant="outline" onClick={handlePrevStep}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="button" onClick={handleNextStep}>
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex justify-between mt-6 pt-6 border-t">
                <Button type="button" variant="outline" onClick={handlePrevStep}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Login Link */}
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
