import styles from './components.module.css';
export { MainLoading, TopicLoading } from './loading'; 
export { default as Footer } from './footer';
export { default as Header } from './header';

/* eslint-disable-next-line */
export interface ComponentsProps {}

export function Components(props: ComponentsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Components!</h1>
    </div>
  );
}

export default Components;
