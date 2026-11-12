import blueprintJson from "../../content/blueprint.json";
import { emptyNavBlueprint } from "@/components/navs/blueprint";
import { readShopSlice } from "@/components/shops/data";
import { parseBrochureBlueprint } from "@/lib/brochure/schema";
import type {
  BrochureBlueprint,
  BrochureContactContent,
  BrochureNavContent,
  BrochureNavLink,
} from "@/types/brochure";

export function siteBlueprint() {
  return parseBrochureBlueprint(blueprintJson);
}

export function siteShop(blueprint: BrochureBlueprint = siteBlueprint()) {
  return readShopSlice(blueprint);
}

export function siteNav(blueprint: BrochureBlueprint = siteBlueprint()): BrochureNavContent {
  const slice = blueprint.BrochureSiteNav_1;
  if (!slice || slice.component !== "BrochureSiteNav") {
    return emptyNavBlueprint();
  }
  const { component: _component, ...data } = slice;
  return data;
}

export function siteHashLinks(blueprint: BrochureBlueprint = siteBlueprint()): BrochureNavLink[] {
  const slice = blueprint.BrochureDivider_1;
  if (!slice || slice.component !== "BrochureDivider" || slice.variant !== "swap") {
    return [];
  }
  const anchorId = slice.anchorId.trim();
  const navLabel = slice.navLabel.trim();
  if (!anchorId || !navLabel) return [];
  return [{ href: `#${anchorId}`, label: navLabel }];
}

export function siteContact(
  blueprint: BrochureBlueprint = siteBlueprint(),
): BrochureContactContent | null {
  const slice = blueprint.BrochureContact_1;
  if (!slice || slice.component !== "BrochureContact") return null;
  const { component: _component, ...data } = slice;
  return data;
}

export function siteChrome(blueprint: BrochureBlueprint = siteBlueprint()) {
  const nav = siteNav(blueprint);
  return {
    businessName: nav.businessName.trim() || "Shop",
    description: nav.description.trim(),
    faviconUrl: nav.faviconUrl.trim(),
    shareImageUrl: nav.shareImageUrl.trim(),
  };
}
