import { formatHrefDate } from '@the-heights/utils';
import Link from 'next/link';

export interface SmallCardProps {
  title: string;
  date: string;
  slug: string;
}

export default function SmallCard(props: SmallCardProps) {
  const articleLink = `/${formatHrefDate(props.date)}/${props.slug}`;
  return (
    <Link href={articleLink} className="hover:text-slate-500">
      <h1 className="max-w-[80%] text-lg overflow-hidden text-ellipsis whitespace-nowrap font-normal">
        {props.title}
      </h1>
    </Link>
  );
}
