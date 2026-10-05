import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Issue Sentinel — AI-Assisted GitHub Issue Triage",
  description:
    "AI-assisted GitHub issue triage with duplicate detection and human-approved label changes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full">
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
