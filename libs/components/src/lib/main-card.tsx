import { GetPostsByCat, MediaItemSizeEnum } from '@the-heights/graphql';
import {BigCard, StyledCard} from './cards';
import { EEdition, VerticalLine } from './components';


/* eslint-disable-next-line */
export interface MainCardProps {}

export default async function MainCard() {
  const { posts } = await GetPostsByCat(
    { first: 5, categoryName: 'top story', imgSize: MediaItemSizeEnum.Large},
    ['top story']
  );

  const firstPost = posts?.nodes[0];

  return (
    <div className="flex flex-wrap justify-center mt-4 mb-0 lg:flex-row">
      <div className="py-0 px-8 lg:w-2/5">
        <BigCard
          post={firstPost!}
          imgSize="large"
          imgW={638}
          imgH={349.89}
          priority={true}
        ></BigCard>
      </div>
      <div className="hidden lg:flex lg:w-0">
        <div className="hidden border-r border-[#eee] w-0 lg:flex lg:self-stretch" />
      </div>
      <div className="flex flex-col-reverse justify-center w-full px-8 md:flex-row lg:w-1/2">
        <div className="size-full pr-8 py-0 md:w-3/5">
          {posts?.nodes.slice(1).map((post, index) => (
            <StyledCard
              post={post}
              key={index}
              reverse={true}
              imgSize="large"
              imgW={150}
              imgH={82.26}
            />
          ))}
        </div>
        <div className="hidden md:flex">
          <VerticalLine />
        </div>
        <div className="md:w-1/3 lg:w-[300px]">
          <EEdition />
        </div>
      </div>
    </div>
  );
}
