"use client";

import { useState, useEffect } from "react";
import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";

interface Quiz {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

interface QuizzesData {
  courseSlug: string;
  quizzes: Quiz[];
}

interface Props {
  courseSlug: string;
}

export default function QuizzesPageClient({ courseSlug }: Props) {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");

  useEffect(() => {
    async function fetchQuizzes() {
      setLoading(true);
      try {
        const res = await fetch(`/quizzes/${courseSlug}.json`);
        const data: QuizzesData = await res.json();
        setQuizzes(data.quizzes);
      } catch (e) {
        setQuizzes([]);
      }
      setLoading(false);
    }
    if (courseSlug) fetchQuizzes();
  }, [courseSlug]);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    if (index === quizzes[currentQuestion].correct) {
      setFeedback("✅ Correct!");
    } else {
      setFeedback(
        `❌ Wrong! Correct answer: ${quizzes[currentQuestion].options[quizzes[currentQuestion].correct]}`
      );
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setFeedback("");
    setCurrentQuestion((prev) => prev + 1);
  };

  if (loading) return <DashboardLayout><p>Loading...</p></DashboardLayout>;
  if (quizzes.length === 0) return <DashboardLayout><p>No quizzes found for this course.</p></DashboardLayout>;

  const quiz = quizzes[currentQuestion];

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto p-6 space-y-6 bg-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold text-white">Quiz: {courseSlug}</h1>

        <div className="bg-gray-700 p-4 rounded-lg space-y-4">
          <p className="text-white font-semibold">{quiz.question}</p>
          <div className="grid gap-3">
            {quiz.options.map((option, i) => (
              <Button
                key={i}
                variant={selectedOption === i ? (i === quiz.correct ? "default" : "destructive") : "outline"}
                className="text-left"
                onClick={() => handleAnswer(i)}
                disabled={selectedOption !== null}
              >
                {option}
              </Button>
            ))}
          </div>
          {feedback && <p className="mt-2 text-white">{feedback}</p>}
        </div>

        {selectedOption !== null && currentQuestion < quizzes.length - 1 && (
          <Button onClick={nextQuestion} className="mt-4 bg-purple-600 hover:bg-purple-700">
            Next Question
          </Button>
        )}

        {selectedOption !== null && currentQuestion === quizzes.length - 1 && (
          <p className="mt-4 text-white font-bold">🎉 Quiz Finished!</p>
        )}
      </div>
    </DashboardLayout>
  );
}
