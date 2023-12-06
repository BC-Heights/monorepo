import styles from './small-card.module.scss';
import Link from 'next/link';

import {  formatHrefDate } from '@the-heights/format-date';

/* eslint-disable-next-line */
export interface SmallCardProps {
  title: string;
  date: string;
  slug: string;
}

export function SmallCard(props: SmallCardProps) {
  const articleLink = `/${formatHrefDate(props.date)}/${props.slug}`;
  return (
   <Link href={articleLink}>
      <h1 className={styles['limited-width']}>{props.title}</h1>
  </Link>
  );
}

export default SmallCard;
