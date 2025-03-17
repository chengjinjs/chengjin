import { Bricolage_Grotesque } from "next/font/google"
import localFont from "next/font/local"
import { Provider } from "@/components/ui/provider"
import NavBar from "@/components/ui/navbar"
import Head from "./head"

const manrope = localFont({
  variable: '--font-manrope',
  src: './Manrope[wght].woff2',
  display: 'swap'
})
// const karla = Karla({
//   variable: "--font-karla",
//   subsets: ["latin"],
//   display: "swap"
// })
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
    <html className={`${bricolage.variable} ${manrope.variable}`} lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
