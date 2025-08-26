const categories = [
  {
    id: 1,
    title: "JavaScript Basics",
    icon: "/javascript-icon.svg",
    quizzes: [
      {
        id: 1,
        title: "Variables and Data Types",
        status: "Beginner",
        statusColor: "bg-green-600",
        questions: [
          {
            id: 1,
            text: "Which of the following is NOT a JavaScript data type?",
            options: ["Number", "String", "Boolean", "Float"],
            correctAnswer: 3
          },
          {
            id: 2,
            text: "How do you declare a variable in JavaScript that cannot be reassigned?",
            options: ["var", "let", "const", "immutable"],
            correctAnswer: 2
          },
          {
            id: 3,
            text: "What is the result of typeof null in JavaScript?",
            options: ["null", "object", "undefined", "number"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: 2,
        title: "Functions",
        status: "Beginner",
        statusColor: "bg-green-600",
        questions: [
          {
            id: 1,
            text: "What is a function in JavaScript?",
            options: [
              "A block of code designed to perform a particular task",
              "A type of variable",
              "A method for styling HTML",
              "A way to declare constants"
            ],
            correctAnswer: 0
          }
        ]
      }
    ]
  }
]