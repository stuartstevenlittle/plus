import { HiOutlineChat as icon } from 'react-icons/hi'

export default {
  name: 'digitalGardenQuotes',
  title: 'Digital Garden Quotes',
  icon,
  type: 'document',
  fields: [
    { name: 'text', title: 'Text', type: 'text' },
    { name: 'author', title: 'Author', type: 'reference', to: { type: 'people' } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: { type: 'tags' } }] },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },
  ],
}
