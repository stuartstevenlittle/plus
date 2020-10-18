import { HiOutlineBookOpen as icon } from 'react-icons/hi'
export default {
  name: 'poem',
  title: 'Poem',
  type: 'document',
  icon,
  fields: [
    { name: 'text', title: 'Text', type: 'text' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: { type: 'tag' } }] },
  ],
}
