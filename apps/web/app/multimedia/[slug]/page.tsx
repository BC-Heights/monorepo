import { SubTopicCard } from '@the-heights/sub-topic-card';
import { Suspense } from 'react';

export default function Page({ params }: { params: { slug: string } }) {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <SubTopicCard slug={params.slug} />
    </Suspense>
  )
}

export interface PostsProps {
  slug: string;
}

