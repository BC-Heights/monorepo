import styles from './medium-card.module.scss';

/* eslint-disable-next-line */
export interface MediumCardProps {}

export function MediumCard(props: MediumCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MediumCard!</h1>
    </div>
  );
}

export default MediumCard;
