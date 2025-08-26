"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Search, Eye, Heart, MessageCircle } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React: A Beginner's Guide",
    excerpt: "Learn the fundamentals of React and start building your first components with this comprehensive guide.",
    author: "Abey Shiferaw",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    views: 1234,
    likes: 89,
    comments: 23,
    category: "React",
    image: "/react-programming.png",
  },
  {
    id: 2,
    title: "Python Best Practices for Clean Code",
    excerpt: "Discover essential Python coding practices that will make your code more readable and maintainable.",
    author: "Biniam Musema",
    date: "Dec 12, 2024",
    readTime: "8 min read",
    views: 987,
    likes: 67,
    comments: 15,
    category: "Python",
    image: "/python-programming-concept.png",
  },
  {
    id: 3,
    title: "Building Responsive Web Designs with CSS Grid",
    excerpt: "Master CSS Grid layout system to create beautiful and responsive web designs that work on all devices.",
    author: "Ephream Weyisa",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    views: 756,
    likes: 45,
    comments: 12,
    category: "CSS",
    image: "/css-web-design.png",
  },
]

export default function BlogPage() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
                <p className="text-gray-400">Latest articles and tutorials from our instructors</p>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">Write Article</Button>
          </div>

          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search articles..." className="bg-gray-700 border-gray-600 pl-10" />
            </div>
            <select className="bg-gray-700 text-white px-4 py-2 rounded border border-gray-600">
              <option>All Categories</option>
              <option>React</option>
              <option>Python</option>
              <option>CSS</option>
              <option>JavaScript</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center gap-2 mb-4">
                  <img src="/instructor-avatar.png" alt={post.author} className="w-6 h-6 rounded-full" />
                  <span className="text-sm text-gray-300">{post.author}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.readTime}</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  )
}
