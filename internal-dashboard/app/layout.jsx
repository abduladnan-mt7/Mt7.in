import { Montserrat } from "next/font/google";
import "./globals.css";
import GlobalBg from "@/components/mainBg/GlobalBg";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      {/* We apply the base background color here, NOT in CSS body */}
      <body className={`${montserrat.variable} font-sans antialiased bg-[#050202]`}>
        {/* Background stays at -z-10 */}
        <GlobalBg />
        
        {/* All your forms and content stay at z-10 */}
        <div className="relative z-10 min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  );
}