import './globals.css';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ['400'],
  style: ['normal'],
  subsets: ["latin"],
  variable: "--font-montserrat",
})



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={`${montserrat.className}`}>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Sign Up</a>
          </li>
        </ul>
      </nav>
        {children}
        </body>
    </html>
  )
}
