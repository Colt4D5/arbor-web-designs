import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const { slug } = params
	try {	
		const post = await import(`../../../lib/blog-posts/${slug}.md?raw`)

		return {
			PostContent: post.default,
			meta: { ...post.metadata, slug: params.post } 
		}
	} catch(err) {
		error(404, err);
	}
}