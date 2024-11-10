export async function getPosts() {
    const res = await fetch('http://208.109.231.72:7000/api/blogs/')

    if (!res.ok) {
        throw new Error('Failed to fetch data: getPosts')
    }

    return res.json()
}

export async function getPostDetails(slug: string) {

    // step-1: fetch all blogs
    const allPosts = await getPosts()

    // step-2: find post with matching slug
    const targetPost = allPosts.results.find((post: { slug: string }) => post.slug == slug)

    // Step 3: Fetching the data using api
    const postDetailRes = await fetch(`http://208.109.231.72:7000/api/blogs/${targetPost.id}/`, {
        method: "GET",
        next: { revalidate: 3600 }
    })

    if (!postDetailRes.ok) {
        throw new Error('Failed to fetch data: getPostDetails')
    }

    return postDetailRes.json() // Return the JSON data from the details response
}

// fetch all the post with a tag slug :: ok
export async function getAllPostsByTag(slug: string) {
    // Step 1: Fetch all downloads
    const res = await fetch(`http://208.109.231.72:7000/api/blogs/`, { next: { revalidate: 3600 } })
  
    if (!res.ok) {
      throw new Error('Failed to fetch posts: getAllPostsByTag')
    }
  
    const posts = await res.json()
  
    // Step 2: Filter downloads by the provided tag slug
    const filteredPosts = posts.results.filter((post: { tags: { slug: string }[] }) =>
      post.tags.some(tag => tag.slug === slug)
    )
  
    return filteredPosts
  }