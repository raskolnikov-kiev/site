import React from 'react';
import PropTypes from 'prop-types';
import Plays from '../Plays/index';
import Gallery from '../Gallery/index';
import {
  getComponentByPlayId,
  getFacesByPlayId,
  getDatesByPlayId
} from '@/data/plays';
import { getImagesByPlayId } from '@/data/playsPhotos';

const Play = ({ match }) => {
  const { playId } = match.params;
  const faces = getFacesByPlayId(playId);
  const dates = getDatesByPlayId(playId);
  const Component = getComponentByPlayId(playId);
  const images = getImagesByPlayId(playId);

  return (
    <div>
      <Gallery images={images} />
      <Component />
      <Plays plays={dates} title="Ближайшие спектакли" />
      {faces && (<Plays plays={faces} title="Над спектаклем работали" />) }
    </div>
  );
};

Play.protTypes = {
  match: PropTypes.object.isRequired
};

export default Play;
