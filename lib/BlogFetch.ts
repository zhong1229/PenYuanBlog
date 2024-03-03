import { HttpUrl } from "@/config";

export async function FindBlogList(
  page: number,
  cat: string,
  tag: string,
  sort: string
) {
  const timestamp = new Date().getTime();
  const response = await fetch(
    HttpUrl +
      `/blog?page=${page}&cat=${cat}&tag=${tag}&sort=${sort}&timestamp=${timestamp}`,
    {
      cache: "no-cache",
    }
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
  const timestamp = new Date().getTime();
  const response = await fetch(HttpUrl + `/category?timestamp=${timestamp}`);

  const CategoryList = await response.json();
  return [...CategoryList];
}

export async function FindTagsList() {
  const timestamp = new Date().getTime();
  const response = await fetch(HttpUrl + `/blog/tags?timestamp=${timestamp}`);

  const TagList = await response.json();

  return [...TagList];
}

export async function nextArticle(id: number) {
  const timestamp = new Date().getTime();
  const response = await fetch(
    HttpUrl + `/blog/${id}/next?timestamp=${timestamp}`
  );
  const nextArticleContent = await response.json();
  return { ...nextArticleContent };
}

export async function previous(id: number) {
  const timestamp = new Date().getTime();
  const response = await fetch(
    HttpUrl + `/blog/${id}/previous?timestamp=${timestamp}`
  );
  const previousArticleContent = await response.json();
  return { ...previousArticleContent };
}
