import { SubTopicCard } from '@the-heights/components';

export const metadata = {
  title: 'On Campus Arts \u2014 The Heights',
  description: "The Heights' coverage of on campus arts and culture.",
};

export default function Page() {
  return (
    <div>
      <SubTopicCard slug="on-campus" />
    </div>
  );
}
