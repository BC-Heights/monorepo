import styles from './big-card.module.scss';
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
    <div className={styles['container']}>
      <Link href={articleLink}>
        <Image className={styles['large-image']}
          src={props.imageSrc}
          alt={props.imageAlt}
          width={props.imgW}
          height={props.imgH}
          loading='lazy'
          />
      </Link>
      <div className={styles["entry"]}>
        <Link href={articleLink}>
          <h1 className={styles['title']}>{props.title}</h1>
        </Link>
        <div className={styles['entry-divider']}></div>
        <div className={styles['excerpt']} dangerouslySetInnerHTML={{ __html: props.excerpt}}></div>
        <div className={styles['footer']}>
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
