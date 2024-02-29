import { SubTopicCard } from '@the-heights/components';

export const metadata = {
  title: 'News \u2014 The Heights',
  description: "The Heights' coverage of news.",
};

export default function Page() {
  return (
    <div>
      <SubTopicCard slug="news" />
    </div>
  );
}
