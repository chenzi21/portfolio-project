import './globals.css'

export const metadata = {
  title: "Chen Zadik's Portfolio",
  authors: [{ name: "Chen Zadik" }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
