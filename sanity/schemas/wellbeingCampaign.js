import { MdEvent as icon } from 'react-icons/md'

export default {
  name: 'wellbeingCampaign',
  title: 'Wellbeing Campaign',
  icon,
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'link', title: 'Link', type: 'string' },
    { name: 'month', title: 'Month', type: 'reference', to: { type: 'month' } },
    { name: 'startDate', title: 'Start Date', type: 'datetime' },
    { name: 'timeDescription', title: 'Time Description', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
  ],
}


