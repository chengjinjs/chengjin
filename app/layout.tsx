import { Bricolage_Grotesque } from "next/font/google"
import localFont from "next/font/local"
import { Provider } from "@/components/ui/provider"
import NavBar from "@/components/ui/navbar"
import Head from "./head"
import { Container } from "@chakra-ui/react"

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
          <Container maxW="5xl" my="12">
            {children}
          </Container>
        </Provider>
      </body>
    </html>
  )
}
