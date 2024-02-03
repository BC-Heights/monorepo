import styles from './components.module.css';

export function MainLoading() {
  return (
    <div className={styles['container']}>
      <div className={styles['main-post']}>
        <div className={styles['skeleton-image']}></div>
        <div className={styles['skeleton-big-card-title']}></div>
      </div>
      <div className={styles['sub-container']}>
        {[...Array(4)].map((_, index) => (
          <div className={styles['skeleton-small-card']} key={index}></div>
        ))}
      </div>
    </div>
  );
}

export interface TopicLoadingProps {
  cardPerRow: number[];
  cardConfig: number[][];
}

export function TopicLoading(props: TopicLoadingProps) {
  // Implement the loading component UI here
  return (
    <div className={styles['container']}>
      {props.cardPerRow.map((count, rowIndex) => (
        <div className={styles['sub-container']} key={rowIndex}>
          {Array.from({ length: count }).map((_, colIndex) => (
            <div className={styles['card']} key={colIndex}>
              {['big', 'small'].map((type, index) =>
                Array.from({
                  length: props.cardConfig[2 * rowIndex + colIndex][index],
                }).map((_, i) => (
                  <div className={styles[`${type}`]} key={i}></div>
                ))
              )}
            </div>
          ))}
          {count === 2 && <div style={{ display: 'none', width: '370px' }} />}
        </div>
      ))}
    </div>
  );
}

export default TopicLoading;
