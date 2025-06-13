import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nipun Davasam - Full Stack Developer & Software Engineer",
  description:
    "Portfolio of Nipun Davasam, a passionate Full Stack Developer and Software Engineer specializing in modern web technologies and beautiful user experiences.",
  keywords: "full stack developer, react, next.js, portfolio, web development",
  authors: [{ name: "Nipun Davasam" }],
  openGraph: {
    title: "Nipun Davasam - Full Stack Developer & Software Engineer",
    description: "Portfolio showcasing modern web development projects and design work",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
