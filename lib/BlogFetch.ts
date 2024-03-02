import { HttpUrl } from "@/config";

export async function FindBlogList(
  page: number,
  cat: string,
  tag: string,
  sort: string
) {
  const response = await fetch(
    HttpUrl + `/blog?page=${page}&cat=${cat}&tag=${tag}&sort=${sort}`,
    {
      cache: "no-store",
    }
  );
  const PostList = await response.json();
  return { ...PostList };
}

export async function FindPostContent(id: string) {
  const response = await fetch(HttpUrl + "/blog/content/" + id, {
    cache: "no-store",
  });

  const PostContent = await response.json();
  return { ...PostContent };
}

export async function FindCategoryList() {
  const response = await fetch(HttpUrl + "/category", {
    cache: "no-store",
  });

  const CategoryList = await response.json();
  return [...CategoryList];
}

export async function FindTagsList() {
  const response = await fetch(HttpUrl + `/blog/tags`, {
    cache: "no-store",
  });

  const TagList = await response.json();

  return [...TagList];
}

export async function nextArticle(id: number) {
  const response = await fetch(HttpUrl + `/blog/${id}/next`, {
    cache: "no-store",
  });
  const nextArticleContent = await response.json();
  return { ...nextArticleContent };
}

export async function previous(id: number) {
  const response = await fetch(HttpUrl + `/blog/${id}/previous`, {
    cache: "no-store",
  });
  const previousArticleContent = await response.json();
  return { ...previousArticleContent };
}
