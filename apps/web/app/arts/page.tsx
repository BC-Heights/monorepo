import {
  Wheel,
  TopicCard,
  TopicComponentProps,
  VerticalLine,
} from '@the-heights/components';
import { GetPostsByCat, PostFragment } from '@the-heights/graphql';

export const metadata = {
  title: 'Arts \u2014 The Heights',
  description: "The Heights' Arts.",
};

const subCats = {
  left: [
    { name: 'On Campus', slug: 'on-campus', url: 'arts/on-campus' },
    { name: 'Arts Features', slug: 'arts-features', url: 'arts/features' },
    { name: 'Movies', slug: 'movies', url: 'arts/movies' },
    { name: 'Arts Column', slug: 'column-arts', url: 'arts/column' },
  ],
  right: [
    { name: 'Off Campus', slug: 'off-campus', url: 'arts/off-campus' },
    { name: 'Music', slug: 'music', url: 'arts/music' },
    { name: 'Television', slug: 'television', url: 'arts/television' },
    { name: 'Review', slug: 'review', url: 'arts/review' },
  ],
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const paddings = ['md:pr-8', 'md:pl-8'];

export default async function Page() {
  const { posts } = await GetPostsByCat({ first: 5, categoryName: 'arts' }, [
    'Arts',
  ]);

  return (
    <div className="flex justify-center">
      <div className="flex w-[90%] flex-col px-8">
        <Wheel posts={posts?.nodes as PostFragment[]} dynamicHeight />
        <div className="mb-4 mt-8 w-full self-center border-t px-8" />
        <div className="flex">
          <SubCatsWrapper side="left" />
          <VerticalLine />
          <SubCatsWrapper side="right" />
        </div>
      </div>
    </div>
  );
}

function SubCatsWrapper({ side }: { side: keyof typeof subCats }) {
  return (
    <div className={`md:${side === 'left' ? 'pr-8' : 'pl-8'}`}>
      {subCats[side].map((cat, index) => (
        <TopicCard
          className="[&_div:nth-child(even)]:!border-black"
          key={index}
          category={cat}
          topicComponents={Array<TopicComponentProps>(2).fill({
            type: 'styled',
            imgSize: 'large',
            showExcerpt: false,
            showCategory: false,
          })}
        />
      ))}
    </div>
  );
}
