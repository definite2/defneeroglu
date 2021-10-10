const fs = require('fs')
const crawlableRobotsTxt = `User-agent: *\nAllow: /\n\nSitemap: https://devmuscle.com/sitemap.xml`(
  function generateRobotsTxt() {
    // Create a non-crawlable robots.txt in preview links

    fs.writeFileSync('public/robots.txt', crawlableRobotsTxt)
  }
)()
