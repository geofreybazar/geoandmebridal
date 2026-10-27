import { SessionProvider } from "next-auth/react";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import Providers from "./providers";
import UnfinishedSignupSignOut from "@/components/SharedComponents/UnfinishedSignupSignOut";
import "./globals.css";

import { Toaster } from "sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geoandmebridal.com"),
  title: {
    default: "GEO + Me Bridal",
    template: "%s | GEO + Me Bridal",
  },
  openGraph: {
    siteName: "GEO + Me Bridal",
    locale: "en_PH",
    type: "website",
  },
  description:
    "GEO and Me Bridal creates luxurious, bespoke wedding gowns and full entourage attire in the Philippines. Experience elegance with custom designs tailored to your dream wedding.",
  keywords:
    "wedding gowns, bridal couture, bespoke wedding dresses, custom wedding gowns, Philippines bridal shop, entourage attire, luxury bridal wear",
  authors: [{ name: "Medy G Magsipoc-Bazar" }, { name: "Geofrey R Bazar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <TooltipProvider>
            <SessionProvider>
              <UnfinishedSignupSignOut />
              {children}
              <Toaster />
            </SessionProvider>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
