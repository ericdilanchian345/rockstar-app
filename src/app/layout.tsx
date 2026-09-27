import "./globals.css";
import Navbar from "../components/Navbar"; // مسیر دقیق کامپوننت Navbar

export const metadata = {
  title: "Rockstar Games",
  description: "Created with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ---- Navbar در همه صفحات ---- */}
        <Navbar />

        {/* ---- محتوای هر صفحه ---- */}
        <main className=""> 
          {children}
        </main>
      </body>
    </html>
  );
}