import Image from 'next/image';
import Link from 'next/link';
import { formatDate, formatHrefDate } from '@the-heights/utils';
import { CardsProps } from './cards';
import AuthorName  from './authur-name';

/* eslint-disable-next-line */
export interface StyledCardProps extends CardsProps {
  reverse?: boolean;
}

function CardContent(props: StyledCardProps) {
  return (
    <div className="flex flex-col items-start w-full md:items-start">
      <h1 className="text-xl w-fit text-center mx-0 my-4 px-4 py-0 md:text-start md:m-0 md:p-0 md:text-base">
        {props.post.title}
      </h1>
      <div
        className="mx-0 my-4 text-lg md:hidden"
        dangerouslySetInnerHTML={{ __html: props.post.excerpt! }}
      />
      <div className="my-2">
        <AuthorName {...props.post} />
      </div>
    </div>
  );
}

function StyledCard(props: StyledCardProps) {
  const articleLink = `/${formatHrefDate(props.post.date!)}/${props.post
    .slug!}`;

  return (
    <Link href={articleLink} className="hover:text-slate-500">
      <div className="mb-4 pb-2 border-b-[#eee] border-b border-solid">
        <div
          className={`flex flex-col gap-4 md:flex-row ${
            props.reverse ? 'lg:flex-row-reverse' : ''
          }`}
        >
          <div className={props.reverse ? 'block lg:hidden xl:block' : ''}>
            <Image
              className={`aspect-video w-full md:w-[200px] xl:w-[300px] ${
                props.reverse ? 'md:w-full' : ''
              }`}
              src={props.post.featuredImage?.node.sourceUrl || '/default-image.jpg'}
              alt={props.post.featuredImage?.node.caption || 'No Alt'}
              width={638}
              height={349}
              priority={props.priority ? props.priority : false}
            />
          </div>
          <CardContent {...props} />
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
