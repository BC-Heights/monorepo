import styles from './loading.module.scss'

export interface LoadingProps {
  cardPerRow: number[]
  cardConfig: number[][];
}

export function Loading(props: LoadingProps) {
  // Implement the loading component UI here
  return (
    <div className={styles['container']}>
      {props.cardPerRow.map((count, rowIndex) => (
        <div className={styles['sub-container']} key={rowIndex}>
          {Array.from({ length: count }).map((_, colIndex) => (
            <div className={styles['card']} key={colIndex}>
              {['big', 'small'].map((type, index) => (
                Array.from({ length: props.cardConfig[2 * rowIndex + colIndex][index] }).map((_, i) => (
                  <div className={styles[`${type}`]} key={i}>
                  </div>
                ))
              ))}
            </div>
          ))}
          {count === 2 && (
            <div style={{visibility: 'hidden', width: '370px'}} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Loading;


