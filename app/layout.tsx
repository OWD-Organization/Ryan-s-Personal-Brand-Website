import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatTrigger from "@/components/ChatTrigger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ryankearneyofficial.com"),
  title: "Ryan Kearney",
  description: "Build a Business That Supports the Life You Actually Want.",
  openGraph: {
    title: "Ryan Kearney",
    description: "Build a Business That Supports the Life You Actually Want.",
    url: "https://www.ryankearneyofficial.com",
    siteName: "Ryan Kearney",
    images: [
      {
        url: "/img/ryan-2.jpg",
        width: 1200,
        height: 630,
        alt: "Ryan Kearney",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Kearney",
    description: "Build a Business That Supports the Life You Actually Want.",
    images: ["/img/ryan-2.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatTrigger />
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69d04047b58e1c0d8b17916e"
        />
      </body>
    </html>
  );
}
