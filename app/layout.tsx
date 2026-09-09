import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const bodyFont = DM_Sans({ subsets: ["latin", "cyrillic"], variable: "--font-body" })
const displayFont = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-display" })

export const metadata: Metadata = { title: "Velora Casino — честный обзор, бонусы и игры", description: "Демо-обзор Velora Casino: каталог игр, бонусы, платежи и ответы на частые вопросы." }
export const viewport: Viewport = { themeColor: "#101412", colorScheme: "dark", userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru" className="bg-background"><body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body></html>
}
