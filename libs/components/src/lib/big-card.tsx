import Link from 'next/link';
import Image from 'next/image';
import {
  filterCategories,
  formatDate,
  formatHrefDate,
} from '@the-heights/utils';
import { CardsProps } from './cards';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AuthorName } from '@the-heights/components';

/* eslint-disable-next-line */
export interface BigCardProps extends CardsProps {
  excerpt?: boolean;
  category?: boolean;
}

export default function BigCard(props: BigCardProps) {
  let { excerpt, category } = props;
  if (typeof excerpt === 'undefined') {
    excerpt = true;
  }
  if (typeof category === 'undefined') {
    category = true;
  }

  const articleLink = `/${formatHrefDate(props.post.date!)}/${props.post.slug}`;
  return (
    // use group hover instead so we can highlight the author name too
    <Link href={articleLink} className="hover:text-slate-500">
      <div className="mb-5 pb-5 border-b-[#eee] border-b border-solid">
        <Image
          className="w-full h-auto mb-2"
          src={props.post.featuredImage?.node.sourceUrl || '/default-image.jpg'}
          alt={props.post.featuredImage?.node?.caption || 'No Caption'}
          width={props.imgW}
          height={props.imgH}
          loading="lazy"
        />
        <div
          className={`mb-2 text-[#98002E] font-bold ${
            category ? '' : 'hidden'
          }`}
        >
          <text>
            {filterCategories(
              props.post.categories?.nodes?.map((cat) => cat?.name)
            )}
          </text>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-xl font-semibold w-fit mx-0 py-0">
            {props.post.title}
          </h1>
          <div className="my-2">
            <AuthorName {...props.post} />
          </div>
          <div
            className={`!text-black mx-0 mb-4 text-base ${
              excerpt ? '' : 'hidden'
            }`}
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
