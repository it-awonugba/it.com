import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

export default defineType({
  name: "project-card",
  type: "object",
  title: "Project Card",
  description:
    "Project Card: A card with a project image, title, Gthub link, and a description.",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Project Title",
      description: "The title of the project.",
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Project Image",
      description: "The image representing the project.",
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Important for accessibility and SEO.",
        }),
      ],

      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      description: "A brief description of the project.",
      validation: (Rule) => Rule.max(150),
    }),
    defineField({
      name: "githubLink",
      type: "url",
      title: "GitHub Link",
      description: "The URL to the project's GitHub repository.",
      validation: (Rule) => Rule.uri({ allowRelative: false }),
    }),
    defineField({
      name: "link",
      type: "url",
      title: "Project Link",
      description: "The URL to the live project.",
      validation: (Rule) => Rule.uri({ allowRelative: false }),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title: title || "No Title",
        media,
      };
    },
  },
});
