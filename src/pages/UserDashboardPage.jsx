import React, { useState } from 'react';
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Array of menu items
const menuItems = [
  { label: "Dashboard", icon: Home, href: "#" },
  { label: "Orders", icon: ShoppingCart, href: "#", badge: 6 },
  { label: "Products", icon: Package, href: "#", active: true },
  { label: "Analytics", icon: LineChart, href: "#" },
];

// Array of quizzes (assumed to include category property)
const quizzes = [
  { title: "JavaScript Basics", description: "Test your knowledge of JS fundamentals.", category: "JavaScript" },
  { title: "JavaScript Algorithms", description: "Solve common algorithms and data structures problems in JavaScript.", category: "JavaScript" },
  { title: "JavaScript ES6 Features", description: "Learn about the new features introduced in ES6.", category: "JavaScript" },
  { title: "JavaScript DOM Manipulation", description: "Master DOM manipulation techniques with JavaScript.", category: "JavaScript" },
  { title: "React Mastery", description: "A quiz for advanced React developers.", category: "React" },
  { title: "React Hooks", description: "Master React Hooks for building functional components.", category: "React" },
  { title: "React Router", description: "Learn how to implement routing in React applications.", category: "React" },
  { title: "CSS Styling", description: "Evaluate your CSS design skills.", category: "CSS" },
  { title: "Responsive Web Design", description: "Learn how to create responsive websites using CSS.", category: "CSS" },
  { title: "CSS Flexbox", description: "Master layout techniques using CSS Flexbox.", category: "CSS" },
  { title: "CSS Grid Layout", description: "Learn how to create complex layouts with CSS Grid.", category: "CSS" },
  { title: "Data Structures", description: "Deep dive into data structures with coding problems.", category: "Data Structures" },
  { title: "Data Structures Basics", description: "Learn the fundamental concepts of data structures.", category: "Data Structures" },
  { title: "Algorithms and Complexity", description: "Understand algorithms and their complexities.", category: "Data Structures" },
  { title: "Trees and Graphs", description: "Explore tree and graph data structures and their applications.", category: "Data Structures" },
  { title: "Sorting Algorithms", description: "Learn about various sorting algorithms and their implementations.", category: "Data Structures" },
  { title: "JavaScript Closures", description: "Understand closures and their uses in JavaScript.", category: "JavaScript" },
  { title: "React Performance Optimization", description: "Learn techniques to optimize React application performance.", category: "React" },
  { title: "React State Management", description: "Master state management in React applications.", category: "React" },
  { title: "React Context API", description: "Understand the React Context API for state management.", category: "React" },
  { title: "React Testing", description: "Learn how to write tests for React components.", category: "React" },
  { title: "CSS Preprocessors", description: "Explore CSS preprocessors like Sass and Less.", category: "CSS" },
  { title: "CSS Animation", description: "Create animations using CSS keyframes and transitions.", category: "CSS" },
  { title: "CSS Frameworks", description: "Learn popular CSS frameworks like Bootstrap and Tailwind CSS.", category: "CSS" },
  { title: "CSS Architecture", description: "Understand scalable CSS architecture and methodologies.", category: "CSS" },
  { title: "Graph Algorithms", description: "Solve graph algorithms and problems.", category: "Data Structures" },
  { title: "Dynamic Programming", description: "Learn dynamic programming concepts and problems.", category: "Data Structures" },
  { title: "JavaScript Promises", description: "Understand JavaScript promises and asynchronous programming.", category: "JavaScript" },
  { title: "JavaScript Async/Await", description: "Learn async/await syntax for handling asynchronous operations.", category: "JavaScript" },
  { title: "JavaScript Web APIs", description: "Explore browser APIs like Fetch, Local Storage, and more.", category: "JavaScript" },
  { title: "React Hooks in Depth", description: "Learn advanced concepts of React Hooks.", category: "React" },
  { title: "React Server-Side Rendering", description: "Understand server-side rendering in React applications.", category: "React" },
  { title: "React Custom Hooks", description: "Create custom hooks for reusable logic in React components.", category: "React" },
  { title: "React Redux", description: "Learn how to use Redux for state management in React applications.", category: "React" },
  { title: "CSS Variables", description: "Understand CSS variables and their uses in styling.", category: "CSS" },
  { title: "CSS Layouts", description: "Explore different layout techniques using CSS.", category: "CSS" },
  { title: "CSS Grid Frameworks", description: "Learn CSS grid frameworks like Bootstrap Grid and Tailwind Grid.", category: "CSS" },
];

const UserDashboardPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of quizzes per page

  // Function to filter quizzes based on title and selected category
  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? quiz.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  // Reset category filter to show all quizzes
  const handleShowAllQuizzes = () => {
    setSelectedCategory(null);
    setCurrentPage(1); // Reset to first page when showing all quizzes
  };

  // Calculate total pages
  const totalPages = Math.ceil(filteredQuizzes.length / itemsPerPage);

  // Get current page quizzes
  const getCurrentPageQuizzes = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredQuizzes.slice(startIndex, endIndex);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">Quiz Byte Inc</span>
            </a>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {menuItems.map((item, index) => (
                <div key={index} className="relative">
                  <a
                    href={item.href}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      item.active ? "bg-muted text-primary" : ""
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                    {item.badge && (
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        {item.badge}
                      </Badge>
                    )}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                {menuItems.map((item, index) => (
                  <div key={index} className="relative">
                    <a
                      href={item.href}
                      className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${
                        item.active ? "bg-muted text-foreground" : ""
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                      {item.badge && (
                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search quizzes..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1); // Reset to first page when searching
                  }}
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Available Quizzes</h3>
            {selectedCategory && (
              <Button variant="outline" onClick={handleShowAllQuizzes}>
                Show All
              </Button>
            )}
          </div>
          {/* Category Selection Section */}
          <div className="mb-4">
            <h2 className="text-md font-semibold mb-2">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              {Array.from(new Set(quizzes.map(quiz => quiz.category))).map(category => (
                <Button
                  key={category}
                  variant="outline"
                  onClick={() => handleCategorySelect(category)}
                  className={`${
                    selectedCategory === category ? "bg-primary text-white" : ""
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          {/* Quizzes List */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {getCurrentPageQuizzes().length === 0 ? (
              <div>No quizzes found.</div>
            ) : (
              getCurrentPageQuizzes().map((quiz, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{quiz.title}</CardTitle>
                    <CardDescription>{quiz.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button>Take Quiz</Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      href="#" 
                      onClick={() => handlePageChange(i + 1)}
                      isActive={currentPage === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserDashboardPage;