"use client";

import QuizzesPageClient from "./QuizzesPageClient";

interface Props {
  params: { slug: string };
}

// No need to import generateStaticParams here — it inherits [slug] param
export default function QuizzesPage({ params }: Props) {
  return <QuizzesPageClient courseSlug={params.slug} />;
}
