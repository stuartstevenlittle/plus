import { HiHashtag as icon } from 'react-icons/hi'
export default {
  name: 'tag',
  title: 'Tag',
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

