import React from 'react';

const Share = () => {
  //const text = from meta tags encodeURI
  //const url = from meta tags
  return (

      <a className="resp-sharing-button__link more" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" aria-label="Share on Facebook">
        <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
        </div>Поделиться</div>
      </a>

  );
};

const ShareLink = ({ children }) => {
  const url = location.href;
  const href = `https://facebook.com/sharer/sharer.php?u=${url}`;

  return (
    <a
      className="social__item"
      href={href}
      target="_blank"
      aria-label="Поделиться на Facebook"
      title="Поделиться"
    >
      {children}
      <div className="social__text">Поделиться</div>
    </a>
  );
};

export default ShareLink;
