import Link from "next/link";
import { StudioChrome } from "@/components/navs/templates/studio/StudioNav";
import { siteHashLinks, siteNav } from "@/lib/site-content";
import styles from "./not-found.module.scss";

export default function NotFound() {
  const nav = siteNav();
  const links = [...siteHashLinks(), ...nav.routeLinks].filter(
    (item) => item.href.trim() && item.label.trim(),
  );
  return (
    <StudioChrome nav={nav} hashLinks={siteHashLinks()}>
      <main>
        <section className={styles.lost} data-bg="#f4f0e8" data-theme="light">
          <div className={styles.inner}>
            <p className={styles.meta}>404</p>
            <h1 className={styles.lead}>This page isn’t in the shop.</h1>
            <Link className={styles.button} href="/">
              Back home
            </Link>
            <nav className={styles.links} aria-label="Elsewhere">
              {links.map((item) => {
                const href = item.href.startsWith("#") ? `/${item.href}` : item.href;
                return (
                  <Link key={`${href}-${item.label}`} className={styles.link} href={href}>
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </section>
      </main>
    </StudioChrome>
  );
}
