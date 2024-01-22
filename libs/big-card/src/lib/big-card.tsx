import Link from 'next/link';
import { formatDate, formatHrefDate } from '@the-heights/format-date';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface BigCardProps {
  date: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  imgW: number;
  imgH: number;
  priority?: boolean;
  slug: string;
  title: string;
}

export function BigCard(props: BigCardProps) {
  const articleLink = `/${formatHrefDate(props.date)}/${props.slug}`;
  return (
    <div className="mb-5 pb-5 border-b-[#eee] border-b border-solid">
      <Link href={articleLink}>
        <Image className="w-full h-auto"
          src={props.imageSrc}
          alt={props.imageAlt}
          width={props.imgW}
          height={props.imgH}
          loading='lazy'
          />
      </Link>
      <div className="flex flex-col items-center">
        <Link href={articleLink}>
          <h1 className="text-xl font-medium w-fit text-center mx-0 my-4 px-4 py-0">{props.title}</h1>
        </Link>
        <div className=" w-[100px] mx-0 my-2 border-2 border-dotted border-[black]"></div>
        <div className="mx-0 my-4" dangerouslySetInnerHTML={{ __html: props.excerpt}}></div>
        <div className="flex w-full justify-between text-[#AAAAAA] text-xs">
          <i>{formatDate(props.date)}</i>
          <Link href={articleLink}>
            <i>Read More</i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BigCard;
