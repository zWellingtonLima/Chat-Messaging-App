import Providers from '@/components/Providers'
import './globals.css'

export const metadata = {
  title: 'Chat Messaging App',
  description: "Let's chitchat!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Providers>{children}</Providers></body>
    </html>
  )
}
