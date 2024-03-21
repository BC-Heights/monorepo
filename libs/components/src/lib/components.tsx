import styles from './components.module.css';
export{ NextArrow, PrevArrow} from './carousel-arrow';

export { MainLoading, TopicLoading } from './loading'; 
export { default as Footer } from './footer';
export { default as Header } from './header';
export { default as Twitter } from './twitter';
export { VerticalLine, HorizontalLine } from './lines';
export { default as Spotify } from './spotify';
export { AuthorName, Category } from './tags';
export { default as TopicComponent } from './topic-component';
export type { TopicComponentProps } from './topic-component';
export { default as EEdition } from './e-edition';
export { default as Wheel } from './wheel';
export { default as Arrow } from './carousel-arrow';
export { getPhotos } from './photos';

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
