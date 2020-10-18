import { HiOutlineChatAlt2 as icon } from 'react-icons/hi'

export default {
  name: 'digitalGardenStories',
  title: 'Digital Garden Stories',
  icon,
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'body', title: 'Body', type: 'blockContent' },
    { name: 'excerpt', title: 'Exerpt', type: 'text' },
    { name: 'buttonText', title: 'Button Text', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'author', title: 'Author', type: 'reference', to: { type: 'people' } },
    { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'reference', to: { type: 'tags' } }] },
    { name: 'publishedAt', title: 'Published at', type: 'datetime' },

  ],

}
