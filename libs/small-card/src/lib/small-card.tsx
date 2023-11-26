import styles from './small-card.module.scss';

/* eslint-disable-next-line */
export interface SmallCardProps {}

export function SmallCard(props: SmallCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SmallCard!</h1>
    </div>
  );
}

export default SmallCard;
