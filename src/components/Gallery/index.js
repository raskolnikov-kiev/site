import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Gallery = ({ images, isHome }) => {
  if (images.length === 1) {
    return <OneImage {...images[0]} isHome={isHome} />;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true
    // pauseOnHover: true
  };
  return (
    <div className="gallery__wrapper">
      <Slider {...settings}>
        {images.map(({ src, alt }) => (
          <div className="gallery__item" key={src}>
            <img className="gallery__img" src={src} alt={alt} height="500px" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  isHome: PropTypes.bool
};

const OneImage = ({ src, alt, isHome }) => (
  <div className="gallery__wrapper">
    <div className="gallery__item">
      <img
        className={classNames('gallery__img', { gallery__img_home: isHome })}
        src={src}
        alt={alt}
      />
    </div>
  </div>
);

OneImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  isHome: PropTypes.bool
};

export default Gallery;
