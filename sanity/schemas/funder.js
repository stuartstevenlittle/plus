import { BiPound as icon } from 'react-icons/bi'

export default {
  name: 'funder',
  title: 'Funder',
  type: 'document',
  icon,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number' },

  ]
}
