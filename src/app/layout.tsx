import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Elite Vacations | Luxury Holiday Homes in Dubai',
  description: 'Experience premium vacation rentals in Dubai\'s most exclusive locations. Palm Jumeirah, Downtown, Marina - Book your luxury stay today.',
  keywords: 'Dubai vacation rentals, luxury holiday homes, Palm Jumeirah rentals, Dubai Marina apartments, premium stays Dubai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#12121a',
              color: '#f4f4f5',
              border: '1px solid #1e1e2e',
            },
          }}
        />
        {children}
      </body>
    </html>
  )
}
