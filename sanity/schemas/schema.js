import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import bodyPortableText from './bodyPortableText'
import general from './general'
import people from './people'
import tags from './tags'
import months from './months'
import news from './news'
import funders from './funders'
import digitalGardenSections from './digitalGardenSections'
import digitalGardenPictures from './digitalGardenPictures'
import digitalGardenStories from './digitalGardenStories'
// import digitalGardenPoems from './digitalGardenPoems'
import digitalGardenQuotes from './digitalGardenQuotes'
import wellbeingCampaigns from './wellbeingCampaigns'
import youtube from './youtube'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    bodyPortableText,
    general,
    people,
    tags,
    news,
    months,
    digitalGardenSections,
    digitalGardenPictures,
    digitalGardenStories,
    // digitalGardenPoems,
    digitalGardenQuotes,
    funders,
    wellbeingCampaigns,
    youtube
  ])
})
