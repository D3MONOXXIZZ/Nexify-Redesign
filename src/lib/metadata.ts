import type { Metadata } from "next";
import { SITE } from "./constants";
import { PAGE_META, ROUTES, type RouteKey } from "./pages";

export function createPageMetadata(page: RouteKey): Metadata {
  const meta = PAGE_META[page];
  return {
    title: meta.title,
    alternates: { canonical: ROUTES[page] },
    description: meta.description,
    openGraph: {
      title: `${meta.title} | ${SITE.name}`,
      description: meta.description,
      images: [
        { url: "/nexify-brand.png", width: 2047, height: 2047, alt: SITE.name },
      ],
    },
    twitter: {
      title: `${meta.title} | ${SITE.name}`,
      description: meta.description,
      images: ["/nexify-brand.png"],
    },
  };
}
