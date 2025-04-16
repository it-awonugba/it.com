import {defineField, defineType} from 'sanity'
import {ListIcon} from '@sanity/icons'

export default defineType({
  name: 'all-posts',
  type: 'object',
  title: 'All Posts',
  description: 'A list of all posts',
  icon: ListIcon,
  fields: [
    defineField({
      name: 'padding',
      type: 'section-padding',
    }),
    defineField({
      name: 'colorVariant',
      type: 'color-variant',
      title: 'Color Variant',
      description: 'Select a background color variant',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'All Posts',
      }
    },
  },
})
