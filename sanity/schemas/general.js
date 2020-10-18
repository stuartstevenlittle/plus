import { HiOutlineCog as icon } from 'react-icons/hi'
export default {
  name: 'general',
  title: 'General',
  type: 'document',
  icon,
  fields: [
    { name: 'homepagePicture', title: 'Homepage Picture', type: 'image', options: { hotspot: true } },
    { name: 'homepagePictureDescription', title: 'Homepage Picture Description', type: 'string' },
    { name: 'vision', title: 'Vision', type: 'text' },
    { name: 'fundersMessage', title: 'Funders Message', type: 'text' },
  ],
}

