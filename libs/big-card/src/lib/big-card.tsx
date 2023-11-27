import styles from './big-card.module.scss';
import Link from 'next/link';
import { formatDate } from '@the-heights/format-date';

/* eslint-disable-next-line */
export interface BigCardProps {
  author: string;
  date: string;
  excerpt: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
  title: string;
}

export function BigCard(props: BigCardProps) {
  return (
    <div className={styles['container']}>
      <Link href={`/${props.slug}`}>
        <img className={styles['large-image']}
          src={props.imageSrc}
          alt={props.imageAlt} />
      </Link>
      <div className={styles["entry"]}>
        <Link href={`/${props.slug}`}>
          <h1 className={styles['title']}>{props.title}</h1>
        </Link>
        <span className={styles['entry-divider']}></span>
        <div className={styles['excerpt']} dangerouslySetInnerHTML={{ __html: props.excerpt}}></div>
        <div className={styles['footer']}>
          <i>{formatDate(props.date)}</i>
          <Link href={`/${props.slug}`}>
            <i>Read More</i>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default BigCard;
