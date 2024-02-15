import { Metadata } from 'next';
import { Suspense } from 'react';
import {
  CachedGetAuthorInfo,
  GetAuthorPosts,
  PostFragment,
} from '@the-heights/graphql';
import Controller from './controller';
import Loading from './loading';

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: { slug: string[] };
  searchParams: { [key: string]: string };
}): Promise<Metadata> => {
  const { molonguiAuthor: author } = await CachedGetAuthorInfo(
    {
      id: Number(searchParams.id),
      type: searchParams.type,
    },
    ['authors']
  );

  const metadata: Metadata = {
    title: `${author?.displayName} \u2014 The Heights` || '...',
    description: `${author?.displayName} \u2014 The Heights` || '...',
  };

  return metadata;
};

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  const { molonguiAuthor: author } = await CachedGetAuthorInfo(
    {
      id: Number(searchParams.id),
      type: searchParams.type,
    },
    ['authors']
  );

  return (
    <div className="flex justify-center">
      <div className="w-[90%] px-8 flex flex-col">
        <div className="w-full">
          <div className="flex flex-col py-8 items-center gap-2.5 sm:gap-5">
            <div
              dangerouslySetInnerHTML={{ __html: author?.avatar ?? '' }}
              className="min-w-[150px] flex justify-center rounded-[50%] overflow-hidden border-[3px] border-solid border-[#98002E]"
            />
            <h1 className="text-center">
              {author?.displayName}
            </h1>
            <p className='text-left text-pretty max-w-[400px] md:text-center' dangerouslySetInnerHTML={{ __html: author?.bio ?? '' }} />
          </div>
          <div>
            <div className="w-full border-t" />
            <p className="my-4 text-lg">Latest Articles</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Suspense fallback={<Loading />}>
            <ServerPosts
              id={Number(searchParams.id)}
              type={searchParams.type}
            />
          </Suspense>
          <div className="min-w-[320px]">hey side panel</div>
        </div>
      </div>
    </div>
  );
}

interface ServerPostsProps {
  id: number;
  type: string;
  page?: number;
}

async function ServerPosts(props: ServerPostsProps) {
  const { molonguiAuthor } = await GetAuthorPosts({
    id: Number(props.id),
    type: props.type,
  });

  const posts = molonguiAuthor?.posts?.filter(
    (post) => post?.featuredImage?.node.sourceUrl && post?.title
  ) as PostFragment[];
  const subProps = { posts, numPosts: posts?.length, postsPerPage: 5 };

  return <Controller {...subProps} />;
}
