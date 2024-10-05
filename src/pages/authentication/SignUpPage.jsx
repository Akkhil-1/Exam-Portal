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
import { useToast } from "@/hooks/use-toast";
import { useState } from 'react';

export const SignUp = () => {
  const currentDate = new Date();

  // Format the date, time, and day
  const day = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const time = currentDate.toLocaleTimeString();
  const date = currentDate.toLocaleDateString();

  const { toast } = useToast();
  const [role, setRole] = useState("user"); // Default to 'user'

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    toast({
      variant: "Success",
      title: "Created Account Successfully",
      description: `Role: ${role}, Date: ${date}, Time: ${time}, Day: ${day}`,
    });
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Card className="mx-auto max-w-sm shadow-lg transition-transform transform hover:scale-105">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-800">Sign Up</CardTitle>
          <CardDescription className="text-gray-600">
            Enter your information to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
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
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input id="phone-number" type="tel" required />
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
              <p className="text-sm text-gray-500 mt-1">
                Choose 'User' for standard access or 'Admin' for administrative privileges.
              </p>
            </div>
            <Button onClick={()=>{
              toast({
                variant: "Success",
                title: "Created Account Successfully",
                description: `Role: ${role}, Date: ${date}, Time: ${time}, Day: ${day}`,
              });
            }} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-200">
              Create an account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <a href="/signin" className="underline text-blue-600 hover:text-blue-800">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
