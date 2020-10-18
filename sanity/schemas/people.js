import { RiUserLine as icon } from 'react-icons/ri'

export default {
  name: 'people',
  title: 'People',
  icon,
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'age', title: 'Age', type: 'number' },
    { name: 'location', title: 'Location', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
}
