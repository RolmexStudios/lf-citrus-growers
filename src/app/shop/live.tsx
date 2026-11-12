"use client";

import { Suspense } from "react";
import { Shop } from "@/components/shops";
import { SHOP_INSTANCE_ID } from "@/components/shops/data";
import { LiveStudioChrome } from "@/components/live-chrome";
import { useBrochureBlueprint } from "@/lib/admin/store";
import { siteShop } from "@/lib/site-content";

export function ShopIndexLive() {
  const blueprint = useBrochureBlueprint();
  const content = siteShop(blueprint);
  if (!content) return null;
  return (
    <LiveStudioChrome>
      <main>
        <Suspense>
          <Shop
            instanceId={SHOP_INSTANCE_ID}
            data={{ ...content, variant: "gallery", sectionSize: "auto" }}
          />
        </Suspense>
      </main>
    </LiveStudioChrome>
  );
}
