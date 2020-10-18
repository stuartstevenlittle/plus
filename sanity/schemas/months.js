import { HiOutlineCalendar as icon } from 'react-icons/hi'
export default {
  name: 'months',
  title: 'Months',
  type: 'document',
  icon,
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'order', title: 'Order', type: 'number' },
  ],
}

