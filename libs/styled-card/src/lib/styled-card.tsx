import styles from './styled-card.module.scss';

import Link from 'next/link'
import Image from 'next/image'
import { formatDate, formatHrefDate } from '@the-heights/format-date'

/* eslint-disable-next-line */
export interface StyledCardProps {
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

export function StyledCard(props: StyledCardProps) {
  const articleLink = `/${formatHrefDate(props.date)}/${props.slug}`;
  return (
    <div className={styles['container']}>
      <div className={styles['sub-container']}>
        <Link href={articleLink}>
          <Image className={styles['large-image']}
            src={props.imageSrc}
            alt={props.imageAlt}
            width={638}
            height={349}
            priority={props.priority? props.priority: false}
            />
        </Link>
        <div className={styles["entry"]}>
          <Link href={articleLink}>
            <h1 className={styles['title']}>{props.title}</h1>
          </Link>
          <div className={styles['entry-divider']}></div>
          <div className={styles['excerpt']} dangerouslySetInnerHTML={{ __html: props.excerpt}}></div>
        </div>
      </div>
      <div className={styles['footer']}>
      <i>{formatDate(props.date)}</i>
      <Link href={articleLink}>
        <i>Read More</i>
      </Link>
    </div>
  </div>
  );
}

export default StyledCard;
