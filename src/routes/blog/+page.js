import { error } from '@sveltejs/kit'

export const load = async ({ fetch }) => {

  const postData = await fetch('api/posts');
  const postInfo = await postData.json();

  const posts = []

	try {	
    
    for await (const [i, post] of postInfo.posts.entries()) {
      const p = await import(`../../lib/blog-posts/${post.slug}.md?raw`)
      posts.push({ 
        id: i + 1, 
        slug: post.slug, 
        title: post.title,
        teaser: post.teaser,
        postContent: p.default,
      })
    }

		return {
			posts,
		}
	} catch(err) {
		error(404, err);
	}
}