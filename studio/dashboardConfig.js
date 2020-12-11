export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd32f72d3f583bb37858e74',
                  title: 'Sanity Studio',
                  name: 'smovie-studio',
                  apiId: 'be4749d3-956c-4532-87f4-e974a83f39de'
                },
                {
                  buildHookId: '5fd32f72bab0b4c9c87063db',
                  title: 'Portfolio Website',
                  name: 'smovie',
                  apiId: '1b618f91-041e-4679-9930-dcc744ba508b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Benschodie/Smovie',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://smovie.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
