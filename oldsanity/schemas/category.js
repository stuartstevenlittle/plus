import { RiFolderOpenLine as icon } from 'react-icons/ri'

export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  icon,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'mainImage', title: 'Main image', type: 'image', options: { hotspot: true } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'showInMenu', title: 'Show in Menu', type: 'boolean' },
    { name: 'menuText', title: 'Menu text', type: 'text' },
    { name: 'icon', title: 'Icon', type: 'image' },
  ]
}
