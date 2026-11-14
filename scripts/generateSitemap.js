const { writeFile } = require('fs/promises');
const { readFileSync } = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://apysoft.com.co';
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

const generateSitemap = async () => {
  const sitemapStream = new SitemapStream({ hostname });
  // Los artículos se leen de los archivos de datos del blog (campo slug).
  const slugs = ['posts.js', 'articles.js'].flatMap((file) =>
    [...readFileSync(path.join(__dirname, '..', 'src', 'data', file), 'utf8').matchAll(/^\s*slug: '([^']+)'/gm)].map((m) => m[1])
  );
  if (slugs.length < 2) throw new Error('No se encontraron artículos del blog');
  const urls = ['/', '/productos/dokapys', '/blog', ...slugs.map((slug) => `/blog/${slug}`)];
  urls.forEach((url) => sitemapStream.write({ url }));
  sitemapStream.end();

  const xml = await streamToPromise(sitemapStream);
  await writeFile(sitemapPath, xml, 'utf8');
  console.log(`Sitemap generated at ${sitemapPath}`);
};

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
  process.exitCode = 1;
});
