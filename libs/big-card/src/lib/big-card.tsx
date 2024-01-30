import Link from 'next/link';
import { formatDate, formatHrefDate } from '@the-heights/format-date';
import { PostFragmentFragment } from '@the-heights/graphql';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface BigCardProps {
  post: PostFragmentFragment
  imgW: number;
  imgH: number;
  priority?: boolean;
}

export function BigCard(props: BigCardProps) {
  const articleLink = `/${formatHrefDate(props.post.date!)}/${props.post.slug}`;
  return (
    <Link href={articleLink} className='hover:text-slate-500'>
      <div className="mb-5 pb-5 border-b-[#eee] border-b border-solid">
          <Image className="w-full h-auto"
            src={props.post.featuredImage?.node?.sourceUrl || '/default-image.jpg'}
            alt={props.post.featuredImage?.node?.caption || 'No Caption'}
            width={props.imgW}
            height={props.imgH}
            loading='lazy'
            />
          <div>
            {props.post.categories?.nodes?.map((cat, index) => (
              <span key={index} className="text-xs text-[#AAAAAA]">
                {cat?.name}
              </span>
            ))}
            {props.post.author?.node?.name}
          </div>
        <div className="flex flex-col items-center">
            <h1 className="text-xl font-medium w-fit text-center mx-0 my-4 px-4 py-0">{props.post.title}</h1>
          <div className="w-[100px] mx-0 my-2 border-t-2 border-t-[black] border-dotted"></div>
          <div className="!text-black mx-0 my-4 text-base"dangerouslySetInnerHTML={{ __html: props.post.excerpt!}} />
          <div className="flex w-full justify-between text-[#AAAAAA] text-xs">
            <i>{formatDate(props.post.date!)}</i>
              <i>Read More</i>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BigCard;
