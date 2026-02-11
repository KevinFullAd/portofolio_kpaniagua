import { blogItems } from "../data/blog.data";

/**
 * Simula llamada HTTP real 
 */
export async function getBlogPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(blogItems);
    }, 600); // simula latencia real
  });
}
