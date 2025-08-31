import CourseClient from "./CourseClient";

// List all course slugs
const courses = [
  { slug: "fundamentals-of-web-development" },
  { slug: "introduction-to-programming" },
  { slug: "introduction-to-cpp" },
  { slug: "javascript-mastery" },
  { slug: "react-basics" },
  { slug: "full-stack-development" },
  { slug: "data-structures-algorithms" },
];

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return <CourseClient courseId={params.slug} />;
}
