export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ebe2932b310588aea4a88a1',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-pr573f7k',
                  apiId: '4d0ce16c-3806-4308-955f-8cb8214d2ced'
                },
                {
                  buildHookId: '5ebe2932c844c0a07f859353',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8ktb34ns',
                  apiId: '8f060ad9-b384-44fa-855a-0bd5d5f883b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stolsen/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8ktb34ns.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
