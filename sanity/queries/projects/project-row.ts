import { groq } from "next-sanity";
import { projectCardQuery } from "./project-card";

// @sanity-typegen-ignore
export const projectRowQuery = groq`
  _type == "project-row" => {
    _type,
    _key,
    title,
    padding,
    colorVariant,
    noGap,
    projectCards[] {
      ${projectCardQuery}
    }
}`;
