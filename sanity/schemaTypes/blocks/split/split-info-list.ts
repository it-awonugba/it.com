import { defineField, defineType } from "sanity";
import { InfoFilledIcon } from "@sanity/icons";
import { extractPlainText } from "@/lib/utils";

export default defineType({
  name: "split-info-list",
  type: "object",
  icon: InfoFilledIcon,
  title: "Split Info List",
  description:
    "Column with list of cards. Each card has a title, content body, image and tags",
  fields: [
    defineField({
      name: "list",
      type: "array",
      of: [{ type: "split-info" }],
    }),
  ],
  preview: {
    select: {
      title: "list.0.title",
      subtitle: "list.0.body",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "No Title",
        subtitle: extractPlainText(subtitle) || "No Subtitle",
      };
    },
  },
});
