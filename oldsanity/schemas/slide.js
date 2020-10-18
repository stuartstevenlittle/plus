import { RiSlideshow2Line as icon } from 'react-icons/ri'

export default {
  name: 'slide',
  title: 'Slide',
  type: 'document',
  icon,
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number' },

  ]
}
