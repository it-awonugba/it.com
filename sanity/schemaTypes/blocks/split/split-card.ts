import {defineField, defineType} from 'sanity'
import {TextIcon} from '@sanity/icons'

export default defineType({
  name: 'split-card',
  type: 'object',
  icon: TextIcon,
  title: 'Split Card',
  description: 'Column with tag line, title and content body. Part of a split cards.',
  fields: [
    defineField({
      name: 'tagLine',
      type: 'string',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      type: 'block-content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: title || 'No Title',
      }
    },
  },
})
