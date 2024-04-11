import path from "path";
import sm, { EnumChangefreq, SitemapItemLoose } from "sitemap";
import fs from "fs";

const sitemapPath = path.resolve(
  __dirname,
  "..",
  "..",
  "public",
  "sitemap.xml"
);

const urls: SitemapItemLoose[] = [
  {
    url: "/",
    changefreq: EnumChangefreq.DAILY,
    priority: 1.0,
  },
  {
    url: "/about",
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.8,
  },
  {
    url: "/contact",
    changefreq: EnumChangefreq.MONTHLY,
    priority: 0.8,
  },
];

const sitemap = (sm as any).createSitemap({
  hostname: "https://manglebot.github.io/misterben",
  cacheTime: 600000, // 600 sec - cache purge period
  urls,
});

fs.writeFileSync(sitemapPath, sitemap.toString());
