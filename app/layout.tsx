import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milo — AI 产品经理作品集",
  description: "Milo 的 AI 产品经理作品集：从真实问题、产品判断到可验证的 AI 工作流与交互原型。",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Milo — AI 产品经理作品集",
    description: "把 AI 能力做成可信、可用、可验证的产品工作流。",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
