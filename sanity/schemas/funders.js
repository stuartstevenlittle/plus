import { GrMoney as icon } from 'react-icons/gr'

export default {
  name: 'funders',
  title: 'Funders',
  icon,
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number' },
    { name: 'link', title: 'Link', type: 'string' },
  ],
}
