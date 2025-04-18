import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const projectCardQuery = groq`
  _type == "project-card" => {
    _type,
    _key,
    title,
    image {
        ...,
        asset-> {
            _id,
            url,
            mimeType,
            metadata {
                lqip,
                dimensions {
                    width,
                    height
                }
            }
        },
        alt
    },
    description,
    githubLink,
    link
}`;
