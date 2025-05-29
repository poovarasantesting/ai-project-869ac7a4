import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Lock, Mail, User } from "lucide-react";

export default function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: isSignUp ? "Account created" : "Welcome back!",
        description: isSignUp 
          ? "Your account has been created successfully." 
          : "You have successfully logged in.",
      });
      
      // Reset form after successful signup
      if (isSignUp) {
        setEmail("");
        setPassword("");
        setName("");
        setIsSignUp(false);
      }
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-sm space-y-6 p-6 rounded-lg shadow-lg border bg-card">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">{isSignUp ? "Create an account" : "Welcome back"}</h1>
        <p className="text-gray-500 dark:text-gray-400">
          {isSignUp 
            ? "Enter your information to create an account" 
            : "Enter your credentials to access your account"}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                id="name" 
                placeholder="Enter your name" 
                required 
                className="pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              id="email" 
              type="email" 
              placeholder="m@example.com" 
              required 
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            {!isSignUp && (
              <a href="#" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            )}
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              required 
              className="pl-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                  fill="none"
                ></circle>
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {isSignUp ? "Creating account..." : "Logging in..."}
            </span>
          ) : (
            <span>{isSignUp ? "Create account" : "Login"}</span>
          )}
        </Button>
      </form>
      
      <div className="text-center text-sm">
        {isSignUp ? "Already have an account? " : "Don't have an account? "}
        <button 
          onClick={() => setIsSignUp(!isSignUp)} 
          className="text-primary hover:underline font-medium"
        >
          {isSignUp ? "Login" : "Sign up"}
        </button>
      </div>
    </div>
  );
}