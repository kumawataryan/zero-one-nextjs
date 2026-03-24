import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "01 Agency",
    short_name: "01",
    description:
      "01 Agency builds high-performance digital products, websites, and mobile apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#0D0F1A",
    theme_color: "#0D0F1A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
