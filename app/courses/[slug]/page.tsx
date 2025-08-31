"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

// Example course data (extend later)
const coursesData: any = {
  "fundamentals-of-web-development": {
    title: "Fundamentals of Web Development",
    lessons: [
      { title: "Introduction to HTML", video: "https://www.youtube.com/embed/qz0aGYrrlhU" },
      { title: "CSS Basics", video: "https://www.youtube.com/embed/yfoY53QXEnI" },
      { title: "JavaScript Essentials", video: "https://www.youtube.com/embed/W6NZfCO5SIk" },
    ],
  },
  "introduction-to-programming": {
    title: "Introduction to Programming",
    lessons: [
      { title: "What is Programming?", video: "https://www.youtube.com/embed/bJzb-RuUcMU" },
      { title: "Variables & Data Types", video: "https://www.youtube.com/embed/2FYm3GOonhk" },
    ],
  },
  "introduction-to-cpp": {
    title: "Introduction to C++",
    lessons: [
      { title: "Getting Started with C++", video: "https://www.youtube.com/embed/vLnPwxZdW4Y" },
      { title: "C++ Variables & Types", video: "https://www.youtube.com/embed/z9bZufPHFLU" },
    ],
  },
};

export default function CoursePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const course = coursesData[params.slug];

  if (!course) {
    return (
      <div className="p-6 text-white">
        <Button variant="outline" onClick={() => router.push("/courses")}>
          ← Back
        </Button>
        <h1 className="text-2xl font-bold mt-6">Course Not Found</h1>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <Button variant="outline" onClick={() => router.push("/courses")}>
        ← Back
      </Button>

      <h1 className="text-3xl font-bold mt-6 mb-4">{course.title}</h1>
      <p className="mb-6 text-gray-300">Lessons included in this course:</p>

      <div className="space-y-6">
        {course.lessons.map((lesson: any, i: number) => (
          <div key={i} className="bg-gray-800 p-4 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Lesson {i + 1}: {lesson.title}
            </h2>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={lesson.video}
                title={lesson.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
