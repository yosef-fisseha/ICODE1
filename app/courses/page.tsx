"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("Beginner");

  const beginnerCourses = [
    {
      slug: "fundamentals-of-web-development",
      title: "Fundamentals of Web Development",
      description:
        "Comprehensive introduction to the essential concepts and skills necessary to build dynamic and interactive websites.",
      status: "NOT VIEWED",
      lessons: 6,
      image: "/web-development-fundamentals.webp",
    },
    {
      slug: "introduction-to-programming",
      title: "Introduction to Programming",
      description:
        "A journey that equips you with the fundamental knowledge and skills needed to become a proficient programmer.",
      status: "NOT VIEWED",
      lessons: 5,
      image: "/Intro-to-Programming.webp",
    },
    {
      slug: "introduction-to-cpp",
      title: "Introduction to C++",
      description:
        "Comprehensive foundation in one of the most widely used and powerful programming languages in the world.",
      status: "NOT VIEWED",
      lessons: 4,
      image: "/Introduction-to.jpg",
    },
  ];

  const intermediateCourses = [
    {
      slug: "javascript-mastery",
      title: "JavaScript Mastery",
      description: "Master modern JavaScript and build interactive web apps.",
      status: "NOT VIEWED",
      lessons: 8,
      image: "/JavaScript Mastery.webp",
    },
    {
      slug: "react-basics",
      title: "React Basics",
      description: "Learn the fundamentals of building user interfaces with React.",
      status: "NOT VIEWED",
      lessons: 6,
      image: "/reactjs-basics.jpg",
    },
  ];

  const advancedCourses = [
    {
      slug: "full-stack-development",
      title: "Full-Stack Development",
      description:
        "Learn to build scalable web applications with front-end and back-end integration.",
      status: "NOT VIEWED",
      lessons: 10,
      image: "/Full-Stack Development.png",
    },
    {
      slug: "data-structures-algorithms",
      title: "Data Structures & Algorithms",
      description:
        "Advanced problem-solving and optimization techniques for coding interviews and software engineering.",
      status: "NOT VIEWED",
      lessons: 12,
      image: "/Data Structures & Algorithms.webp",
    },
  ];

  const getCourses = () => {
    if (activeTab === "Beginner") return beginnerCourses;
    if (activeTab === "Intermediate") return intermediateCourses;
    if (activeTab === "Advanced") return advancedCourses;
    return [];
  };

  return (
    <div className="p-6">
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {["Beginner", "Intermediate", "Advanced"].map((tab) => (
          <Button
            key={tab}
            variant={activeTab === tab ? "default" : "outline"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">{activeTab} Programming Courses</h1>

      {/* Course Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {getCourses().map((course) => (
          <Link key={course.slug} href={`/courses/${course.slug}`}>
            <Card className="rounded-2xl shadow-lg bg-gray-800 text-white cursor-pointer hover:scale-[1.02] transition">
              <CardContent className="flex p-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-40 h-28 object-cover rounded-xl mr-4"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">{course.title}</h2>
                    <p className="text-sm text-gray-300 mt-1">{course.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-red-400 text-sm font-bold">{course.status}</span>
                    <span className="text-sm">📚 {course.lessons} Lessons</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
