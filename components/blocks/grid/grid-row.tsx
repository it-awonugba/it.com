import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import { PAGE_QUERYResult } from "@/sanity.types";
import GridCard from "./grid-card";
import GridPost from "./grid-post";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type GridRow = Extract<Block, { _type: "grid-row" }>;
type GridColumn = NonNullable<NonNullable<GridRow["columns"]>[number]>;

export default function GridRow({
  padding,
  colorVariant,
  gridColumns,
  columns,
}: GridRow) {
  const color = stegaClean(colorVariant);

  return (
    <SectionContainer color={color} padding={padding}>
      {columns && columns?.length > 0 && (
        <div
          className={cn(
            `grid grid-cols-1 gap-6`,
            `lg:${stegaClean(gridColumns)}`
          )}
        >
          {columns.map((column) => {
            if (column._type === "grid-card") {
              return (
                <GridCard
                  {...column}
                  color={color || undefined}
                  key={column._key}
                />
              );
            }
            if (column._type === "grid-post") {
              return (
                <GridPost
                  {...column}
                  color={color || undefined}
                  key={column._key}
                />
              );
            }
          })}
        </div>
      )}
    </SectionContainer>
  );
}
