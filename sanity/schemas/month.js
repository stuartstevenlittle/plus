import { FiCalendar as icon } from 'react-icons/fi'
export default {
  name: 'month',
  title: 'Month',
  type: 'document',
  icon,
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'order', title: 'Order', type: 'number' },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'order',
      by: [
        { field: 'order', direction: 'desc' }
      ]
    },
  ]
}

