import Navbar from "./component/navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mt-16">{children}</main> {/* Ensures content isn't hidden under navbar */}
      </body>
    </html>
  );
}
