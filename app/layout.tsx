import type { Metadata, Viewport } from "next";
import ServiceWorker from "./components/ServiceWorker";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mi rutina",
  description: "Rutina de gimnasio del día",
  appleWebApp: { capable: true, title: "Mi rutina", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f2" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f11" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>
        {children}
        <ServiceWorker />
      </body>
    </html>
  );
}
