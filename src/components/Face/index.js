import React from 'react';
import PropTypes from 'prop-types';

import Plays from '../Plays/index';
import Gallery from '../Gallery/index';

import Questions from '../Questions';

import {
  KATYA,
  getNameByUserId,
  getImagesByUserId,
  getUserIdByUserURL
} from '@/data/faces';
import { getPlaysByUserId } from '@/data/plays';

const Face = ({ match }) => {
  const { userId } = match.params;
  const plays = getPlaysByUserId(userId);
  const name = getNameByUserId(userId);
  const images = getImagesByUserId(userId);

  return (
    <div>
      <Gallery images={images} />

      {!!plays &&
        !!plays.length && <Plays plays={plays} title={name} isFace={true} />}
      <Questions userId={userId} />
    </div>
  );
};

Face.protTypes = {
  match: PropTypes.object.isRequired
};

export default Face;
