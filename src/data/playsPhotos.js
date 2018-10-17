import {
  DAMN,
  SILVER,
  GARSHIN,
  NEXT_MAN,
  DREAMS,
  LETTERS,
  ZOSCHENKO,
  POETRY,
  CAR,
  OLD,
  getPlayNameByPlayId
} from './plays';

import old1 from '@/img/photos/old/1.jpg';
import old2 from '@/img/photos/old/2.jpg';
import old3 from '@/img/photos/old/3.jpg';

import car1 from '@/img/photos/car/1.jpg';
import car2 from '@/img/photos/car/2.jpg';
import car3 from '@/img/photos/car/3.jpg';
import car4 from '@/img/photos/car/4.jpg';
import car5 from '@/img/photos/car/5.jpg';

import damn1 from '@/img/photos/damn/1.jpg';
import damn2 from '@/img/photos/damn/2.jpg';
import damn3 from '@/img/photos/damn/3.jpg';
import damn4 from '@/img/photos/damn/4.jpg';
import damn5 from '@/img/photos/damn/5.jpg';
import damn6 from '@/img/photos/damn/6.jpg';

import silver1 from '@/img/photos/silver/1.jpg';
import silver2 from '@/img/photos/silver/2.jpg';
import silver3 from '@/img/photos/silver/3.jpg';
import silver4 from '@/img/photos/silver/4.jpg';
import silver5 from '@/img/photos/silver/5.jpg';
import silver6 from '@/img/photos/silver/6.jpg';
import silver7 from '@/img/photos/silver/7.jpg';
import silver8 from '@/img/photos/silver/8.jpg';
import silver9 from '@/img/photos/silver/9.jpg';

import garshin1 from '@/img/photos/garshin/1.jpg';
import garshin2 from '@/img/photos/garshin/2.jpg';
import garshin3 from '@/img/photos/garshin/3.jpg';
import garshin4 from '@/img/photos/garshin/4.jpg';
import garshin5 from '@/img/photos/garshin/5.jpg';
import garshin6 from '@/img/photos/garshin/6.jpg';

import nextMan1 from '@/img/photos/nextMan/1.jpg';
import nextMan2 from '@/img/photos/nextMan/2.jpg';
import nextMan3 from '@/img/photos/nextMan/3.jpg';
import nextMan4 from '@/img/photos/nextMan/4.jpg';

import dreams1 from '@/img/photos/dreams/1.jpg';
import dreams2 from '@/img/photos/dreams/2.jpg';
import dreams3 from '@/img/photos/dreams/3.jpg';
import dreams4 from '@/img/photos/dreams/4.jpg';
import dreams5 from '@/img/photos/dreams/5.jpg';

import letters1 from '@/img/photos/letters/1.jpg';
import letters2 from '@/img/photos/letters/2.jpg';
import letters3 from '@/img/photos/letters/3.jpg';

import zoschenko1 from '@/img/photos/zoschenko/1.jpg';
import zoschenko2 from '@/img/photos/zoschenko/2.jpg';
import zoschenko3 from '@/img/photos/zoschenko/3.jpg';
import zoschenko4 from '@/img/photos/zoschenko/4.jpg';
import zoschenko5 from '@/img/photos/zoschenko/5.jpg';
import zoschenko6 from '@/img/photos/zoschenko/6.jpg';

import poetry1 from '@/img/photos/poetry/1.jpg';

export const PLAYS_PHOTOS = {
  [OLD]: [
    { src: old1, alt: getPlayNameByPlayId(OLD) },
    { src: old2, alt: getPlayNameByPlayId(OLD) },
    { src: old3, alt: getPlayNameByPlayId(OLD) }
  ],
  [CAR]: [
    // { src: car1, alt: getPlayNameByPlayId(CAR) },
    // { src: car2, alt: getPlayNameByPlayId(CAR) },
    { src: car3, alt: getPlayNameByPlayId(CAR) },
    { src: car4, alt: getPlayNameByPlayId(CAR) },
    { src: car5, alt: getPlayNameByPlayId(CAR) }
  ],
  [DAMN]: [
    { src: damn1, alt: getPlayNameByPlayId(DAMN) },
    { src: damn2, alt: getPlayNameByPlayId(DAMN) },
    { src: damn3, alt: getPlayNameByPlayId(DAMN) },
    { src: damn4, alt: getPlayNameByPlayId(DAMN) },
    { src: damn5, alt: getPlayNameByPlayId(DAMN) },
    { src: damn6, alt: getPlayNameByPlayId(DAMN) }
  ],
  [SILVER]: [
    { src: silver1, alt: getPlayNameByPlayId(SILVER) },
    { src: silver2, alt: getPlayNameByPlayId(SILVER) },
    { src: silver3, alt: getPlayNameByPlayId(SILVER) },
    { src: silver4, alt: getPlayNameByPlayId(SILVER) },
    { src: silver5, alt: getPlayNameByPlayId(SILVER) },
    { src: silver6, alt: getPlayNameByPlayId(SILVER) },
    { src: silver7, alt: getPlayNameByPlayId(SILVER) },
    { src: silver8, alt: getPlayNameByPlayId(SILVER) },
    { src: silver9, alt: getPlayNameByPlayId(SILVER) }
  ],
  [GARSHIN]: [
    { src: garshin1, alt: getPlayNameByPlayId(GARSHIN) },
    { src: garshin2, alt: getPlayNameByPlayId(GARSHIN) },
    { src: garshin3, alt: getPlayNameByPlayId(GARSHIN) },
    { src: garshin4, alt: getPlayNameByPlayId(GARSHIN) },
    { src: garshin5, alt: getPlayNameByPlayId(GARSHIN) },
    { src: garshin6, alt: getPlayNameByPlayId(GARSHIN) }
  ],
  [NEXT_MAN]: [
    { src: nextMan1, alt: getPlayNameByPlayId(NEXT_MAN) },
    { src: nextMan2, alt: getPlayNameByPlayId(NEXT_MAN) },
    { src: nextMan3, alt: getPlayNameByPlayId(NEXT_MAN) },
    { src: nextMan4, alt: getPlayNameByPlayId(NEXT_MAN) }
  ],
  [DREAMS]: [
    { src: dreams1, alt: getPlayNameByPlayId(DREAMS) },
    { src: dreams2, alt: getPlayNameByPlayId(DREAMS) },
    { src: dreams3, alt: getPlayNameByPlayId(DREAMS) },
    { src: dreams4, alt: getPlayNameByPlayId(DREAMS) },
    { src: dreams5, alt: getPlayNameByPlayId(DREAMS) }
  ],
  [LETTERS]: [
    { src: letters1, alt: getPlayNameByPlayId(LETTERS) },
    { src: letters2, alt: getPlayNameByPlayId(LETTERS) },
    { src: letters3, alt: getPlayNameByPlayId(LETTERS) }
  ],
  [ZOSCHENKO]: [
    { src: zoschenko1, alt: getPlayNameByPlayId(ZOSCHENKO) },
    { src: zoschenko2, alt: getPlayNameByPlayId(ZOSCHENKO) },
    { src: zoschenko3, alt: getPlayNameByPlayId(ZOSCHENKO) },
    { src: zoschenko4, alt: getPlayNameByPlayId(ZOSCHENKO) },
    { src: zoschenko5, alt: getPlayNameByPlayId(ZOSCHENKO) },
    { src: zoschenko6, alt: getPlayNameByPlayId(ZOSCHENKO) }
  ],
  [POETRY]: [{ src: poetry1, alt: getPlayNameByPlayId(POETRY) }]
};

export const getImagesByPlayId = playId => PLAYS_PHOTOS[playId];
