"use client"

import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed' 


const Twitter: React.FC = () => {
  return (
    <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="bcheights"
        options={{height: '600px'}}
        />
    </div>
  );
};


export default Twitter;
