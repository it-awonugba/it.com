import { PAGE_QUERYResult } from "@/sanity.types";
import Hero1 from "@/components/blocks/hero/hero-1";
import Hero2 from "@/components/blocks/hero/hero-2";
import SectionHeader from "@/components/blocks/section-header";
import SplitRow from "@/components/blocks/split/split-row";
import GridRow from "@/components/blocks/grid/grid-row";
import Carousel1 from "@/components/blocks/carousel/carousel-1";
import Carousel2 from "@/components/blocks/carousel/carousel-2";
import TimelineRow from "@/components/blocks/timeline/timeline-row";
import Cta1 from "@/components/blocks/cta/cta-1";
import LogoCloud1 from "@/components/blocks/logo-cloud/logo-cloud-1";

import FormNewsletter from "@/components/blocks/forms/newsletter";
import AllPosts from "@/components/blocks/all-posts";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];

const componentMap: {
  [K in Block["_type"]]: React.ComponentType<Extract<Block, { _type: K }>>;
} = {
  "hero-1": Hero1,
  "hero-2": Hero2,
  "section-header": SectionHeader,
  "split-row": SplitRow,
  "grid-row": GridRow,
  "carousel-1": Carousel1,
  "carousel-2": Carousel2,
  "timeline-row": TimelineRow,
  "cta-1": Cta1,
  "logo-cloud-1": LogoCloud1,

  "form-newsletter": FormNewsletter,
  "all-posts": AllPosts,
};

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks?.map((block) => {
        switch (block._type) {
          case "hero-1":
            return <Hero1 {...block} key={block._key} />;
          case "hero-2":
            return <Hero2 {...block} key={block._key} />;
          case "section-header":
            return <SectionHeader {...block} key={block._key} />;
          case "split-row":
            return <SplitRow {...block} key={block._key} />;
          case "grid-row":
            return <GridRow {...block} key={block._key} />;
          case "carousel-1":
            return <Carousel1 {...block} key={block._key} />;
          case "carousel-2":
            return <Carousel2 {...block} key={block._key} />;
          case "timeline-row":
            return <TimelineRow {...block} key={block._key} />;
          case "cta-1":
            return <Cta1 {...block} key={block._key} />;
          case "logo-cloud-1":
            return <LogoCloud1 {...block} key={block._key} />;
          case "form-newsletter":
            return <FormNewsletter {...block} key={block._key} />;
          case "all-posts":
            return <AllPosts {...block} key={block._key} />;
          default:
            return null;
        }
      })}
    </>
  );
}
