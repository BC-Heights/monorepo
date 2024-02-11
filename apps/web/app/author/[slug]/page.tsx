import { CachedGetAuthorInfo, GetAuthorPosts } from '@the-heights/graphql';
import { Metadata } from 'next';

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

  const { molonguiAuthor } = await GetAuthorPosts({
    id: Number(searchParams.id),
    type: searchParams.type,
  });

  const posts = molonguiAuthor?.posts;

  return (
    <div className="flex justify-center">
      <div className="w-[90%] px-8">
        <div className="flex flex-col md:flex-row gap-2.5 sm:gap-5">
          <div
            dangerouslySetInnerHTML={{ __html: author?.avatar ?? '' }}
            className="min-w-[150px] flex justify-center"
          />
          <div>
            <h1 className="text-center pb-2.5 md:text-left">
              {author?.displayName}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: author?.bio ?? '' }} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          {posts?.map((post, index) => (
            <div key={index} className="w-[300px]">
              <div dangerouslySetInnerHTML={{ __html: post?.title ?? '' }} />
              <div dangerouslySetInnerHTML={{ __html: post?.excerpt ?? '' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
