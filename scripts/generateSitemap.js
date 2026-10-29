const { SitemapStream, streamToPromise } = require('sitemap');
const { createReadStream } = require('fs');

const generateSitemap = async () => {
  // Configura las URLs de tu aplicación
  const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    // Agrega otras rutas de tu aplicación aquí
  ];

  // Crea una nueva instancia de SitemapStream
  const sitemapStream = new SitemapStream({ hostname: 'https://www.apysoft.com.co/' });

  // Agrega las URLs al sitemap
  urls.forEach(url => {
    sitemapStream.write(url);
  });

  // Cierra el stream
  sitemapStream.end();

  // Convierte manualmente el stream a una cadena XML
  const xml = await streamToPromise(sitemapStream)
    .then((data) => data.toString())
    .catch((error) => {
      console.error('Error al convertir el stream a cadena:', error);
      return '';
    });

  console.log(xml);
};

generateSitemap();
