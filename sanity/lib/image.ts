import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "../env";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  const imageBuilder = builder.image(source);
  const sourceObject = source as { asset?: { mimeType?: string } };
  const isSvg = sourceObject.asset?.mimeType === "image/svg+xml";

  if (isSvg) {
    return imageBuilder;
  }

  return imageBuilder.format("webp").fit("crop");
};
