import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mi rutina",
    short_name: "Rutina",
    description: "Rutina de gimnasio del día",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f11",
    theme_color: "#0f0f11",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
