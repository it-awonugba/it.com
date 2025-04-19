import Image from "next/image";
import { PAGE_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { EyeIcon, CodeIcon } from "lucide-react";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];
type ProjectRow = Extract<Block, { _type: "project-row" }>;
type ProjectCardProps = Extract<
  NonNullable<ProjectRow["projectCards"]>[number],
  { _type: "project-card" }
>;

export default function ProjectCard({
  title,
  image,
  description,
  githubLink,
  link,
}: ProjectCardProps) {
  return (
    <div className="relative w-80 h-48 group flex flex-col items-center justify-center rounded-md overflow-hidden">
      <div className="w-full h-full z-10 hidden group-hover:block absolute inset-0 bg-black/80 transition-opacity duration-300 ease-in-out">
        <div className="flex flex-col items-center p-4 gap-2 justify-center h-full w-full">
          <p className="text-white text-base">{description}</p>
          <div className="flex items-center justify-center gap-2">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-destructive p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
              >
                <EyeIcon size={24} />
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-destructive p-2 rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 ease-in-out"
              >
                <CodeIcon size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="relative w-80 h-48 overflow-hidden rounded-lg">
        {image && image.asset?._id ? (
          <figure>
            <Image
              src={urlFor(image).url()}
              alt={image.alt || ""}
              placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
              blurDataURL={image?.asset?.metadata?.lqip || ""}
              fill
              className="object-fit"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              quality={100}
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-destructive/80 text-white p-2 text-center">
              {title}
            </figcaption>
          </figure>
        ) : null}
      </div>
    </div>
  );
}
