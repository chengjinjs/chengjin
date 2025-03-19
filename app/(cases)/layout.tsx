import { Text } from "@chakra-ui/react"

export default function CaseLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            {children}
            <Text>Case studies are currently going through rewrites.</Text>
        </>
    )
  }