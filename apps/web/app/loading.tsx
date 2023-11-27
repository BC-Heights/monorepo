import styles from './loading.module.scss';

export default function Loading() {
  return (
    <div className={styles['container']}>
      <div className={styles['main-post']}>
        <div className={styles['skeleton-image']}></div>

      </div>
      <div className={styles['sub-container']}>
        {[1, 2, 3, 4, 5].map((index) => (
          <div className={styles['skeleton-small-card']} key={index}>
          </div>
        ))}
            
      </div>
    </div>
  );
}
