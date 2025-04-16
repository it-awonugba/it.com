import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import { PAGE_QUERYResult } from "@/sanity.types";
import SplitContent from "./split-content";
import SplitCardsList from "./split-cards-list";
import SplitImage from "./split-image";
import SplitInfoList from "./split-info-list";
import ImageAndCaptionList from "./image-caption-list";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type SplitRow = Extract<Block, { _type: "split-row" }>;
type SplitColumn = NonNullable<NonNullable<SplitRow["splitColumns"]>[number]>;

const componentMap: {
  [K in SplitColumn["_type"]]: React.ComponentType<
    Extract<SplitColumn, { _type: K }>
  >;
} = {
  "split-content": SplitContent,
  "split-cards-list": SplitCardsList,
  "split-image": SplitImage,
  "split-info-list": SplitInfoList,
  "image-caption-list": ImageAndCaptionList,
};

export default function SplitRow({
  padding,
  colorVariant,
  noGap,
  splitColumns,
}: SplitRow) {
  const color = stegaClean(colorVariant);

  return (
    <SectionContainer color={color} padding={padding}>
      {splitColumns && splitColumns?.length > 0 && (
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2",
            noGap ? "gap-0" : "gap-12 lg:gap-20"
          )}
        >
          {splitColumns?.map((column) => {
            if (column._type === "split-cards-list") {
              return (
                <SplitCardsList
                  {...column}
                  color={color || undefined}
                  key={column._key}
                />
              );
            }
            if (column._type === "split-image") {
              return <SplitImage {...column} key={column._key} />;
            }
            if (column._type === "split-info-list") {
              return <SplitInfoList {...column} key={column._key} />;
            }

            if (column._type === "image-caption-list") {
              return <ImageAndCaptionList {...column} key={column._key} />;
            }
            if (column._type === "split-content") {
              return <SplitContent {...column} key={column._key} />;
            }
          })}
        </div>
      )}
    </SectionContainer>
  );
}
