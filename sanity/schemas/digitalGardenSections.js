import { RiPlantLine as icon } from 'react-icons/ri'

export default {
  name: 'digitalGarden',
  title: 'Digital Garden Sections',
  type: 'document',
  icon,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'icon', title: 'Icon', type: 'image' },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
  ]
}
