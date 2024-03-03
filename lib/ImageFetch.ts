import { HttpUrl } from "@/config";

export async function findImageList() {
  const timestamp = new Date().getTime();
  const response = await fetch(HttpUrl + `/media?timestamp=${timestamp}`);
  const ImageList = await response.json();

  return [...ImageList];
}
