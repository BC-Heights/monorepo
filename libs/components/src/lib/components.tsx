import styles from './components.module.css';
export { MainLoading, TopicLoading } from './loading'; 
export { default as Footer } from './footer';
export { default as Header } from './header';
export { default as Twitter } from './twitter';
export { VerticalLine } from './lines';
export { default as Spotify } from './spotify';
export { AuthorName, Category } from './tags';
export { default as TopicComponent } from './topic-component';
export type { TopicComponentProps } from './topic-component';
export { default as EEdition } from './e-edition';

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
