import styles from './crossword.module.scss';

/* eslint-disable-next-line */
export interface CrosswordProps {}

export function Crossword(props: CrosswordProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Crossword!</h1>
    </div>
  );
}

export default Crossword;
