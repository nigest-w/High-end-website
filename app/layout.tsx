import Navbar from "./component/navbar";
import "./globals.css";
import { Metadata } from "next";   // Correct

export const metadata: Metadata = {
  title: "High-end Health Solution", // Sets the browser tab name
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/image/highendlogo.png" type="image/png" />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        <main className="mt-16">{children}</main>
      </body>
    </html>
  );
}
