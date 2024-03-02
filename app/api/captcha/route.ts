import { HttpUrl } from "@/config";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  try {
    const response = await fetch(HttpUrl + "/auth/captcha", {
      cache: "no-cache",
    });
    if (!response.ok) {
      throw new Error("Request to external API failed");
    }
    // 解析响应的 JSON 数据
    const data = await response.json();

    return new NextResponse(JSON.stringify(data));
  } catch (err: any) {
    return new NextResponse(err);
  }
};
