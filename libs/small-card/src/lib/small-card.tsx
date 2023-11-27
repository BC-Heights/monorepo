import styles from './small-card.module.scss';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface SmallCardProps {
  title: string;
  slug: string;
}

export function SmallCard(props: SmallCardProps) {
  return (
   <Link href={`/${props.slug}`}>
      <h1 className={styles['limited-width']}>{props.title}</h1>
  </Link>
  );
}

export default SmallCard;
