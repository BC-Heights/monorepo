'use client';

import Link from 'next/link';
import Image from 'next/image';

import { PostFragment } from '@the-heights/graphql';
import { formatDate, filterCategories } from '@the-heights/utils';

export interface PostsProps {
  posts: PostFragment[];
  postsPerPage: number;
  page: number;
}

export default function Posts({ posts, postsPerPage, page }: PostsProps) {
  const [start, end] = [(page - 1) * postsPerPage, page * postsPerPage];

  return (
    <>
      {posts.slice(start, end).map((post, index) => (
        <div key={index} className="">
          <Link href={post?.slug || '/'} className="group">
            <div className="mb-4 pb-2 border-b-[#eee] border-b border-solid">
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="hidden lg:block">
                  <Image
                    className="w-[320px]"
                    src={
                      post?.featuredImage?.node.sourceUrl ||
                      '/default-image.jpg'
                    }
                    alt={post?.featuredImage?.node.caption || 'No Alt'}
                    width={638}
                    height={349}
                  />
                </div>
                <div className="flex flex-col items-start w-full ">
                  <Category post={{ ...post!, id: '' }} showCategory={true} />
                  <h1 className="text-xl font-bold w-fit text-start m-0 p-0 group-hover:text-slate-500">
                    {post?.title}
                  </h1>
                  <div
                    className="mx-0 my-2 text-base text-ellipsis"
                    dangerouslySetInnerHTML={{ __html: post?.excerpt || '' }}
                  />
                  <div className="flex w-full justify-between text-[#AAAAAA] text-xs mx-0 my-2">
                    <i>{formatDate(post?.date || '')}</i>
                    <i>Read More</i>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

function Category(props: { post: PostFragment; showCategory: boolean }) {
  const { post, showCategory } = props;
  return (
    <div className={`text-[#98002E] font-bold ${showCategory ? '' : 'hidden'}`}>
      <text>
        {filterCategories(post.categories?.nodes?.map((cat) => cat?.name))}
      </text>
    </div>
  );
}
