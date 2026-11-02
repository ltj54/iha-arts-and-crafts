import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IHA Arts and Crafts",
  description: "Maleri og treskulptur fra IHA Arts and Crafts i Oslo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
