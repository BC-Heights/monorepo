import { GetAuthorInfo, MediaItemSizeEnum } from '@the-heights/graphql';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) {
  const { molonguiAuthor } = await GetAuthorInfo(
    {
      id: 200343,
      type: 'guest',
      imgSize: MediaItemSizeEnum.Large,
    },
    ['author']
  );


  return (
    <div>
      <h1>Welcome to {params.slug} page!</h1>
      {Object.keys(searchParams).map((key) => (
        <div key={key}>
          {key}: {searchParams[key]}
        </div>
      ))}
    </div>
  );
}
