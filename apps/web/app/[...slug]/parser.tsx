import React from 'react'

import { DOMNode, Element, HTMLReactParserOptions, domToReact } from 'html-react-parser'

import { GetImageUrl } from '@the-heights/apollo-client';


// ask multimedia people to change how they make their articles

export async function multiMediaRegex(html: string): Promise<string> {
  const regex = /\[vc_row\]|\[vc_column\]|\[vc_column_text\]|\[\/vc_column_text\]|\[\/vc_column\]|\[\/vc_row\]/g;
  html = html.replace(regex, '');
  const imageIdRegex = /\[vc_single_image image=&#8221;(\d+)&#8243; img_size=&#8221;full&#8221;\]/;
  let match = html.match(imageIdRegex);
  while ((match = html.match(imageIdRegex)) !== null) {
      const imageUrl = await GetImageUrl(Number(match[1])); // Map the ids to an array of image URLs
      html = html.replace(match[0], `<img src="${imageUrl?.sourceUrl || 'urmom.png'}" alt="No Image Found" width="100%" height="auto" />`);
  }
  return html;
}

// add gallery styler
  
export const mainOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.name === 'p') {
      const hasAnchor = domNode.children.some(child => child instanceof Element && child.name === 'a');
        if (hasAnchor) {
          const updatedChildren = domNode.children.map((child, index) => {
            if (child instanceof Element && child.name === 'a') {
              // Maps absoulte link from database to relative link
              const href = child.attribs.href;
              const lastSlashIndex = href.lastIndexOf('/');
              const secondToLastSlashIndex = href.lastIndexOf('/', lastSlashIndex - 1);
              const newHref = href.substring(secondToLastSlashIndex === -1 ? lastSlashIndex + 1 : secondToLastSlashIndex + 1);

              const isBCHeights = href.includes("bcheights");
              
              const updatedHref = isBCHeights ? newHref : href;
              
              return <a key={index} href={updatedHref}>{domToReact(child.children as DOMNode[])}</a>;
            }

            return child;
          });
          domNode.children = updatedChildren as DOMNode[];
        } 
    }
  }
}
  
  