const { writeFile } = require('fs/promises');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://apysoft.com.co';
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname });
  sitemapStream.write({ url: '/' });
  sitemapStream.end();

  const xml = await streamToPromise(sitemapStream);
  await writeFile(sitemapPath, xml, 'utf8');
  console.log(`Sitemap generated at ${sitemapPath}`);
};

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
  process.exitCode = 1;
});
