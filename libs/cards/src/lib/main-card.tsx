import { GetPostsByCat } from '@the-heights/graphql';
import BigCard from './big-card';
import StyledCard from './styled-card';
import { VerticalLine } from '@the-heights/components';
import Image from 'next/image';

/* eslint-disable-next-line */
export interface MainCardProps {}

export default async function MainCard() {
  const { posts } = await GetPostsByCat(
    { first: 5, categoryName: 'top story' },
    ['top story']
  );

  const firstPost = posts?.nodes[0];

  return (
    <div className="flex items-start flex-wrap flex-row justify-center mt-4 mb-0 ">
      <div className="w-[40%] h-full py-0 px-8">
        <BigCard
          post={firstPost!}
          imgSize="large"
          imgW={638}
          imgH={349.89}
          priority={true}
        ></BigCard>
      </div>
      <div className='border-r border-[#eee] self-stretch'/>
      <div className="flex flex-col w-[64%] h-full px-8 py-0 lg:max-w-[33%]">
        {posts?.nodes.slice(1).map((post, index) => (
          <StyledCard
            post={post}
            key={index}
            imgSize="medium"
            imgW={150}
            imgH={82.26}
          />
        ))}
      </div>
      <VerticalLine/>
      <div className="w-[25%] px-8">
        <div className="flex flex-row justify-around items-center gap-4">
        </div>
        <div className="relative p-t-[max(60%, 326px)] w-full h-[270px]">
          <iframe
            title="E-Edition of The Heights"
            className="absolute border-none size-full inset-0"
            allow="clipboard-write allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms"
            allowFullScreen={true}
            src="https://e.issuu.com/embed.html?backgroundColor=%23232323&backgroundColorFullscreen=%23232323&d=the_heights_dec_4_2023&hideIssuuLogo=true&u=bcheights"
          />
        </div>
        <h2 className="text-center my-4 text-2xl">
          <strong>
            <span>
              Click Above To Access The Most Recent{' '}
              <a href="https://www.bcheights.com/e-edition-2/">
                E-Edition Of <em>The Heights</em>
              </a>
            </span>
          </strong>
        </h2>
        <Image
          src={
            'https://s3.amazonaws.com/heights-photos/wp-content/uploads/2023/02/27003123/Newsletter-372x195.png'
          }
          width={372}
          height={195}
          alt={'Subscribe to the Newsletter'}
        />
      </div>
    </div>
  );
}
