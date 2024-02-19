import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import parse from 'html-react-parser';
import { formatDate, formatTime } from '@the-heights/utils';
import { multiMediaRegex, postOptions } from './parser';
import { GetPostBySlug } from '@the-heights/graphql';
import { AuthorName } from '@the-heights/components';
import ImageCarousel from './imageCarousel';

export const dynamic = 'force-dynamic';

export interface PageProps {}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> => {
  // Check if the slug conforms to the year/month/day/postName format
  // There's probably a better way to do this with middleware
  const slugString = params.slug.join('/');
  const regex = /^\d{4}\/\d{2}\/\d{2}\/[\w-]+$/;
  if (!regex.test(slugString)) {
    return notFound();
  }

  const { postBy: post } = await GetPostBySlug({
    slug: params.slug[params.slug.length - 1],
  });

  const metadata: Metadata = {
    title: `${post?.title} \u2014 The Heights` || '...',
    description: `${post?.title} \u2014 The Heights` || '...',
  };

  return metadata;
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const { postBy: post } = await GetPostBySlug({
    slug: params.slug[params.slug.length - 1],
  });
  let postHTML;

  if (post?.content) {
    // post.content = multiMediaRegex(post.content, post.attachedMedia?.nodes);

    postHTML = parse(post.content, postOptions) || <div>No Post Found</div>;

    return (
      <div className="flex w-full flex-row justify-center gap-[7.5%]">
        <div className="w-[800px]">
          <div>
            <div className="w-full relative">
              {post.categories?.nodes
                ?.map((cat) => cat.name?.toLowerCase())
                .includes('gallery') ? (
                  <ImageCarousel images={post.attachedMedia?.nodes} />
              ) : (
                <div className='h-[440px]'>
                <Image
                  src={
                    post.featuredImage?.node?.sourceUrl ||
                    '/images/placeholder.png'
                  }
                  alt={post.featuredImage?.node?.caption || 'No Image Found'}
                  fill={true}
                  priority={true}
                />
                </div>
              )}
            </div>
            <h1 className="text-4xl text-center mx-0 my-4">{post.title}</h1>
            <div className="my-2">
              <AuthorName {...post} />
            </div>
            <div className="text-xs mb-3">
              <span className="mr-4">{formatDate(post.date || '')}</span>
              <span>
                Updated {formatDate(post.modifiedGmt || '')} at{' '}
                {formatTime(post.modifiedGmt || '')}
              </span>
            </div>
          </div>
          <div>{postHTML}</div>
        </div>
      </div>
    );
  } else {
    return notFound();
  }
}
