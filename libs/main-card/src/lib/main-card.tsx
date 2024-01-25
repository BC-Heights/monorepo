import { StyledCard } from '@the-heights/styled-card';
import { BigCard } from '@the-heights/big-card';
import { GetPostsByCat } from '@the-heights/graphql';


export interface MainCardProps { }


export async function MainCard() {
  const posts = await GetPostsByCat(5, 'top story');
  const firstPost = posts?.nodes?.[0];
  
  return (
    <div className="flex items-start flex-wrap flex-row-reverse justify-center mt-4 mb-0 ">
      <div className="w-[64%] pl-4 pr-0 py-0">
        <BigCard
          date={firstPost?.date || "No Date Available"}
          imageSrc={firstPost?.featuredImage?.node.sourceUrl || "/default-image.jpg"}
          imageAlt={firstPost?.featuredImage?.node.caption || "No Image Caption"}
          imgW={638}
          imgH={349.89}
          priority={true}
          excerpt={firstPost?.excerpt || "No Excerpt Available"}
          slug={firstPost?.slug || "default-slug"}
          title={firstPost?.title || "Untitled"}
        ></BigCard>
      </div>
      <div className="flex flex-col w-[64%] pl-0 pr-4 py-0 lg:max-w-[36%]">
        {posts?.nodes.slice(1).map((post, index) => (
            <StyledCard
                key={index}
                date={post.date || "No Date Available"}
                imageSrc={post.featuredImage?.node.sourceUrl || "/default-image.jpg"}
                imageAlt={post.featuredImage?.node.caption || "No Image Caption"}
                imgW={150}
                imgH={82.26}
                excerpt={firstPost?.excerpt || "No Excerpt Available"}
                slug={post.slug || "default-slug"}
                title={post.title || "Untitled"}
              />
        ))}
      </div>
    </div>
  );
}

export default MainCard;
