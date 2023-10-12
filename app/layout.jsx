import './globals.css'

export const metadata = {
  title: 'Peruri Hijau',
  description: 'Go-Green',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html> 
  )
}
