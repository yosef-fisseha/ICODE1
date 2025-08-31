// app/quizzes/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, BookOpen, Clock, Award } from "lucide-react";

type Quiz = {
  id: string;
  title: string;
  description: string;
  questions: number;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
};

const quizzesData: Record<string, Quiz[]> = {
  beginner: [
    {
      id: "computer-basics-quiz",
      title: "Computer Basics Quiz",
      description: "Test your knowledge of fundamental computer concepts",
      questions: 10,
      duration: "10 mins",
      difficulty: "beginner",
      category: "Computer Fundamentals"
    },
    {
      id: "internet-basics-quiz",
      title: "Internet Basics Quiz",
      description: "Check your understanding of internet fundamentals",
      questions: 12,
      duration: "12 mins",
      difficulty: "beginner",
      category: "Internet"
    },
    {
      id: "file-management-quiz",
      title: "File Management Quiz",
      description: "Assess your file organization skills",
      questions: 8,
      duration: "8 mins",
      difficulty: "beginner",
      category: "Operating Systems"
    }
  ],
  intermediate: [
    {
      id: "html-css-quiz",
      title: "HTML/CSS Quiz",
      description: "Test your web development fundamentals",
      questions: 15,
      duration: "15 mins",
      difficulty: "intermediate",
      category: "Web Development"
    },
    {
      id: "javascript-basics-quiz",
      title: "JavaScript Basics Quiz",
      description: "Evaluate your JavaScript knowledge",
      questions: 14,
      duration: "14 mins",
      difficulty: "intermediate",
      category: "Programming"
    },
    {
      id: "database-quiz",
      title: "Database Fundamentals Quiz",
      description: "Check your understanding of database concepts",
      questions: 12,
      duration: "12 mins",
      difficulty: "intermediate",
      category: "Databases"
    }
  ],
  advanced: [
    {
      id: "react-quiz",
      title: "React Advanced Quiz",
      description: "Challenge your React expertise",
      questions: 20,
      duration: "20 mins",
      difficulty: "advanced",
      category: "Frontend"
    },
    {
      id: "system-design-quiz",
      title: "System Design Quiz",
      description: "Test your system architecture knowledge",
      questions: 15,
      duration: "25 mins",
      difficulty: "advanced",
      category: "Backend"
    },
    {
      id: "algorithms-quiz",
      title: "Algorithms & Data Structures Quiz",
      description: "Assess your problem-solving skills",
      questions: 18,
      duration: "30 mins",
      difficulty: "advanced",
      category: "Computer Science"
    }
  ],
  all: [
    {
      id: "computer-basics-quiz",
      title: "Computer Basics Quiz",
      description: "Test your knowledge of fundamental computer concepts",
      questions: 10,
      duration: "10 mins",
      difficulty: "beginner",
      category: "Computer Fundamentals"
    },
    {
      id: "html-css-quiz",
      title: "HTML/CSS Quiz",
      description: "Test your web development fundamentals",
      questions: 15,
      duration: "15 mins",
      difficulty: "intermediate",
      category: "Web Development"
    },
    {
      id: "react-quiz",
      title: "React Advanced Quiz",
      description: "Challenge your React expertise",
      questions: 20,
      duration: "20 mins",
      difficulty: "advanced",
      category: "Frontend"
    },
    {
      id: "internet-basics-quiz",
      title: "Internet Basics Quiz",
      description: "Check your understanding of internet fundamentals",
      questions: 12,
      duration: "12 mins",
      difficulty: "beginner",
      category: "Internet"
    },
    {
      id: "system-design-quiz",
      title: "System Design Quiz",
      description: "Test your system architecture knowledge",
      questions: 15,
      duration: "25 mins",
      difficulty: "advanced",
      category: "Backend"
    },
    {
      id: "javascript-basics-quiz",
      title: "JavaScript Basics Quiz",
      description: "Evaluate your JavaScript knowledge",
      questions: 14,
      duration: "14 mins",
      difficulty: "intermediate",
      category: "Programming"
    }
  ]
};

export default function QuizzesPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Quizzes</h1>
        <p className="text-muted-foreground mt-2">
          Test your knowledge with our interactive quizzes
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Quizzes</TabsTrigger>
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        {Object.entries(quizzesData).map(([category, quizzes]) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {quizzes.map((quiz) => (
                <Card key={quiz.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5 text-primary" />
                          {quiz.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {quiz.description}
                        </CardDescription>
                      </div>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        quiz.difficulty === "beginner" 
                          ? "bg-green-100 text-green-800" 
                          : quiz.difficulty === "intermediate" 
                            ? "bg-yellow-100 text-yellow-800" 
                            : "bg-red-100 text-red-800"
                      }`}>
                        {quiz.difficulty.charAt(0).toUpperCase() + quiz.difficulty.slice(1)}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{quiz.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <BookOpen className="mr-1 h-4 w-4" />
                      <span>{quiz.questions} questions</span>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full">
                        Start Quiz
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}