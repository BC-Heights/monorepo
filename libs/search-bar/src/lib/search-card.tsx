"use client"

import { useQuery } from "@apollo/client";
import { SearchPostsQuery, SearchPostsDocument } from "graphql/queries.generated";
import { StyledCard } from "@the-heights/styled-card";

export interface SearchCardProps {
    key: number;
    first: number;
    searchValue: string;
    after?: string|null|unknown;
}

export default function SearchCard({first, searchValue, after}: SearchCardProps) {
    const { data, loading } = useQuery<SearchPostsQuery>(SearchPostsDocument, {
        variables: { first: first, search: searchValue, after: after },
    });
    const posts = data?.posts;
    // const pageInfo = posts?.pageInfo;

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            {posts?.nodes.map((post, i) => (
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
            ))}
        </div>
    );
}
   