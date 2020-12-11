// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import person from './documents/person'
import sampleProject from './documents/sampleProject'
import siteSettings from './documents/siteSettings'
import page from './documents/page'

import * as plugs from './plugs'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectMember from './objects/projectMember'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'
import cta from './objects/cta'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plug.fields };
});

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // our custom types
  types: schemaTypes
    .concat([
      bioPortableText,
      figure,
      projectMember,
      projectPortableText,
      simplePortableText,
      cta,
      // The following are document types which will appear
      // in the studio.
      category,
      person,
      sampleProject,
      siteSettings,
      page
    ])
    .concat(allPlugs)
})
