import Image from "next/image";
import { PAGE_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type SplitRow = Extract<Block, { _type: "split-row" }>;
type ImagesAndCaptionsList = Extract<
  NonNullable<SplitRow["splitColumns"]>[number],
  { _type: "image-caption-list" }
>;
type ImageCaptionItemProps = NonNullable<
  NonNullable<ImagesAndCaptionsList["imageCaptionList"]>[number]
>;

export default function ImageCaptionItem({
  caption,
  image,
}: ImageCaptionItemProps) {
  return image && image.asset?._id ? (
    <figure className="flex flex-col justify-between items-center h-16">
      <Image
        src={urlFor(image).url()}
        alt={image.alt || ""}
        placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
        blurDataURL={image?.asset?.metadata?.lqip || ""}
        className="object-cover"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        quality={100}
        height={40}
        width={40}
      />
      <figcaption className="text-xs">{caption}</figcaption>
    </figure>
  ) : null;
}
