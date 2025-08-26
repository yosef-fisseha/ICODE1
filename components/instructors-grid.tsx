import { InstructorCard } from "@/components/instructor-card"

const instructors = [
  {
    id: 1,
    name: "Abey shiferaw",
    role: "Software developer",
    avatar: "/instructor-1.png",
  },
  {
    id: 2,
    name: "Biniam musema",
    role: "Software Developer",
    avatar: "/instructor-2.png",
  },
  {
    id: 3,
    name: "Ephream weyisa",
    role: "Software developer",
    avatar: "/instructor-3.png",
  },
  {
    id: 4,
    name: "Abel tesfaye",
    role: "Back end developer",
    avatar: "/instructor-4.png",
  },
  {
    id: 5,
    name: "Abraham alemayhwu",
    role: "Video editor",
    avatar: "/instructor-5.png",
  },
  {
    id: 6,
    name: "Anwar Tuha",
    role: "Software developer",
    avatar: "/instructor-6.png",
  },
]

export function InstructorsGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {instructors.map((instructor) => (
        <InstructorCard key={instructor.id} instructor={instructor} />
      ))}
    </div>
  )
}
