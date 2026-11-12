"use client";

import { usePathname } from "next/navigation";
import { shopSlug } from "@/components/shops/data";
import { useBrochureStore } from "@/lib/admin/store";
import { siteShop } from "@/lib/site-content";
import { ShopMissing } from "./missing";
import { ShopSlugLive } from "./shop/[slug]/live";

export default function NotFound() {
  const pathname = usePathname();
  const store = useBrochureStore();
  if (!store?.liveReady) {
    return null;
  }
  const match = pathname.match(/^\/shop\/([^/]+)\/?$/);
  const content = siteShop(store.blueprint);
  if (match && content?.items.some((item) => shopSlug(item) === match[1])) {
    return <ShopSlugLive slug={match[1]} />;
  }
  return <ShopMissing />;
}
