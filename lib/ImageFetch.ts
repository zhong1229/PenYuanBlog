import { HttpUrl } from "@/config";

export async function findImageList() {
  const response = await fetch(HttpUrl + `/media`, { cache: "no-cache" });
  const ImageList = await response.json();

  return [...ImageList];
}
