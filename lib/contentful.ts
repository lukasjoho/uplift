import { createClient } from "contentful"

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
})

export const getLaunchedReleases = async () => {
  let query = `{
    launchedReleaseCollection(limit: 10, order: date_DESC) {
          items {
            sys {
              id
            }
            title
            date
            image{url}
            description{json}
          
          }

      }
  }`

  const res: any = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  )
  const data = res.json()
  return data
}

export const getBlogposts = async () => {
  let query = `{
      blogpostCollection(limit: 10) {
            items {
              sys {
                id
              }
              title
              date
              cover{url}
              content{json}
              author {
                name
                image {
                  url
                }
              }
              slug
            }
  
        }
    }`

  const res: any = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  )
  const data = res.json()
  return data
}
