import Image from 'next/image';
import Link from 'next/link';
import {
  formatDate,
  formatHrefDate,
  filterCategories,
} from '@the-heights/utils';
import { CardsProps } from './cards';
import AuthorName from './authur-name';

/* eslint-disable-next-line */
export interface StyledCardProps extends CardsProps {
  category?: boolean;
  reverse?: boolean;
}

function CardContent(props: StyledCardProps) {
  const { post } = props;
  let { category } = props;
  if (typeof category === 'undefined') {
    category = true;
  }
  return (
    <div className="flex flex-col items-start w-full md:items-start">
      <div
        className={`mb-2 text-[#98002E] font-bold ${category ? '' : 'hidden'}`}
      >
        <text className='md:text-base'>
          {filterCategories(
            props.post.categories?.nodes?.map((cat) => cat?.name)
          )}
        </text>
      </div>
      <h1 className="text-xl font-bold w-fit text-center mx-0 my-4 px-4 py-0 md:text-start md:m-0 md:p-0 md:text-base">
        {post.title}
      </h1>
      <div
        className="mx-0 my-4 text-lg md:hidden"
        dangerouslySetInnerHTML={{ __html: post.excerpt! }}
      />
      <div className="my-2">
        <AuthorName {...post} />
      </div>
    </div>
  );
}

function StyledCard(props: StyledCardProps) {
  const { reverse, post, priority } = props;
  const articleLink = `/${formatHrefDate(post.date!)}/${post.slug!}`;

  return (
    <Link href={articleLink} className="hover:text-slate-500">
      <div className="mb-4 pb-2 border-b-[#eee] border-b border-solid">
        <div
          className={`flex flex-col gap-4 md:flex-row ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className={reverse ? 'block lg:hidden xl:block' : ''}>
            <Image
              className={`w-full md:w-[200px] xl:w-[300px]  ${
                reverse ? 'md:w-full' : ''
              }`}
              style={{aspectRatio: '4/3'}}
              src={post.featuredImage?.node.sourceUrl || '/default-image.jpg'}
              alt={post.featuredImage?.node.caption || 'No Alt'}
              width={638}
              height={349}
              priority={priority ? true : false}
            />
          </div>
          <CardContent {...props} />
        </div>
        <div className="flex w-full justify-between text-[#AAAAAA] text-xs mx-0 my-2">
          <i>{formatDate(post.date!)}</i>
          <i>Read More</i>
        </div>
      </div>
    </Link>
  );
}

export default StyledCard;
