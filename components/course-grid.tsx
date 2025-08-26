import { CourseCard } from "@/components/course-card"

const coursesByCategory = {

  
  "Pick Your Level": [
    {
      id: 1,
      title: "Computer Basics for Beginners",
      description:
        "Learn the fundamentals of computers, operating systems, and basic software usage. Perfect for absolute beginners who want to start their digital journey.",
      image: "/Computer Basics for Beginners.jpg",
      backgroundColor: "bg-blue-500",
      status: "NOT VIEWED",
      instructors: 3,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 2,
      title: "Advanced JavaScript Concepts",
      description:
        "Master web browsing, email communication, and online safety. Essential skills for modern digital communication and internet usage.",
      image: "/Advanced JavaScript Concepts.jpeg",
      backgroundColor: "bg-green-500",
      status: "NOT VIEWED",
      instructors: 2,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 3,
      title: "Digital Literacy Fundamentals",
      description:
        "Develop essential digital skills including file management, basic troubleshooting, and understanding digital devices.",
      image: "/Digital Literacy Fundamentals.jpg",
      backgroundColor: "bg-purple-500",
      status: "NOT VIEWED",
      instructors: 4,
      instructorAvatar: "/instructor-avatar.png",
    },
  ],
  "DIY Repair": [
    {
      id: 4,
      title: "DIY Electronics Repair",
      description:
        "Learn to repair common household electronic devices, smartphones, and basic circuit troubleshooting techniques.",
      image: "/DIY Electronics Repair.jpg",
      backgroundColor: "bg-orange-600",
      status: "NOT VIEWED",
      instructors: 5,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 5,
      title: "Computer Hardware Troubleshooting",
      description:
        "Master PC repair, component replacement, and hardware diagnostics. Fix your own computer problems with confidence.",
      image: "/Computer Hardware Troubleshooting.webp",
      backgroundColor: "bg-red-600",
      status: "NOT VIEWED",
      instructors: 4,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 6,
      title: "Mobile Phone Repair Basics",
      description:
        "Learn screen replacement, battery repair, and common mobile phone troubleshooting techniques for various smartphone models.",
      image: "/Mobile Phone Repair Basics.webp",
      backgroundColor: "bg-indigo-600",
      status: "NOT VIEWED",
      instructors: 3,
      instructorAvatar: "/instructor-avatar.png",
    },
  ],
  "Other courses": [
    {
      id: 7,
      title: "Mastering Microsoft Word Essentials",
      description:
        "Comprehensive course covering document creation, formatting, templates, and advanced Word features for professional documents.",
      image: "/Mastering Microsoft Word Essentials.webp",
      backgroundColor: "bg-blue-600",
      status: "NOT VIEWED",
      instructors: 6,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 8,
      title: "Excel Essentials: Mastering the Basics",
      description:
        "Learn spreadsheet fundamentals, formulas, charts, and data analysis techniques to boost your productivity with Excel.",
      image: "/ExcelEssentialsMasteringtheBasics.webp",
      backgroundColor: "bg-green-600",
      status: "NOT VIEWED",
      instructors: 6,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 9,
      title: "Introduction to Adobe Photoshop",
      description:
        "Master photo editing, digital art creation, and graphic design using Adobe Photoshop's powerful tools and features.",
      image: "/IntroductiontoAdobePhotoshop.webp",
      backgroundColor: "bg-blue-800",
      status: "NOT VIEWED",
      instructors: 6,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 10,
      title: "Digital Marketing Fundamentals",
      description:
        "Learn social media marketing, SEO basics, content creation, and online advertising strategies for business growth.",
      image: "/FUNDAMENTALSOFDIGITALMARKETING.webp",
      backgroundColor: "bg-pink-600",
      status: "NOT VIEWED",
      instructors: 5,
      instructorAvatar: "/instructor-avatar.png",
    },
  ],
  "Advanced programming": [
    {
      id: 11,
      title: "Advanced Python Development",
      description:
        "Master advanced Python concepts including decorators, generators, async programming, and building scalable applications.",
      image: "/python.webp",
      backgroundColor: "bg-gradient-to-br from-blue-600 to-purple-700",
      status: "NOT VIEWED",
      instructors: 8,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 12,
      title: "Full-Stack Web Development",
      description:
        "Build complete web applications using modern frameworks, databases, APIs, and deployment strategies.",
      image: "/fullstackdevelopment.png",
      backgroundColor: "bg-gradient-to-br from-green-600 to-blue-600",
      status: "NOT VIEWED",
      instructors: 7,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 13,
      title: "Machine Learning with Python",
      description:
        "Dive into AI and machine learning algorithms, data science, and building intelligent applications with Python.",
      image: "/MLP.png",
      backgroundColor: "bg-gradient-to-br from-purple-600 to-pink-600",
      status: "NOT VIEWED",
      instructors: 9,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 14,
      title: "Cloud Computing & DevOps",
      description: "Master AWS, Docker, Kubernetes, CI/CD pipelines, and modern cloud infrastructure management.",
      image: "/cloudanddevops.png",
      backgroundColor: "bg-gradient-to-br from-orange-600 to-red-600",
      status: "NOT VIEWED",
      instructors: 6,
      instructorAvatar: "/instructor-avatar.png",
    },
  ],
  "Intermediate programming": [
    {
      id: 15,
      title: "React.js: Building Modern Web Applications",
      description:
        "Create dynamic, interactive web applications using React.js, hooks, state management, and modern development practices.",
      image: "/ReactJS.jpg",
      backgroundColor: "bg-blue-700",
      status: "NOT VIEWED",
      instructors: 6,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 16,
      title: "Node.js Backend Development",
      description:
        "Build robust server-side applications, REST APIs, and work with databases using Node.js and Express framework.",
      image: "/node.png",
      backgroundColor: "bg-green-700",
      status: "NOT VIEWED",
      instructors: 5,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 17,
      title: "Mobile App Development with React Native",
      description:
        "Create cross-platform mobile applications for iOS and Android using React Native and modern mobile development tools.",
      image: "/react.webp",
      backgroundColor: "bg-purple-700",
      status: "NOT VIEWED",
      instructors: 7,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 18,
      title: "Database Design and SQL",
      description:
        "Master database concepts, SQL queries, database design principles, and work with popular database systems.",
      image: "/sql.webp",
      backgroundColor: "bg-indigo-700",
      status: "NOT VIEWED",
      instructors: 4,
      instructorAvatar: "/instructor-avatar.png",
    },
  ],
  "Beginner programming": [
    {
      id: 19,
      title: "Introduction to Python Programming",
      description:
        "Start your programming journey with Python. Learn syntax, variables, functions, and basic programming concepts.",
      image: "/pythonintroduction.webp",
      backgroundColor: "bg-gradient-to-br from-blue-600 to-purple-700",
      status: "NOT VIEWED",
      instructors: 7,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 20,
      title: "Introduction to JavaScript Programming",
      description:
        "Learn the fundamentals of JavaScript, the language that powers modern web development and interactive websites.",
      image: "/introductiontojavascript.jpeg",
      backgroundColor: "bg-yellow-600",
      status: "NOT VIEWED",
      instructors: 6,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 21,
      title: "HTML & CSS Fundamentals",
      description:
        "Build your first websites using HTML for structure and CSS for styling. Essential foundation for web development.",
      image: "/html&css.jpg",
      backgroundColor: "bg-orange-600",
      status: "NOT VIEWED",
      instructors: 4,
      instructorAvatar: "/instructor-avatar.png",
    },
    {
      id: 22,
      title: "Introduction To Java",
      description:
        "Learn object-oriented programming with Java. Understand classes, objects, inheritance, and core Java concepts.",
      image: "/java.webp",
      backgroundColor: "bg-red-700",
      status: "NOT VIEWED",
      instructors: 6,
      instructorAvatar: "/instructor-avatar.png",
    },
    
  ],
}

interface CourseGridProps {
  activeCategory: string
}

export function CourseGrid({ activeCategory }: CourseGridProps) {
  const courses = coursesByCategory[activeCategory as keyof typeof coursesByCategory] || []

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}
