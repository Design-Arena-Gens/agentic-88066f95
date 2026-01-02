import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daily Motivational Assistant",
  description: "A daily boost with curated quotes, actionable summaries, and practical tips."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
