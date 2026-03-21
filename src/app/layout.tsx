import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Achintya Kumar | AI/ML Engineer Portfolio",
  description:
    "Interactive 3D portfolio of Achintya Kumar — AI/ML Engineer specializing in deep learning, computer vision, and intelligent systems.",
  keywords: [
    "AI Engineer",
    "ML Engineer",
    "Portfolio",
    "Deep Learning",
    "Computer Vision",
    "Next.js",
  ],
  openGraph: {
    title: "Achin | AI/ML Engineer Portfolio",
    description:
      "Interactive 3D portfolio showcasing AI/ML projects and expertise.",
    type: "website",
  },
};

function BackgroundSystem() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#050511]">
      {/* 1. Base Gradient */}
      <div 
        className="absolute inset-0 z-[1]" 
        style={{
          background: "radial-gradient(circle at 50% 0%, #0a061a 0%, transparent 60%), radial-gradient(circle at 80% 80%, #0a061a 0%, transparent 50%)"
        }}
      />

      {/* 2. Grid Overlay */}
      <div 
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "50px 50px"
        }}
      />

      {/* 3. Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--accent-primary)]/20 blur-[140px] z-[3]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--accent-secondary)]/20 blur-[140px] z-[3]" />
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full">
        <BackgroundSystem />
        {children}
      </body>
    </html>
  );
}

