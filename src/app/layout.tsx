import type { Metadata } from "next";
import "./globals.css";
import { ToolNetworkFooter } from "@/components/ToolNetworkFooter";

export const metadata: Metadata = {
  title: "ResumeCraft - 免费在线简历制作 | 一键导出PDF",
  description: "免费在线简历生成器。3套精美模板，实时预览，一键导出PDF。3分钟搞定专业简历，助力求职成功！",
  keywords: "简历制作,在线简历,简历模板,简历生成器,PDF导出,求职简历,CV制作",
  openGraph: {
    title: "ResumeCraft - 免费在线简历制作",
    description: "3套模板，实时预览，一键导出PDF。3分钟搞定专业简历！",
    url: "https://tyr1105.github.io/resumecraft/",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <div style={{ flex: 1 }}>{children}</div>
        <ToolNetworkFooter />
      </body>
    </html>
  );
}
