import React, { Component } from 'react';

import classnames from 'classnames';

import { arrowWhite } from '@/img/arrow-down-white.svg';
import { arrow } from '@/img/arrow-down.svg';

import Gallery from '../Gallery';
import { ALESYA, getLinkByUserId } from '@/data/faces';
import { CHEKHOV_DATE, SPEECH_DATE, POEMS_DATE } from '@/data/constants';
import { COURSES_PHOTOS } from '@/data/courses';

const images = COURSES_PHOTOS;

const TOGGLES = {
  WHAT: 'WHAT',
  SUBJECTS: 'SUBJECTS',
  WHO: 'WHO',
  RESULTS: 'RESULTS',
  WHOM: 'WHOM',
  DETAILES: 'DETAILES',
};

class Studio extends Component {

  state = {};

  onMoreClick(blockName) {
    this.setState(prevState => ({
      [blockName]: !prevState[blockName]
    }))
  }

  render() {
    return (
      <div>
        <Gallery images={images} />
        <div className="welcome welcome-play">
          <h1 className="welcome__title">Студия</h1>
          <div className="welcome__text course__description">
            "Театр раскольников" начинает эксперимент и открывает двери для всех желающих учиться!
            Театральный дом "раскольников" с магической атмосферой приглашает в студию. 1 сентября 2018 года стартует взрослая группа.
          </div>
          <div className="course__description welcome__text">
            <a className={classnames('studio__header', { studio__header_shown: this.state[TOGGLES.WHAT] })} onClick={() => this.onMoreClick(TOGGLES.WHAT)}>Чем мы будем заниматься?</a>
            {this.state[TOGGLES.WHAT] && <div>Мы будем старательно работать на сцене ради того, чтобы в конце учебного года поставить спектакль! Лучшие студийцы присоединяться к труппе театра.</div>}
          </div>

          <div className="course__description welcome__text">
            <a className={classnames('studio__header', { studio__header_shown: this.state[TOGGLES.SUBJECTS] })} onClick={() => this.onMoreClick(TOGGLES.SUBJECTS)}>Что быдем изучать?</a>
            {this.state[TOGGLES.SUBJECTS] && <ul className="studio__list">
              <li>актерское мастерство (несколько техник, в том числе активное использование метода Михаила Чехова)</li>
              <li>пластическое движение</li>
              <li>культура речи (это не просто сценическая речь, это всеобъемлющая способность говорить правильно и
                красиво)
              </li>
              <li>вокал (все актеры "Театра раскольников" поют, и поскольку у каждого есть шанс стать частью труппы -
                все учимся петь, тем более режиссеры любят использовать вокальные номера в спектаклях)
              </li>
            </ul>
            }
          </div>

          <div className="course__description welcome__text">
            <a className={classnames('studio__header', { studio__header_shown: this.state[TOGGLES.WHO] })} onClick={() => this.onMoreClick(TOGGLES.WHO)}>Кто у нас преподает?</a>
            {this.state[TOGGLES.WHO] && <ul className="studio__list">
              <li>Алеся Савченко - член Ассоциации Михаила Чехова (MICHA), режиссер и актриса, дипломированный
                преподаватель метода Михаила Чехова и преподаватель сценической речи. Художественный руководитель
                "Театра раскольников" (сама Алеся просит называть её идейным вдохновителем:)
              </li>
              <li>Марина Пучерова - член Союза Театральных деятелей Украины, преподаватель актерского мастерства и
                пластического движения. С августа 2018 года - главный режиссер "Театра раскольников".
              </li>
              <li>Татьяна Казыдуб - магистр театрального искусства, артистка и диктор Оперной студии при НМАУ им. П.И.
                Чайковского, режиссер и актриса "Театра раскольников". Преподаватель по вокалу.
              </li>
              <li>Катерина Дуплихина - актриса "Театра раскольников", руководитель межрепетиционных тренажей для
                актеров.
              </li>
            </ul>
            }
          </div>

          <div className="course__description welcome__text">
            <a className={classnames('studio__header', { studio__header_shown: this.state[TOGGLES.RESULTS] })} onClick={() => this.onMoreClick(TOGGLES.RESULTS)}>Что мы хотим получить в результате?</a>
            {this.state[TOGGLES.RESULTS] && <ul className="studio__list">
              <li>отсутствие зажимов</li>
              <li>легкость тела</li>
              <li>органику на сцене</li>
              <li>хорошую дикцию</li>
              <li>актерскую свободу</li>
              <li>актеров в труппу (шкурный интерес театра:)</li>
            </ul>
            }
          </div>
          <div className="course__description welcome__text">
            <a className={classnames('studio__header', { studio__header_shown: this.state[TOGGLES.WHOM] })} onClick={() => this.onMoreClick(TOGGLES.WHOM)}>Для кого мы открываем студию?</a>
            {this.state[TOGGLES.WHOM] && <ul className="studio__list">
              <li>для всех, кто мечтает о сцене</li>
              <li>для тех, кто хочет попробовать что-то новое в жизни</li>
              <li>для людей, нуждающихся в раскрепощении</li>
              <li>для всех, кто хочет жить театром</li>
            </ul>
            }
          </div>
          <div className="course__description welcome__text">
            <a className={classnames('studio__header', { studio__header_shown: this.state[TOGGLES.DETAILES] })} onClick={() => this.onMoreClick(TOGGLES.DETAILES)}>Важные детали</a>
            {this.state[TOGGLES.DETAILES] && <div>
              График занятий будет расписан позже, в зависимости от количества учеников в группе. Возраст студентов взрослой студии - от 18 лет (о наборе в детскую студию будет объявлено позже).
              Стоимость - 1500 грн в месяц.
              3 занятия в неделю.
              Бонусы - невероятная магическая энергетика "Театра раскольников", участие в фестивалях и главный приз - театральная сцена, ради которой стоит совершать подвиги!
            </div>}
          </div>
          <div className="course__description welcome__text">
            За более подробной информацией - обращайтесь в личные сообщения к Alesya Savchenko или марина пучерова (Marina Pytcherova)
            Пишите на почту: <a href="mailto:raskolnikov.kiev@gmail.com">raskolnikov.kiev@gmail.com</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Studio;
