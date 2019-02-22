import React, { Component } from 'react';
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
import { FORMS, CHEKHOV } from '../../data/googleForms';

import classnames from 'classnames';

import { arrowWhite } from '@/img/arrow-down-white.svg';
import { arrow } from '@/img/arrow-down.svg';

import Gallery from '../Gallery';

import { CHEKHOV_DATE, SPEECH_DATE, POEMS_DATE } from '@/data/constants';
import { STUDIO_PHOTOS } from '@/data/studio';
import { Link } from 'react-router-dom';

const TOGGLES = {
  WHAT: 'WHAT',
  SUBJECTS: 'SUBJECTS',
  WHO: 'WHO',
  RESULTS: 'RESULTS',
  WHOM: 'WHOM',
  DETAILS: 'DETAILS'
};

class Studio extends Component {
  state = {};

  onMoreClick(blockName) {
    this.setState(prevState => ({
      [blockName]: !prevState[blockName]
    }));
  }

  render() {
    return (
      <div>
        <Gallery images={STUDIO_PHOTOS} />
        <div className="welcome welcome-play">
          <h1 className="welcome__title">Студия</h1>
          <div className="welcome__text course__description">
            "Театр раскольников" начинает эксперимент и открывает двери для всех
            желающих учиться! Театральный дом "раскольников" с магической
            атмосферой приглашает в студию.{' '}
            {/*<strong>Присоединяйтесь к труппе в октябре 2018!</strong>*/}
          </div>
          <div className="course__description welcome__text">
            <GoogleFormButton type={CHEKHOV}/>
          </div>
          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.WHAT]
              })}
              onClick={() => this.onMoreClick(TOGGLES.WHAT)}
            >
              Чем мы будем заниматься?
            </a>
            {this.state[TOGGLES.WHAT] && (
              <div className="studio__block">
                Мы будем старательно работать на сцене ради того, чтобы в конце
                учебного года <span>поставить спектакль</span>👏! Лучшие
                студийцы присоединятся к труппе театра🔥.
              </div>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.SUBJECTS]
              })}
              onClick={() => this.onMoreClick(TOGGLES.SUBJECTS)}
            >
              Что быдем изучать?
            </a>
            {this.state[TOGGLES.SUBJECTS] && (
              <ul className="studio__list studio__list_emoji studio__block">
                <li>
                  🎭 <b>актерское мастерство</b> (несколько техник, в том числе
                  активное использование метода <span>Михаила Чехова</span>)
                </li>
                <li>
                  🚶 <b>пластическое движение </b>
                </li>
                <li>
                  😸 <b>культура речи </b> (это не просто сценическая речь, это
                  всеобъемлющая способность{' '}
                  <span>говорить правильно и красиво</span>)
                </li>
                <li>
                  🎹 <b>вокал</b> (все актеры "Театра раскольников" поют, и
                  поскольку у каждого есть шанс стать частью труппы - все учимся
                  петь, тем более режиссеры любят использовать{' '}
                  <span>вокальные номера в спектаклях</span>)
                </li>
              </ul>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.WHO]
              })}
              onClick={() => this.onMoreClick(TOGGLES.WHO)}
            >
              Кто у нас преподает?
            </a>
            {this.state[TOGGLES.WHO] && (
              <ul className="studio__list studio__block studio__persons">
                <li className="studio__person">
                  <Link
                    to={getLinkByUserId(ALESYA)}
                    className="photo studio__person_link"
                  >
                    <div className="photo studio__person_photo_wrapper">
                      <div className="studio__person_photo photo__img photo__img-alesya" />
                    </div>
                    <div className="studio__person_descr">
                      <Link to={getLinkByUserId(ALESYA)} className="play__link">
                        <b>Алеся Савченко</b>
                      </Link>{' '}
                      - член Ассоциации Михаила Чехова (MICHA), режиссер и
                      актриса, дипломированный преподаватель метода{' '}
                      <span>Михаила Чехова</span> и преподаватель сценической
                      речи. Художественный руководитель "Театра раскольников"
                      (сама Алеся просит называть её идейным вдохновителем:)
                    </div>
                  </Link>
                </li>
                <li className="studio__person">
                  <Link
                    to={getLinkByUserId(MARINA)}
                    className="photo studio__person_link"
                  >
                    <div className="photo studio__person_photo_wrapper">
                      <div className="studio__person_photo photo__img photo__img-marina" />
                    </div>
                    <div className="studio__person_descr">
                      <Link to={getLinkByUserId(MARINA)} className="play__link">
                        <b>Марина Пучерова</b>
                      </Link>{' '}
                      - член Союза Театральных деятелей Украины, преподаватель
                      актерского мастерства и пластического движения. С августа
                      2018 года - <span>главный режиссер</span> "Театра
                      раскольников".
                    </div>
                  </Link>
                </li>
                <li className="studio__person">
                  <Link
                    to={getLinkByUserId(TANYA)}
                    className="photo studio__person_link"
                  >
                    <div className="photo studio__person_photo_wrapper">
                      <div className="studio__person_photo photo__img photo__img-tanya" />
                    </div>
                    <div className="studio__person_descr">
                      <Link to={getLinkByUserId(TANYA)} className="play__link">
                        <b>Татьяна Казыдуб</b>
                      </Link>{' '}
                      - магистр театрального искусства,{' '}
                      <span>
                        артистка и диктор Оперной студии при НМАУ им. П.И.
                        Чайковского
                      </span>, режиссер и актриса "Театра раскольников".
                      Преподаватель по вокалу.
                    </div>
                  </Link>
                </li>
                <li className="studio__person">
                  <Link
                    to={getLinkByUserId(KATYA)}
                    className="photo studio__person_link"
                  >
                    <div className="photo studio__person_photo_wrapper">
                      <div className="studio__person_photo photo__img photo__img-katya" />
                    </div>
                    <div className="studio__person_descr">
                      <Link to={getLinkByUserId(KATYA)} className="play__link">
                        <b>Катерина Дуплихина</b>
                      </Link>{' '}
                      - <span>актриса "Театра раскольников"</span>, руководитель
                      межрепетиционных тренажей для актеров.
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.RESULTS]
              })}
              onClick={() => this.onMoreClick(TOGGLES.RESULTS)}
            >
              К чему мы стремимся?
            </a>
            {this.state[TOGGLES.RESULTS] && (
              <ul className="studio__list studio__block studio__list_emoji">
                <li>💪 отсутствие зажимов</li>
                <li>🎈 легкость тела</li>
                <li>😉 органика на сцене</li>
                <li>🎓 хорошая дикция</li>
                <li>⚡ актерская свобода</li>
                <li>⭐ актеры в труппу (шкурный интерес театра)</li>
              </ul>
            )}
          </div>
          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.WHOM]
              })}
              onClick={() => this.onMoreClick(TOGGLES.WHOM)}
            >
              Для кого мы открываем студию?
            </a>
            {this.state[TOGGLES.WHOM] && (
              <ul className="studio__list studio__list_emoji studio__block ">
                <li>🎩 для всех, кто мечтает о сцене</li>
                <li>🎩 для тех, кто хочет попробовать что-то новое в жизни</li>
                <li>🎩 для людей, нуждающихся в раскрепощении</li>
                <li>🎩 для всех, кто хочет жить театром</li>
              </ul>
            )}
          </div>
          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.DETAILS]
              })}
              onClick={() => this.onMoreClick(TOGGLES.DETAILS)}
            >
              Важные детали
            </a>
            {this.state[TOGGLES.DETAILS] && (
              <div className="studio__block">
                График занятий будет расписан позже, в зависимости от количества
                учеников в группе. Возраст студентов взрослой студии -{' '}
                <strong>от 18 лет</strong> (о наборе в детскую студию будет
                объявлено позже).
                <br />
                <strong>Стоимость - 1500 грн в месяц.</strong> 3 занятия в
                неделю. Бонусы - невероятная магическая энергетика "Театра
                раскольников", участие в фестивалях и главный приз - театральная
                сцена, ради которой стоит совершать подвиги!
                <br />
                <br />
                <GoogleFormButton type={CHEKHOV}/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const GoogleFormButton = ({ type }) => (
  <div>
    <button className="studio__button">
      <a
        target="_blank"
        className="studio__button_link"
        href={FORMS[type]}
      >
        Записаться или задать вопрос
      </a>
    </button>
  </div>
);

export default Studio;
