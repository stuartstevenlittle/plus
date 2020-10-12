import { RiPlantLine as icon } from 'react-icons/ri'
export default {
  name: 'plant',
  title: 'Plant',
  type: 'document',
  icon,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'plantType', title: 'Plant Type', type: 'reference', to: { type: 'plantType' } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: { type: 'tag' } }] },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'author', title: 'Author', type: 'reference', to: { type: 'author' } },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      tag0: 'tags.0.name',
      tag1: 'tags.1.name',
      tag2: 'tags.2.name',
      tag3: 'tags.3.name',
      tag4: 'tags.4.name',
      tag5: 'tags.5.name',
      tag6: 'tags.6.name'
    },

    prepare: ({ title, media, ...tags }) => {
      const tagsNoUndefined = Object.values(tags).filter(tag => tag !== undefined)
      return { title, media, subtitle: tagsNoUndefined.join(', ') }
    }
  }

}
