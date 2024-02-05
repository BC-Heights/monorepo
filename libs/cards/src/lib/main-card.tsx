import { GetPostsByCat } from '@the-heights/graphql';
import BigCard from './big-card';
import StyledCard from './styled-card';
import EEdition from './e-edition';
import { VerticalLine } from '@the-heights/components';

/* eslint-disable-next-line */
export interface MainCardProps {}

export default async function MainCard() {
  const { posts } = await GetPostsByCat(
    { first: 5, categoryName: 'top story' },
    ['top story']
  );

  const firstPost = posts?.nodes[0];

  return (
    <div className="flex flex-wrap justify-center mt-4 mb-0 xl:flex-row">
      <div className="py-0 px-8 xl:w-2/5">
        <BigCard
          post={firstPost!}
          imgSize="large"
          imgW={638}
          imgH={349.89}
          priority={true}
        ></BigCard>
      </div>
      <div className="hidden xl:flex xl:w-0">
        <div className="hidden border-r border-[#eee] w-0 xl:flex xl:self-stretch" />
      </div>
      <div className="flex flex-col-reverse md:flex-row xl:w-1/2">
        <div className="size-full px-8 py-0 md:w-3/5">
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
        <div className="md:w-1/3 xl:w-[370px]">
          <EEdition />
        </div>
      </div>
    </div>
  );
}
