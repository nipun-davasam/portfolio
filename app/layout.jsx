import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alex Johnson - Full Stack Developer & UI/UX Designer",
  description:
    "Portfolio of Alex Johnson, a passionate Full Stack Developer and UI/UX Designer specializing in modern web technologies and beautiful user experiences.",
  keywords: "full stack developer, ui/ux designer, react, next.js, portfolio, web development",
  authors: [{ name: "Alex Johnson" }],
  openGraph: {
    title: "Alex Johnson - Full Stack Developer & UI/UX Designer",
    description: "Portfolio showcasing modern web development projects and design work",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
