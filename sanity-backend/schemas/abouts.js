import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'abouts',
  title: 'Abouts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'imgUrl',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'string',
    })
  ],
})
