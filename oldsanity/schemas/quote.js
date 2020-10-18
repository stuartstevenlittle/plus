import { HiOutlineChat as icon } from 'react-icons/hi'
export default {
  name: 'quote',
  title: 'Quote',
  type: 'document',
  icon,
  fields: [
    { name: 'text', title: 'Text', type: 'text' },
    { name: 'quoteAuthor', title: 'Author', type: 'reference', to: { type: 'quoteAuthor' } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: { type: 'tag' } }] },
  ],
}
