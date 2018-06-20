import React from 'react';
import img404 from '@/img/404.jpg';
import Gallery from '../Gallery';

const images = [
  {
    src: img404,
    alt: '404'
  }
];

const NoMatch = () => (
  <div>
    <Gallery images={images} />
    <div className="welcome">
      <h1 className="welcome__title">404 Страница не найдена</h1>
    </div>
  </div>
);

export default NoMatch;
