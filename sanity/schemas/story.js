import { HiOutlineChatAlt2 as icon } from 'react-icons/hi'
export default {
  name: 'story',
  title: 'Story',
  type: 'document',
  icon,
  fields: [
    { name: 'text', title: 'Text', type: 'text' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'buttonText', title: 'Button Text', type: 'string' },
    { name: 'author', title: 'Author', type: 'reference', to: { type: 'author' } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: { type: 'tag' } }] },
  ],
}
