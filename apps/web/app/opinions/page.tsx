import {
  TopicCard,
  TopicComponentProps,
  VerticalLine,
  Wheel,
  BigCard,
} from '@the-heights/components';
import { Settings } from 'react-slick';
import { GetPostsByCat } from '@the-heights/graphql';

const subCats = {
  left: [
    { name: 'Op-Ed', slug: 'op-ed', url: 'opinions/op-ed' },
    { name: 'Editorials', slug: 'editorials', url: 'opinions/editorials' },
    { name: 'Thumbs Up, Thumbs Down', slug: 'tu-td', url: 'opinions/tu-td' },
  ],
  right: [
    {
      name: 'Letters to the Editor',
      slug: 'letters-to-the-editor',
      url: 'opinions/letters-to-the-editor',
    },
    {
      name: 'Letters from the Editor',
      slug: 'letter-from-the-editor',
      url: 'opinions/letter-from-the-editor',
    },
  ],
};

const settings: Settings = {
  arrows: false,
  infinite: true,
  speed: 750,
  className: 'center',
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  adaptiveHeight: true,
  dots: true,
  cssEase: 'ease-in-out',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerPadding: '100px',
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerPadding: '50px',
      },
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '0px',
      },
    },
  ],
};

export default async function Page() {
  const { posts } = await GetPostsByCat(
    { first: 5, categoryName: 'opinions' },
    ['Opinions'],
  );

  return (
    <div className="flex justify-center">
      <div className="flex w-[90%] flex-col px-8">
        <Wheel settings={settings}>
          {posts?.nodes.map((post, index) => {
            return (
              <div className="px-0 md:px-8" key={index}>
                <BigCard
                  post={post}
                  key={index}
                  imgSize="large"
                  imgW={800}
                  imgH={440}
                  showCategory={false}
                  showExcerpt={true}
                />
              </div>
            );
          })}
        </Wheel>
        <div className="mb-4 mt-8 w-full self-center border-t px-8" />
        <div className="flex ">
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
