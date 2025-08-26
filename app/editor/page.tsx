"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Code, Play, Save, Download, Settings } from "lucide-react"

export default function EditorPage() {
  const [code, setCode] = useState(`// Welcome to the Live Code Editor
// Write your code here and click Run to execute

function greetUser(name) {
  return \`Hello, \${name}! Welcome to Icode Ethiopia!\`;
}

console.log(greetUser("Student"));

// Try writing some JavaScript code:
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);`)

  const [output, setOutput] = useState("")
  const [language, setLanguage] = useState("javascript")

  const runCode = () => {
    try {
      // Create a custom console object to capture output
      let consoleOutput = ""
      const customConsole = {
        log: (...args: any[]) => {
          consoleOutput += args.join(" ") + "\n"
        },
        error: (...args: any[]) => {
          consoleOutput += "Error: " + args.join(" ") + "\n"
        },
      }

      // Execute the code with custom console
      const func = new Function("console", code)
      func(customConsole)

      setOutput(consoleOutput || "Code executed successfully!")
    } catch (error) {
      setOutput(`Error: ${error}`)
    }
  }

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto h-[calc(100vh-200px)] flex flex-col">
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Live Code Editor</h1>
                <p className="text-gray-400">Write, test, and run your code in real-time</p>
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-gray-700 text-white px-3 py-2 rounded border border-gray-600"
              >
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="html">HTML</option>
              </select>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-4 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Code Editor</h3>
              <div className="flex gap-2">
                <Button onClick={runCode} size="sm" className="bg-green-600 hover:bg-green-700">
                  <Play className="w-4 h-4 mr-2" />
                  Run
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 bg-gray-900 text-gray-100 p-4 rounded border border-gray-600 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your code here..."
            />
          </div>

          <div className="bg-gray-800 rounded-lg p-4 flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Output</h3>
            <div className="flex-1 bg-gray-900 p-4 rounded border border-gray-600 font-mono text-sm text-gray-100 whitespace-pre-wrap overflow-y-auto">
              {output || "Click 'Run' to see output here..."}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
