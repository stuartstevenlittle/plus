import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import blockContent from './blockContent'
import vision from './vision'
import category from './category'
import post from './post'
import author from './author'
import slide from './slide'
import funder from './funder'
import tag from './tag'
import plant from './plant'
import plantType from './plantType'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    vision,
    post,
    author,
    category,
    slide,
    funder,
    blockContent,
    tag,
    plantType,
    plant,
  ])
})
