import { RiFolderOpenLine as icon } from 'react-icons/ri'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number' },
  ]
}
