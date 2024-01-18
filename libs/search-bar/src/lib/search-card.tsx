

import { StyledCard } from "@the-heights/styled-card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SearchCard(post: any) {
    console.log(post);
    return (
        <StyledCard
            date={post.date || "No Date Available"}
            imageSrc={post.featuredImage?.node.sourceUrl || "/default-image.jpg"}
            imageAlt={post.featuredImage?.node.caption || "No Image Caption"}
            imgW={150}
            imgH={82.26}
            excerpt={post.excerpt || "No Excerpt Available"}
            slug={post.slug || "default-slug"}
            title={post.title || "Untitled"}
        />
    );
}
   