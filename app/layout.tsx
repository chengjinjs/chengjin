import { Bricolage_Grotesque, Karla } from "next/font/google"
import { Provider } from "@/components/ui/provider"
import NavBar from "@/components/ui/navbar"

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap"
})
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${karla.variable} ${bricolage.variable}`} lang="en" suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
