import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import general from './general'
import category from './category'
import post from './post'
import author from './author'
import author from './author'
import slide from './slide'
import funder from './funder'
import tag from './tag'
import plant from './plant'
import quote from './quote'
import story from './story'
import poem from './poem'
import wellbeingCampaign from './wellbeingCampaign'
import month from './month'
import plantType from './plantType'


export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    general,
    post,
    author,
    author,
    category,
    slide,
    funder,
    blockContent,
    tag,
    plantType,
    plant,
    quote,
    story,
    poem,
    wellbeingCampaign,
    month
  ])
})
