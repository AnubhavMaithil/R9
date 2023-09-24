import './globals.css'
import Header from '../Components/Header'


export const metadata = {
  title: 'R9 kuch kuch hota hai',
  description: 'Savlon weds Aishwarya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  )
}
