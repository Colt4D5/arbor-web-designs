import { _ as __variableDynamicImportRuntimeHelper } from "../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../chunks/index2.js";
const load = async ({ fetch }) => {
  const postData = await fetch("api/posts");
  const postInfo = await postData.json();
  const posts = [];
  try {
    for await (const [i, post] of postInfo.posts.entries()) {
      const p = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../lib/blog-posts/high-performance-website.md": () => import("../../../chunks/high-performance-website.js"), "../../lib/blog-posts/slow-equals-low-traffic.md": () => import("../../../chunks/slow-equals-low-traffic.js") }), `../../lib/blog-posts/${post.slug}.md`);
      posts.push({
        id: i + 1,
        slug: post.slug,
        title: post.title,
        teaser: post.teaser,
        postContent: p.default
      });
    }
    return {
      posts
    };
  } catch (err) {
    error(404, err);
  }
};
export {
  load
};
