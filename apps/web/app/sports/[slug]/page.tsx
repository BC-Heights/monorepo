import { SubTopicCard } from '@the-heights/components';
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

