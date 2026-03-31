import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SaaS Dashboard UI",
  description:
    "Production-ready SaaS dashboard with modern UI, animations, and scalable architecture.",

  openGraph: {
    title: "SaaS Dashboard UI",
    description:
      "Production-ready SaaS dashboard with modern UI, animations, and scalable architecture.",
    url: "https://your-domain.vercel.app",
    siteName: "SaaS Dashboard",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}