import { HttpUrl } from "@/config";

export const fetchCarousel = async () => {
  const response = await fetch(HttpUrl + "/carousel", { cache: "no-cache" });
  const carousel = await response.json();

  return [...carousel];
};

export const fetchBlog = async () => {
  const response = await fetch(HttpUrl + `/blog`, { cache: "no-cache" });
  const blogList = await response.json();

  return blogList.posts;
};

export const fetchImage = async () => {
  const response = await fetch(HttpUrl + "/media/home", { cache: "no-cache" });
  const ImageList = await response.json();

  return [...ImageList];
};
