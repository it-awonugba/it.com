import { cn } from "@/lib/utils";
import SectionContainer from "@/components/ui/section-container";
import { PAGE_QUERYResult } from "@/sanity.types";
import { stegaClean } from "next-sanity";
import ProjectCard from "./project-card";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type ProjectRowProps = Extract<Block, { _type: "project-row" }>;

export default function ProjectRow({
  title,
  padding,
  colorVariant,
  noGap,
  projectCards,
}: ProjectRowProps) {
  const color = stegaClean(colorVariant);
  return (
    <SectionContainer color={color} padding={padding}>
      {projectCards && projectCards?.length > 0 && (
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2",
            noGap ? "gap-0" : "gap-12 lg:gap-20"
          )}
        >
          {projectCards?.map((projectCardItem) => {
            if (projectCardItem._type === "project-card") {
              return (
                <ProjectCard {...projectCardItem} key={projectCardItem._key} />
              );
            }
          })}
        </div>
      )}
    </SectionContainer>
  );
}
