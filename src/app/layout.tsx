import type { Metadata } from "next";
import ThemeToggle from "@/components/ThemeToggle";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evan Leong | Portfolio",
  description: "AI/ML & Software Engineer — A sophomore at Boston University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem("theme");document.documentElement.setAttribute("data-theme",t||"dark");})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeToggle />
        {children}
        <footer className="site-footer">
          © {new Date().getFullYear()} Evan Leong
        </footer>
      </body>
    </html>
  );
}
