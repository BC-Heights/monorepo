import { Wheel } from '@the-heights/components';
import { GetPostsByCat, PostFragment } from '@the-heights/graphql';

export default async function Page() {
  const { posts } = await GetPostsByCat({ first: 5, categoryName: 'arts' }, [
    'Arts',
  ]);

  return (
    <div className="flex justify-center">
      <div className="flex w-[90%] flex-col px-8">
        <Wheel posts={posts?.nodes as PostFragment[]} />
      </div>
    </div>
  );
}
