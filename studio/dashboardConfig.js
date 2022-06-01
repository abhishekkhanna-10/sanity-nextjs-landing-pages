export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6297bea00108b3061d13b9d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g4easjsf',
                  apiId: 'aa0df978-020c-434c-b349-256a015b9fbe'
                },
                {
                  buildHookId: '6297bea1c00bd6052f1051e3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-172ona9b',
                  apiId: 'cda7439e-068a-47a4-a8e9-5c9847e66a11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/abhishekkhanna-10/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-172ona9b.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
