import Navbar from "./component/navbar";
import "./globals.css";

export const metadata = {
  title: "High-end Health Solution", // Sets the browser tab name
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Set Favicon */}
        <link rel="icon" href="/image/highendlogo.png" type="image/png" />
      </head>
      <body>
        <Navbar />
        <main className="mt-16">{children}</main> {/* Ensures content isn't hidden under navbar */}
      </body>
    </html>
  );
}
