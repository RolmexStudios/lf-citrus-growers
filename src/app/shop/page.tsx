import type { Metadata } from "next";
import { siteChrome } from "@/lib/site-content";
import { ShopIndexLive } from "./live";

const chrome = siteChrome();

export const metadata: Metadata = {
  title: `Shop — ${chrome.businessName}`,
  description: chrome.description || `Pieces available from ${chrome.businessName}.`,
};

export default function ShopPage() {
  return <ShopIndexLive />;
}
