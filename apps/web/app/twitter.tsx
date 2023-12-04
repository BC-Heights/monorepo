"use client"

import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed' 


const Twitter: React.FC = () => {
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="bcheights"
        options={{height: 400}}
        />
    </div>
  );
};

export default Twitter;
