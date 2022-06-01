import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '49m0te0d',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
