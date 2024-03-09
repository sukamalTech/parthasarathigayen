import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://parthasarathigayen.in/",
      priority: 1,
    },
    {
      url: "https://parthasarathigayen.in/books",
      priority: 0.8,
    },
    {
      url: "https://parthasarathigayen.in/about",
      priority: 0.6,
    },
    {
      url: "https://parthasarathigayen.in/awards",
      priority: 0.6,
    },
  ];
}
