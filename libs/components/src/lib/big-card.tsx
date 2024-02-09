import Link from 'next/link';
import Image from 'next/image';
import { formatDate, formatHrefDate } from '@the-heights/utils';
import { CardsProps } from './cards';
import { AuthorName, Category } from './tags';

/* eslint-disable-next-line */
export interface BigCardProps extends CardsProps {
  showExcerpt: boolean;
  showCategory: boolean;
}

export default function BigCard(props: BigCardProps) {
  const { post, showExcerpt, showCategory } = props;

  const articleLink = `/${formatHrefDate(post.date!)}/${post.slug}`;
  return (
    // use group hover instead so we can highlight the author name too
    <Link href={articleLink} className="hover:text-slate-500">
      <div className="mb-5 pb-5 border-b-[#eee] border-b border-solid">
        <Image
          className="w-full h-auto mb-2"
          src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'}
          alt={post.featuredImage?.node?.caption || 'No Caption'}
          width={props.imgW}
          height={props.imgH}
          loading="lazy"
        />
        <Category post={post} showCategory={showCategory} />
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-semibold w-fit mx-0 py-0">
            {post.title}
          </h1>
          <div className="my-2">
            <AuthorName {...post} />
          </div>
          <div
            className={`!text-black mx-0 mb-4 text-base ${
              showExcerpt ? '' : 'hidden'
            }`}
            dangerouslySetInnerHTML={{ __html: post.excerpt! }}
          />
          <div className="flex w-full justify-between text-[#AAAAAA] text-xs">
            <i>{formatDate(post.date!)}</i>
            <i>Read More</i>
          </div>
        </div>
      </div>
    </Link>
  );
}
