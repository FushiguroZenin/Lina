import "./globals.css";
import { Familjen_Grotesk } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from "@/components/Footer";


const grotesk = Familjen_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600'] })

export const metadata = {
  title: 'Lina',
  description: 'Secure, flexible payments made simple.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${grotesk.className} bg-background text-gray-900 dark:bg-white dark:text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}


