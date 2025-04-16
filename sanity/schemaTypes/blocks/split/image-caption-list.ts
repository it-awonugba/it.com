import { defineField, defineType } from "sanity";
import { ImageIcon } from "@sanity/icons";

export default defineType({
  name: "image-caption-list",
  type: "object",
  icon: ImageIcon,
  title: "Image Caption List",
  description:
    "Column with list of images with caption. Each has an image and caption.",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),
    defineField({
      name: "imageCaptionList",
      title: "Image with caption",
      type: "array",
      of: [
        defineField({
          name: "imageWithCaption",
          title: "Image and Caption",
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title || "No Title",
      };
    },
  },
});
