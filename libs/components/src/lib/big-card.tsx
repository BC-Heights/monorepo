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
    <div className="group">
      <div className="mb-5 border-b-[#eee] border-b border-solid">
        <Link href={articleLink}>
          <Image
            className="w-full h-auto"
            src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'}
            alt={post.featuredImage?.node?.caption || 'No Caption'}
            width={props.imgW}
            height={props.imgH}
            loading="lazy"
          />
        </Link>
        <Link href={articleLink} className="block h-2 w-full" />
        <div className="flex flex-row w-full text-nowrap">
          <Category post={post} showCategory={showCategory} />
          <Link href={articleLink} className="w-full"></Link>
        </div>
        <Link
          href={articleLink}
          className={`h-2 w-full  ${showCategory ? 'block' : 'hidden'}`}
        />
        <div className="flex flex-col items-start">
          <div className="w-full">
            <Link href={articleLink}>
              <h1 className="text-xl font-semibold w-fit mx-0 py-0 group-hover:text-slate-500">
                {post.title}
              </h1>
            </Link>
          </div>
          <Link href={articleLink} className="block h-2 w-full" />
          <div className="flex flex-row w-full text-nowrap">
            <AuthorName {...post} />
            <Link href={articleLink} className="w-full"></Link>
          </div>
          <Link href={articleLink} className="block h-2 w-full" />
          <Link
            href={articleLink}
            className={`!text-black mx-0 pb-4 text-base ${
              showExcerpt ? '' : 'hidden'
            }`}
            dangerouslySetInnerHTML={{ __html: post.excerpt! }}
          />
          <Link
            href={articleLink}
            className="flex w-full pb-5 justify-between text-[#AAAAAA] text-xs"
          >
            <i>{formatDate(post.date!)}</i>
            <i>Read More</i>
          </Link>
        </div>
      </div>
    </div>
  );
}
