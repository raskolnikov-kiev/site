import React from 'react';
import {
  getLinkByUserId,
  getNameByUserId,
  KATYA,
  OLEGM,
  ALESYA,
  ALYONA,
  OLEGB,
  VERA,
  BORIS,
  MARINA,
  TANYA,
  POLINA
} from '@/data/faces';
import { Link } from 'react-router-dom';

const Faces = () => (
  <div className="faces">
    <h3 className="faces__title">Лица театра</h3>
    <ul className="faces__list">
      <li className="faces__list-item">
        <Link to={getLinkByUserId(KATYA)} className="photo">
          <div className="photo__img photo__img-katya" />
          <p className="photo__actor-name">
            {getNameByUserId(KATYA)} <br />актриса
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(OLEGB)} className="photo">
          <div className="photo__img photo__img-oleg" />
          <p className="photo__actor-name">
            {getNameByUserId(OLEGB)} <br />актёр
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(ALESYA)} className="photo">
          <div className="photo__img photo__img-alesya" />
          <p className="photo__actor-name">
            {getNameByUserId(ALESYA)} <br />режиссер, актриса
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(ALYONA)} className="photo">
          <div className="photo__img photo__img-alena" />
          <p className="photo__actor-name">
            {getNameByUserId(ALYONA)} <br />актриса
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(BORIS)} className="photo">
          <div className="photo__img photo__img-boris" />
          <p className="photo__actor-name">
            {getNameByUserId(BORIS)} <br />заслуженый артист <br />Украины
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(MARINA)} className="photo">
          <div className="photo__img photo__img-marina" />
          <p className="photo__actor-name">
            {getNameByUserId(MARINA)} <br />режиссер, актриса
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(TANYA)} className="photo">
          <div className="photo__img photo__img-tanya" />
          <p className="photo__actor-name">
            {getNameByUserId(TANYA)} <br />актриса
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(VERA)} className="photo">
          <div className="photo__img photo__img-vera" />
          <p className="photo__actor-name">
            {getNameByUserId(VERA)}
            <br />костюмер
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(POLINA)} className="photo">
          <div className="photo__img photo__img-polina" />
          <p className="photo__actor-name">
            {getNameByUserId(POLINA)} <br />актриса
          </p>
        </Link>
      </li>
      <li className="faces__list-item">
        <Link to={getLinkByUserId(OLEGM)} className="photo">
          <div className="photo__img photo__img-olegm" />
          <p className="photo__actor-name">
            {getNameByUserId(OLEGM)} <br />директор
          </p>
        </Link>
      </li>
    </ul>
  </div>
);

export default Faces;
