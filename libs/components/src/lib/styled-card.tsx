import Image from 'next/image';
import Link from 'next/link';
import { formatDate, formatHrefDate } from '@the-heights/utils';
import { CardsProps } from './cards';
import { AuthorName, Category } from './tags';

/* eslint-disable-next-line */
export interface StyledCardProps extends CardsProps {
  showCategory: boolean;
  reverse?: boolean;
}

function StyledCard(props: StyledCardProps) {
  const { reverse, post, priority } = props;
  let { showCategory } = props;
  if (typeof showCategory === 'undefined') {
    showCategory = true;
  }
  const articleLink = `/${formatHrefDate(post.date!)}/${post.slug!}`;

  return (
    <div className="mb-4 pb-2 border-b-[#eee] border-b border-solid group">
      <div
        className={`flex flex-col gap-4 md:flex-row md:gap-0 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <Link href={articleLink}>
          <div className={reverse ? 'block lg:hidden xl:block' : ''}>
            <Image
              className={`w-full md:w-[25vw] xl:w-[300px]  `}
              src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'}
              alt={post.featuredImage?.node.caption || 'No Alt'}
              width={638}
              height={349}
              priority={priority ? true : false}
            />
          </div>
        </Link>
        <Link href={articleLink} className="min-w-[16px] hidden md:block" />
        <div className="flex flex-col items-start w-full md:items-start md:max-w-[360px]">
          <div className="flex flex-row w-full text-nowrap">
            <Category post={post} showCategory={showCategory} />
            <Link href={articleLink} className="w-full"></Link>
          </div>
          <Link href={articleLink}>
            {' '}
            <h1 className="text-xl font-bold w-fit text-center mx-0 my-4 px-4 py-0 md:text-start md:m-0 md:p-0 md:text-base group-hover:text-slate-500">
              {post.title}
            </h1>
          </Link>
          <Link
            href={articleLink}
            className="mx-0 py-4 text-lg md:hidden"
            dangerouslySetInnerHTML={{ __html: post.excerpt! }}
          />
          <div className="flex flex-row w-full text-nowrap">
            <AuthorName {...post} />
            <Link href={articleLink} className="w-full"></Link>
          </div>
        </div>
      </div>
      <Link href={articleLink} className="flex w-full justify-between text-[#AAAAAA] text-xs mx-0 py-2">
        <i>{formatDate(post.date!)}</i>
        <i>Read More</i>
      </Link>
    </div>
  );
}

export default StyledCard;
