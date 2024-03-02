import { HttpUrl } from "@/config";

export async function FindBlogList(
  page: number,
  cat: string,
  tag: string,
  sort: string
) {
  const response = await fetch(
    HttpUrl + `/blog?page=${page}&cat=${cat}&tag=${tag}&sort=${sort}`
  );
  const PostList = await response.json();
  return { ...PostList };
}

export async function FindPostContent(id: string) {
  const response = await fetch(HttpUrl + "/blog/content/" + id);

  const PostContent = await response.json();
  return { ...PostContent };
}

export async function FindCategoryList() {
  const response = await fetch(HttpUrl + "/category");

  const CategoryList = await response.json();
  return [...CategoryList];
}

export async function FindTagsList() {
  const response = await fetch(HttpUrl + `/blog/tags`);

  const TagList = await response.json();

  return [...TagList];
}

export async function nextArticle(id: number) {
  const response = await fetch(HttpUrl + `/blog/${id}/next`);
  const nextArticleContent = await response.json();
  return { ...nextArticleContent };
}

export async function previous(id: number) {
  const response = await fetch(HttpUrl + `/blog/${id}/previous`);
  const previousArticleContent = await response.json();
  return { ...previousArticleContent };
}
