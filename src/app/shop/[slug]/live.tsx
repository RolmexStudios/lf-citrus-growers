"use client";

import { useParams, usePathname } from "next/navigation";
import { ProductView } from "@/components/shops/product-view";
import { SHOP_INSTANCE_ID, shopSlug } from "@/components/shops/data";
import { LiveStudioChrome } from "@/components/live-chrome";
import { useBrochureBlueprint } from "@/lib/admin/store";
import { siteContact, siteShop } from "@/lib/site-content";
import { ShopMissing } from "../../missing";

export function ShopSlugLive({ slug: slugProp }: { slug?: string } = {}) {
  const params = useParams<{ slug?: string }>();
  const pathname = usePathname();
  const slug =
    slugProp ??
    params.slug ??
    pathname.split("/").filter(Boolean).pop() ??
    "";
  const blueprint = useBrochureBlueprint();
  const content = siteShop(blueprint);
  const index = content?.items.findIndex((item) => shopSlug(item) === slug) ?? -1;
  if (!content || index < 0) {
    return <ShopMissing />;
  }
  const item = content.items[index];
  const contact = siteContact(blueprint);
  const email = contact?.email.trim() ?? "";
  const subject = item.title.trim() || item.brand.trim() || "A piece";
  const inquiryHref = email
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : "";

  return (
    <LiveStudioChrome>
      <main>
        <ProductView
          item={item}
          index={index}
          instanceId={SHOP_INSTANCE_ID}
          inquiryHref={inquiryHref}
          inquiryLabel={contact?.ctaLabel.trim() || "Ask about this piece"}
        />
      </main>
    </LiveStudioChrome>
  );
}
