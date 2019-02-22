import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../img/raskolnikov.png';

import Gallery from '../Gallery';
import Plays from '../Plays';
import News from '../News';
import Faces from '../Faces';

import { getNextPlays } from '@/data/plays';

const Home = () => {
  const images = [
    {
      src: bg,
      alt: 'логотип'
    }
  ];
  const title = 'Ближайшие спектакли';
  const plays = getNextPlays();

  return (
    <div className="page">
      <Gallery images={images} isHome={true} />
      <WelcomeBlock />
      <Plays plays={plays} title={title} isDates={true} />
      <News />
      <Faces />
    </div>
  );
};

const WelcomeBlock = () => (
  <div className="welcome">
    <div className="welcome__text welcome__text_home">
      Выходим <strong>на сцену</strong>, когда есть что <span>сказать</span>
    </div>
    <Link to="/about" className="more">
      больше о театре
    </Link>
  </div>
);

export default Home;
