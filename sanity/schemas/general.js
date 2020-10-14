import { HiOutlineCog as icon } from 'react-icons/hi'
export default {
  name: 'general',
  title: 'General',
  type: 'document',
  icon,
  fields: [
    { name: 'vision', title: 'Vision', type: 'text' },
    { name: 'homepageMainPhoto', title: 'Homepage Main Photo', type: 'image', options: { hotspot: true } },
    { name: 'homepageAvatar', title: 'Homepage Avatar', type: 'image', options: { hotspot: true } },
  ],
}

