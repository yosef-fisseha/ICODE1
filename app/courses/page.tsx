// app/courses/page.tsx
import CourseClient from "./[id]/CourseClient";
// or wherever the CourseClient component is actually located

// Generate static params for SSG
export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "7" },
    // add all course IDs here
  ];
}

// Server Component: just passes courseId to client
export default function CoursePage({ params }: { params: { id: string } }) {
  return <CourseClient courseId={params.id} />;
}