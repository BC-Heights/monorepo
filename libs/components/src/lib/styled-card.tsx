import Image from 'next/image';
import Link from 'next/link';
import { formatDate, formatHrefDate } from '@the-heights/utils';
import { CardsProps, StyledCardOptions } from './cards';
import { AuthorName, Category } from './tags';

/* eslint-disable-next-line */
export interface StyledCardProps
  extends CardsProps,
    Partial<StyledCardOptions> {}

function StyledCard(props: StyledCardProps) {
  const { reverse, post, priority } = props;
  let { showCategory } = props;
  if (typeof showCategory === 'undefined') {
    showCategory = true;
  }
  const articleLink = `/${formatHrefDate(post.date!)}/${post.slug!}`;

  return (
    <div className="group mb-4 border-b border-solid border-b-[#eee] pb-2">
      <div
        className={`flex flex-col gap-4 md:flex-row md:gap-0 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <Link href={articleLink}>
          <div className={'block lg:hidden'}>
            <Image
              className={'w-full md:w-[25vw] md:pr-4 xl:w-[300px]'}
              src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'}
              alt={post.featuredImage?.node.caption || 'No Alt'}
              width={638}
              height={349}
              priority={priority ? true : false}
            />
          </div>
        </Link>
        <div className="flex w-full flex-col items-start md:items-start">
          <div className="flex w-full flex-row text-nowrap">
            <Category post={post} showCategory={showCategory} />
            <Link href={articleLink} className="w-full"></Link>
          </div>
          <Link href={articleLink} className="inline">
            <h1 className="text-start text-xl font-bold group-hover:text-slate-500">
              <Image
                className="float-end hidden w-1/2 place-content-end pl-4 lg:block"
                src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'}
                alt={post.featuredImage?.node.caption || 'No Alt'}
                width={150}
                height={82}
                priority={priority ? true : false}
              />
              {post.title}
            </h1>
          </Link>
          <Link
            href={articleLink}
            className="mx-0 py-4 text-lg md:hidden"
            dangerouslySetInnerHTML={{ __html: post.excerpt! }}
          />
          <div className="flex w-full flex-row text-nowrap">
            <AuthorName {...post} />
            <Link href={articleLink} className="w-full"></Link>
          </div>
        </div>
      </div>
      <Link
        href={articleLink}
        className="mx-0 flex w-full justify-between py-2 text-xs text-[#AAAAAA]"
      >
        <i>{formatDate(post.date!)}</i>
        <i>Read More</i>
      </Link>
    </div>
  );
}

export default StyledCard;
