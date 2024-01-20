import styles from './topic-card.module.scss';
import { SmallCard } from '@the-heights/small-card';
import { BigCard } from '@the-heights/big-card';

import { GetPostsByCat } from '@the-heights/apollo-client';



/* eslint-disable-next-line */
export interface TopicCardProps {
  category: string;
  numBig: number;
  numSmall: number;
}

export async function TopicCard(props: TopicCardProps) {
  const numTotal = props.numBig + props.numSmall;

  const posts = await GetPostsByCat(numTotal, props.category);

  return (
      <div className={styles['container']}>
        <div className={styles['title-container']}>
          <span/>
          <span className={styles['line']} />
            <h1 className={styles['title']}>
              {props.category==='Features'? 'Magazine': props.category==='Metro'? 'Newton': props.category}
            </h1>
          <span className={styles['line']} />
          <span/>
        </div>
        <div>
          {posts?.nodes.map((post, index) => {
            if (index < props.numBig) {
              return (
                <BigCard
                  key={index}
                  date={post.date || 'Jan 10'}
                  imageSrc={post.featuredImage?.node?.sourceUrl || '/default-image.jpg'}
                  excerpt={props.category==='Multimedia'? '': post.excerpt || 'No Excerpt'}
                  imageAlt={post.featuredImage?.node?.caption || 'No Caption'} 
                  imgW={370}
                  imgH={202.91}
                  slug={post.slug || 'default-slug'} 
                  title={post.title || 'Untitled'}
                />
              );
            } else {
              return (
                <SmallCard
                  key={index}
                  slug={post.slug || 'default-slug'}
                  title={post.title || 'Untitled'}
                  date={post.date || 'Jan 10'}
                />
              );
            }
          })}
        </div>
      </div>
  );
}


export default TopicCard;
