import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const imageCaptionListQuery = groq`
  _type == "image-caption-list" => {
    _type,
    _key,
    title,
    imageCaptionList[] {
      _type,
      _key,
      image {
        asset->{
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
      caption
    }
  }
`;
