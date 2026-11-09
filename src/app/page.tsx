"use client";

import { About } from "@/components/abouts";
import { Banner } from "@/components/banners";
import { Contact } from "@/components/contacts";
import { Hero } from "@/components/heroes";
import { SiteNav } from "@/components/navs";
import { Shop } from "@/components/shops";
import { SmoothScrollScope } from "@/components/shared/hash-link";
import { injectBrochureInstances } from "@/lib/brochure/inject-instances";
import { parseBrochureBlueprint } from "@/lib/brochure/schema";
import blueprintJson from "../../content/blueprint.json";
import styles from "./page.module.scss";

export default function Home() {
  const blueprint = parseBrochureBlueprint(blueprintJson);
  return injectBrochureInstances(
    <SmoothScrollScope className={styles.scope}>
      <SiteNav />
      <main id="top">
        <Hero />
        <div className={styles.rest}>
          <Banner />
          <About />
          <Shop />
          <About />
          <Contact />
        </div>
      </main>
    </SmoothScrollScope>,
    blueprint,
  );
}
