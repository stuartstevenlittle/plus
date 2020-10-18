import { RiUserVoiceLine as icon } from 'react-icons/ri'

export default {
  name: 'quoteAuthor',
  title: 'Quote Author',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
