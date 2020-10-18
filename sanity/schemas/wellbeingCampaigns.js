import { FaRegNewspaper as icon } from 'react-icons/fa'

export default {
  name: 'wellbeingCampaigns',
  title: 'Wellbeing Campaigns',
  icon,
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'link', title: 'Link', type: 'string' },
    { name: 'month', title: 'Month', type: 'reference', to: { type: 'months' } },
    { name: 'startDate', title: 'Start Date', type: 'datetime' },
  ],
}
