import { FaRegNewspaper as icon } from 'react-icons/fa'

export default {
  name: 'news',
  title: 'News',
  icon,
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'body', title: 'Body', type: 'blockContent' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } },
    { name: 'author', title: 'Author', type: 'reference', to: { type: 'people' } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: { type: 'tags' } }] },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },

  ],

}
