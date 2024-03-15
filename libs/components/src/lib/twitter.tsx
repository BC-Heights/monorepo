"use client"

import { TwitterTimelineEmbed } from 'react-twitter-embed' 

export interface TwitterProps {
  className?: string;
  height?: string;
}


export function Twitter({ className,height }: TwitterProps) {
  const defaultHeight = '600px';
  return (
    <div className={className}>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="bcheights"
        options={{height: height? height: defaultHeight}}
        placeholder={<p>Loading...</p>}
        />
    </div>
  );
};

export default Twitter;