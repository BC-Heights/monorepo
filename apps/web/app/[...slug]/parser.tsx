import React from 'react'
import { DOMNode, Element, Text, HTMLReactParserOptions, domToReact } from 'html-react-parser'
import { GetImageUrl } from '@the-heights/graphql';


// ask multimedia people to change how they make their articles or add a plugin
export async function multiMediaRegex(html: string): Promise<string> {
  //fancy regex magic to remove all the vc stuff
  const regex = /\[vc_row\]|\[vc_column\]|\[vc_column_text\]|\[\/vc_column_text\]|\[\/vc_column\]|\[\/vc_row\]/g;
  html = html.replace(regex, '');
  const imageIdRegex = /\[vc_single_image image=&#8221;(\d+)&#8243; img_size=&#8221;full&#8221;\]/;
  let match = html.match(imageIdRegex);
  while ((match = html.match(imageIdRegex)) !== null) {
      const {mediaItemBy: imageUrl} = await GetImageUrl({mediaItemId: Number(match[1])}); // Map the ids to an array of image URLs
      html = html.replace(match[0], `<img src="${imageUrl?.sourceUrl || 'urmom.png'}" alt="No Image Found" width="100%" height="auto" />`);
  }
  return html;
}

// add gallery styler

export const postOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.name === 'p') {
      return <p className="leading-[2em] text-[17px] mb-[25px]">
        {domToReact(domNode.children as DOMNode[], postOptions)}
        </p>
    }
    if (domNode instanceof Element && domNode.name === 'a') {
      // Maps absoulte link from database to relative link
      const href = domNode.attribs.href;
      const lastSlashIndex = href.lastIndexOf('/');
      const secondToLastSlashIndex = href.lastIndexOf('/', lastSlashIndex - 1);
      const newHref = href.substring(secondToLastSlashIndex === -1 ? lastSlashIndex + 1 : secondToLastSlashIndex + 1);
      const isBCHeights = href.includes("bcheights");
      const updatedHref = isBCHeights ? newHref : href;
      return <a className="text-[#0000EE] no-underline hover:underline" href={updatedHref}>
        {((domNode.children[0] as Text).data)}
        </a>;
    }
  }
}
  