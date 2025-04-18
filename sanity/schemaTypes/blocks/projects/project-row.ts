import { defineType, defineField } from "sanity";

import { ProjectsIcon } from "@sanity/icons";

export default defineType({
  name: "project-row",
  type: "object",
  title: "Project Row",
  icon: ProjectsIcon,
  description: "A row of project cards.",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      description: "The title of the project row.",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "padding",
      type: "section-padding",
    }),
    defineField({
      name: "colorVariant",
      type: "color-variant",
      description: "Select a background color variant",
    }),
    defineField({
      name: "noGap",
      type: "boolean",
      description: "Remove gap between columns",
      initialValue: false,
    }),
    defineField({
      name: "projectCards",
      type: "array",
      title: "Project Cards",
      of: [{ type: "project-card" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      projectCards: "projectCards",
    },
    prepare({ title, projectCards }) {
      return {
        title: title || "No Title",
        subtitle: `Number of Project Cards: ${projectCards?.length || 0}`,
      };
    },
  },
});
