import { _ as __variableDynamicImportRuntimeHelper } from "../../../../chunks/dynamic-import-helper.js";
import { e as error } from "../../../../chunks/index2.js";
const load = async ({ params }) => {
  const { slug } = params;
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../lib/blog-posts/high-performance-website.md": () => import("../../../../chunks/high-performance-website.js"), "../../../lib/blog-posts/slow-equals-low-traffic.md": () => import("../../../../chunks/slow-equals-low-traffic.js") }), `../../../lib/blog-posts/${slug}.md`);
    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post }
    };
  } catch (err) {
    error(404, err);
  }
};
export {
  load
};
