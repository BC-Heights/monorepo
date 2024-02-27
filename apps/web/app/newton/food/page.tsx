import { SubTopicCard } from '@the-heights/components';

export const metadata = {
  title: 'Food \u2014 The Heights',
  description: "The Heights' coverage of Newton Food.",
};

export default function Page() {
  return (
    <div>
      <SubTopicCard slug="food" />
    </div>
  );
}
