import { j as json } from "../../../../chunks/index2.js";
const success = true;
const posts = [
  {
    id: 1,
    title: "The Essentials of High-Performing Web Design and Development",
    slug: "high-performance-website",
    teaser: "In today's digitally-driven landscape, building a high-performing website is more critical than ever. A website's success hinges on two fundamental aspects: **stellar web design** and **seamless web development**."
  },
  {
    id: 2,
    title: "Slow Website Equals Low Traffic",
    slug: "slow-equals-low-traffic",
    teaser: "With Google's move toward mobile-first indexing, mobile website speed has become a crucial factor. Google primarily uses the mobile version of a site's content for indexing and ranking, and slow mobile loading times can negatively..."
  }
];
const posts$1 = {
  success,
  "status ": 200,
  posts
};
async function GET() {
  return json(posts$1);
}
export {
  GET
};
