import { defineType, defineField } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export default defineType({
  name: "logo-cloud-1",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "colorVariant",
      type: "color-variant",
      title: "Color Variant",
      description: "Select a background color variant",
    }),
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "images",
      type: "array",
      of: [
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
            {
              name: "label",
              type: "string",
              title: "Label",
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
        title: "Logo Cloud",
        subtitle: title || "No Title",
      };
    },
  },
});
