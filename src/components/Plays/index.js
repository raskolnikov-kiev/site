import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const Plays = ({ plays, title, isDates, isFace }) => {
  if (!plays || !plays.length) {
    return null;
  }

  return (
    <div className="block plays">
      <h1
        className={classnames('plays__header', {
          welcome__title: isFace,
          plays__header_face: isFace
        })}
      >
        {title}
      </h1>
      {plays.map(play => (
        <PlayItem
          {...play}
          key={`${play.title}-${play.description}`}
          isDates={isDates}
        />
      ))}
    </div>
  );
};

const PlayItem = ({ title, description, link, isDates }) => {
  const text = (
    <div
      className={classnames('play', {
        play_notlink: !link
      })}
    >
      <span className="play__name">{title}</span>{' '}
      {description && (
        <span
          className={classnames('play__details', {
            play__details_date: isDates
          })}
        >
          {description}
        </span>
      )}
    </div>
  );
  if (!link) {
    return text;
  }

  return (
    <Link to={link} className="play__link">
      {text}
    </Link>
  );
};

PlayItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  isDates: PropTypes.bool
};

Plays.propTypes = {
  plays: PropTypes.array,
  title: PropTypes.string,
  isDates: PropTypes.bool,
  isFace: PropTypes.bool
};

Plays.defaultProps = {
  isDates: false,
  isFace: false
};

export default Plays;
