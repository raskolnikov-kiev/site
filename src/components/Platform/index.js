import React, { Component } from 'react';
import { PLATFORM, FORMS } from '../../data/googleForms';

import kuzina from '@/img/photos/platform/kuzina.jpg';
import sakaev from '@/img/photos/platform/sakaev.jpg';
import question from '@/img/photos/platform/question.png';

import classnames from 'classnames';

import Gallery from '../Gallery';

import { PLATFORM_PHOTOS } from '@/data/platform';

const TOGGLES = {
  WHAT: 'WHAT',
  WHERE: 'WHERE',
  WHO: 'WHO',
  DETAILS: 'DETAILS',
  HOW_MUCH: 'HOW_MUCH',
  CONTACTS: 'CONTACTS'
 };

class Platform extends Component {
  state = {};

  onMoreClick(blockName) {
    this.setState(prevState => ({
      [blockName]: !prevState[blockName]
    }));
  }

  render() {
    return (
      <div>
        <Gallery images={PLATFORM_PHOTOS} />
        <div className="welcome welcome-play">
          <h1 className="welcome__title">Воркшоп «Актёрская платформа»</h1>
          <div className="welcome__text course__description">
            <b>17 ноября</b> стартует уникальный воркшоп «Актёрская платформа»!<br />Впервые в Украине!<br />

            Интенсив, длинною 5 дней откроет вам мир <b>биомеханики Всеволода Мейерхольда, архетипов и Психологических жестов Михаила Чехова и особую технику Ежи Гротовского</b>. <br />

            «Актёрская платформа» - это особое пространство для погружения в актёрские практики, которые будут полезны как актёрам, так и людям, желающим раскрыть свой творческий потенциал и узнать возможности собственного тела.
            {' '}
          </div>
          <div className="course__description welcome__text">
            <GoogleFormButton type={PLATFORM}/>
          </div>


          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.WHAT]
              })}
              onClick={() => this.onMoreClick(TOGGLES.WHAT)}
            >
              Что будет?
            </a>
            {this.state[TOGGLES.WHAT] && (
              <ul className="studio__list studio__block studio__list_emoji">
                <li>🎈 Медитация и йога, дыхание и растяжка, актёрские разминки и необычные творческие лаборатории, высвобождение энергии и <b>рождение новой личности – персонажа…</b> Вот, что ждёт каждого, кто присоединится к «Актёрской платформе». </li>
                <li>🎓 Вы станете учениками  <b>лучших педагогов Европы</b>, практикующих мастеров 3-х уникальных актёрских методов</li>
                <li>⚡ <b>Только практические упражнения</b>, импровизация и эксперименты – так построена программа каждого педагога.</li>
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
             Педагоги
            </a>
            {this.state[TOGGLES.WHO] && (
              <ul className="studio__list studio__block studio__persons">
                <li className="studio__person">
                  <a className="photo studio__person_link" href="http://kuzinaee.com/?lang=en" target="_blank">
                    <div className="photo studio__person_photo_wrapper">
                      <img className="photo__img " src={kuzina} alt=""/>
                    </div>
                    <div className="studio__person_descr">
                      <b className="play__link"> Елена Кузина</b>
                      - режиссёр и педагог техники <b>Михаила Чехова</b>, преподаёт в <b>США, Европе и Азии</b>.
                    </div>
                  </a>
                </li>
                <li className="studio__person">
                  <a className="photo studio__person_link" href="https://alexandrinsky.ru/o-teatre/sozdateli-spektaklej/sakaev-iskander-raufovich/" target="_blank">
                    <div className="photo studio__person_photo_wrapper">
                      <img className="photo__img " src={sakaev} alt=""/>
                    </div>
                    <div className="studio__person_descr">
                      <b className="play__link">Искандэр Сакаев</b>
                      - художественный руководитель театра "Левендаль", режиссёр Александринского театра Санкт-Петербурга, <b>мастер биомеханики</b>.
                    </div>
                  </a>
                </li>
                <li className="studio__person">
                  <div className="photo studio__person_link">
                    <div className="photo studio__person_photo_wrapper">
                      <img className="photo__img " src={question} alt=""/>
                    </div>
                    <div className="studio__person_descr">
                      А также ваш ждёт звёздный гость, который расскажет <b>о многих "фишках" актёрского продвижения</b>.
                    </div>
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.WHERE]
              })}
              onClick={() => this.onMoreClick(TOGGLES.WHERE)}
            >
              Где?
            </a>
            {this.state[TOGGLES.WHERE] && (
              <div  className="course__description welcome__text studio__block"><b><a class="play__link"  href="https://goo.gl/maps/m3Gwf9UEbydRvZPZA" target="_blank">г. Киев, ул. Гринченка, 7, Дом архитекторов.</a></b></div>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.HOW_MUCH]
              })}
              onClick={() => this.onMoreClick(TOGGLES.HOW_MUCH)}
            >
              Стоимость
            </a>
            {this.state[TOGGLES.HOW_MUCH] && (
              <div className="course__description welcome__text studio__block">
                Стоимость участия – 5000 гривен. <br />
                Оплатив до 17 октября гарантировано <b>получите скидку!</b> <br />Количество мест ограничено!
              </div>
            )}
          </div>

          <div className="course__description welcome__text">
            <a
              className={classnames('studio__header', {
                studio__header_shown: this.state[TOGGLES.CONTACTS]
              })}
              onClick={() => this.onMoreClick(TOGGLES.CONTACTS)}
            >
              Котакты
            </a>
            {this.state[TOGGLES.CONTACTS] && (
              <div className="course__description welcome__text">
              <ul className="studio__list studio__list_emoji studio__block ">
                <li>📞 <a className="play__link" href="tel:+380661512291">+38(066)151-22-91</a></li>
                <li>📖 <a className="play__link" target="_blank" href="https://www.facebook.com/events/2333811686880923/">facebook страничка</a> </li>
                <li>🎩 <a className="play__link" target="_blank" href="https://forms.gle/ANZbvaZPCee62pNHA">регистрация</a> </li>
              </ul>
              </div>
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
                Количесвто мест ограничено, поспешите!
                <br />
                <br />
                <GoogleFormButton type={PLATFORM} text="хочу участвовать!"/>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export const GoogleFormButton = ({ type, text = 'Записаться или задать вопрос' }) => (
  <div>
    <button className="studio__button">
      <a
        target="_blank"
        className="studio__button_link"
        href={FORMS[type]}
      >
        {text}
      </a>
    </button>
  </div>
);

export default Platform;
