import sitemap from 'sitemap';

/**
 * Module for building a sitemap using an array of paths. Uses the [sitemap](https://www.npmjs.com/package/sitemap) package.
 * @module sitemapBuilder
 * @param {String} [hostname] The root name of your site
 * @param {Array<String>} [paths] Array of paths
 * @return {Sitemap} instance of [Sitemap](https://www.npmjs.com/package/sitemap).
 *
 * @example
 * import { sitemapBuilder as buildSitemap } from 'react-sitemap';
 *
 * const paths = ['/', 'home', '/contacts'];
 * const hostname = 'https://agweria.com';
 * const sitemap = buildSitemap(hostname, paths);
 */
export default (hostname = 'http://localhost', paths = []) => {

    return sitemap.createSitemap({
        hostname,
        urls: paths.map(path => ({url: path})),
    });

};