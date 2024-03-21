import { GetPostsByCat, MediaItemSizeEnum } from '@the-heights/graphql';
import { BigCard, StyledCard } from './cards';
import { EEdition, VerticalLine } from './components';

/* eslint-disable-next-line */
export interface MainCardProps {}

export default async function MainCard() {
  const { posts } = await GetPostsByCat(
    { first: 4, categoryName: 'top story', imgSize: MediaItemSizeEnum.Large },
    ['top story'],
  );

  const firstPost = posts?.nodes[0];

  return (
    <div className="mb-0 mt-4 flex w-full flex-wrap justify-center lg:flex-row">
      <div className="w-full lg:w-[calc(44.44%-64px)]">
        <BigCard
          post={firstPost!}
          imgSize="large"
          imgW={638}
          imgH={349.89}
          priority
          showCategory
          showExcerpt
        ></BigCard>
      </div>
      <div className="mx-8 hidden border-r border-[#eee] lg:flex lg:self-stretch" />
      <div className="flex w-full flex-col-reverse justify-center md:flex-row lg:w-[calc(55.55%-64px)]">
        <div className="w-full py-0 lg:w-2/3">
          {posts?.nodes
            .slice(1)
            .map((post, index) => (
              <StyledCard
                key={index}
                post={post}
                imgSize="large"
                imgW={150}
                imgH={82.26}
                reverse
                textWrap
                showCategory
              />
            ))}
        </div>
        <div className="hidden md:flex">
          <VerticalLine className="mx-8"/>
        </div>
        <div className="flex w-full place-content-between md:w-1/3">
          <EEdition />
        </div>
      </div>
    </div>
  );
}
