import { GetPostsByCat } from '@the-heights/graphql';

export interface PhotosProps {
  cat: string;
  numPhotos: number;
}



export async function getPhotos({ cat, numPhotos }: PhotosProps) {
  const photos: JSX.Element[] = [];
  const { posts } = await GetPostsByCat(
    { first: numPhotos, categoryName: cat },
    [cat],
  );

  posts?.nodes.forEach((post) => {
    const { title, featuredImage } = post;
    photos.push(<img src={featuredImage?.node.sourceUrl || ''} alt={title || ''} />);
  
  });
 
  return photos;

}