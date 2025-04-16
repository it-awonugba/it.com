import { PAGE_QUERYResult } from "@/sanity.types";
import ImageCaptionItem from "./image-caption-item";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type SplitRow = Extract<Block, { _type: "split-row" }>;
type ImageAndCaptionList = Extract<
  NonNullable<SplitRow["splitColumns"]>[number],
  { _type: "image-caption-list" }
>;
export default function ImageCaptionList({
  title,
  imageCaptionList,
}: ImageAndCaptionList) {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="my-4 font-semibold leading-[1.2]">{title}</h2>
      <div className="flex flex-row flex-wrap gap-6">
        {imageCaptionList &&
          imageCaptionList.map((item, index) => {
            return <ImageCaptionItem {...item} key={index} />;
          })}
      </div>
    </div>
  );
}
