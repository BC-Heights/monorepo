import styles from './loading.module.scss';

export function Loading() {
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

export default Loading;
