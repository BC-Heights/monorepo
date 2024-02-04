
import Image from 'next/image';
import Link from 'next/link';
import { formatDate, formatHrefDate, getUrlByName } from '@the-heights/utils';
import { CardsProps } from './cards';

/* eslint-disable-next-line */
export interface StyledCardProps extends CardsProps{ }

export function StyledCard(props: StyledCardProps) {
  const articleLink = `/${formatHrefDate(props.post.date!)}/${props.post.slug!}`;
  return (
    <Link href={articleLink} className="hover:text-slate-500"> 
      <div className="mb-2 pb-2 border-b-[#eee] border-b border-solid">
        <div className="flex flex-col gap-4 lg:flex-row">
          <div>
            {/* when screen <1024 dont show pic */}
            <Image
              className="h-auto w-full lg:w-[200px]"
              src={getUrlByName(props.post, props.imgSize)!}
              alt={props.post.featuredImage?.node.caption || 'No Alt'}
              width={638}
              height={349}
              priority={props.priority ? props.priority : false}
            />
          </div>
          <div className="flex flex-col items-center w-full lg:items-start">
            <h1 className="text-xl w-fit text-center mx-0 my-4 px-4 py-0 lg:text-start lg:m-0 lg:p-0 lg:text-base">
              {props.post.title}
            </h1>
            <div className="w-[100px] mx-0 my-2 border-t-2 border-t-[black] border-dotted"></div>
            <div
              className="mx-0 my-4 text-lg lg:hidden"
              dangerouslySetInnerHTML={{ __html: props.post.excerpt! }}
            ></div>
          </div>
        </div>
        <div className="flex w-full justify-between text-[#AAAAAA] text-xs mx-0 my-2">
          <i>{formatDate(props.post.date!)}</i>
          <i>Read More</i>
        </div>
      </div>
    </Link>
  );
}

export default StyledCard;
