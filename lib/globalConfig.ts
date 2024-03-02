import { HttpUrl } from "@/config";

export async function fetchGlobalConfig() {
  const response = await fetch(HttpUrl + "/setting");
  const globalConfig = await response.json();
  return { ...globalConfig };
}

export async function fetchUserConfig() {
  const response = await fetch(HttpUrl + "/setting/userInfo");
  const UserInfo = await response.json();
  return { ...UserInfo };
}

export async function fetchStatistics() {
  const response = await fetch(HttpUrl + "/statistics");
  const Statistics = await response.json();
  return { ...Statistics };
}

// export async function postTraffic(pagetitle: string, pageurl: string) {
//   const responseIp = await fetch("https://api.ipify.org/?format=json");
//   if (!responseIp.ok) {
//     throw new Error(`Error ${responseIp.status}`);
//   }
//   const data = await responseIp.json();
//   const response = await fetch(`http://localhost:3000/statistics/traffic`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json", // 根据实际情况设置请求头
//     },
//     body: JSON.stringify({
//       ipAddress: data.ip,
//       userAgent: "1",
//       pageurl: pageurl,
//       pagetitle: pagetitle,
//     }),
//   });
//   const { message } = await response.json();
//   console.warn(message);
// }
