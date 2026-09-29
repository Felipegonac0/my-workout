"use client";

import { useEffect } from "react";

// Registra /sw.js para que la app y las imágenes queden guardadas en el
// teléfono y funcione con poca o ninguna señal en el gym.
export default function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker
      .register("/sw.js", { scope: "/", updateViaCache: "none" })
      .catch(() => {});
  }, []);

  return null;
}
