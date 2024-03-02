import { HttpUrl } from "@/config";

export const fetchCarousel = async () => {
  const response = await fetch(HttpUrl + "/carousel", {
    cache: "no-store",
  });
  const carousel = await response.json();

  return [...carousel];
};

export const fetchBlog = async () => {
  const response = await fetch(HttpUrl + "/blog", {
    cache: "no-store",
  });
  const blogList = await response.json();

  return blogList.posts;
};

export const fetchImage = async () => {
  const response = await fetch(HttpUrl + "/media/home", {
    cache: "no-store",
  });
  const ImageList = await response.json();

  return [...ImageList];
};
