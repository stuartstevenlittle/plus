import { MdEvent as icon } from 'react-icons/md'

export default {
  name: 'wellbeingCampaign',
  title: 'Wellbeing Campaign',
  icon,
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'month', title: 'Month', type: 'reference', to: { type: 'month' } },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'when', title: 'When', type: 'string' },
  ],
}
