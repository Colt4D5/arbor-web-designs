import { error } from '@sveltejs/kit'

export const load = async () => {
  const postInfo = [
    {
      uid: 1,
      slug: 'high-performance-website'
    },
    {
      uid: 2,
      slug: 'slow-equals-low-traffic'
    },
  ]

  const posts = []

	try {	
    // postInfo.forEach(post => {
    //   posts.push(import(`../../../lib/blog-posts/${post.slug}.md?raw`))
    // })
    
    for await (const [i, post] of postInfo.entries()) {
      const p = await import(`../../lib/blog-posts/${post.slug}.md?raw`)
      posts.push({ uid: i + 1, slug: post.slug, postContent: p.default })
    }

    console.log(posts);

		return {
			posts,
		}
	} catch(err) {
		error(404, err);
	}
}