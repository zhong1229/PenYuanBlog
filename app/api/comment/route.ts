import { HttpUrl } from "@/config";
import { NextResponse } from "next/server";

export const GET = async (req: any) => {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");
  try {
    const response = await fetch(HttpUrl + "/comment/" + postSlug);
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

export const POST = async (req: any) => {
  try {
    const body = await req.json();
    const { username, email, content, postId, type } = body;
    if (!username || !email || !content || !postId || !type) {
      throw "评论失败";
    }
    const response = await fetch(HttpUrl + "/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // 设置请求头为 JSON
      },
      body: JSON.stringify(body), // 将请求数据转换为 JSON 字符串并放入请求体中
    });
    if (!response.ok) {
      throw new Error("失败");
    }
    // 解析响应的 JSON 数据
    const data = await response.json();
    return new NextResponse(JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: err }), {
      status: 500,
    });
  }
};
