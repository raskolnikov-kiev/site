import meta from '../data/meta.json';

export const changeMetaTags = () => {
  const { pathname, href } = window.location;

  const { title, description, image } = meta[pathname]
    ? meta[pathname]
    : meta['/'];

  document
    .querySelector('title')
    .innerText = title;

  document
    .querySelector('meta[property="og:title"]')
    .setAttribute('content', title);

  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', description);

  document
    .querySelector('meta[property="og:description"]')
    .setAttribute('content', description);

  document
    .querySelector('meta[property="og:url"]')
    .setAttribute('content', href);

  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', image);
};

