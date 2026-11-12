"use client";

import type { ReactNode } from "react";
import { StudioChrome } from "@/components/navs/templates/studio/StudioNav";
import { useBrochureBlueprint } from "@/lib/admin/store";
import { siteHashLinks, siteNav } from "@/lib/site-content";

export function LiveStudioChrome({ children }: { children: ReactNode }) {
  const blueprint = useBrochureBlueprint();
  return (
    <StudioChrome nav={siteNav(blueprint)} hashLinks={siteHashLinks(blueprint)}>
      {children}
    </StudioChrome>
  );
}
