const fs = require('fs');

const crawlableRobotsTxt = `User-agent: *\nAllow: /\n\nSitemap: https://devmuscle.com/sitemap.xml`;
const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;
(function generateRobotsTxt() {
  // Create a non-crawlable robots.txt in preview links
  const robotsTxt =
    process.env.VERCEL_ENV === 'production' ? crawlableRobotsTxt : uncrawlableRobotsTxt
  fs.writeFileSync('public/robots.txt', robotsTxt)
})()
