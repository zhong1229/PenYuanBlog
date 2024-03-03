import { HttpUrl } from "@/config";

export const fetchCarousel = async () => {
  const timestamp = new Date().getTime();
  const response = await fetch(HttpUrl + `/carousel?timestamp=${timestamp}`);
  const carousel = await response.json();

  return [...carousel];
};

export const fetchBlog = async () => {
  const timestamp = new Date().getTime();
  const response = await fetch(HttpUrl + `/blog?timestamp=${timestamp}`);
  const blogList = await response.json();

  return blogList.posts;
};

export const fetchImage = async () => {
  const timestamp = new Date().getTime();
  const response = await fetch(HttpUrl + `/media/home?timestamp=${timestamp}`);
  const ImageList = await response.json();

  return [...ImageList];
};
