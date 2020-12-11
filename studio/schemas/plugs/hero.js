export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline'
    },
    {
      name: 'subheadline',
      type: 'string',
      title: 'Subheadline'
    },
    {
      name: 'infos',
      title: 'Infos',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'cta',
      type: 'cta'
    }
  ]
}
