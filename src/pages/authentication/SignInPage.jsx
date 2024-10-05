import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

export const SignIn = () => {
  const { toast } = useToast();
  const currentDate = new Date();

  // Format the date, time, and day
  const day = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const time = currentDate.toLocaleTimeString();
  const date = currentDate.toLocaleDateString();

  const [role, setRole] = useState("user"); // Default to 'user'

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    toast({
      variant: "Success",
      title: "Logged in Successfully",
      description: `Role: ${role}, Date: ${date}, Time: ${time}, Day: ${day}`,
    });
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Card className="mx-auto max-w-sm shadow-lg transition-transform transform hover:scale-105">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="ml-auto inline-block text-sm underline">
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label className="text-lg font-semibold">Select your Role</Label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="user" 
                    name="role" 
                    value="user" 
                    checked={role === "user"} 
                    onChange={() => setRole("user")} 
                    className="hidden peer"
                  />
                  <Label 
                    htmlFor="user" 
                    className={`py-2 px-4 rounded-md cursor-pointer transition-all duration-200 
                      ${role === "user" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
                      peer-checked:bg-blue-500 peer-checked:text-white`}
                  >
                    User
                  </Label>
                </div>
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="admin" 
                    name="role" 
                    value="admin" 
                    checked={role === "admin"} 
                    onChange={() => setRole("admin")} 
                    className="hidden peer"
                  />
                  <Label 
                    htmlFor="admin" 
                    className={`py-2 px-4 rounded-md cursor-pointer transition-all duration-200 
                      ${role === "admin" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}
                      peer-checked:bg-blue-500 peer-checked:text-white`}
                  >
                    Admin
                  </Label>
                </div>
              </div>
            </div>
            <Button onClick={()=>{
                toast({
                    variant: "Success",
                    title: "Created Account Successfully",
                    description: `Role: ${role}, Date: ${date}, Time: ${time}, Day: ${day}`,
                  });
            }} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="/auth/signup" className="underline text-blue-600 hover:text-blue-800">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
      <Toaster />
    </div>
  );
};

export default SignIn;
