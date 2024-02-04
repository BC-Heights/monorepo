import Link from 'next/link';
import Image from 'next/image';
import { formatDate, formatHrefDate, getUrlByName } from '@the-heights/utils';
import { CardsProps } from './cards';

/* eslint-disable-next-line */
export interface BigCardProps extends CardsProps {}

export default function BigCard(props: BigCardProps) {
  const articleLink = `/${formatHrefDate(props.post.date!)}/${props.post.slug}`;
  return (
    <Link href={articleLink} className="hover:text-slate-500">
      <div className="mb-5 pb-5 border-b-[#eee] border-b border-solid">
        <Image
          className="w-full h-auto"
          src={getUrlByName(props.post, props.imgSize) || '/default-image.jpg'}
          alt={props.post.featuredImage?.node?.caption || 'No Caption'}
          width={props.imgW}
          height={props.imgH}
          loading="lazy"
        />
        <div>
          {props.post.categories?.nodes?.map((cat, index) => (
            <span key={index} className="text-xs text-[#AAAAAA]">
              {cat?.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-xl font-medium w-fit text-center mx-0 my-4 px-4 py-0">
            {props.post.title}
          </h1>
          <div className="underline text-b59410">
            {/* need to add linking eventually */}
            {props.post.authors
              ?.map((author) => author?.displayName)
              .join(', ')
              .replace(/,([^,]*)$/, ', and$1')}
          </div>
          <div
            className="!text-black mx-0 my-4 text-base"
            dangerouslySetInnerHTML={{ __html: props.post.excerpt! }}
          />
          <div className="flex w-full justify-between text-[#AAAAAA] text-xs">
            <i>{formatDate(props.post.date!)}</i>
            <i>Read More</i>
          </div>
        </div>
      </div>
    </Link>
  );
}
