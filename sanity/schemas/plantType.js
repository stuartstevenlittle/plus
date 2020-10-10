import { GiFlowerPot as icon } from 'react-icons/gi'
export default {
  name: 'plantType',
  title: 'Plant Type',
  type: 'document',
  icon,
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare: ({ name }) => ({
      title: `${name}`
    })
  }
}

