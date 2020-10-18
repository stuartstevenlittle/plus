import { HiOutlinePhotograph as icon } from 'react-icons/hi'

export default {
  name: 'digitalGardenPictures',
  title: 'Digital Garden Pictures',
  icon,
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'artist', title: 'Artist', type: 'reference', to: { type: 'people' } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: { type: 'tags' } }] },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },

  ],

}
