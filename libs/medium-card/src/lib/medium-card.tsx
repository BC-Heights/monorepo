import styles from './medium-card.module.scss';
import Link from 'next/link';
import { formatDate } from '@the-heights/format-date';

/* eslint-disable-next-line */
export interface MediumCardProps {
  date: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
  title: string;
}

export function MediumCard(props: MediumCardProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['sub-container']}>
        <Link href={`/${props.slug}`}>
          <img
            className={styles['small-image']}
            src={props.imageSrc}
            alt={props.imageAlt}
          />
        </Link>
        <div className={styles['title-container']}>
          <Link href={`/${props.slug}`}>
            <h1 className={styles['title']}>{props.title}</h1>
          </Link>
          <div className={styles['line']}> </div>
        </div>
      </div>
      <div className={styles['entry']}>
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

export default MediumCard;
