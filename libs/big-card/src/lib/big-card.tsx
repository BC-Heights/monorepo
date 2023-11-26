import styles from './big-card.module.scss';
import DOMpurify from 'dompurify';

import { formatDate } from '@the-heights/format-date';

/* eslint-disable-next-line */
export interface BigCardProps {
  title: string;
  author: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
  excerpt: string;
}

export function BigCard(props: BigCardProps) {
  return (
    <div className={styles['container']}>
        <img className={styles['large-image']}
          src={props.imageSrc}
          alt={props.imageAlt} />
      <div className={styles["entry"]}>
        <h1 className={styles['title']}>{props.title}</h1>
        <span className={styles['entry-divider']}></span>
        <div className={styles['excerpt']} dangerouslySetInnerHTML={{ __html: DOMpurify.sanitize(props.excerpt) }}></div>
        <div className={styles['footer']}>
            <i>{formatDate(props.date)}</i>
            <i>Read More</i>
        </div>
      </div>
    </div>

  );
}

export default BigCard;
