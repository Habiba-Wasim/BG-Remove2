// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from "../components/Header";  // ✅ Header import kiya
// import Footer from "../components/Footer";  // ✅ Footer import kiya

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "BG Remover Pro",
//   description: "Remove image backgrounds automatically with our professional online tool.",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />

//         <main className="min-h-screen">{children}</main>

//         <Footer />
//       </body>
//     </html>
//   );
// }













import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

// Removed invalid Geist font configuration

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BG Remover Pro",
  description: "Remove image backgrounds automatically with our professional online tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
         {/* <body className={inter.className}> */}
        className={`${geistMono.variable} antialiased`}

        <Header />

         <main className="min-h-screen">{children}</main>

         <Footer />
       {/* </body> */}
        {children}
      </body>
    </html>
  );
}















