import { HiOutlineCog as icon } from 'react-icons/hi'
export default {
  name: 'general',
  title: 'General',
  type: 'document',
  icon,
  fields: [
    { name: 'vision', title: 'Vision', type: 'text' },
    { name: 'homepagePicture', title: 'Homepage Picture', type: 'image', options: { hotspot: true } },
  ],
}

