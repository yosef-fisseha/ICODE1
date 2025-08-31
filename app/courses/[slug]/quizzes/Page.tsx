"use client";

import QuizzesPageClient from "./QuizzesPageClient";

interface PageProps {
  params: { slug: string };
}

export default function QuizzesPage({ params }: PageProps) {
  return <QuizzesPageClient courseSlug={params.slug} />;
}
