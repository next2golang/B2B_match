import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EduMatch Global - 世界最高の教育マッチングプラットフォーム",
  description:
    "信頼できる留学エージェントと世界トップクラスの国際学校を簡単に比較・検索。あなたの教育移住を成功に導きます。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
