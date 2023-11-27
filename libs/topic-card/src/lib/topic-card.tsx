import styles from './topic-card.module.scss';
import Wrapped from './wrapped';


/* eslint-disable-next-line */
export interface TopicCardProps {
  category: string;
  numMedium: number;
  numSmall: number;
}

export function TopicCard(props: TopicCardProps) {

  return (
    <div className={styles['container']}>
      <div className={styles['title-container']}>
        <span></span>
        <span className={styles['line']} />
        <h1 className={styles['title']}>{props.category}</h1>
        <span className={styles['line']} />
        <span></span>
      </div>
      <Wrapped category={props.category}
        numMedium={props.numMedium}
        numSmall={props.numSmall}
      ></Wrapped>
    </div>
  );
}

export default TopicCard;
