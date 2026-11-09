# Shop template A

Same shell as the studio kit (Rolmex): plate hero, mailto close. The reel is a shop. A docking banner sits with the hero, then pins under the nav.

`content/blueprint.json` is keyed by instance ids counted from `src/app/page.tsx`:

- `BrochureSiteNav_1` — `studio`. Injected hash links, then `routeLinks`. Shop (`/shop`) and Contact stay on `routeLinks`.
- `BrochureHero_1` — `plate`. Full-bleed ambient video or still.
- `BrochureBanner_1` — `dock`. `line` shows with the hero. Each `cues` entry names a section id and the line to show once that section reaches the band.
- `BrochureAbout_1` and `BrochureAbout_2` — `salon`. A quiet note and a photograph. `imageSide` puts the picture on the right, then the left.
- `BrochureShop_1` — `rail` on the home page. One slice. The rail is the highlight: the first `teaserLimit` pieces whose `status` is not `sold`. Under the rail, listed pieces with a `category` become a 2×2 type index (`categoriesTitle`; hidden when every piece is uncategorized). Each tile opens `/shop?category=`. `/shop` forces `gallery` and lists every available piece from that same slice, or one type when `?category=` is set. A card on either page opens `/shop/[slug]`. The slug is the record `id`. That page shows the cover, `images`, `description`, and `details`.
- `BrochureContact_1` — `plate`. Mailto close. Not a form.

Order in `items` is the order on the rail and the shop grid. Put the pieces you want on the home rail first. A `sold` row stays in the JSON and drops off both lists. Its page still exists at `/shop/[slug]`.

## Local images

Paths like `/assets/...` resolve from `public/assets/` in this project. Remote `https://` image URLs are copied there by `npm run assets:localize`.

The seed catalog is sample copy. Replace `items`, names, and photos before shipping.
