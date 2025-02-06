import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import "./globals.css";

let title = "AIDE – Automatically generate software using natural language";
let description = "Automatically generate software using natural language";
let url = "https://aide.ink/";
// let ogimage = "https://llamacoder.io/og-image.png";
let sitename = "llamacoder.io";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  // openGraph: {
  //   images: [ogimage],
  //   title,
  //   description,
  //   url: url,
  //   siteName: sitename,
  //   locale: "en_US",
  //   type: "website",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   images: [ogimage],
  //   title,
  //   description,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <PlausibleProvider domain="aide.ink" />
      </head>

      {children}
    </html>
  );
}
