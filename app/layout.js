import './globals.css'


export const metadata = {
  title: 'R9 kuch kuch hota hai',
  description: 'Savlon weds Aishwarya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
