import { SubTopicCard } from '@the-heights/components';

export const metadata = {
 title: "Administration News \u2014 The Heights",
description: "The Heights coverage of BC Administration",
};

export default function Page() {
  return (
    <div>
      <SubTopicCard slug="administration" />
    </div>
  );
}
