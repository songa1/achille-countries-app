import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Achille Countries App",
    description: "An app that displays all countries and their information",
    short_name: "acapp",
    theme_color: "#00ff00",
    background_color: "#ffffff",
    display: "standalone",
    orientation: "any",
    scope: "/",
    start_url: "/",
    icons: [
      {
        src: "next.svg",
        type: "image/png",
        sizes: "192x192",
      },
    ],
  };
}
