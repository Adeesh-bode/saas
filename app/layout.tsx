import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
// import { dark } from '@clerk/themes';


const IBM = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "AI-SASS",
  description: "Software as a service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider appearance={{ baseTheme:dark }} >
    <ClerkProvider 
      appearance={{
        variables:{ colorPrimary:'#624cf5' }
      }}
    >
      <html lang="en">
          <body className={cn("font-ibmplex antialiased" , IBM.variable )}>{children}</body>
          {/* antialiased a css property that make fonts easier to read  */}
      </html>
    </ClerkProvider>
  );
}
