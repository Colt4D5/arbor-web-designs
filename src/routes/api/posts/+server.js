import { json } from '@sveltejs/kit'
import posts from '$lib/blog-posts/blogPosts.json'

export async function GET() {
  return json(posts)
}
