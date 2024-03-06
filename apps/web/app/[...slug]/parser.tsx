/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  DOMNode,
  Element,
  HTMLReactParserOptions,
  domToReact,
} from 'html-react-parser';

export function multiMediaRegex(
  html: string,
  images:
    | {
        __typename?: 'MediaItem' | undefined;
        databaseId: number;
        sourceUrl?: string | null | undefined;
      }[]
    | undefined,
): string {
  const regex =
    /\[vc_row\]|\[vc_column\]|\[vc_column_text\]|\[\/vc_column_text\]|\[\/vc_column\]|\[\/vc_row\]/g;
  html = html.replace(regex, '');
  const imageIdRegex =
    /\[vc_single_image image=&#8221;(\d+)&#8243; img_size=&#8221;full&#8221;\]/g;
  let match = html.match(imageIdRegex);

  if (match !== undefined && match !== null) {
    for (let i = 0; i < match.length; i++) {
      const imageItemId = Number(
        match[i].match(/image=&#8221;(\d+)&#8243;/)?.[1],
      );
      const imageItem = images?.find((item) => item.databaseId === imageItemId);
      const imageUrl = imageItem?.sourceUrl;

      if (imageUrl) {
        html = html.replace(
          match[i],
          `<img src="${imageUrl}" alt="No Image Found" width="100%" height="auto" />`,
        );
      } else {
        html = html.replace(
          match[i],
          `<img src="urmom.png" alt="No Image Found" width="100%" height="auto" />`,
        );
      }
    }
    match = html.match(imageIdRegex);
  }

  return html;
}

export const postOptions: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.name === 'img') {
      if (domNode.attribs.class.includes('alignleft')) {
        return (
          <img
            className="float-left mr-[25px]"
            src={domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={domNode.attribs.width}
            height={domNode.attribs.height}
          />
        );
      }

      if (domNode.attribs.class.includes('alignright')) {
        return (
          <img
            className="float-right ml-[25px]"
            src={domNode.attribs.src}
            alt={domNode.attribs.alt}
            width={domNode.attribs.width}
            height={domNode.attribs.height}
          />
        );
      }
    }

    // Parsing Gallery-row
    if (
      domNode instanceof Element &&
      domNode.name === 'div' &&
      domNode.attribs.class.includes('gallery-row')
    ) {
      return (
        <div className="my-5 flex flex-row flex-wrap items-center justify-center gap-[25px] md:flex-nowrap">
          {domToReact(domNode.children as DOMNode[], postOptions)}
        </div>
      );
    }

    // Parsing Gallery-group
    if (
      domNode instanceof Element &&
      domNode.name === 'div' &&
      domNode.attribs.class.includes('gallery-group')
    ) {
      return (
        <div className="group">
          {domToReact(domNode.children as DOMNode[], postOptions)}
        </div>
      );
    }

    if (
      domNode instanceof Element &&
      domNode.name === 'div' &&
      domNode.attribs.class.includes('tiled-gallery-item')
    ) {
      const image = (
        domNode.children.filter(
          (child) => child instanceof Element && child.name === 'a',
        ) as Element[]
      ).flatMap(
        (child) =>
          child.children.filter(
            (child) => child instanceof Element && child.name === 'img',
          ) as Element[],
      );
      const caption = (
        domNode.children.filter(
          (child) => child instanceof Element && child.name === 'div',
        ) as Element[]
      ).flatMap((child) => (child.children[0] as unknown as Text).data);
      return (
        <div className="relative">
          <img {...image[0].attribs} alt={image[0].attribs.alt} />
          <p className="absolute bottom-0 hidden w-full bg-[#fffc] py-[10px] indent-[10px] text-[#333] group-hover:block">
            {caption}
          </p>
        </div>
      );
    }

    if (domNode instanceof Element && domNode.name === 'figure') {
      const image = domNode.children.filter(
        (child) => child instanceof Element && child.name === 'img',
      ) as Element[];
      const caption = domNode.children.filter(
        (child) => child instanceof Element && child.name === 'figcaption',
      ) as Element[];

      return (
        <div className="flex flex-col items-center text-left">
          <figure>
            <img {...image[0].attribs} alt={image[0].attribs.alt} />
            <figcaption className="w-fit">
              {domToReact(caption[0].children as DOMNode[], postOptions)}
            </figcaption>
          </figure>
        </div>
      );
    }

    if (domNode instanceof Element && domNode.name === 'p') {
      return (
        <p className="mb-[25px] text-[17px] leading-[2em]">
          {domToReact(domNode.children as DOMNode[], postOptions)}
        </p>
      );
    }

    if (domNode instanceof Element && domNode.name === 'a') {
      const href = domNode.attribs.href;
      const lastSlashIndex = href.lastIndexOf('/');
      const secondToLastSlashIndex = href.lastIndexOf('/', lastSlashIndex - 1);
      const newHref = href.substring(
        secondToLastSlashIndex === -1
          ? lastSlashIndex + 1
          : secondToLastSlashIndex + 1,
      );
      const isBCHeights = href.includes('bcheights');
      const updatedHref = isBCHeights ? newHref : href;
      return (
        <a
          className="text-[#0000EE] no-underline hover:underline"
          href={updatedHref}
        >
          {domToReact(domNode.children as DOMNode[])}
        </a>
      );
    }

    if (domNode instanceof Element && domNode.name === 'ol') {
      return (
        <ol className="list-inside list-decimal leading-[2em]">
          {domToReact(domNode.children as DOMNode[], postOptions)}
        </ol>
      );
    }

    if (domNode instanceof Element && domNode.name === 'li') {
      return (
        <li className="mb-5 text-[17px]">
          {' '}
          {domToReact(domNode.children as DOMNode[], postOptions)}
        </li>
      );
    }
  },
};
