import type { Metadata } from "next";
import { shopSlug } from "@/components/shops/data";
import { siteChrome, siteShop } from "@/lib/site-content";
import { ShopSlugLive } from "./live";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  const content = siteShop();
  if (!content) return [];
  const seen = new Set<string>();
  const params: { slug: string }[] = [];
  for (const item of content.items) {
    const slug = shopSlug(item);
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);
    params.push({ slug });
  }
  return params;
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const chrome = siteChrome();
  const { slug } = await params;
  const content = siteShop();
  const item = content?.items.find((entry) => shopSlug(entry) === slug);
  if (!item) return { title: `Shop — ${chrome.businessName}` };
  const name = [item.brand.trim(), item.title.trim()].filter(Boolean).join(" ");
  return {
    title: `${name || "Piece"} — ${chrome.businessName}`,
    description: item.description.trim() || name || chrome.description,
  };
}

export default function ShopItemPage() {
  return <ShopSlugLive />;
}
